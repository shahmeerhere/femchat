"use client";
import { createContext, useState } from "react";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([
    { id: 1, image: "/p1.jpg", caption: "Chillin vibes #relax" },
    { id: 2, image: "/p2.jpg", caption: "Coffee & code ☕ #coding" },
  ]);

  const addPost = (image, caption) => {
    setPosts([{ id: Date.now(), image, caption }, ...posts]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}
