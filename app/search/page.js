"use client";
import { useState, useContext } from "react";
import { PostsContext } from "../posts-context";

export default function SearchPage() {
  const { posts } = useContext(PostsContext); // get all posts globally
  const [query, setQuery] = useState("");

  // Filter posts by caption or hashtag match
  const filteredPosts = posts.filter((post) =>
    post.caption.toLowerCase().includes(query.toLowerCase()) ||
    post.caption
      .split(" ")
      .some((word) => word.startsWith("#") && word.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Search</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by hashtag or caption..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md border rounded-lg p-3 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      {/* Results */}
      {query && filteredPosts.length === 0 && (
        <p className="text-gray-600">No results found for "{query}"</p>
      )}

      <div className="grid grid-cols-3 gap-2 w-full max-w-3xl">
        {filteredPosts.map((post) => (
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
    </div>
  );
}
