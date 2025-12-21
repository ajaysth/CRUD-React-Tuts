import { useEffect, useState } from "react"
interface User {
    id: number
    name: string
    email: string
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)
                const URL = "http://localhost:3000/users"
                const response = await fetch(URL)
                if (!response.ok) {
                    throw new Error("Failed to fetch users")
                }
                const data = await response.json()
                setUsers(data)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    }, [])



    if (!users) {
        return <h2 className="text-2xl text-center mt-5">No Users Found</h2>
    }
    return (
        <>
            <h1 className="text-4xl text-center ">Users</h1>
            <div className="flex justify-center bg-amber-100">
                {loading ? <h2 className="text-2xl text-center mt-5">Loading...</h2> : (<ul className="flex max-w-md justify-space-around flex-col  gap-3 border ">
                    {users.map((user) => {
                        if (loading) {
                            return <h2 className="text-2xl text-center mt-5">Loading...</h2>
                        }
                        return (<li key={user.id}>{user.name} - {user.email}</li>)
                    })}
                </ul>)}
            </div>
        </>

    )
}

export default Users