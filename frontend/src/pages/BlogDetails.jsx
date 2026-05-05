import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
const isAdmin = user?.role === "admin";

  // 📡 Fetch Blog
  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    API.get(`/blogs/slug/${slug}`)
      .then((res) => {
        if (!res.data) {
          setBlog("not-found");
        } else {
          setBlog(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setBlog("error");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // ❌ Delete Blog
  const handleDelete = async () => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await API.delete(`/blogs/${blog._id}`);
      navigate("/blog");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  // 🤖 AI Generate
  const generateAI = async () => {
    if (!blog?.title) return;

    try {
      const res = await API.post("/blogs/generate", {
        topic: blog.title,
      });

      setBlog((prev) => ({
        ...prev,
        content: res.data.content,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // ========================
  // 🔥 CLEAN CONTENT (FIX)
  // ========================
  
  // ========================
  // 🔥 UI STATES
  // ========================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0B1F3A]">
        Loading...
      </div>
    );
  }

  if (blog === "not-found") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0B1F3A]">
        Blog not found ❌
      </div>
    );
  }

  if (blog === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0B1F3A]">
        Something went wrong ⚠️
      </div>
    );
  }

  // ========================
  // ✅ MAIN UI
  // ========================

  return (
    <div className="bg-[#0B1F3A] min-h-screen text-white flex flex-col">
      
      {/* HEADER */}
      <Header />

      <main className="flex-grow">

        {/* IMAGE */}
        <div className="max-w-6xl mx-auto px-6 pt-28">
          <div className="w-full md:w-[700px] h-[350px] bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
            {blog.image ? (
              <img
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-500">No Image</p>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-8">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>

          {/* META */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 border-b border-gray-700 pb-4">
            {blog.category && (
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">
                {blog.category}
              </span>
            )}
            {blog.createdAt && (
              <span>
                📅 {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            )}
          </div>

          {/* BUTTONS */}
          {isAdmin && (
  <div className="flex gap-3 mb-8 flex-wrap">
    <button
      onClick={handleDelete}
      className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>

    <button
      onClick={() => navigate(`/edit/${blog._id}`)}
      className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
    >
      Edit
    </button>

   
  </div>
)}
  

          {/* BLOG CONTENT */}
          <div
  className="blog-content prose prose-invert max-w-none text-gray-300"
  dangerouslySetInnerHTML={{
    __html: blog.content || "<p>No content available</p>",
  }}
/>
        </div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}