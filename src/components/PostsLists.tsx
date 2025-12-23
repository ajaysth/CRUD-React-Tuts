import { Link } from "react-router-dom";
import type { PostType } from "../types/posts";

type PostsListsProps = {
    posts: PostType[];
    loading: boolean;
};

const PostsLists = ({ posts, loading }: PostsListsProps) => {
    return (
        <div className="lists flex flex-col items-center bg-gray-100 mt-10 rounded-4xl p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Posts List</h1>

            {loading ? (
                <div className="text-lg text-gray-500">Loading...</div>
            ) : posts.length === 0 ? (
                <div className="text-lg text-gray-500">No posts found.</div>
            ) : (
                <ul className="w-full max-w-3xl space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link to={`/posts/${post.id}`} className="text-xl font-semibold">{post.title}</Link>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsLists;
