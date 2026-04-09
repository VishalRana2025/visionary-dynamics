import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    API.get(`/blogs/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await API.put(`/blogs/${id}`, form);
    alert("✅ Blog Updated!");
    navigate("/blog");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1F3A] to-black flex items-center justify-center px-4">
      
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-white">
          Edit Blog ✏️
        </h2>

        {/* TITLE */}
        <input
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          placeholder="Title"
          className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
        />

        {/* IMAGE */}
        <input
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
          placeholder="Image URL"
          className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
        />

        {/* IMAGE PREVIEW */}
        {form.image && (
          <img
            src={form.image}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}

        {/* CATEGORY */}
        <input
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          placeholder="Category"
          className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
        />

        {/* CONTENT */}
        <textarea
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
          placeholder="Content"
          className="w-full p-3 rounded bg-white/10 border border-white/20 text-white h-40"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
        >
          Update Blog 🚀
        </button>
      </form>
    </div>
  );
}