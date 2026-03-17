import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
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

/* HERO BACKGROUND IMAGE */
const heroBg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80";

/* LOWER SECTION BACKGROUND IMAGE */
const lowerBg =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";

/* ================= MULTI-OBJECT LIGHT BLUE 3D BACKGROUND ================= */
const Elegant3DBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 35;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const waves = [
    { id: 1, size: 360, top: "10%", left: "10%", opacity: 0.25, speed: 28 },
    { id: 2, size: 260, top: "20%", left: "70%", opacity: 0.22, speed: 32 },
    { id: 3, size: 420, top: "65%", left: "15%", opacity: 0.28, speed: 36 },
    { id: 4, size: 300, top: "70%", left: "75%", opacity: 0.24, speed: 30 },
  ];

  const squares = [
    { id: 1, size: 80, top: "30%", left: "25%", speed: 18 },
    { id: 2, size: 100, top: "55%", left: "55%", speed: 22 },
    { id: 3, size: 70, top: "15%", left: "80%", speed: 20 },
  ];

  const rings = [
    { id: 1, size: 140, top: "40%", left: "10%", speed: 26 },
    { id: 2, size: 180, top: "75%", left: "40%", speed: 32 },
  ];

  const particles = Array.from({ length: 14 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Base light-blue wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100" />

      {/* Glass Waves */}
      {waves.map((wave) => (
        <motion.div
          key={`wave-${wave.id}`}
          className="absolute rounded-full"
          style={{
            top: wave.top,
            left: wave.left,
            width: wave.size,
            height: wave.size,
            x: smoothX,
            y: smoothY,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(56,189,248,0.35))",
            opacity: wave.opacity,
            filter: "blur(80px)",
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: wave.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Glass Squares */}
      {squares.map((sq) => (
        <motion.div
          key={`square-${sq.id}`}
          className="absolute rounded-2xl backdrop-blur-xl"
          style={{
            top: sq.top,
            left: sq.left,
            width: sq.size,
            height: sq.size,
            x: smoothX,
            y: smoothY,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(14,165,233,0.25))",
            border: "1px solid rgba(14,165,233,0.3)",
            boxShadow: "0 0 30px rgba(14,165,233,0.35)",
          }}
          animate={{
            rotate: [0, 180, 360],
            y: [0, 25, 0],
          }}
          transition={{
            duration: sq.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing Rings */}
      {rings.map((ring) => (
        <motion.div
          key={`ring-${ring.id}`}
          className="absolute rounded-full"
          style={{
            top: ring.top,
            left: ring.left,
            width: ring.size,
            height: ring.size,
            x: smoothX,
            y: smoothY,
            border: "3px solid rgba(56,189,248,0.5)",
            boxShadow: "0 0 40px rgba(56,189,248,0.4)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: ring.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Shimmer Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-sky-400/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            x: smoothX,
            y: smoothY,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ================= STATS SECTION ================= */
const StatsSection = () => {
  const stats = [
    {
      value: "100+",
      label: "Happy Clients",
      icon: <UserGroupIcon className="w-8 h-8" />,
      color: "from-sky-400 to-cyan-500",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      icon: <StarIcon className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      value: "98%",
      label: "Retention Rate",
      icon: <ChartBarIcon className="w-8 h-8" />,
      color: "from-emerald-400 to-green-500",
    },
    {
      value: "1+",
      label: "Years Experience",
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: "from-violet-400 to-purple-500",
    },
  ];

  return (
    <div className="relative py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} blur-xl opacity-60 group-hover:opacity-90 transition-opacity`}
              />
              <div
                className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl`}
              >
                <div className="text-white">{stat.icon}</div>
              </div>
            </div>

            <div className="text-4xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-slate-300 mb-3">{stat.label}</div>

            <div className="relative h-1.5 w-24 mx-auto rounded-full bg-white/20 overflow-hidden">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ================= TESTIMONIAL CARD ================= */
const TestimonialCard = ({ testimonial, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500" />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-md border-2 border-white">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.position}
                </p>
                <p className="text-xs text-gray-400">
                  {testimonial.company}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isLiked ? (
                <HeartIconSolid className="w-6 h-6 text-pink-500" />
              ) : (
                <HeartIcon className="w-6 h-6 text-gray-400" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <StarIconSolid
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-gray-700">
              {testimonial.rating}.0
            </span>
            <span className="ml-2 text-sm text-gray-500">
              • {testimonial.date}
            </span>
          </div>

          <p
            className={`text-gray-600 leading-relaxed mb-4 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {testimonial.content}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {testimonial.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= MAIN PAGE ================= */
export default function OurClients() {
  const [activeFilter, setActiveFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechNova Solutions",
      content:
        "Working with this team has been transformative for our business. Their expertise in digital transformation helped us increase our online revenue by 150% within the first year.",
      rating: 5,
      date: "2 weeks ago",
      tags: ["Technology", "E-commerce"],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Operations Director",
      company: "Global Finance Inc",
      content:
        "They helped us streamline operations and reduce costs by over 30%. Highly recommend their services.",
      rating: 5,
      date: "1 month ago",
      tags: ["Finance", "Consulting"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Marketing Director",
      company: "HealthPlus Network",
      content:
        "Their team brought clarity to our processes and confidence to our decisions. From strategy to execution, everything was precise, transparent, and results-driven.",
      rating: 5,
      date: "3 weeks ago",
      tags: ["Healthcare", "Marketing"],
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "CTO",
      company: "CloudSecure Systems",
      content:
        "They implemented top-tier cybersecurity with flawless execution. Zero breaches since deployment.",
      rating: 5,
      date: "2 months ago",
      tags: ["IT", "Cybersecurity"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  const filters = [
    { id: "all", label: "All Testimonials" },
    { id: "technology", label: "Technology" },
    { id: "finance", label: "Finance" },
    { id: "healthcare", label: "Healthcare" },
    { id: "it", label: "IT" },
  ];

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === "all") return true;
    return t.tags.some((tag) =>
      tag.toLowerCase().includes(activeFilter)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 text-slate-800">

      {/* HERO */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />

        <div className="relative container mx-auto px-6 z-10 flex flex-col items-center justify-center text-center h-full">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-white"
          >
            Client Success Stories
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
 
      </div>

      {/* TESTIMONIALS — LIGHT BLUE BG */}
      <div className="relative py-24 overflow-hidden bg-sky-100 z-0">
        <Elegant3DBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10" />

        <div className="relative container mx-auto px-6 z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses we've partnered with.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTestimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* LOWER — IMAGE BG + DARK OVERLAY */}
      <div className="relative py-16 overflow-hidden">
        {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
 

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${lowerBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />

        <div className="relative container mx-auto px-6 z-20">
          <StatsSection />

          {/* CTA */}
          <div className="mt-10 text-center">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg text-slate-300 mb-8">
                Let’s work together to achieve remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 bg-white/20 text-white rounded-xl font-semibold shadow-lg border border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
