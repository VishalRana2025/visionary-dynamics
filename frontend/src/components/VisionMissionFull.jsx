import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Target,
  Globe,
  Zap,
  TrendingUp,
  Users,
  ShieldCheck,
  Cpu,
  Server,
  Award,
  HeartHandshake,
  Brain,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Target as TargetIcon,
  Lightbulb,
  Triangle
} from "lucide-react";
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

/* ================= COMPONENT ================= */
const VisionMissionFull = () => {
  const [activeView, setActiveView] = useState("mission");
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const containerRef = useRef(null);
  useScroll({ target: containerRef });

  /* ================= CAROUSEL ================= */
  const carouselImages = [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80",
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(
      () => setCurrentImage((i) => (i + 1) % carouselImages.length),
      5000
    );
    return () => clearInterval(timer);
  }, [autoPlay, carouselImages.length]);

  /* ================= DATA ================= */
  const mission = {
    title: "Our Mission",
    icon: <Target className="w-10 h-10" />,
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    text:
      "To empower businesses with secure, scalable and innovative technology solutions that accelerate growth, enhance efficiency, and drive meaningful digital transformation across industries.",
    pillars: [
      { icon: <Zap className="w-6 h-6" />, title: "Innovation Excellence", stat: "50+ Innovative Projects", description: "Pioneering cutting-edge solutions" },
      { icon: <HeartHandshake className="w-6 h-6" />, title: "Client Partnership", stat: "98% Satisfaction Rate", description: "Building lasting relationships" },
      { icon: <Cpu className="w-6 h-6" />, title: "Technical Mastery", stat: "500+ Solutions Built", description: "Engineering excellence" },
      { icon: <ShieldCheck className="w-6 h-6" />, title: "Security First", stat: "Zero Major Breaches", description: "Enterprise-grade protection" },
    ],
    stats: [
      { value: "1+", label: "Years Excellence", icon: <Award className="w-5 h-5" /> },
      { value: "50+", label: "Global Clients", icon: <Globe className="w-5 h-5" /> },
      { value: "99.9%", label: "Uptime SLA", icon: <Server className="w-5 h-5" /> },
      { value: "Team", label: "Support Coverage", icon: <Clock className="w-5 h-5" /> },
    ],
  };

  const vision = {
    title: "Our Vision",
    icon: <Brain className="w-10 h-10" />,
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    text:
      "To become the world's most trusted technology partner, recognized for transforming businesses through innovation, strategic leadership, and sustainable technological advancement that shapes the digital future.",
    pillars: [
      { icon: <Globe className="w-6 h-6" />, title: "Global Leadership", stat: "25+ Countries Served", description: "Worldwide impact" },
      { icon: <TrendingUp className="w-6 h-6" />, title: "Sustainable Growth", stat: "50+ Industry Awards", description: "Responsible innovation" },
      { icon: <Brain className="w-6 h-6" />, title: "AI-First Future", stat: "Future Ready Solutions", description: "Intelligent automation" },
      { icon: <Users className="w-6 h-6" />, title: "Strategic Partnerships", stat: "92% Client Retention", description: "Long-term collaboration" },
    ],
    stats: [
      { value: "2028", label: "Growth Target", icon: <TargetIcon className="w-5 h-5" /> },
      { value: "80+", label: "Tech Experts", icon: <Users className="w-5 h-5" /> },
      { value: "1M+", label: "Lives Impacted", icon: <HeartHandshake className="w-5 h-5" /> },
      { value: "AI/ML", label: "Core Focus", icon: <Lightbulb className="w-5 h-5" /> },
    ],
  };

  const data = activeView === "mission" ? mission : vision;

  return (
    <div ref={containerRef} className="relative w-full">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[40vh] overflow-hidden bg-gradient-to-br from-sky-100 via-blue-200/80 to-cyan-100">

        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-cyan-200/20 to-sky-300/20"
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-blue-100/30 to-cyan-200/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(219,234,254,0.7)_45%,rgba(191,219,254,0.9)_80%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative w-full px-10 sm:px-14 lg:px-24 pt-0 pb-16 h-full flex items-center text-center">
          <div className="w-full">

            <h1 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Our{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Mission
              </span>
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {" "} &{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-slate-800/90 max-w-4xl mx-auto leading-relaxed font-light mb-16"
            >
              Shaping the future of technology through purpose-driven innovation and strategic excellence.
            </motion.p>

            {/* TOGGLE — NO ICONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative inline-flex rounded-2xl bg-white/70 backdrop-blur-xl border border-blue-200 p-2 shadow-xl">

                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/40 to-cyan-400/40 backdrop-blur-sm"
                  style={{
                    width: "50%",
                    left: activeView === "mission" ? "0%" : "50%",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                {["mission", "vision"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveView(item)}
                    className={`relative px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 z-10 ${
                      activeView === item
                        ? "text-slate-900"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <span>
                      {item === "mission" ? "Our Mission" : "Our Vision"}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= LIGHT BACKGROUND + CONTENT ================= */}
      <section className="relative w-full pt-0 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200">

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Triangle className="w-8 h-8 text-blue-400/15" />
            </motion.div>
          ))}
        </div>

        <div className="relative w-full px-6 sm:px-10 lg:px-24 xl:px-32">

          {/* ================= CONTENT ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="grid lg:grid-cols-2 gap-20 items-center mb-32"
            >
              {/* TEXT */}
              <div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <div className={`p-5 rounded-3xl bg-gradient-to-br ${data.gradient} shadow-2xl`}>
                    {data.icon}
                  </div>
                </motion.div>

                <h3 className="text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {data.title}
                  </span>
                </h3>

                <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 mb-12 shadow-xl">
                  <p className="text-2xl text-slate-800 leading-relaxed font-light">
                    {data.text}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {data.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 * index }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 p-6 text-center shadow-lg"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-sky-200 mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-700 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CAROUSEL */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-white/60">
                  <div className="relative h-[500px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={carouselImages[currentImage]}
                        alt={data.title}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* CONTROLS */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setAutoPlay(!autoPlay)}
                        className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60"
                      >
                        {autoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          setCurrentImage(
                            (currentImage - 1 + carouselImages.length) %
                              carouselImages.length
                          )
                        }
                        className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          setCurrentImage(
                            (currentImage + 1) % carouselImages.length
                          )
                        }
                        className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/60"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ================= CORE PILLARS ================= */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-slate-900 mb-16"
          >
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
              Core Pillars
            </span>
          </motion.h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 p-8 shadow-xl"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${data.gradient} mb-6`}>
                  {pillar.icon}
                </div>
                <h5 className="text-xl font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h5>
                <p className="text-slate-700 mb-4">
                  {pillar.description}
                </p>
                <div className="font-semibold text-slate-900">
                  {pillar.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section
        className="relative w-full pt-16 pb-18 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/056/546/949/non_2x/success-roadmap-journey-milestone-or-career-path-achievement-route-or-pathway-to-achieve-goals-accomplishment-assessment-or-way-to-success-businessman-look-at-achievement-milestone-to-success-vector.jpg)",
        }}
      >
        {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
        <div className="absolute inset-0 bg-slate-900/85" />

        <div className="relative w-full px-6 sm:px-10 lg:px-24 xl:px-32">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Journey
            </span>
          </motion.h4>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transform -translate-x-1/2" />

            {[
              { year: "2023", title: "Idealisation", desc: "" },
              { year: "2024", title: "Founded", desc: "" },
              { year: " Jan 2025", title: "First Office", desc: "" },
              { year: "March 2025", title: "Reached 10 client", desc: "" },
              { year: " May 2025", title: "Expanded to Global Presence", desc: "" },
              { year: " Jun 2025", title: "Launched Marketting Servoices", desc: "" },
              { year: " Jul 2025", title: "Our First Development Team", desc: "" },
              { year: " Oct 2025", title: "Launched virtual Assistant Services", desc: "" },
              { year: " Nov 2025", title: "Reached 50+ Client", desc: "" },
              { year: " Dec 2025", title: "Launched Rpo Services", desc: "" },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start pr-12" : "justify-end pl-12"
                } mb-2`}
              >
                <div className="w-1/2">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-lg">
                    <div className="text-2xl font-bold text-cyan-400">
                      {milestone.year}
                    </div>
                    <div className="text-xl font-bold text-white mt-2">
                      {milestone.title}
                    </div>
                    <div className="text-white/80 mt-2">
                      {milestone.desc}
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default VisionMissionFull;
