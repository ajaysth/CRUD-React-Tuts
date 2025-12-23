import { useEffect, useState } from "react";
import type { PostType } from "../types/posts";
import { getPostById, getPosts } from "../api/posts";
export const usePosts = (id?: string | null) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<PostType | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        if (id != null) {
          const fetchedPost = await getPostById(id);
          setPost(fetchedPost);
        } else {
          const data = await getPosts();
          setPosts(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);
  return { posts, setPosts, loading, post };
};
