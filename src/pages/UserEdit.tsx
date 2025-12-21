import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

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
            setError("All fields are required");
            return;
        }
        if (!email.includes('@')) {
            setError("Invalid email address");
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
            console.log(data);
            setError('');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className="text-cen">
                <h1 className="text-3xl text-center mt-5">Please add users.</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex flex-col gap-3 max-w-md mx-auto mt-10">
                    <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Name" /> <p>{name}</p>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter Email" />
                    <input type="text" onChange={(e) => { setRole(e.target.value) }} value={role} placeholder="Enter Role" />
                    <button onClick={UpdateUser}>Update User</button>
                </div>
            </div>
        </>
    )
}

export default UserEdit