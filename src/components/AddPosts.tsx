import { useState } from "react";
import { addPost } from "../api/posts";
import { toast } from "react-hot-toast/headless";
import { useNavigate } from "react-router-dom";

const AddPosts = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(1);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const newPost = await addPost({ title, body, userId });
            console.log(newPost);
            toast.success("Post added successfully!");
            setTitle("");
            setBody("");
            setUserId(1);
            navigate("/posts");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    };




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Add New Post
                </h2>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                    className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                />
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(Number(e.target.value))}
                    placeholder="User ID"
                    className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Post Content"
                    className="border border-gray-300 rounded-xl p-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition-colors shadow-md"
                >
                    {loading ? "Adding Post..." : "Add Post"}
                </button>

            </div>
        </div>
    );
};

export default AddPosts;
