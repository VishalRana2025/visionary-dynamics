import React, { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateBlog() {
  const navigate = useNavigate();

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
  const [uploading, setUploading] = useState(false);
  const [generating, setGenerating] = useState(false);

  // ========================
  // 📸 Upload Image
  // ========================
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const res = await API.post("/blogs/upload", formData);

      setForm((prev) => ({
  ...prev,
  content: res.data.content,
  metaTitle: prev.title,
  metaDescription: res.data.content.slice(0, 150),
  imageAlt: prev.title,
}));
    } catch (err) {
      console.error(err);
      alert("❌ Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ========================
  // 🤖 AI Generate Content
  // ========================
  const handleGenerate = async () => {
    if (!form.title) {
      return alert("Enter title first");
    }

    try {
      setGenerating(true);

      const res = await API.post("/blogs/generate", {
        topic: form.title,
      });

      setForm((prev) => ({
        ...prev,
        content: res.data.content, // HTML/Markdown content
      }));
    } catch (err) {
      console.error(err);
      alert("❌ AI generation failed");
    } finally {
      setGenerating(false);
    }
  };

  // ========================
  // 🚀 Submit Blog
  // ========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.content) {
      return alert("⚠️ Title and content are required");
    }

    try {
      setLoading(true);

      await API.post("/blogs", form);

      alert("✅ Blog Created Successfully!");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      alert("❌ Error creating blog");
    } finally {
      setLoading(false);
    }
  };

  // ========================
  // 🔥 QUILL TOOLBAR
  // ========================
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Blog</h2>

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

        {/* AI Generate */}
        <button
          type="button"
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-purple-500 py-2 rounded hover:bg-purple-600"
        >
          {generating ? "Generating..." : "🤖 Generate Content"}
        </button>

        {/* Image Upload */}
        <input
          type="file"
          onChange={handleUpload}
          className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
        />

        {uploading && (
          <p className="text-yellow-300 text-sm">Uploading image...</p>
        )}

        {/* Image Preview */}
        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="w-full h-48 object-cover rounded-lg"
          />
        )}

        {/* Image Alt Text */}
<input
  placeholder="Image Alt Text (SEO)"
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

        {/* 🔥 RICH TEXT EDITOR */}
        <div className="bg-white rounded text-black">
          <ReactQuill
            theme="snow"
            value={form.content}
            onChange={(value) =>
              setForm({ ...form, content: value })
            }
            modules={modules}
          />
        </div>

        {/* Submit */}
        <button
          disabled={loading || uploading}
          className="w-full bg-sky-500 py-3 rounded font-semibold hover:bg-sky-600 disabled:opacity-50"
        >
          {loading ? "Publishing..." : "Publish Blog 🚀"}
        </button>
      </form>
    </div>
  );
}