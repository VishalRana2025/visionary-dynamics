import React, { useEffect, useState } from "react";
import { API } from "../api";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/blogs?page=${page}`);
      setBlogs(res.data.blogs || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = Array.isArray(blogs)
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* ✅ GLOBAL HEADER */}
      <Header />

      {/* MAIN */}
      <main className="flex-grow px-4 py-24">

        {/* Top Section */}
        <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-3xl font-bold">Blogs</h2>

          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-3 border rounded-lg w-full md:w-64"
            />

            {localStorage.getItem("token") &&
 localStorage.getItem("role") === "admin" && (
  <Link
    to="/create"
    className="bg-sky-500 text-white px-4 py-3 rounded-lg hover:bg-sky-600"
  >
    + Add Blog
  </Link>
)}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading blogs...</p>
        )}

        {/* Empty */}
        {!loading && filteredBlogs.length === 0 && (
  <div className="text-center mt-10 space-y-4">
    <p className="text-gray-500">No blogs found</p>

    {localStorage.getItem("token") &&
     localStorage.getItem("role") === "admin" && (
      <Link
        to="/create"
        className="bg-sky-500 text-white px-5 py-2 rounded"
      >
        + Create Blog
      </Link>
    )}
  </div>
)}

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => {
            const link = `/blog/${blog.slug}`;

            return (
              <Link to={link} key={blog._id}>
                <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-40 w-full object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="mt-3 text-xs text-gray-400">
                      {new Date(blog.createdAt).toDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded ${
                page === i + 1
                  ? "bg-sky-500 text-white"
                  : "bg-white border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </main>

      {/* ✅ GLOBAL FOOTER */}
      <Footer />

    </div>
  );
}
