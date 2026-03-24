import React, { useState, useEffect } from "react";

/* =========================
   DATA
========================= */
const features = [
  {
    title: "Scalable Growth",
    description:
      "Processes designed to grow with your business, adapting seamlessly as your operations, team size & market reach expand.",
    icon: "📈",
    color: "from-sky-400 to-cyan-400",
  },
  {
    title: "Risk Mitigation",
    description:
      "Proactive controls and compliance checks built into every process to identify, reduce, and prevent operational and financial risks.",
    icon: "🛡️",
    color: "from-emerald-400 to-green-400",
  },
  {
    title: "Operational Excellence",
    description:
      "Refined workflows that improve efficiency, eliminate bottlenecks, and ensure consistent, high-quality outcomes.",
    icon: "⚙️",
    color: "from-violet-400 to-purple-400",
  },
  {
    title: "Cost Optimization",
    description:
      "Data-driven processes that reduce overhead, improve resource utilization, and maximize return on investment.",
    icon: "💡",
    color: "from-amber-400 to-orange-400",
  },
  {
    title: "Client Partnership",
    description:
      "A collaborative, long-term approach that aligns our processes with your vision, goals, and evolving business strategy.",
    icon: "🤝",
    color: "from-rose-400 to-pink-400",
  },
  {
    title: "Insight-Driven Decisions",
    description:
      "Actionable insights generated from structured reporting and analytics to guide smarter, faster business decisions.",
    icon: "📊",
    color: "from-indigo-400 to-blue-400",
  },
  {
    title: "Continuous Improvement",
    description:
      "Ongoing evaluation and refinement of processes to keep your business competitive and future-ready.",
    icon: "🔄",
    color: "from-sky-400 to-blue-400",
  },
  {
    title: "Global Compliance",
    description:
      "Processes aligned with international standards and regulatory frameworks to support cross-border operations and expansion.",
    icon: "🌍",
    color: "from-teal-400 to-emerald-400",
  },
];

/* =========================
   BACKGROUND OBJECTS
========================= */
const bgObjects = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  size: 120 + Math.random() * 200,
  x: 2 + Math.random() * 96,
  y: 5 + Math.random() * 90,
  depth: -200 + Math.random() * 400,
  speed: 14 + Math.random() * 22,
  type: i % 3,
}));

