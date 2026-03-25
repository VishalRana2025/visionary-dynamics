import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";



export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[150px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="w-full">
     <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center bg-blue-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?t=st=1769699940~exp=1769703540~hmac=9ff0bb0bf2f79e0f2f8e241e3afa199442796fa9e9c3298961423ca5d95127e5')",
        }}
      />

      {/* CINEMATIC SIDE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.75)_50%,rgba(2,6,23,0.95)_80%)]" />

      {/* TOP + BOTTOM FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-transparent to-[#020617]/90" />

      {/* 3D Glass Card */}
      <motion.div
       
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          style={{ transform: "translateZ(10px)" }}
        >
          About Us
        </h1>

        <p
          className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-blue-100/80"
          style={{ transform: "translateZ(25px)" }}
        >
        </p>

        {/* Clean Glass Edge */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 20px rgba(255,255,255,0.15), 0 20px 60px rgba(0,0,0,0.6)",
          }}
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
    </section>
      {/* ================== SECTION 2: ABOUT ================== */}
 <section className="w-full py-24 px-6 bg-gradient-to-br from-blue-50/60 via-sky-50/40 to-blue-100/50 overflow-hidden relative">
      {/* =========================
          TRANSPARENT 3D MOVING OBJECTS BACKGROUND
          - All elements now use fully transparent/glassmorphic styles
          - No solid fills, only subtle borders, gradients with low opacity
          - Ethereal, floating geometric shapes
      ========================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Floating 3D Cube 1 - Transparent */}
        <div className="absolute top-1/4 left-10 animate-float-slow">
          <div className="w-20 h-20 relative transform-style-3d animate-spin-slow">
            <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/8 to-blue-600/5 border border-blue-300/15 backdrop-blur-[2px] transform-rotateY-90 translateZ-10" />
            <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/8 to-blue-600/5 border border-blue-300/15 backdrop-blur-[2px] transform-rotateY--90 translateZ-10" />
            <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/8 to-blue-600/5 border border-blue-300/15 backdrop-blur-[2px] transform-rotateX-90 translateZ-10" />
            <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/8 to-blue-600/5 border border-blue-300/15 backdrop-blur-[2px] transform-rotateX--90 translateZ-10" />
            <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/8 to-blue-600/5 border border-blue-300/15 backdrop-blur-[2px] transform translateZ-10" />
            <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/8 to-blue-600/5 border border-blue-300/15 backdrop-blur-[2px] transform translateZ--10" />
          </div>
        </div>

        {/* Floating 3D Pyramid - Transparent */}
        <div className="absolute top-1/3 right-20 animate-float-medium">
          <div className="w-24 h-24 relative transform-style-3d animate-spin-medium">
            {/* Base - Transparent */}
            <div className="absolute w-24 h-24 bg-gradient-to-r from-sky-400/12 to-blue-500/10 border border-sky-300/20 backdrop-blur-[1px] transform rotate-45" />
            {/* Sides - Transparent */}
            <div className="absolute w-24 h-24 bg-gradient-to-r from-sky-400/12 to-blue-500/10 border border-sky-300/20 backdrop-blur-[1px] transform-3d origin-bottom rotateX-60" />
            <div className="absolute w-24 h-24 bg-gradient-to-r from-sky-400/12 to-blue-500/10 border border-sky-300/20 backdrop-blur-[1px] transform-3d origin-bottom rotateX-60 rotateY-90" />
            <div className="absolute w-24 h-24 bg-gradient-to-r from-sky-400/12 to-blue-500/10 border border-sky-300/20 backdrop-blur-[1px] transform-3d origin-bottom rotateX-60 rotateY-180" />
            <div className="absolute w-24 h-24 bg-gradient-to-r from-sky-400/12 to-blue-500/10 border border-sky-300/20 backdrop-blur-[1px] transform-3d origin-bottom rotateX-60 rotateY-270" />
          </div>
        </div>

        {/* Floating 3D Sphere - Transparent */}
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/8 to-sky-500/6 rounded-full animate-pulse border border-blue-300/12 backdrop-blur-[1px]" />
            <div className="absolute inset-4 bg-gradient-to-r from-blue-300/10 to-sky-400/8 rounded-full animate-pulse-slow border border-blue-300/10" />
            <div className="absolute inset-8 bg-gradient-to-r from-blue-200/6 to-sky-300/5 rounded-full border border-blue-200/8" />
          </div>
        </div>

        {/* Floating 3D Cube 2 - Transparent */}
        <div className="absolute bottom-1/3 right-10 animate-float-fast">
          <div className="w-12 h-12 relative transform-style-3d animate-spin-slow">
            <div className="absolute w-12 h-12 bg-gradient-to-br from-sky-400/12 to-blue-500/8 border border-sky-300/18 backdrop-blur-[2px] transform-rotateY-90 translateZ-6" />
            <div className="absolute w-12 h-12 bg-gradient-to-br from-sky-400/12 to-blue-500/8 border border-sky-300/18 backdrop-blur-[2px] transform-rotateY--90 translateZ-6" />
            <div className="absolute w-12 h-12 bg-gradient-to-br from-sky-400/12 to-blue-500/8 border border-sky-300/18 backdrop-blur-[2px] transform-rotateX-90 translateZ-6" />
            <div className="absolute w-12 h-12 bg-gradient-to-br from-sky-400/12 to-blue-500/8 border border-sky-300/18 backdrop-blur-[2px] transform-rotateX--90 translateZ-6" />
            <div className="absolute w-12 h-12 bg-gradient-to-br from-sky-400/12 to-blue-500/8 border border-sky-300/18 backdrop-blur-[2px] transform translateZ-6" />
            <div className="absolute w-12 h-12 bg-gradient-to-br from-sky-400/12 to-blue-500/8 border border-sky-300/18 backdrop-blur-[2px] transform translateZ--6" />
          </div>
        </div>

        {/* Floating 3D Torus - Transparent Rings */}
        <div className="absolute top-10 left-1/4 animate-float-medium">
          <div className="w-28 h-28 relative transform-style-3d animate-spin-reverse">
            <div className="absolute inset-0 rounded-full border border-blue-400/20 backdrop-blur-[1px]" />
            <div className="absolute inset-4 rounded-full border border-blue-400/18 backdrop-blur-[1px] transform rotate-90" />
            <div className="absolute inset-8 rounded-full border border-blue-400/15 backdrop-blur-[1px]" />
            <div className="absolute inset-12 rounded-full border border-blue-400/12 backdrop-blur-[1px] transform rotate-45" />
          </div>
        </div>

        {/* Floating Data Points - Transparent Glowing Dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-float-data"
            style={{
              left: `${5 + i * 9}%`,
              top: `${15 + Math.sin(i) * 35}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.5}s`,
              boxShadow: "0 0 6px rgba(59,130,246,0.2)",
            }}
          />
        ))}

        {/* Additional Floating Particles - Ultra Transparent */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-sky-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Connection Lines - Subtle Transparent SVG */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient-transparent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <path
              d="M10,100 Q200,50 300,150 T500,100"
              stroke="url(#gradient-transparent)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5"
              className="animate-dash"
            />
            <path
              d="M600,200 Q500,100 400,200 T200,250"
              stroke="url(#gradient-transparent)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5"
              className="animate-dash-reverse"
            />
            <path
              d="M800,50 Q850,100 820,150 T780,180"
              stroke="url(#gradient-transparent)"
              strokeWidth="0.8"
              fill="none"
              strokeDasharray="4 6"
            />
            <path
              d="M150,400 Q250,380 320,410 T420,390"
              stroke="url(#gradient-transparent)"
              strokeWidth="0.8"
              fill="none"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        {/* Soft Gradient Orbs - Atmospheric Transparency */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-sky-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/3 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="w-full px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Image with Transparent Glass Effect */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-200/30 transform hover:scale-[1.02] transition-transform duration-500 bg-white/30 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Business meeting"
              className="w-full h-[460px] object-cover opacity-95"
            />
          </div>

          {/* Decorative Glow - Transparent */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-300/15 rounded-full blur-3xl" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-300/10 rounded-full blur-2xl" />
        </div>

        {/* Content */}
        <div className="space-y-8 relative">
          {/* Floating Badge - Transparent Rings */}
          <div className="absolute -top-4 -right-4 w-24 h-24">
            <div className="relative w-full h-full animate-spin-slow">
              <div className="absolute inset-0 border border-blue-400/20 rounded-full backdrop-blur-[1px]" />
              <div className="absolute inset-3 border border-blue-300/25 rounded-full" />
              <div className="absolute inset-6 border border-blue-200/20 rounded-full" />
            </div>
          </div>

          <p className="text-sm uppercase tracking-widest text-blue-700/80 font-semibold">
            About Visionary Dynamics
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Your Partner in{" "}
            <span className="text-blue-700 relative">
              Progress
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/60 to-transparent rounded-full" />
            </span>
          </h2>

          <div className="space-y-6 relative">
            {/* Floating Icon - Transparent */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-400/40 to-sky-400/30 rounded-full animate-pulse blur-[1px]" />

            <p className="text-slate-700 text-lg leading-relaxed">
              A group of seasoned professionals with more than six years of experience lead{" "}
              <span className="font-semibold text-blue-700 relative">
                Visionary Dynamics Consulting Inc.
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-200/40 rounded-full" />
              </span>{" "}
              We are committed to providing our clients with specialized, superior solutions that enable them to reach their objectives.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              We serve both individuals and companies with our expertise in IT asset management and customized financial services.{" "}
              <span className="font-semibold text-blue-700">
                Financial planning, bookkeeping, tax planning, management accounting, predictive analytics, financial analysis, software asset management, CMDB, 
              </span>
              and more are just a few of the many services we provide.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              At Visionary Dynamics, we use strategic insights and creative solutions to enable clients to maximize resources and make wise decisions. Above all, we ensure the{" "}
              <span className="font-semibold text-blue-700">
                security of all client information
              </span>{" "}
              by upholding strict confidentiality and complying with international data protection regulations.
            </p>
          </div>

          {/* Floating Elements Container - Transparent */}
          <div className="pt-8 relative">
            <div className="absolute -bottom-4 -left-4 w-16 h-16">
              <div className="relative w-full h-full animate-float-slow">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/8 to-sky-500/6 rounded-full backdrop-blur-[1px] border border-blue-300/10" />
                <div className="absolute inset-3 bg-gradient-to-r from-blue-300/6 to-sky-400/5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          GLOBAL ANIMATION KEYFRAMES
      ========================= */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(12px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate3d(1, 1, 0, 0deg); }
          to { transform: rotate3d(1, 1, 0, 360deg); }
        }
        
        @keyframes spin-medium {
          from { transform: rotate3d(0, 1, 1, 0deg); }
          to { transform: rotate3d(0, 1, 1, 360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate3d(1, 0, 1, 0deg); }
          to { transform: rotate3d(1, 0, 1, -360deg); }
        }
        
        @keyframes float-data {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.5; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: 20; }
        }
        
        @keyframes dash-reverse {
          to { stroke-dashoffset: -20; }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-spin-medium { animation: spin-medium 10s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-float-data { animation: float-data 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-dash-reverse { animation: dash-reverse 20s linear infinite; }
        
        .transform-style-3d { transform-style: preserve-3d; }
        .transform-rotateY-90 { transform: rotateY(90deg); }
        .transform-rotateY--90 { transform: rotateY(-90deg); }
        .transform-rotateX-90 { transform: rotateX(90deg); }
        .transform-rotateX--90 { transform: rotateX(-90deg); }
        .transform-3d { transform-style: preserve-3d; }
        
        .translateZ-10 { transform: translateZ(10px); }
        .translateZ--10 { transform: translateZ(-10px); }
        .translateZ-6 { transform: translateZ(6px); }
        .translateZ--6 { transform: translateZ(-6px); }
        
        .origin-bottom { transform-origin: bottom; }
      `}</style>
    </section>
      {/* ================== SECTION 1: CEO MESSAGE ================== */}
<section className="relative py-20 px-6 bg-gray-900 overflow-hidden min-h-[800px] flex items-center justify-center">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80)",
    }}
  />

  {/* Dark Overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/80 to-black/70"
  />

  <div className="relative w-full px-6 sm:px-10 lg:px-24">
    <div className="flex flex-col lg:flex-row gap-8 items-center">

      {/* ================= IMAGE ================= */}
      <div className="lg:w-2/5 w-full flex justify-center">
        <div className="relative group w-full max-w-md">
          {/* Image Card */}
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] aspect-[3/4]">
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-xl w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Aakash Dhandhania - CEO & Founder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Name */}
          <div className="mt-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-1">
              Leadership
            </p>
            <p className="text-xl font-bold text-white mb-1">
              Aakash Dhandhania
            </p>
            <p className="text-sm text-gray-300 font-medium bg-gradient-to-r from-blue-900/30 to-indigo-900/30 py-1.5 px-4 rounded-full inline-block border border-blue-700/30">
              CEO & Founder
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="lg:w-3/5 w-full flex">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 lg:p-10 shadow-2xl border-2 border-blue-300/50 transition-all duration-300 hover:shadow-3xl hover:border-blue-400/70 w-full flex flex-col justify-center">

          {/* Section Header */}
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2">
              CEO Message
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto lg:mx-0" />
            <p className="text-gray-600 mt-3 text-sm font-medium">
              A vision for tomorrow, built on today’s commitment
            </p>
          </div>

          {/* Message Content */}
          <div className="space-y-4">
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              <span className="font-semibold text-blue-700">
                Welcome to Visionary Dynamics.
              </span>{" "}
              It is my privilege to connect with you and share the vision that
              drives our organization forward. We are committed to delivering
              exceptional solutions that empower businesses, individuals, and
              communities to thrive in a rapidly evolving world.
            </p>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Our journey is built on a foundation of{" "}
              <span className="font-semibold text-blue-700">
                trust, innovation, and unwavering dedication to excellence
              </span>
              . We believe in creating value through meaningful partnerships and
              staying at the forefront of industry trends.
            </p>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              As we continue to grow, our focus remains steadfast:{" "}
              <span className="font-semibold text-blue-700">
                to provide services and solutions that make a real difference
              </span>
              . Whether you're here to explore opportunities or seek guidance,
              we are here to support you every step of the way.
            </p>

            {/* Closing Statement */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-800 text-lg font-semibold text-center lg:text-left italic bg-gradient-to-r from-blue-50 to-indigo-50 py-3 px-5 rounded-2xl border-l-4 border-blue-500">
                "Thank you for being a part of our story. Together, we can build
                a brighter, more successful future."
              </p>
            </div>

            {/* Signature */}
            <div className="flex justify-center lg:justify-end mt-6">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    With gratitude,
                  </p>
                  <p className="text-lg font-bold text-blue-700 mt-1">
                    Aakash Dhandhania
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  AD
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
    <WaveTransition />
  </div>
</section>
    </div>
  );
};
export default AboutUs;
