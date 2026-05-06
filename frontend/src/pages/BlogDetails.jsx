import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  // FETCH BLOG
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

  // DELETE BLOG
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

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  if (blog === "not-found") {
    return (
      <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white text-xl">
        Blog not found ❌
      </div>
    );
  }

  if (blog === "error") {
    return (
      <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white text-xl">
        Something went wrong ⚠️
      </div>
    );
  }

  return (
    <div className="bg-[#faf8f4] text-[#1a1a2e] overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#162d50] to-[#0b1f3a] text-white">

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">

          {/* CATEGORY */}
          {blog.category && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-[#f4a522] rounded-full"></span>

              <span className="text-sm tracking-wide text-white/90 uppercase">
                {blog.category}
              </span>
            </div>
          )}

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl leading-tight font-black max-w-5xl">
            {blog.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl">
  {blog.excerpt
    ? blog.excerpt.replace(/<[^>]*>?/gm, "")
    : "Explore the latest enterprise insights, cybersecurity trends, AI innovations, and digital transformation strategies."}
</p>
          {/* META */}
          {/* <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>
              📅{" "}
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>

            <span>✍ Visionary Dynamics</span>
          </div> */}

          {/* ADMIN BUTTONS */}
          {isAdmin && (
            <div className="flex gap-3 mt-10 flex-wrap">

              <button
                onClick={handleDelete}
                className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
              >
                Delete
              </button>

              <button
                onClick={() => navigate(`/edit/${blog._id}`)}
                className="bg-green-500 px-5 py-2 rounded-xl hover:bg-green-600 transition"
              >
                Edit
              </button>

            </div>
          )}
        </div>
      </section>
      <div className="h-20 md:h-28"></div>

      {/* FEATURE IMAGE */}
{blog.image && (
  <section className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 -mt-10 md:-mt-16">

    <div className="
      rounded-[32px]
      overflow-hidden
      shadow-[0_20px_80px_rgba(0,0,0,0.18)]
      border border-black/5
      bg-white
    ">

      <img
        src={blog.image}
        alt={blog.imageAlt || blog.title}
        className="
          w-full
          object-cover
          object-center
          rounded-[32px]
        "
      />

    </div>

  </section>
)}
      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-24">

        {/* DIVIDER */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#f4a522] to-[#1a73e8] rounded-full mb-14"></div>

        {/* BLOG CONTENT */}
<article
  className="
  prose prose-lg max-w-none

  prose-headings:text-[#0b1f3a]
  prose-headings:font-black

  prose-h1:text-5xl
  prose-h1:mb-8

  prose-h2:text-4xl
  prose-h2:mt-20
  prose-h2:mb-8
  prose-h2:border-l-4
  prose-h2:border-[#f4a522]
  prose-h2:pl-5

  prose-h3:text-2xl
  prose-h3:mt-12
  prose-h3:text-[#162d50]

  prose-p:text-[#2b2b42]
  prose-p:leading-9
  prose-p:text-lg

  prose-strong:text-[#0b1f3a]

  prose-li:text-[#2b2b42]
  prose-li:leading-8

  prose-img:rounded-3xl
  prose-img:shadow-2xl

  prose-blockquote:border-l-4
  prose-blockquote:border-[#f4a522]
  prose-blockquote:bg-[#fff8ea]
  prose-blockquote:rounded-2xl
  prose-blockquote:px-8
  prose-blockquote:py-6
"
>
  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
    {(blog.content || "No content available")
  .replace(/## Key Points/g, "")
  .replace(/## Details/g, "")
  .replace(/## Conclusion/g, "")
}
  </ReactMarkdown>
</article>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden mt-28 rounded-[32px] bg-gradient-to-br from-[#0b1f3a] to-[#162d50] text-white p-10 md:p-16 shadow-2xl">

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
              Secure Your Business with Enterprise-Grade Digital Solutions
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-9 max-w-2xl">
              We help organizations modernize infrastructure, strengthen cybersecurity,
              optimize AI adoption, and accelerate digital transformation strategies.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f4a522] to-[#ffbf47] text-[#0b1f3a] font-bold text-lg shadow-2xl hover:scale-105 transition duration-300">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold hover:bg-white/20 transition">
                Explore Services
              </button>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}