import { Outlet } from "react-router-dom";

const PostsLayout = () => {
    return (
        <div className="flex flex-col items-center bg-gray-300 w-screen h-screen p-4">
            <h1 className="text-2xl font-bold text-center border-none bg-amber-100 rounded-4xl p-4 w-auto shadow-amber-500/50 mb-4">
                This is post layout
            </h1>
            <Outlet />
        </div>
    );
};

export default PostsLayout;
