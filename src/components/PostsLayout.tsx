import { Outlet } from "react-router-dom"

const PostsLayout = () => {
    return (
        <>
            <h1>This is post layout</h1>
            <Outlet />
        </>
    )
}

export default PostsLayout