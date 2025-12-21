import { NavLink, Route, Routes } from "react-router-dom"
import Users from "./pages/Users"
import UserAdd from "./pages/UserAdd"
import UserEdit from "./pages/UserEdit"
function App() {

  return (
    <>
      <h1 className="text-3xl text-center mt-5">This is Crud App</h1>
      <div className="navbar w-screen flex justify-evenly mt-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/useradd" className="px-4 py-2 bg-emerald-300 rounded-2xl hover:scale-105 hover:bg-emerald-400 transition-all duration-100 ease-in-out">Add User</NavLink>
      </div>




      <Routes>
        <Route path="/" element={<h2 className="text-2xl text-center mt-5">Welcome to Crud App</h2>} />
        <Route path="/users" element={<Users />} />
        <Route path="/useradd" element={<UserAdd />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />
      </Routes>
    </>
  )
}

export default App
