"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [posts, setPosts] = useState([
    { id: 1, image: "/p1.jpg", caption: "Chillin’ vibes" },
    { id: 2, image: "/p2.jpg", caption: "Coffee & code ☕" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [newCaption, setNewCaption] = useState("");

  const handleAddPost = () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-black">
      {/* Profile Header */}
      <div className="w-full max-w-3xl bg-white shadow-sm rounded-b-2xl p-6 flex flex-col md:flex-row gap-6">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-black">your_username</h2>
            <button className="px-3 py-1 bg-gray-200 text-sm rounded-lg hover:bg-gray-300">
              Edit Profile
            </button>
          </div>
          <div className="flex gap-6 mt-4 text-sm">
            <p className="text-black"><span className="font-semibold">{posts.length}</span> posts</p>
            <p className="text-black"><span className="font-semibold">1.2k</span> followers</p>
            <p><span className="font-semibold">400</span> following</p>
          </div>
          <p className="mt-3 text-gray-600">
            🚀 Full-Stack Dev | Building cool stuff
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 w-full max-w-3xl mt-4">
        {posts.map((post) => (
          <div key={post.id} className="relative group">
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm">
              {post.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        + Add Post
      </button>

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
                onClick={handleAddPost}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
