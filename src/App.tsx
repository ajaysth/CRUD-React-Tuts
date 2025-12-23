import { NavLink, Route, Routes } from "react-router-dom"
import Users from "./pages/Users"
import UserAdd from "./pages/UserAdd"
import UserEdit from "./pages/UserEdit"
import { Toaster } from "react-hot-toast"
import PostsLayout from "./components/PostsLayout"
import Posts from "./components/Posts"
import PostsDetails from "./components/PostsDetails"
import AddPosts from "./components/AddPosts"
function App() {

  return (
    <>
      <Toaster />
      <h1 className="text-3xl text-center mt-5">This is Crud App</h1>
      <div className="navbar w-screen flex justify-evenly mt-10">
        <NavLink to="/" className="text-2xl relative after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Home</NavLink>
        <NavLink to="/users" className="text-2xl relative after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Users</NavLink>
        <NavLink to="/useradd" className="px-4 py-2 bg-emerald-300 rounded-2xl hover:scale-105 hover:bg-emerald-400 transition-all duration-100 ease-in-out">Add User</NavLink>
        <NavLink to="/posts" className="px-4 py-2 bg-yellow-300 rounded-2xl hover:scale-105 hover:bg-yellow-600 transition-all duration-100 ease-in-out">Posts</NavLink>
      </div>




      <Routes>
        <Route path="/" element={<h2 className="text-2xl text-center mt-5">Welcome to Crud App</h2>} />
        <Route path="/users" element={<Users />} />
        <Route path="/useradd" element={<UserAdd />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />
        <Route path="/posts/*" element={<PostsLayout />} >
          <Route index element={<Posts />} />
          <Route path=":id" element={<PostsDetails />} />
          <Route path="add-post" element={<AddPosts />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
