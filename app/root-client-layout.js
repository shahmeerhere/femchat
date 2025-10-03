"use client";

import { useState, createContext } from "react";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { PiVideo } from "react-icons/pi";
import Link from "next/link";

export const PostsContext = createContext();

export default function RootClientLayout({ children }) {
  const [posts, setPosts] = useState([
    { id: 1, image: "/p1.jpg", caption: "Chillin’ vibes" },
    { id: 2, image: "/p2.jpg", caption: "Coffee & code ☕" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [newCaption, setNewCaption] = useState("");

  const addPost = () => {
    if (!newImage) return;
    const newPost = {
      id: Date.now(),
      image: newImage,
      caption: newCaption,
    };
    setPosts([newPost, ...posts]);
    setNewImage("");
    setNewCaption("");
    setIsOpen(false);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 shadow-lg">
        <button className="flex flex-col items-center text-gray-700 hover:text-black">
          <GoHome size={24} />
        </button>
        <button className="flex flex-col items-center text-gray-700 hover:text-black">
          <FiSearch size={24} />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center text-gray-700 hover:text-black"
        >
          <TbSquareRoundedPlus size={24} />
        </button>
        <button className="flex flex-col items-center text-gray-700 hover:text-black">
          <PiVideo size={24} />
        </button>
        <button className="flex flex-col items-center text-gray-700 hover:text-black">
          <Link href="/profile">User</Link>
        </button>
      </nav>

      {/* Add Post Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add New Post</h3>
            <input
              type="text"
              placeholder="Image URL"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
            />
            <textarea
              placeholder="Caption"
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={addPost}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </PostsContext.Provider>
  );
}
