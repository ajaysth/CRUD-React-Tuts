import toast from "react-hot-toast";
import type { PostType } from "../types/posts";
const URL = "http://localhost:3000/posts";

export const getPosts = async (): Promise<PostType[]> => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export const getPostById = async (id: string): Promise<PostType> => {
  const response = await fetch(`${URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
};

export const addPost = async (
  post: Omit<PostType, "id">
): Promise<PostType> => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Failed to add post");
  }

  toast.success("Post added successfully");

  return response.json();
};
