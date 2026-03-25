import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import {
  Award,
  Zap,
  Handshake,
  ChevronRight,
  Sparkles,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning,
} from "lucide-react";

/* IMAGE IMPORTS */
import certifiedImg from "../assets/images/quickbooks-certified.jpg";
import integrationImg from "../assets/images/quickbooks-integration.jpg";
import supportImg from "../assets/images/quickbooks-support.jpg";
import partnershipImg from "../assets/images/quickbooks-partnership.jpg";

/* Color helper */
const colorMap = {
  blue: "text-blue-500",
  emerald: "text-emerald-500",
  purple: "text-purple-500",
  amber: "text-amber-500",
};

/* Animations */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= 3D PARALLAX SHAPES BACKGROUND ================= */
const Parallax3DShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const shapes = [
    { size: 200, top: "15%", left: "10%", type: "star", color: "rgba(59,130,246,0.5)" },
    { size: 150, top: "70%", left: "15%", type: "burst", color: "rgba(14,165,233,0.5)" },
    { size: 180, top: "20%", left: "75%", type: "hexagon", color: "rgba(34,211,238,0.5)" },
    { size: 120, top: "65%", left: "80%", type: "spiral", color: "rgba(6,182,212,0.5)" },
    { size: 160, top: "40%", left: "5%", type: "mesh", color: "rgba(59,130,246,0.45)" },
  ];

  const StarShape = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <radialGradient id="starGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <polygon
        points="50,5 61,40 92,40 67,60 78,90 50,70 22,90 33,60 8,40 39,40"
        fill="url(#starGrad)"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.9"
      />
    </svg>
  );

  const HexagonShape = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <polygon
        points="50,5 93,25 93,75 50,95 7,75 7,25"
        fill="url(#hexGrad)"
        stroke={color}
        strokeWidth="2"
        opacity="0.85"
      />
    </svg>
  );

  const MeshShape = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <radialGradient id="meshGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#meshGrad)" />
      <g stroke={color} strokeWidth="1.5" fill="none" opacity="0.4">
        <line x1="20" y1="50" x2="80" y2="50" />
        <line x1="50" y1="20" x2="50" y2="80" />
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="50" r="30" />
      </g>
    </svg>
  );

  const SpiralShape = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M 50 10 Q 80 20 85 50 Q 80 80 50 85 Q 20 80 15 50 Q 20 25 50 20 Q 75 20 80 45"
        fill="none"
        stroke="url(#spiralGrad)"
        strokeWidth="4"
        opacity="0.85"
        strokeLinecap="round"
      />
      <circle cx="50" cy="10" r="4" fill={color} opacity="0.9" />
    </svg>
  );

  const BurstShape = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="burstGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="10" fill={color} opacity="0.95" />
      {[...Array(16)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="12"
          stroke="url(#burstGrad)"
          strokeWidth="2.5"
          opacity="0.8"
          strokeLinecap="round"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      ))}
    </svg>
  );

  const renderShape = (shape) => {
    switch (shape.type) {
      case "star":
        return <StarShape size={shape.size} color={shape.color} />;
      case "hexagon":
        return <HexagonShape size={shape.size} color={shape.color} />;
      case "spiral":
        return <SpiralShape size={shape.size} color={shape.color} />;
      case "burst":
        return <BurstShape size={shape.size} color={shape.color} />;
      case "mesh":
        return <MeshShape size={shape.size} color={shape.color} />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            top: shape.top,
            left: shape.left,
            x: smoothX,
            y: smoothY,
          }}
          animate={{
            y: ["0px", `${20 + i * 10}px`, "0px"],
            x: [`0px`, `${15 - i * 5}px`, "0px"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="drop-shadow-lg">{renderShape(shape)}</div>
        </motion.div>
      ))}
    </div>
  );
};

