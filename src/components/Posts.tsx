import { usePosts } from "../hooks/usePosts"
import PostsLists from "./PostsLists"

const Posts = () => {
    const { posts, loading } = usePosts();

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>

            <PostsLists posts={posts} loading={loading} />


        </>
    )
}

export default Posts