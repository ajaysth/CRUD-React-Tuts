import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const URL = `http://localhost:3000/users/${id}`;
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                const data = await response.json();
                setName(data.name);
                setEmail(data.email);
                setRole(data.role);
            } catch (e) {
                console.error(e);
            }
        }
        fetchUser();
    }, [id]);

    const UpdateUser = async () => {
        if (!name || !email || !role) {
            toast.error("All fields are required");
            return;
        }
        if (!email.includes('@')) {
            toast.error("Invalid email address");
            return;
        }

        try {
            const URL = `http://localhost:3000/users/${id}`;
            const response = await fetch(URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, role }),
            })
            if (!response.ok) {
                throw new Error("Failed to update user");
            }

            const data = await response.json()
            toast.success("User updated successfully");
            setName('');
            setEmail('');
            setRole('');
            navigate('/users');
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className=" min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10">
                <h1 className="text-3xl font-bold text-center mb-8">Please Edit users.</h1>
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    <div className="flex flex-col gap-4">
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Name" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition" /> <p>{name}</p>
                        <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter Email" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition" />
                        <input type="text" onChange={(e) => { setRole(e.target.value) }} value={role} placeholder="Enter Role" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition" />
                        <button onClick={UpdateUser} className="bg-emerald-500 text-white font-semibold rounded-lg py-3 mt-2 hover:bg-emerald-600 transition-colors duration-200">Update User</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEdit