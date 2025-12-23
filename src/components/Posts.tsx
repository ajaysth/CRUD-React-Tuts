import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts"
import PostsLists from "./PostsLists"

const Posts = () => {
    const { posts, loading } = usePosts();

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>

            <div className="container w-auto mx-auto flex flex-col items-center ">
                <Link to="add-post"><button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md">
                    Add Posts
                </button></Link>
                <PostsLists posts={posts} loading={loading} />
            </div>


        </>
    )
}

export default Posts