import React, { useEffect, useState } from "react";
import { API } from "../api";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  const featured = filtered[0];

  return (
    <div className="pt-28 bg-gradient-to-b from-[#0B1F3A] to-black min-h-screen text-white">
      
       
     
     {/* 🔥 HERO */}
<div className="text-center px-6 pt-24">

  {/* 💎 BUTTON */}
  <div className="flex justify-end max-w-6xl mx-auto mb-6">
    <Link
      to="/create"
      className="group flex items-center gap-2 px-6 py-2.5 rounded-full 
      bg-gradient-to-r from-sky-500 to-blue-600 
      text-white font-semibold shadow-xl 
      hover:shadow-sky-500/40 hover:scale-105 
      transition-all duration-300"
    >
      <span className="text-lg group-hover:rotate-90 transition duration-300">
        +
      </span>
      Add Blog
    </Link>
  </div>

  <h1 className="text-5xl font-bold mb-4">
    Visionary <span className="text-sky-400">Dynamics Blogs</span>
  </h1>

  <p className="text-gray-300 max-w-xl mx-auto">
    Explore expert insights, trends, and strategies to grow your business.
  </p>

  {/* SEARCH */}
  <div className="mt-8 max-w-md mx-auto">
    <input
      type="text"
      placeholder="Search blogs..."
      className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>

      <div className="max-w-6xl mx-auto px-6 pb-20">

        {/* 🌟 FEATURED BLOG */}
        {featured && (
         <div className="mb-16 group cursor-pointer">
  <Link to={`/blog/${featured._id}`}>
    
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">

      {/* IMAGE */}
     <img
  src={featured.image}
  className="w-full h-[420px] object-cover object-center 
  scale-100 transition duration-500"
/>
      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t 
        from-black/90 via-black/40 to-transparent">
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-8">
        <span className="text-sky-400 text-sm mb-2 block">
          FEATURED
        </span>

        <h2 className="text-4xl font-bold leading-tight">
          {featured.title}
        </h2>
      </div>

    </div>

  </Link>
</div>
        )}

        {/* 📰 BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-8">
  {filtered.slice(1).map((blog) => (
    <div
      key={blog._id}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-xl transition duration-300"
    >
      {/* ✅ IMAGE FIX */}
      <img
        src={blog.image}
        className="w-full h-48 object-cover object-center 
        group-hover:scale-105 transition duration-500"
      />

      <div className="p-5">
        <span className="text-xs text-sky-400">
          {blog.category || "General"}
        </span>

        <h3 className="text-lg font-bold mt-2 mb-2">
          {blog.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-3">
          {blog.content}
        </p>

        <Link
          to={`/blog/${blog._id}`}
          className="inline-block mt-4 text-sky-400 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  ))}
</div>

        {/* ❌ EMPTY STATE */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No blogs found.
          </p>
        )}
      </div>
    </div>
  );
}