import { useEffect, useState } from "react";
import type { PostType } from "../types/posts";
import { getPosts } from "../api/posts";
export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { posts, setPosts, loading };
};