const QuickBooksAnnouncement = () => {
  const cards = [
    {
      id: 1,
      image: certifiedImg,
      icon: <Award size={26} className="text-blue-600" />,
      title: "Certified Expertise",
      desc:
        "Authorized professionals with proven QuickBooks implementation experience.",
      features: [
        "QuickBooks Certified",
        "GHL Expert",
        "Continuous Training",
        "Audit-Ready Reporting",
      ],
      color: "blue",
      gradient: "from-blue-50 to-blue-100",
    },

    {
      id: 2,
      image: integrationImg,
      icon: <Zap size={26} className="text-emerald-600" />,
      title: "Seamless Integration & Support",
      desc:
        "End-to-end setup and ongoing assistance aligned with your business workflows and compliance needs.",
      features: [
        "Custom Configuration",
        "Efficient Workflows",
        "Proactive Monitoring",
        "Dedicated Supervisor",
      ],
      color: "emerald",
      gradient: "from-emerald-50 to-emerald-100",
    },

    {
      id: 3,
      image: supportImg,
      icon: <Cloud size={26} className="text-purple-600" />,
      title: "Global Presence",
      desc:
        "Serving businesses worldwide with region-specific expertise and global compliance support.",
      features: [
        "Multi-Country Compliance",
        "International Tax Guidance",
        "Cross-Border Reporting",
        "Regional Advisory Partners",
      ],
      color: "purple",
      gradient: "from-purple-50 to-purple-100",
    },

    {
      id: 4,
      image: partnershipImg,
      icon: <Handshake size={26} className="text-amber-600" />,
      title: "Trusted Partnership",
      desc:
        "Long-term advisory focused on accuracy, trust, and sustainable growth.",
      features: [
        "Strategic Financial Planning",
        "Growth Advisory",
        "Risk Management",
        "Performance Optimization",
      ],
      color: "amber",
      gradient: "from-amber-50 to-amber-100",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* ================= 3D SHAPES BACKGROUND ================= */}
      <Parallax3DShapes />

      {/* ================= UNIQUE CLOUD SKY BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-100 to-blue-100" />
        {/* Sun/Light Source */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-amber-200/80 to-yellow-200/60 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cloud Layer 1 - Fluffy */}
        {/* <div className="absolute inset-0">
          {[
            { x: "5%", y: "10%", width: "w-64", height: "h-32", delay: 0 },
            { x: "70%", y: "15%", width: "w-96", height: "h-40", delay: 2 },
            { x: "25%", y: "25%", width: "w-80", height: "h-36", delay: 1 },
            { x: "60%", y: "35%", width: "w-72", height: "h-28", delay: 3 },
            { x: "10%", y: "40%", width: "w-48", height: "h-24", delay: 4 },
          ].map((cloud, i) => (
            <motion.div
              key={`cloud-1-${i}`}
              className={`absolute ${cloud.width} ${cloud.height} rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-xl`}
              style={{
                left: cloud.x,
                top: cloud.y,
                filter: "blur(2px)",
              }}
              animate={{
                x: [-10, 10, -10],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                delay: cloud.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div> */}

        {/* Cloud Layer 2 - Wispy */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`cloud-2-${i}`}
              className="absolute w-32 h-16 bg-gradient-to-r from-white/60 to-white/40 rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: `${60 + (i % 3) * 10}%`,
                filter: "blur(8px)",
              }}
              animate={{
                x: [0, 20, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating Cloud Icons */}
       

        

       

        {/* Horizon Line */}
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

        {/* Ground Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full">
        {/* HEADING */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
           

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Elevate Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                Fundamental Operations
              </span>
            </h2>

            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Experience the freedom of cloud-based fundamental management with our certified QuickBooks expertise.
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative"
            >
              {/* Card Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/30 to-sky-100/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/30 border border-white/80 hover:border-sky-200/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent z-10" />
                  <div className="absolute top-4 right-4">
                    <Cloud size={24} className="text-white/80" />
                  </div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.gradient} shadow-lg mb-4 border border-white/50`}
                  >
                    {card.icon}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {card.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {card.desc}
                  </p>

                  <ul className="space-y-3">
                    {card.features.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center group/item"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight
                          size={16}
                          className={`mr-3 ${colorMap[card.color]} transition-transform group-hover/item:translate-x-1`}
                        />
                        <span className="text-sm text-slate-700 font-medium">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default QuickBooksAnnouncement;