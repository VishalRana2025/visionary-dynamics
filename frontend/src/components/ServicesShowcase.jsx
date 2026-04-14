import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
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
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df"  fillOpacity="0.5"/>
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
const [showContactForm, setShowContactForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
});
const navigate = useNavigate();
  const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/form", { // 👈 your route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        type: formData.service || "Accounting", // 🔥 map service → type
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Form submitted successfully ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      setShowContactForm(false);
    } else {
      alert(data.error || "Something went wrong ❌");
    }
  } catch (error) {
    console.error(error);
    alert("Server error ❌");
  }
};
  const processes = [
    {
      step: "01",
      title: "Accounting & Compliance Process",
      route: "/contact", 
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
       route: "/contact",
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
      route: "/virtualassistance",
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
      if (e.key === "Escape") setShowContactForm(false) 
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
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/business-analytics.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 pointer-events-none bg-[#0a192f]/45" />

        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
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

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#020b1c]/60 via-[#071b33]/50 to-[#020b1c]/70" />

      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-50 w-full">
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
              className="relative z-50 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8 sticky top-24 lg:col-span-2"
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
  onClick={() => setShowContactForm(true)}
  className="w-full py-3 rounded-xl font-semibold text-white"
  style={{ backgroundColor: current.color }}
>
  Start This Process
</button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= POPUP ================= */}
{showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex justify-between items-center mb-5 sm:mb-6 md:mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Start Your Financial Transformation</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>  
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="financial-reporting">Financial Reporting</option>
                    <option value="payroll">Payroll Processing</option>
                    <option value="tax">Rpo</option>
                    <option value="all">V.A</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                    placeholder="Tell us about your business and financial needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <WaveTransition />
      </div>
    </section>
  );
};

export default ServicesShowcase;
