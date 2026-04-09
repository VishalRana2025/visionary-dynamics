import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const generateAI = async () => {
  const res = await API.post("/blogs/generate", {
    topic: form.title,
  });

  setForm({ ...form, content: res.data.content });
};
  const handleDelete = async () => {
  if (!window.confirm("Delete this blog?")) return;

  await API.delete(`/blogs/${id}`);
  navigate("/blog");
};

  useEffect(() => {
    API.get(`/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="bg-[#0B1F3A] min-h-screen text-white">

<div className="max-w-5xl mx-auto px-6 pt-28">
  <div className="w-[500px] h-[260px] md:h-[320px] bg-black rounded-2xl flex items-center justify-center overflow-hidden">

    <img
      src={blog.image}
      className="max-h-full max-w-full object-contain"
    />

  </div>
</div>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <button
  onClick={handleDelete}
  className="bg-red-500 px-4 py-2 rounded mb-6"
>
  Delete
</button>

           <button
  onClick={() => navigate(`/edit/${blog._id}`)}
  className="bg-green-500 px-4 py-2 rounded mr-3"
>
  Edit
</button>


<button onClick={generateAI}>Generate AI 🤖</button>
        <p className="text-gray-400 mb-6">{blog.category}</p>
        <p className="text-lg leading-8 whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    </div>
  );
}