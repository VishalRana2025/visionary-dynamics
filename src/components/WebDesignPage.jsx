import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Smartphone,
  Users,
  Star,
  Clock,
  Zap,
  Award,
  ChevronRight,
  ChevronDown,
  Check,
  Search,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight
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



// ---------- Floating Objects Component ----------
const FloatingObjects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
    {/* Floating orbs with animations */}
    <motion.div
      className="absolute top-20 left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"
      animate={{
        y: [0, 40, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-40 right-10 w-40 h-40 bg-purple-400/30 rounded-full blur-xl"
      animate={{
        y: [0, -50, 0],
        x: [0, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-60 right-20 w-24 h-24 bg-pink-400/30 rounded-full blur-xl"
      animate={{
        y: [0, 35, 0],
        x: [0, -25, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-40 left-1/3 w-20 h-20 bg-indigo-400/30 rounded-full blur-xl"
      animate={{
        y: [0, 30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 left-1/4 w-28 h-28 bg-cyan-400/30 rounded-full blur-xl"
      animate={{
        y: [0, -40, 0],
        x: [0, 25, 0],
      }}
      transition={{
        duration: 11,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    
    {/* Geometric shapes */}
    <motion.div
      className="absolute top-32 left-1/4 w-16 h-16 border-4 border-blue-400/30 rounded-lg"
      animate={{
        y: [0, 30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute bottom-32 right-1/3 w-20 h-20 border-4 border-purple-400/30 rounded-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-1/2 left-10 w-12 h-12 border-4 border-pink-400/30 transform rotate-45"
      animate={{
        y: [0, 25, 0],
        rotate: [45, 90, 45],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    
    {/* Floating dots */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
        }}
        animate={{
          y: [null, Math.random() * 100 - 50 + "%"],
          x: [null, Math.random() * 100 - 50 + "%"],
        }}
        transition={{
          duration: Math.random() * 15 + 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Animated particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
        }}
        animate={{
          y: [null, Math.random() * 200 - 100 + "%"],
          x: [null, Math.random() * 200 - 100 + "%"],
          scale: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Floating waves */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-20">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200 T1500,200"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.5,
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M0,300 Q200,200 400,300 T800,300 T1200,300 T1600,300"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.3,
          x: [0, -50, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />
    </svg>
  </div>
);

// ---------- Reusable Components ----------
const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
   <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
  {title}
</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-indigo-600 mt-4 mx-auto"></div>
  </div>
);

const ButtonPrimary = ({ children, className = "" }) => (
  <button className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2 ${className}`}>
    {children}
  </button>
);

const ButtonOutline = ({ children, className = "" }) => (
  <button className={`border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center gap-2 ${className}`}>
    {children}
  </button>
);

// ---------- Hero Section ----------
const Hero = () => (
  <section className="relative bg-gradient-to-br from-indigo-50 via-white to-white py-16 md:py-24 overflow-hidden">
    
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=2000&q=80"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          We Build <span className="text-indigo-600">Digital Experiences</span> That Drive Growth
        </h1>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-end">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-indigo-200 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>

          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/2/393274106/FE/ZK/LV/205056426/screenshot-2024-02-26-095403-500x500.png"
            alt="Web design team working"
            className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

    </div>
    <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
  </section>
);

// ---------- Services Section ----------
const services = [
  { 
    icon: Monitor, 
    title: "Custom Website Design", 
    desc: "Unique, brand-focused designs that captivate your audience and set you apart from competitors.",
    gradient: "from-pink-500 to-rose-500"
  },
  { 
    icon: Code, 
    title: "Frontend Development", 
    desc: "Modern, responsive interfaces built with React, Vue, or Tailwind for blazing fast performance.",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Smartphone, 
    title: "Mobile Optimization", 
    desc: "Flawless experiences across all devices – from smartphones to desktops.",
    gradient: "from-purple-500 to-indigo-500"
  },
  { 
    icon: Zap, 
    title: "E‑Commerce Solutions", 
    desc: "Scalable online stores with secure payments, inventory management, and smooth UX.",
    gradient: "from-amber-500 to-orange-500"
  },
];

const Services = () => (
  <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-100 to-blue-100 overflow-hidden">
    <FloatingObjects />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader 
        title="Our Services" 
        subtitle="We cover everything from concept to launch – and beyond." 
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-[100px] group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Icon with animated gradient background */}
            <div className="relative mb-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="text-white" size={28} />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {service.desc}
            </p>
            
            {/* Animated underline */}
            <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500`}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Our Process Section ----------
const steps = [
  { 
    number: "01", 
    title: "Discovery", 
    desc: "We learn about your business, goals, and target audience to create a solid foundation.",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    number: "02", 
    title: "Planning & Strategy", 
    desc: "Wireframes, sitemaps, and tech stack decisions – we map out every detail.",
    icon: "📊",
    color: "from-purple-500 to-pink-500"
  },
  { 
    number: "03", 
    title: "Design", 
    desc: "Beautiful, user‑centered design that reflects your brand identity.",
    icon: "🎨",
    color: "from-orange-500 to-red-500"
  },
  { 
    number: "04", 
    title: "Development", 
    desc: "Clean code with modern frameworks, ensuring speed, security, and scalability.",
    icon: "💻",
    color: "from-green-500 to-emerald-500"
  },
  { 
    number: "05", 
    title: "Testing & Launch", 
    desc: "Rigorous testing across devices and browsers, then we launch your site.",
    icon: "🚀",
    color: "from-indigo-500 to-blue-500"
  },
  { 
    number: "06", 
    title: "Support & Growth", 
    desc: "Ongoing maintenance, updates, and optimization to keep you ahead.",
    icon: "📈",
    color: "from-yellow-500 to-amber-500"
  },
];

const OurProcess = () => (
  <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-100 to-blue-100 overflow-hidden">
    <FloatingObjects />
    
    {/* Decorative background elements */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <SectionHeader 
        title="Our Process" 
        subtitle="A transparent, step‑by‑step approach that ensures your project succeeds." 
      />
      
      {/* Timeline connector (hidden on mobile) */}
      <div className="hidden lg:block relative h-0.5 bg-gray-200 mx-12 mb-12">
        <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" style={{ width: 'calc(100% / 6 * 2)' }}></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Number badge */}
            <div className="absolute top-4 right-4">
              <span className="text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                {step.number}
              </span>
            </div>
            
            {/* Icon with gradient circle */}
            <div className="relative mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <span className="text-3xl filter drop-shadow-lg">{step.icon}</span>
              </div>
              
              {/* Pulse effect */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-30 blur-md transition-opacity duration-500`}></div>
            </div>
            
            {/* Title with gradient on hover */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
              {step.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {step.desc}
            </p>
            
            {/* Progress indicator */}
            <div className="relative pt-2">
             <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
             className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
             ></div>
            </div>
              
              {/* Step number indicator */}
              <div className="absolute -bottom-2 right-0 text-xs font-semibold text-gray-400">
                Step {step.number} of 06
              </div>
            </div>
            
            {/* Connection line between steps (for desktop view) */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-indigo-400 transition-colors duration-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);


// ---------- Why Choose Us ----------
const reasons = [
  { 
    icon: Award, 
    title: "Award‑Winning Team", 
    desc: "Our designers and developers have been recognized for excellence.",
    stats: "15+ Industry Awards",
    gradient: "from-amber-500 to-orange-500",
    bgPattern: "🏆",
    bgImage: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Clock, 
    title: "On‑Time Delivery", 
    desc: "We respect your timeline and always deliver as promised.",
    stats: "98% On-Time Rate",
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "⏰",
    bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Users, 
    title: "Client‑Centric Approach", 
    desc: "You're a partner, not just a ticket. We communicate every step.",
    stats: "200+ Happy Clients",
    gradient: "from-purple-500 to-pink-500",
    bgPattern: "🤝",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Zap, 
    title: "Cutting‑Edge Tech", 
    desc: "We use the latest tools to build fast, secure, and future‑proof websites.",
    stats: "10+ Modern Technologies",
    gradient: "from-green-500 to-emerald-500",
    bgPattern: "⚡",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const WhyChooseUs = () => (
<section className="relative py-16 md:py-24 overflow-hidden text-white">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 

  {/* Background Image */}
  <div className="absolute inset-0 pointer-events-none">
    <img
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2070&q=80"
      alt="Background"
      className="w-full h-full object-cover scale-110"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>

  {/* Decorative blob elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

    <SectionHeader
      title="Why Choose Us"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

      {reasons.map((reason, idx) => (

        <div
          key={idx}
          className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/10"
        >

          {/* Hover Background Image */}
<div className="absolute inset-0 pointer-events-none">
            <img
              src={reason.bgImage}
              alt=""
              className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-110 group-hover:scale-100"
            />

            <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-700 mix-blend-overlay`}></div>
          </div>

          {/* Pattern */}
          <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform rotate-12">
            {reason.bgPattern}
          </div>

          {/* Gradient Border */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient}`}></div>

          <div className="relative p-8 z-10">

            {/* Icon */}
            <div className="relative mb-6">

              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>

              <div className={`relative w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <reason.icon className="text-white w-8 h-8" />
              </div>

            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-400 transition-all duration-500">
              {reason.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-500">
              {reason.desc}
            </p>

            {/* Stats */}
            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${reason.gradient} bg-opacity-20 rounded-full backdrop-blur-sm`}>
              <span className="text-sm font-semibold text-white">
                {reason.stats}
              </span>
            </div>

            {/* Progress Ring */}
            <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <svg className="w-16 h-16" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 * (1 - (idx + 1) * 0.15)}
                  className="text-white transform -rotate-90 origin-center"
                />
              </svg>
            </div>

          </div>

        </div>

      ))}

    </div>
  </div>

  {/* Blob Animation */}
  <style>{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>

</section>
);

// ---------- Technologies We Use ----------
const techs = [
  { name: "React", icon: "⚛️", category: "Frontend", proficiency: 95, color: "from-cyan-500 to-blue-500" },
  { name: "Vue", icon: "🟢", category: "Frontend", proficiency: 90, color: "from-green-500 to-emerald-500" },
  { name: "Tailwind CSS", icon: "🌊", category: "Styling", proficiency: 98, color: "from-sky-500 to-indigo-500" },
  { name: "Node.js", icon: "📦", category: "Backend", proficiency: 92, color: "from-green-600 to-lime-500" },
  { name: "WordPress", icon: "🔵", category: "CMS", proficiency: 88, color: "from-blue-600 to-blue-400" },
  { name: "Figma", icon: "🎨", category: "Design", proficiency: 94, color: "from-purple-500 to-pink-500" },
  { name: "Next.js", icon: "▲", category: "Framework", proficiency: 93, color: "from-gray-800 to-gray-600" },
  { name: "MongoDB", icon: "🍃", category: "Database", proficiency: 86, color: "from-green-700 to-green-500" },
];

const Technologies = () => {
  // Group technologies by category
  const categories = [...new Set(techs.map(tech => tech.category))];
  
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-100 via-blue to-blue-100 overflow-hidden">
      <FloatingObjects />
      
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SectionHeader 
          title="Technologies We Use" 
          subtitle="We leverage cutting-edge tools and frameworks to build robust, scalable solutions." 
        />
    
        {/* Main tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              
              <div className="p-5">
                {/* Icon with animated background */}
                <div className="relative mb-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative w-14 h-14 mx-auto bg-gray-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                    {tech.icon}
                  </div>
                </div>
                
                {/* Tech name */}
                <h3 className="text-base font-bold text-gray-900 mb-1 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500">
                  {tech.name}
                </h3>
                
                {/* Category badge */}
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium mb-3">
                  {tech.category}
                </span>
                
                {/* Proficiency bar */}
                <div className="relative pt-1">
                  <div className="flex mb-1 items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">Proficiency</span>
                    <span className="text-xs font-bold text-indigo-600">{tech.proficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                 <div
                 className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out w-0 group-hover:w-full`}
                 ></div>
               </div>
                </div>
              </div>
              
              {/* Hover effect corner */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-transparent to-indigo-100 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Add animations to global CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, gray 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};


// ---------- FAQ Section ----------
const faqs = [
  { 
    q: "How long does it take to build a website?", 
    a: "Typical timelines range from 4–8 weeks for a custom website, depending on complexity. We'll give you a detailed estimate after our discovery call. Simple brochure sites can be ready in 3-4 weeks, while complex e-commerce platforms may take 8-12 weeks.",
    category: "timeline",
    popular: true
  },
  { 
    q: "Do you offer ongoing maintenance?", 
    a: "Absolutely! We have flexible support packages to keep your site updated, secure, and performing at its best. Options range from basic security updates to comprehensive maintenance including content updates, performance optimization, and monthly backups.",
    category: "support",
    popular: true
  },
  { 
    q: "Will my website be mobile-friendly?", 
    a: "Yes, every site we build is fully responsive and tested on all major devices and browsers. We follow a 'mobile-first' approach, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops.",
    category: "technical",
    popular: false
  },
  { 
    q: "What information do you need to start?", 
    a: "We'll guide you through the process. Initially, we need your brand guidelines (logos, colors, fonts), content ideas, goals for the website, and any examples of sites you like. Don't worry if you don't have everything—we can help develop it together.",
    category: "process",
    popular: true
  },
  { 
    q: "How much does a website cost?", 
    a: "Every project is unique, so costs vary based on complexity, features, and timeline. Basic websites start around $3,000-$5,000, while more complex projects with custom functionality range from $10,000-$50,000+. We provide transparent pricing with detailed quotes.",
    category: "pricing",
    popular: false
  },
  { 
    q: "Do you provide SEO services?", 
    a: "Yes, we build websites with SEO best practices from the ground up—clean code, fast loading, proper structure. We also offer ongoing SEO packages to help improve your search rankings and drive organic traffic.",
    category: "marketing",
    popular: false
  },
  { 
    q: "What platforms do you build on?", 
    a: "We're platform-agnostic and choose the best technology for your needs. Options include custom React/Vue sites, WordPress for content-heavy sites, Shopify for e-commerce, or Webflow for designer-friendly builds.",
    category: "technical",
    popular: true
  },
  { 
    q: "Will I be able to update the site myself?", 
    a: "Absolutely! We build with user-friendly content management systems and provide training. Whether it's WordPress, Sanity, or a custom CMS, you'll have control to update text, images, and blog posts without touching code.",
    category: "support",
    popular: false
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'timeline', name: 'Timeline', count: faqs.filter(f => f.category === 'timeline').length },
    { id: 'pricing', name: 'Pricing', count: faqs.filter(f => f.category === 'pricing').length },
    { id: 'technical', name: 'Technical', count: faqs.filter(f => f.category === 'technical').length },
    { id: 'support', name: 'Support', count: faqs.filter(f => f.category === 'support').length },
    { id: 'process', name: 'Process', count: faqs.filter(f => f.category === 'process').length },
    { id: 'marketing', name: 'Marketing', count: faqs.filter(f => f.category === 'marketing').length },
  ];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-100 to-blue-100 overflow-hidden">
      <FloatingObjects />
      
      {/* Decorative elements */}
<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Got questions? We've got answers. Find everything you need to know about our process." 
        />
        
        {/* Popular FAQs highlight (shown when no search) */}
        {!searchTerm && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Most Asked Questions</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {popularFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-100 hover:shadow-md transition cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === `popular-${idx}` ? null : `popular-${idx}`)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                    <ChevronDown 
                      size={20} 
                      className={`text-indigo-600 transition-transform duration-300 ${
                        openIndex === `popular-${idx}` ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openIndex === `popular-${idx}` && (
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Main FAQ accordion */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border-b border-gray-100 last:border-0 transition-all duration-300 ${
                  openIndex === idx ? 'bg-indigo-50/30' : 'hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openIndex === idx ? 'bg-indigo-600' : 'bg-indigo-100'
                    }`}>
                      <HelpCircle size={16} className={openIndex === idx ? 'text-white' : 'text-indigo-600'} />
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      openIndex === idx ? 'text-indigo-600' : 'text-gray-900'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`flex-shrink-0 transition-all duration-300 ${
                      openIndex === idx ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                    }`}
                  />
                </button>
                
                {/* Answer with animation */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-16">
                    <div className="prose prose-indigo">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                    
                    {/* Category tag */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-gray-400">Category:</span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700 transition"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      
      </div>
    </section>
  );
};

// ---------- CTA Section ----------
const CTA = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
    {/* Background Image */}
    <div className="absolute inset-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
        alt="Team collaborating on a project"
        className="w-full h-full object-cover"
      />
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    {/* Content */}
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      
      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      >
        Let's Build Something{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          Amazing Together
        </span>
      </motion.h2>


      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
       <button
  onClick={() =>
    window.open(
      "https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn",
      "_blank"
    )
  }
  className="group bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/30 flex items-center gap-3 text-lg"
>
  Get Free Consultation
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>

<a
  href="https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-indigo-500/30 flex items-center gap-3 text-lg">
    Get Free Consultation
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</a>
      </motion.div>

      
    </div>

   
  </section>
);

// ---------- Main Component ----------
const WebDesignDevelopmentPage = () => {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <Services />
      <OurProcess />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
        <CTA />
      
    </div>
  );
};

export default WebDesignDevelopmentPage;