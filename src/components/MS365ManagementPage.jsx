import React, { useMemo, useRef, useCallback, memo } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Headphones,
  MailIcon,
  PhoneCall,
  Star,
  Users,
  Settings,
  Shield,
  Lock,
  Database,
  FileText,
  HardDrive,
  MessageSquare,
  BarChart,
  Smartphone,
  Eye,
  DollarSign,
  AlertCircle,
  Target,
  RefreshCw,
  Layers,
  Activity,
  Download,
  BookOpen,
  Mail
} from "lucide-react";
 
/* Animations */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
 
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
 
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};
 
 
// --- static content moved outside the component to avoid re-creation on every render ---
const SERVICES = [
  { icon: Users, name: "User Provisioning and Management", desc: "Oversee user accounts, permissions, and access controls to ensure secure onboarding and offboarding.", color: "from-blue-500 to-cyan-500" },
  { icon: Settings, name: "License Management", desc: "Align subscriptions with organizational needs, manage allocations, and ensure compliance with licensing agreements.", color: "from-purple-500 to-pink-500" },
  { icon: Shield, name: "Security Management", desc: "Implement features like multi-factor authentication, data loss prevention, and advanced threat protection.", color: "from-green-500 to-emerald-500" },
  { icon: Lock, name: "Identity and Access Management (IAM)", desc: "Administer user identities and authentication across Microsoft 365 services.", color: "from-orange-500 to-red-500" },
  { icon: Database, name: "Data Governance and Compliance", desc: "Establish policies for data retention, eDiscovery, and regulatory adherence.", color: "from-indigo-500 to-purple-500" },
  { icon: Mail, name: "Exchange Online Management", desc: "Configure email services, manage mailboxes, and set anti-spam and anti-malware protocols.", color: "from-blue-500 to-indigo-500" },
  { icon: FileText, name: "SharePoint Online Management", desc: "Oversee site configurations, permissions, and document management.", color: "from-teal-500 to-cyan-500" },
  { icon: HardDrive, name: "OneDrive for Business Management", desc: "Manage storage, access controls, and sharing policies.", color: "from-yellow-500 to-orange-500" },
  { icon: MessageSquare, name: "Teams and Skype for Business Management", desc: "Administer collaboration tools, user settings, and compliance features.", color: "from-purple-500 to-indigo-500" },
  { icon: Smartphone, name: "Endpoint Management", desc: "Utilize solutions like Microsoft Endpoint Manager for device enrollment and security.", color: "from-pink-500 to-rose-500" },
  { icon: Layers, name: "Power Platform Governance", desc: "Regulate the use of services like Power BI, Power Apps, and Power Automate.", color: "from-cyan-500 to-blue-500" },
  { icon: Activity, name: "Service Monitoring and Reporting", desc: "Track service health, generate reports, and analyze usage data.", color: "from-emerald-500 to-green-500" },
  { icon: Download, name: "Migration and Deployment Services", desc: "Plan and execute transitions to Microsoft 365, including email and file migrations.", color: "from-red-500 to-pink-500" },
  { icon: BookOpen, name: "Training and Support Services", desc: "Provide resources and guidance to ensure effective utilization.", color: "from-blue-500 to-purple-500" },
];
 
const WHY_OUTSOURCE = [
  { text: "Access to expert insights and analysis", icon: Eye, color: "blue" },
  { text: "Reduces Cost & Saves Time", icon: DollarSign, color: "green" },
  { text: "Mitigate the risk of errors and discrepancies", icon: AlertCircle, color: "orange" },
  { text: "Allows you to focus on core business functions", icon: Target, color: "purple" },
  { text: "Fresh perspectives and innovative approaches", icon: RefreshCw, color: "indigo" },
  { text: "Leverage the latest software and technology", icon: Zap, color: "cyan" },
  { text: "Tailored services for your objectives", icon: Settings, color: "pink" },
];
 
