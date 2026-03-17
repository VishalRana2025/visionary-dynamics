import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Headphones,
  Calculator,
  CheckCircle,
  ChevronRight,
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

/* ================= CINEMATIC CROSSFADE PRESET ================= */
const crossfade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

const ServicesShowcase = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const processes = [
    {
      step: "01",
      title: "Accounting & Compliance Process",
      category: "Finance Process",
      description:
        "A compliance-driven financial process that captures transactions, validates records, prepares reports, and ensures regulatory adherence with audit-ready documentation.",
      icon: Calculator,
      color: "#10b981",
      features: [
        "Transaction capture & reconciliation",
        "AR, AP and Bank Reconcilitions",
        "Financial statement preparation",
        "Adhoc Repoting & Analysis",
      ],
    },
    {
      step: "02",
      title: "Recruitment Process Outsourcing",
      category: "RPO Process",
      description:
        "A structured hiring process that defines role requirements, sources qualified candidates, evaluates talent, and ensures seamless onboarding with measurable outcomes.",
      icon: Users,
      color: "#3b82f6",
      features: [
        "Requirement mapping & role definition",
        "Candidate sourcing & screening workflow",
        "Interview & selection framework",
        "Onboarding & performance tracking",
      ],
    },
    {
      step: "03",
      title: "Virtual Assistance Process",
      category: "VA Process",
      description:
        "A standardized operational process that manages daily tasks, customer communication, and data handling through clearly defined workflows and service-level benchmarks.",
      icon: Headphones,
      color: "#8b5cf6",
      features: [
        "Task intake & prioritization flow",
        "Customer interaction protocols",
        "CRM & data processing pipeline",
        "Quality assurance & reporting",
      ],
    },
    
  ];

  const current = processes[active];

  const handleProcessClick = (index) => {
    if (index === active || isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setActive(index);
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="w-full py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
      {/* ================= IMAGE BACKGROUND ================= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/business-analytics.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#0a192f]/45" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#020b1c]/60 via-[#071b33]/50 to-[#020b1c]/70" />

      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-20"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Smarter Way to Scale Your Business
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            From hiring the right talent to managing operations and finances —
            our proven processes are designed to guide your business through every stage of growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-20 items-start">
          {/* LEFT — Timeline */}
          <div className="space-y-10 lg:col-span-3">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                whileHover={{ opacity: active !== index ? 0.85 : 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleProcessClick(index)}
                className={`cursor-pointer p-8 rounded-3xl border transition-all backdrop-blur-xl ${
                  active === index
                    ? "bg-white/20 shadow-2xl border-white/30"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:shadow-xl"
                }`}
              >
                <div className="flex items-start gap-8">
                  <div
                    className="text-3xl font-bold"
                    style={{ color: process.color }}
                  >
                    {process.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <process.icon
                        className="w-6 h-6"
                        style={{ color: process.color }}
                      />
                      <span
                        className="text-sm font-semibold uppercase tracking-wide"
                        style={{ color: process.color }}
                      >
                        {process.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {process.title}
                    </h3>

                    <p className="text-blue-100 text-base leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {active === index && (
                    <ChevronRight className="w-6 h-6 mt-2 text-white" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              {...crossfade}
              className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 sticky top-24 lg:col-span-2"
            >
              <div
                className="inline-flex p-4 rounded-2xl mb-6"
                style={{ backgroundColor: `${current.color}20` }}
              >
                <current.icon
                  className="w-10 h-10"
                  style={{ color: current.color }}
                />
              </div>

              <span
                className="inline-block mb-2 text-sm font-semibold uppercase tracking-wide"
                style={{ color: current.color }}
              >
                {current.category}
              </span>

              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                {current.title}
              </h3>

              <p className="text-base text-slate-700 mb-8">
                {current.description}
              </p>

              <div className="space-y-4 mb-10">
                {current.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: current.color }}
                    />
                    <span className="font-medium text-slate-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full py-3 rounded-xl font-semibold text-white transition hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: current.color }}
              >
                Start This Process
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-2xl"
                  style={{ backgroundColor: `${current.color}20` }}
                >
                  <current.icon
                    className="w-8 h-8"
                    style={{ color: current.color }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {current.title}
                  </h3>
                  <p
                    className="text-sm font-semibold uppercase"
                    style={{ color: current.color }}
                  >
                    {current.category}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6">
                Tell us about your goals and our experts will tailor this process
                to align with your business workflows and objectives.
              </p>

              <div className="space-y-3 mb-8">
                {current.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: current.color }}
                    />
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-xl text-white font-semibold transition hover:shadow-xl hover:scale-[1.02]"
                style={{ backgroundColor: current.color }}
              >
                Request Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full z-30">
        <WaveTransition />
      </div>
    </section>
  );
};

export default ServicesShowcase;