// Color mapping for hover effects
const colorMapping = {
  "from-sky-400 to-cyan-400": {
    light: "rgba(56, 189, 248, 0.08)",
    medium: "rgba(56, 189, 248, 0.15)",
    dark: "rgba(56, 189, 248, 0.25)",
  },
  "from-emerald-400 to-green-400": {
    light: "rgba(52, 211, 153, 0.08)",
    medium: "rgba(52, 211, 153, 0.15)",
    dark: "rgba(52, 211, 153, 0.25)",
  },
  "from-violet-400 to-purple-400": {
    light: "rgba(167, 139, 250, 0.08)",
    medium: "rgba(167, 139, 250, 0.15)",
    dark: "rgba(167, 139, 250, 0.25)",
  },
  "from-amber-400 to-orange-400": {
    light: "rgba(251, 191, 36, 0.08)",
    medium: "rgba(251, 191, 36, 0.15)",
    dark: "rgba(251, 191, 36, 0.25)",
  },
  "from-rose-400 to-pink-400": {
    light: "rgba(251, 113, 133, 0.08)",
    medium: "rgba(251, 113, 133, 0.15)",
    dark: "rgba(251, 113, 133, 0.25)",
  },
  "from-indigo-400 to-blue-400": {
    light: "rgba(129, 140, 248, 0.08)",
    medium: "rgba(129, 140, 248, 0.15)",
    dark: "rgba(129, 140, 248, 0.25)",
  },
  "from-sky-400 to-blue-400": {
    light: "rgba(56, 189, 248, 0.08)",
    medium: "rgba(56, 189, 248, 0.15)",
    dark: "rgba(56, 189, 248, 0.25)",
  },
  "from-teal-400 to-emerald-400": {
    light: "rgba(45, 212, 191, 0.08)",
    medium: "rgba(45, 212, 191, 0.15)",
    dark: "rgba(45, 212, 191, 0.25)",
  },
};

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* =========================
     MOUSE PARALLAX
  ========================= */
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative w-screen min-h-screen py-28 overflow-hidden">
      {/* =========================
          SKY CLOUD BASE LAYER
      ========================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eaf6ff] via-[#f3faff] to-[#ffffff]" />

        <div className="absolute top-[10%] left-[5%] w-[600px] h-[350px] bg-white/70 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[10%] w-[700px] h-[400px] bg-white/60 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[900px] h-[450px] bg-sky-200/40 rounded-full blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />
      </div>

      {/* =========================
          LIVING 3D OBJECT LAYER
      ========================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {bgObjects.map((obj) => (
          <div
            key={obj.id}
            className="absolute"
            style={{
              width: obj.size,
              height: obj.size,
              top: `${obj.y}%`,
              left: `${obj.x}%`,
              transform: `
                perspective(2000px)
                translateZ(${obj.depth}px)
                rotateX(${mouse.y * 6}deg)
                rotateY(${mouse.x * 6}deg)
              `,
              animation: `float3D ${obj.speed}s ease-in-out infinite`,
            }}
          >
            {obj.type === 0 && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  border: "1px solid rgba(56,189,248,0.35)",
                  boxShadow: "0 0 60px rgba(56,189,248,0.25)",
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)",
                }}
              />
            )}

            {obj.type === 1 && (
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(56,189,248,0.5), transparent 70%)",
                  filter: "blur(1px)",
                  boxShadow:
                    "0 0 80px rgba(56,189,248,0.4), inset 0 0 40px rgba(255,255,255,0.8)",
                }}
              />
            )}

            {obj.type === 2 && (
              <div
                className="w-full h-full"
                style={{
                  border: "1px solid rgba(56,189,248,0.3)",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(45deg, transparent, rgba(56,189,248,0.08), transparent)",
                  boxShadow: "0 0 50px rgba(56,189,248,0.25)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* =========================
          CONTENT LAYER
      ========================= */}
      <div
        className="relative z-10 w-full px-6 md:px-12 lg:px-24"
        style={{
          transform: `
            perspective(2000px)
            translateZ(80px)
            rotateX(${mouse.y * -0.25}deg)
            rotateY(${mouse.x * 0.25}deg)
          `,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-8 mb-10">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            <span className="px-10 py-4 text-sm font-bold text-sky-700 uppercase tracking-[0.35em] bg-white/80 backdrop-blur-xl rounded-2xl border border-sky-400/30 shadow-lg">
              Why Choose Us
            </span>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900">Trusted Excellence for</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Business Success
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-sky-300/30 shadow-xl">
            We combine deep expertise with innovative technology to deliver
            measurable results that drive sustainable growth and operational
            excellence.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const colors = colorMapping[feature.color];

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform:
                    hoveredCard === index
                      ? "translateY(-10px)"
                      : "translateY(0px)",
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Background Color Spread Effect */}
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-500 ease-out"
                  style={{
                    backgroundColor:
                      hoveredCard === index ? colors.light : "transparent",
                    boxShadow:
                      hoveredCard === index
                        ? `0 0 0 1px ${colors.medium}, 0 25px 50px -12px ${colors.dark}40`
                        : "none",
                    opacity: hoveredCard === index ? 1 : 0,
                    transform:
                      hoveredCard === index ? "scale(1.02)" : "scale(1)",
                  }}
                />

                {/* Animated Border Glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500"
                  style={{
                    boxShadow:
                      hoveredCard === index
                        ? `inset 0 0 0 1px ${colors.medium}, 0 0 20px ${colors.dark}`
                        : "inset 0 0 0 1px rgba(148, 163, 184, 0.1)",
                  }}
                />

                {/* Corner Accents */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 rounded-bl-3xl transition-all duration-500 pointer-events-none"
                  style={{
                    background:
                      hoveredCard === index
                        ? `linear-gradient(135deg, transparent, ${colors.medium})`
                        : "transparent",
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-3xl transition-all duration-500 pointer-events-none"
                  style={{
                    background:
                      hoveredCard === index
                        ? `linear-gradient(135deg, ${colors.medium}, transparent)`
                        : "transparent",
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                />

                {/* Main Card */}
                <div className="relative bg-white/85 backdrop-blur-xl rounded-3xl p-8 border border-sky-300/30 shadow-xl overflow-hidden">
                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110`}
                    style={{
                      transform:
                        hoveredCard === index
                          ? "scale(1.15) rotate(5deg)"
                          : "scale(1) rotate(0deg)",
                      boxShadow:
                        hoveredCard === index
                          ? `0 15px 30px ${colors.dark}, 0 0 40px ${colors.medium}`
                          : "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span
                      className="text-3xl transition-all duration-400"
                      style={{
                        filter:
                          hoveredCard === index
                            ? "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
                            : "none",
                        transform:
                          hoveredCard === index ? "scale(1.2)" : "scale(1)",
                      }}
                    >
                      {feature.icon}
                    </span>

                    {/* Icon Glow */}
                    <div
                      className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${colors.medium}, transparent 70%)`,
                        filter: "blur(10px)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 transition-all duration-400 relative"
                    style={{
                      color:
                        hoveredCard === index
                          ? colors.dark.replace("0.25", "0.9")
                          : "#1e293b",
                    }}
                  >
                    {feature.title}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-500"
                      style={{
                        width: hoveredCard === index ? "100%" : "0%",
                        background: `linear-gradient(90deg, ${colors.dark}, ${colors.medium})`,
                      }}
                    />
                  </h3>

                  {/* Description */}
                  <p
                    className="text-slate-600 mb-6 leading-relaxed transition-all duration-400"
                    style={{
                      color:
                        hoveredCard === index ? "#475569" : "#64748b",
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Button */}
                  <button
                    className="relative px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-400 overflow-hidden group-hover:shadow-lg"
                    style={{
                      color:
                        hoveredCard === index
                          ? "white"
                          : colors.dark.replace("0.25", "0.9"),
                      background:
                        hoveredCard === index
                          ? `linear-gradient(135deg, ${colors.dark}, ${colors.medium})`
                          : colors.light,
                      borderColor:
                        hoveredCard === index
                          ? "transparent"
                          : colors.medium,
                      boxShadow:
                        hoveredCard === index
                          ? `0 8px 25px ${colors.dark}40`
                          : "none",
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <span className="ml-2 transition-transform duration-400 group-hover:translate-x-1">
                        →
                      </span>
                    </span>

                    <div
                      className="absolute inset-0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================
          GLOBAL KEYFRAMES
      ========================= */}
      <style>{`
        @keyframes float3D {
          0% {
            transform: translateZ(0px) rotate(0deg);
          }
          50% {
            transform: translateZ(40px) rotate(180deg);
          }
          100% {
            transform: translateZ(0px) rotate(360deg);
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
