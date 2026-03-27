import React from "react";
import { motion } from "framer-motion";

// ==================== WAVE TRANSITION COMPONENT ====================
export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";

  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[80px] sm:h-[120px] md:h-[150px] lg:h-[180px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

// ==================== MAIN ABOUT US PAGE ====================
const AboutUs = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* ==================== SECTION 1: HERO WITH BACKGROUND & OVERLAY ==================== */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden flex items-center justify-center bg-blue-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?t=st=1769699940~exp=1769703540~hmac=9ff0bb0bf2f79e0f2f8e241e3afa199442796fa9e9c3298961423ca5d95127e5')",
          }}
        />

        {/* Cinematic overlay with gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.75)_50%,rgba(2,6,23,0.95)_80%)]" />

        {/* Top + Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-transparent to-[#020617]/90" />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white drop-shadow-2xl"
            style={{ transform: "translateZ(10px)" }}
          >
            About Us
          </h1>
          <p
            className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100/80"
            style={{ transform: "translateZ(25px)" }}
          >
            Empowering businesses with innovative solutions and unwavering commitment
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full" />
          </div>
        </motion.div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <WaveTransition direction="bottom" />
        </div>
      </section>

      {/* ==================== SECTION 2: ABOUT VISIONARY DYNAMICS ==================== */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50/80 via-sky-50/60 to-blue-100/40 overflow-hidden relative">
        {/* Decorative floating elements - optimized for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-l from-sky-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-300/5 rounded-full blur-3xl" />

          {/* Floating particles - subtle */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Image with glass effect */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative group">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-blue-200/40 bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                    alt="Business team collaboration"
                    className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Decorative glow */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-28 h-28 sm:w-40 sm:h-40 bg-blue-300/20 rounded-full blur-2xl" />
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-sky-300/15 rounded-full blur-xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 w-full space-y-6 sm:space-y-8"
            >
              <div>
                <p className="text-sm sm:text-base uppercase tracking-wider text-blue-700 font-semibold mb-2">
                  About Visionary Dynamics
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Your Partner in{" "}
                  <span className="text-blue-700 relative inline-block">
                    Progress
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                  </span>
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 text-slate-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  A group of seasoned professionals with more than six years of experience lead{" "}
                  <span className="font-semibold text-blue-700">Visionary Dynamics Consulting Inc.</span>{" "}
                  We are committed to providing our clients with specialized, superior solutions that enable them to reach their objectives.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  We serve both individuals and companies with our expertise in IT asset management and customized financial services.{" "}
                  <span className="font-semibold text-blue-700">
                    Financial planning, bookkeeping, tax planning, management accounting, predictive analytics, financial analysis, software asset management, CMDB,
                  </span>{" "}
                  and more are just a few of the many services we provide.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                  At Visionary Dynamics, we use strategic insights and creative solutions to enable clients to maximize resources and make wise decisions. Above all, we ensure the{" "}
                  <span className="font-semibold text-blue-700">security of all client information</span>{" "}
                  by upholding strict confidentiality and complying with international data protection regulations.
                </p>
              </div>

              {/* Trust badge */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-slate-700">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm text-slate-700">Fast & Reliable</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: CEO MESSAGE ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-gray-900 overflow-hidden">
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
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/85 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5 w-full flex justify-center"
            >
              <div className="relative group w-full max-w-sm sm:max-w-md">
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Aakash Dhandhania - CEO & Founder"
                      className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 sm:mt-5 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-1">
                    Leadership
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    Aakash Dhandhania
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium bg-gradient-to-r from-blue-900/40 to-indigo-900/40 py-1.5 px-4 rounded-full inline-block border border-blue-700/30">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Message Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-3/5 w-full"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-blue-300/50 transition-all duration-300 hover:shadow-3xl hover:border-blue-400/70">
                <div className="mb-5 sm:mb-6 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2">
                    CEO Message
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto lg:mx-0" />
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm font-medium">
                    A vision for tomorrow, built on today’s commitment
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-blue-700">
                      Welcome to Visionary Dynamics.
                    </span>{" "}
                    It is my privilege to connect with you and share the vision that
                    drives our organization forward. We are committed to delivering
                    exceptional solutions that empower businesses, individuals, and
                    communities to thrive in a rapidly evolving world.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    Our journey is built on a foundation of{" "}
                    <span className="font-semibold text-blue-700">
                      trust, innovation, and unwavering dedication to excellence
                    </span>
                    . We believe in creating value through meaningful partnerships and
                    staying at the forefront of industry trends.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    As we continue to grow, our focus remains steadfast:{" "}
                    <span className="font-semibold text-blue-700">
                      to provide services and solutions that make a real difference
                    </span>
                    . Whether you're here to explore opportunities or seek guidance,
                    we are here to support you every step of the way.
                  </p>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold text-center lg:text-left italic bg-gradient-to-r from-blue-50 to-indigo-50 py-3 px-4 sm:px-5 rounded-xl border-l-4 border-blue-500">
                      "Thank you for being a part of our story. Together, we can build
                      a brighter, more successful future."
                    </p>
                  </div>

                  <div className="flex justify-center lg:justify-end mt-4 sm:mt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-end">
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          With gratitude,
                        </p>
                        <p className="text-base sm:text-lg font-bold text-blue-700 mt-0.5">
                          Aakash Dhandhania
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        AD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <WaveTransition direction="bottom" />
        </div>
      </section>

      {/* ==================== ADDITIONAL VALUES SECTION (Mobile Optimized) ==================== */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-blue-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto" />
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Innovation",
                desc: "Constantly pushing boundaries to deliver cutting-edge solutions.",
                icon: "💡",
              },
              {
                title: "Integrity",
                desc: "Unwavering commitment to honesty, transparency, and ethics.",
                icon: "🛡️",
              },
              {
                title: "Excellence",
                desc: "Striving for the highest quality in every service we provide.",
                icon: "⭐",
              },
              {
                title: "Collaboration",
                desc: "Building strong partnerships to achieve shared success.",
                icon: "🤝",
              },
              {
                title: "Client-Centric",
                desc: "Your goals become our mission. We succeed when you do.",
                icon: "🎯",
              },
              {
                title: "Security",
                desc: "Protecting your data with the highest industry standards.",
                icon: "🔒",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline keyframes for smooth animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .animate-pulse {
            animation-duration: 4s;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;