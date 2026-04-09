import React, { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    image: "",
  });
    const handleUpload = async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append("image", file);

  const res = await API.post("/blogs/upload", formData);

  setForm({ ...form, image: res.data.imageUrl });
};
  {form.image && (
  <img
    src={form.image}
    className="w-full h-48 object-cover rounded-lg mt-2"
  />
)}

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/blogs", form);

      alert("✅ Blog Created Successfully!");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      alert("❌ Error creating blog");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Blog</h2>

        <input
          placeholder="Title"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
  type="file"
  onChange={handleUpload}
  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
/>

        <input
          placeholder="Category"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <textarea
          placeholder="Content"
          className="w-full p-3 rounded bg-white/10 border border-white/20 h-32"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <button className="w-full bg-sky-500 py-3 rounded font-semibold hover:bg-sky-600">
          Publish Blog 🚀
        </button>
      </form>
    </div>
  );
}