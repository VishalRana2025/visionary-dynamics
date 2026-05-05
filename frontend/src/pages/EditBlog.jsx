import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";
  const [loadingData, setLoadingData] = useState(true);

  const [form, setForm] = useState({
    title: "",
    metaTitle: "",
    metaDescription: "",
    content: "",
    category: "",
    image: "",
    imageAlt: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔒 Protect Page
  useEffect(() => {
    if (!isAdmin) {
      navigate("/blog");
    }
  }, []);

  // 📡 Fetch Blog
useEffect(() => {
  API.get(`/blogs/${id}`)
    .then((res) => {
      console.log("BLOG DATA:", res.data);

      const data = res.data.blog || res.data;

      setForm({
        title: data.title || "",
        content: data.content || "",
        category: data.category || "",
        image: data.image || "",
        metaTitle: data.metaTitle || data.title || "",
        metaDescription: data.metaDescription || "",
        imageAlt: data.imageAlt || data.title || "",
      });
    })
    .catch((err) => {
      console.error("ERROR:", err);
      alert("❌ Failed to load blog");
    })
    .finally(() => {
      setLoadingData(false); // ✅ ALWAYS runs
    });
}, [id]);

  // 🚀 Update Blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await API.put(`/blogs/${id}`, form);
      alert("✅ Blog Updated!");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      alert("❌ Update failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Quill Toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };
     
    if (loadingData) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A] text-white text-xl">
      Loading blog data...
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white flex justify-center items-center px-4">

      <form
        onSubmit={handleUpdate}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Edit Blog ✏️</h2>

        {/* Title */}
        <input
          placeholder="Title"
          value={form.title}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* Meta Title */}
        <input
          placeholder="Meta Title (SEO)"
          value={form.metaTitle}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) =>
            setForm({ ...form, metaTitle: e.target.value })
          }
        />

        {/* Meta Description */}
        <textarea
          placeholder="Meta Description (SEO)"
          value={form.metaDescription}
          className="w-full p-3 rounded bg-white/10 border border-white/20 h-24"
          onChange={(e) =>
            setForm({ ...form, metaDescription: e.target.value })
          }
        />

        {/* Image URL */}
        <input
          placeholder="Image URL"
          value={form.image}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        {/* Image Preview */}
        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="w-full h-48 object-cover rounded-lg"
          />
        )}

        {/* Image Alt */}
        <input
          placeholder="Image Alt Text"
          value={form.imageAlt}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) =>
            setForm({ ...form, imageAlt: e.target.value })
          }
        />

        {/* Category */}
        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full p-3 rounded bg-white text-black border border-gray-300"
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>

        {/* Rich Editor */}
        <div className="bg-white rounded text-black">
          <ReactQuill
            theme="snow"
            value={form.content || ""}
            onChange={(value) =>
              setForm({ ...form, content: value })
            }
            modules={modules}
          />
        </div>

        {/* Button */}
        <button
          disabled={loading}
          className="w-full bg-sky-500 py-3 rounded font-semibold hover:bg-sky-600 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Blog 🚀"}
        </button>
      </form>
    </div>
  );
}