import { useState } from "react";

const UserAdd = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const createUser = async () => {
        if (!name || !email || !role) {
            setError("All fields are required");
            return;
        }
        if (!email.includes('@')) {
            setError("Invalid email address");
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
            console.log(data);
            setName('');
            setEmail('');
            setRole('');
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
                    <button onClick={createUser}>Add User</button>
                </div>
            </div>



        </>
    )
}

export default UserAdd