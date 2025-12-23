
import { usePosts } from "../hooks/usePosts";
import { useParams } from "react-router-dom";




const PostsDetails = () => {

    const { id } = useParams();

    const { post } = usePosts(id);

    if (!post) {
        return <div className="text-lg text-gray-500">Loading...</div>;
    }



    return (
        <>
            <div className="details flex flex-col items-center bg-gray-100 mt-10 rounded-4xl p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Post Details</h1>

                <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-3xl overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-left p-2 bg-gray-200">ID</th>
                                <th className="text-left p-2 bg-gray-200">User ID</th>
                                <th className="text-left p-2 bg-gray-200">Title</th>
                                <th className="text-left p-2 bg-gray-200">Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300">
                                <td className="p-2">{post.id}</td>
                                <td className="p-2">{post.userId}</td>
                                <td className="p-2">{post.title}</td>
                                <td className="p-2">{post.body}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default PostsDetails