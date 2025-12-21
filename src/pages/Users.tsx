import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [deleting, setDeleting] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true);
                const URL = "http://localhost:3000/users";
                const response = await fetch(URL);
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    const deleteUser = async (id: number) => {
        console.log("Delete user with id:", id);
        try {
            setDeleting(true);
            const URL = `http://localhost:3000/users/${id}`;
            const response = await fetch(URL, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error("Failed to delete user");
            }
            toast.success("User deleted successfully");
            navigate('/users');
        } catch (e) {
            console.error(e);
        } finally {
            setDeleting(false);
            setUsers(users.filter(user => user.id !== id));
        }
    }

    const editUser = (id: number) => {
        navigate(`/users/edit/${id}`);
    }

    if (loading) {
        return <h2 className="text-2xl text-center mt-5">Loading...</h2>;
    }

    if (users.length === 0) {
        return <h2 className="text-2xl text-center mt-5">No Users Found</h2>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-4xl text-center mb-6">Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-emerald-300">
                        <tr>
                            <th className="py-3 px-6 text-left text-gray-700">ID</th>
                            <th className="py-3 px-6 text-left text-gray-700">Name</th>
                            <th className="py-3 px-6 text-left text-gray-700">Email</th>
                            <th className="py-3 px-6 text-left text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-emerald-50">
                                <td className="py-3 px-6">{user.id}</td>
                                <td className="py-3 px-6">{user.name}</td>
                                <td className="py-3 px-6">{user.email}</td>
                                <td className="py-3 px-6 flex gap-4">
                                    <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-900">{deleting ? "Deleting..." : "Delete"}</button>
                                    <button onClick={() => editUser(user.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900">Edit</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
