import type { PostType } from "../types/posts";
const URL = "http://localhost:3000/posts";

export const getPosts = async (): Promise<PostType[]> => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
