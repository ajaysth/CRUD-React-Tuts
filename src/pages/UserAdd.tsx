import { useState } from "react";
import toast from "react-hot-toast";

const UserAdd = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');


    const createUser = async () => {
        if (!name || !email || !role) {
            toast.error("All fields are required");

            return;
        }
        if (!email.includes('@')) {
            toast.error("Invalid email address");
            return;
        }


        try {
            const URL = "http://localhost:3000/users";
            const response = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, role }),
            })
            if (!response.ok) {
                throw new Error("Failed to create user");
            }

            const data = await response.json()
            toast.success("User added successfully");
            console.log(data);
            setName('');
            setEmail('');
            setRole('');
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10">
                <h1 className="text-3xl font-bold text-center mb-8">Please add users</h1>

                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                        />
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Enter Role"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
                        />
                        <button
                            onClick={createUser}
                            className="bg-emerald-500 text-white font-semibold rounded-lg py-3 mt-2 hover:bg-emerald-600 transition-colors duration-200"
                        >
                            Add User
                        </button>
                    </div>
                </div>

                <p className="mt-4 text-gray-600">{name && `You typed: ${name}`}</p>
            </div>




        </>
    )
}

export default UserAdd