const KEY_COMPONENTS = [
  {
    icon: Users,
    title: "User and License Administration",
    desc: "Efficiently manage user accounts, permissions, and licenses to ensure secure access and compliance.",
    stats: "99.9% Uptime",
    color: "blue",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  },
  {
    icon: Shield,
    title: "Security and Compliance Implementation",
    desc: "Deploy robust security measures and establish data governance policies to protect information.",
    stats: "100% Secure",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  },
  {
    icon: Activity,
    title: "Continuous Monitoring and Support",
    desc: "Regularly oversee system performance, provide user training, and adapt to evolving needs.",
    stats: "24/7 Support",
    color: "purple",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  }
];
 
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "Visionaries transformed our Microsoft 365 environment. Their expertise in security and compliance has been invaluable to our organization.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108777-286ad3e6d1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
  },
  {
    name: "Michael Chen",
    role: "IT Director at InnovateInc",
    content: "The team's proactive approach to managing our licenses and users has saved us countless hours. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager at GlobalTech",
    content: "Exceptional support and deep knowledge of the Microsoft ecosystem. They've helped us optimize our collaboration tools perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  }
];
 
const MS365ManagementPage = () => {
  // sliderRef used instead of document.getElementById for better React compatibility
  const sliderRef = useRef(null);
 
  const handlePrev = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -440, behavior: 'smooth' });
    }
  }, []);
 
  const handleNext = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  }, []);
 
  // memoize lists so we don't recreate the element arrays each render
  const serviceCards = useMemo(() => {
    return [...SERVICES, ...SERVICES].map((service, index) => {
      const Icon = service.icon;
      return (
        <div key={index} className="min-w-[420px]">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-10 shadow-lg hover:shadow-2xl transition group h-auto min-h-[320px] flex flex-col">
            {/* Icon */}
            <div
              className={`p-5 rounded-lg bg-gradient-to-r ${service.color} w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition flex-shrink-0`}
            >
              <Icon className="w-10 h-10 text-white" />
            </div>
 
            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition">
              {service.name}
            </h3>
 
            {/* Description */}
            <p className="text-slate-300 leading-relaxed text-base">
              {service.desc}
            </p>
          </div>
        </div>
      );
    });
  }, []);
 
  const keyComponentCards = useMemo(() => {
    return KEY_COMPONENTS.map((component, index) => {
      const Icon = component.icon;
      return (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-200 group-hover:border-transparent transition-all">
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
              <img
                src={component.image}
                alt={component.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x200?text=" +
                    component.title.replace(" ", "+");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div
              className={`w-16 h-16 bg-${component.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <Icon className={`w-8 h-8 text-${component.color}-600`} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {component.title}
            </h3>
            <p className="text-slate-600 mb-4">
              {component.desc}
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <span>{component.stats}</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition"
              />
            </div>
          </div>
        </motion.div>
      );
    });
  }, []);
 
  const whyCards = useMemo(() => {
    const colors = [
      {bg:'bg-blue-100',text:'text-blue-600',gradient:'from-blue-500 to-blue-600'},
      {bg:'bg-purple-100',text:'text-purple-600',gradient:'from-purple-500 to-purple-600'},
      {bg:'bg-green-100',text:'text-green-600',gradient:'from-green-500 to-green-600'},
      {bg:'bg-orange-100',text:'text-orange-600',gradient:'from-orange-500 to-orange-600'},
    ];
    return WHY_OUTSOURCE.map((item, index) => {
      const Icon = item.icon;
      const color = colors[index % colors.length];
      return (
        <motion.div
          key={index}
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          transition={{delay: index * 0.1}}
          whileHover={{y: -4}}
          className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className={`${color.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
            <Icon className={`${color.text} w-6 h-6`} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.text.split(' ').slice(0, 3).join(' ')}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.text}
          </p>
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition origin-left`}
          />
        </motion.div>
      );
    });
  }, []);
 
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
     
      {/* Main Content Section */}
      <div className="relative bg-white overflow-hidden">
       
        {/* Section Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80')",
}}
        />
 
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
 
        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative z-10 py-28 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
 
            {/* LEFT TEXT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 text-white"
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-blue-200 text-sm inline-flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Microsoft 365 Management
              </span>
 
              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold"
              >
                Efficiently navigating the
                <br />
                <span className="text-blue-400">
                  digital landscape
                </span>
              </motion.h1>
 
              <motion.p
                variants={fadeInUp}
                className="text-gray-200 text-lg"
              >
                Effective management of Microsoft 365 integrates communication,
                collaboration, and productivity tools including Outlook,
                Teams and SharePoint.
              </motion.p>
 
              {/* Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl flex gap-2 items-center shadow-lg"
                >
                  Get Started
                  <ArrowRight size={18} />
                </motion.button>
 
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-700 rounded-xl flex gap-2 items-center shadow"
                >
                  <Headphones size={18} />
                  Free Consultancy
                </motion.button>
              </div>
            </motion.div>
 
            {/* RIGHT CARD - Enhanced Animations */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 relative group"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur"
                animate={{
                  background: [
                    "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                    "linear-gradient(to right, #ec4899, #3b82f6, #8b5cf6)",
                    "linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
             
              {/* Card content */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8">
                {/* Floating icons animation */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
               
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
 
                {/* Grid of icons with staggered animation */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Mail, name: "Exchange", color: "blue", delay: 0 },
                    { icon: MessageSquare, name: "Teams", color: "indigo", delay: 0.1 },
                    { icon: FileText, name: "SharePoint", color: "purple", delay: 0.2 },
                    { icon: HardDrive, name: "OneDrive", color: "cyan", delay: 0.3 },
                    { icon: Shield, name: "Security", color: "green", delay: 0.4 },
                    { icon: BarChart, name: "Power BI", color: "amber", delay: 0.5 },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: item.delay,
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className={`p-4 bg-${item.color}-50 rounded-xl cursor-default group/icon relative overflow-hidden`}
                      >
                        {/* Icon hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                       
                        <Icon className={`text-${item.color}-600 mb-2 relative z-10 transition-transform group-hover/icon:rotate-12`} />
                        <span className="text-sm font-medium relative z-10">{item.name}</span>
                       
                        {/* Pulse effect on hover */}
                        <motion.div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 bg-${item.color}-200 rounded-full opacity-0 group-hover/icon:opacity-50`}
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
 
                {/* Bottom decorative line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-b-3xl"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </div>
 
              {/* Floating particles inside card */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
 
        {/* Key Components Section */}
        <section className="py-20 px-6 bg-[#e9f1fb] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left floating square */}
            <div className="absolute left-20 top-1/2 w-24 h-24 bg-blue-200/40 rotate-12 rounded-lg shadow-md"></div>
            {/* Right floating square */}
            <div className="absolute right-16 top-28 w-20 h-20 bg-blue-300/40 rotate-6 rounded-lg"></div>
            {/* Small floating circle */}
            <div className="absolute left-10 top-28 w-4 h-4 bg-cyan-400 rounded-full blur-sm"></div>
            {/* Chart icon style decoration */}
            <div className="absolute right-20 top-1/2 text-teal-600 opacity-70 text-4xl">
              📊
            </div>
            {/* Soft gradient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl"></div>
          </div>
 
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-blue-600 font-semibold mb-2 block">
                Why Choose Us
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-slate-900">
                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Components</span>
              </motion.h2>
            </motion.div>
 
            <div className="grid md:grid-cols-3 gap-8">
              {keyComponentCards}
            </div>
          </div>
        </section>
 
        {/* Services Section */}
        <section
          className="relative py-24 px-6 overflow-hidden"
         style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/70"></div>
 
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Heading */}
            <div className="text-center mb-16">
              <span className="text-blue-400 font-semibold block mb-2">
                What We Offer
              </span>
              <h2 className="text-4xl font-bold text-white">
                Microsoft 365{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Management Services
                </span>
              </h2>
            </div>
 
            {/* Slider with Navigation */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 hover:bg-white/20 transition group"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:scale-110 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
 
              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 hover:bg-white/20 transition group"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:scale-110 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
 
              {/* Slider */}
              <div
                className="overflow-hidden relative"
                onMouseEnter={() => {
                  if (sliderRef.current) sliderRef.current.style.animationPlayState = 'paused';
                }}
                onMouseLeave={() => {
                  if (sliderRef.current) sliderRef.current.style.animationPlayState = 'running';
                }}
              >
                <motion.div
                  ref={sliderRef}
                  className="flex gap-8"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {serviceCards}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
 
        {/* Why Outsource Section */}
        <section className="py-20 px-6 relative overflow-hidden bg-[#e9f1fb]">
          {/* ========== BACKGROUND ELEMENTS ========== */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left floating square */}
            <div className="absolute left-16 top-1/2 w-24 h-24 bg-blue-200/40 rotate-12 rounded-lg shadow-md"></div>
            {/* Right floating square */}
            <div className="absolute right-16 top-32 w-20 h-20 bg-blue-300/40 rounded-lg rotate-6"></div>
            {/* Small floating circle */}
            <div className="absolute left-10 top-32 w-4 h-4 bg-cyan-400 rounded-full blur-sm"></div>
            {/* Chart icon (right side) */}
            <div className="absolute right-20 top-1/2 text-teal-600 opacity-70 text-4xl">
              📊
            </div>
            {/* Soft gradient background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl"></div>
          </div>
          {/* ========== BACKGROUND ELEMENTS END ========== */}
 
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Why Outsource to Visionaries
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Focus on Growth
                <span className="text-blue-600"> We'll Handle the Rest</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let our experts manage your Microsoft 365 environment while you focus on what matters most — your business.
              </p>
            </motion.div>
 
            {/* Main Grid */}
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Feature Cards */}
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {whyCards}
                </div>
              </div>
 
              {/* Right Column */}
              <div className="lg:col-span-5 space-y-6">
                {/* Image */}
                <motion.div
                  initial={{opacity:0, x:20}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once: true}}
                  className="relative rounded-2xl overflow-hidden shadow-sm group"
                >
                  <img
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  loading="lazy"
  alt="Collaborative workspace"
  className="w-full h-48 object-cover group-hover:scale-105 transition"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">Collaborative Workspace</p>
                      <p className="text-xs opacity-75">Seamless team integration</p>
                    </div>
                  </div>
                </motion.div>
 
                {/* Stats Card */}
                <motion.div
                  initial={{opacity:0, x:20}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once: true}}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
  loading="lazy"
  alt="Team collaboration"
  className="absolute inset-0 w-full h-full object-cover"
/>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90"/>
                  <div className="relative p-8 text-white">
                    <h3 className="text-xl font-semibold mb-6">
                      Trusted by 500+ Companies
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-sm">Retention</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm">Support</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-sm">Years</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded-xl">
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-sm">Experts</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
 
       
 
        {/* NEW: Contact/CTA Section */}
<section className="py-20 px-6 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  alt="Microsoft 365 dashboard on laptop"
  className="w-full h-full object-cover"
/>
    {/* Dark overlay matching reference image style */}
    <div className="absolute inset-0 bg-black/75" />
  </div>
 
  <div className="max-w-4xl mx-auto relative z-10 text-center">
    <motion.div
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className="space-y-8"
    >
      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
        Ready to Get Started?
      </span>
 
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Let's Transform Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
          Microsoft 365 Experience
        </span>
      </h2>
 
      <p className="text-xl text-white/90 max-w-2xl mx-auto">
        Join hundreds of companies that trust us with their Microsoft 365 management. Get in touch today for a free consultation.
      </p>
 
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <motion.button
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition flex items-center justify-center gap-2 group"
        >
          <PhoneCall size={20} className="group-hover:rotate-12 transition" />
          Schedule a Call
        </motion.button>
 
        <motion.button
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          className="px-8 py-4 bg-transparent border-2 border-white/70 text-white rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2 group"
        >
          <MailIcon size={20} />
          Contact Us
          <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
      </div>
    </div>
  );
};
 
export default memo(MS365ManagementPage);
 