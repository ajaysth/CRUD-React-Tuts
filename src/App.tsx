import { Link, Route, Routes } from "react-router-dom"
import Users from "./pages/Users"
function App() {

  return (
    <>
      <h1 className="text-3xl text-center mt-5">This is Crud App</h1>
      <Link to="/users">View Users</Link>




      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
