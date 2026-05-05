import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  BarChart3,
  Target,
  Shield,
  Calculator,
  Megaphone,
  Cpu,
  ChevronRight,
} from "lucide-react";

// Import your background images
import accountingBg from "../assets/accounting-bg.jpg";
import marketingBg from "../assets/marketing-bg.jpg";
import itBg from "../assets/it-bg.jpg";
export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
  
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
  viewBox="0 0 1440 320"
  className="w-full h-[150px] md:h-[220px] pointer-events-none"
  preserveAspectRatio="none"
>
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // ⬅️ NEW: hover pause
  const ref = useRef(null);
  useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const services = [
    {
      title: "Accounting Services",
      route: "/accounting",
      showButton: true,
      description:
        "Accurate financial reporting and strategic insights to manage cash flow and reduce costs.",
      icon: BarChart3,
      iconLarge: Calculator,
      features: [
        "Bookkeeping & Accounting",
        "AR, AP and Bank Reconcilitions",
        "Payroll",
        "Auditing",
        "Financial Reporting & Analysis",
      ],
      color: "from-blue-600 to-cyan-500",
      backgroundImage: accountingBg,
    },
    {
      title: "Marketing Services",
      route: "",
       showButton: false,
      description:
        "Data-driven marketing strategies to grow visibility, engagement, and ROI.",
      icon: Target,
      iconLarge: Megaphone,
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Email Marketing",
        "Content Strategy",
        "Web Design & Development",
      ],
      color: "from-purple-600 to-pink-500",
      backgroundImage: marketingBg,
    },
    {
      title: "IT Asset Management",
      route: "",
       showButton: false,
      description:
        "End-to-end IT asset lifecycle management for compliance and cost optimization.",
      icon: Shield,
      iconLarge: Cpu,
      features: [
        "Microsoft 365 Management",
        "Managed Network Services",
        "Microsoft Azure",
        "Microsoft Intune",
        "Mobile Device Management",
      ],
      color: "from-emerald-600 to-green-500",
      backgroundImage: itBg,
    },
  ];

  // Preload images
  useEffect(() => {
    const imagePromises = services.map((service) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = service.backgroundImage;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsImageLoaded(true))
      .catch(console.error);
  }, []);

  // Auto-slide (PAUSES ON HOVER)
  useEffect(() => {
    if (isHovered) return; // ⛔ Pause when hovering

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [services.length, isHovered]);

  const active = services[activeService];

  return (
    <section className="bg-[#0B1F3A] w-full min-h-screen 
pt-10 sm:pt-16 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 relative">
      
      {/* ===== TOP FADE BLEND IN ===== */}
      <div className="absolute top-0 left-0 w-full h-40 pointer-events-none z-[5]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b1c] via-[#071b33]/60 to-transparent" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 transition-all duration-1000 z-[1]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${active.backgroundImage})`,
            opacity: isImageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.80) 50%, rgba(51, 65, 85, 0.85) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-widest">
              Our Services
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Smart, Scalable{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Business Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Tailored services designed to optimize operations, improve
            performance, and accelerate growth.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 relative group backdrop-blur-sm ${
                activeService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-2xl shadow-blue-500/30 scale-105`
                  : "bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:scale-105"
              }`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                }}
              />
              <service.icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Service Card (HOVER PAUSE HERE) */}
        <div
          ref={ref}
          className="w-full px-4 sm:px-8 lg:px-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 shadow-2xl w-full relative border border-white/10 backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Card Background */}
            <div
             className="absolute inset-0 bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage: `url(${active.backgroundImage})`,
                opacity: 0.15,
              }}
            />

            {/* Card Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.90) 100%)",
              }}
            />

            {/* ===== COLORED TOP ACCENT LINE ===== */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{
                background:
                  active.color === "from-blue-600 to-cyan-500"
                    ? "linear-gradient(90deg, #3B82F6, #06B6D4)"
                    : active.color === "from-purple-600 to-pink-500"
                    ? "linear-gradient(90deg, #8B5CF6, #EC4899)"
                    : "linear-gradient(90deg, #10B981, #059669)",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
                {/* Left */}
                <div>
                  <div
                    className="inline-flex p-5 rounded-2xl mb-8 backdrop-blur-sm border border-white/10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    }}
                  >
                    <active.iconLarge
                      className="w-14 h-14"
                      style={{
                        color:
                          active.color === "from-blue-600 to-cyan-500"
                            ? "#60A5FA"
                            : active.color ===
                              "from-purple-600 to-pink-500"
                            ? "#C084FC"
                            : "#34D399",
                      }}
                    />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {active.title}
                  </h2>

                  <p
                    className="text-lg text-slate-300 mb-8 leading-relaxed p-6 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {active.description}
                  </p>

                  {active.title === "Accounting Services" && (
  <button
    onClick={() => navigate(active.route)}
    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group cursor-pointer active:scale-95"
    style={{
      background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      color: "white",
    }}
  >
    <span>Learn More</span>
    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
)}
                </div>

                {/* Right */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    What's Included
                  </h3>

                  <div className="space-y-4">
                    {active.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group/feature"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="text-slate-300 font-medium group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== BOTTOM FADE ===== */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-[5]">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent" />
      </div>
    <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
  <WaveTransition />
</div>
    </section>
  );
};

export default ServicesOverview;