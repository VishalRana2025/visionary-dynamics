import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  BookOpen,
  FileText,
  TrendingUp,
  CreditCard,
  RefreshCw,
  PieChart,
  Users,
  Receipt,
  Target,
  Calendar,
  BarChart,
  Settings,
  Shield,
  Folder,
  Zap,
  ChevronRight,
  Check,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  X,
  Star,
  Clock,
  DollarSign,
  TrendingDown,
  ShieldCheck,
  BarChart3,
  HandCoins
} from "lucide-react";

import increaseImg from "../animations/increase.png";
import dashboardImg from "../animations/dashboard.png";
import updateImg from "../animations/update.png";
import helpdeskImg from "../animations/help-desk.png";
import howItWorks1Img from "../animations/how-it-works1.png";
import howItWorks2Img from "../animations/how-it-works2.png";
import howItWorks3Img from "../animations/how-it-works3.png";

const FinanceAccountingServices = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

const [activeStep, setActiveStep] = useState(0);

const steps = [
  {
    title: "Seamless Transition",
    text: "We ensure a smooth, hassle-free transition, minimizing disruption to your operations.",
    image: howItWorks1Img,
  },
  {
    title: "Transparent Communication",
    text: "We keep you informed at every step with clear, open communication.",
    image: howItWorks2Img,
  },
  {
    title: "Accurate Finances",
    text: "Our team provides precise financial tracking to ensure everything stays on budget and within scope.",
    image: howItWorks3Img,
  },
];

 const items = [
    {
      icon: <Users size={40} />,
      title: "Part-time/Full-time Resource",
      color: "bg-slate-700",
    },
    {
      icon: <Clock size={40} />,
      title: "Pay as you go for actual number of hours worked",
      color: "bg-orange-500",
    },
    {
      icon: <HandCoins size={40} />,
      title: "Fixed/Engagement based fee",
      color: "bg-cyan-500",
    },
  ];


  // Main Services Data
  const primaryServices = [
    {
      id: 1,
      title: "Bookkeeping",
      icon: <BookOpen className="h-8 w-8" />,
      features: [
        "Record daily transactions",
        "Maintain ledgers & journals",
        "Categorize expenses & income"
      ]
    },
    {
      id: 2,
      title: "Financial Reporting",
      icon: <BarChart className="h-8 w-8" />,
      features: [
        "Generate monthly reports",
        "Share performance insights",
        "Create custom financial summaries",
       
      ]
    },
    {
      id: 3,
      title: "Bank Reconciliation",
      icon: <RefreshCw className="h-8 w-8" />,
      features: [
        "Match transactions automatically",
        "Resolve discrepancies",
        "Maintain financial accuracy"
      ]
    },
    {
      id: 4,
      title: "Profit & Loss Statements",
      icon: <PieChart className="h-8 w-8" />,
      features: [
        "Compile revenue & costs",
        "Analyze net gains/losses",
        "Deliver easy-to-read reports"
      ]
    },
    {
      id: 5,
      title: "Payroll Processing",
      icon: <Users className="h-8 w-8" />,
      features: [
        "Calculate wages & taxes",
        "Process direct deposits",
        "Handle deductions & compliance"
      ]
    },
    {
      id: 6,
      title: "AR & AP Management",
      icon: <CreditCard className="h-8 w-8" />,
      features: [
        "Track receivables/payables",
        "Manage payment schedules",
        "Ensure timely collections"
      ]
    }, 
  ];

  // Additional Services
  const additionalServices = [
    {
      id: 13,
      title: "Data Entry",
      description: "Accurate financial input, every time.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      id: 14,
      title: "Credit & Debt Management",
      description: "Stay in control of your obligations.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 15,
      title: "Managing Financial Documents",
      description: "Secure, accessible, and organized files.",
      icon: <Folder className="h-6 w-6" />
    },
    {
      id: 16,
      title: "Expense Reporting",
      description: "Know where your money goes.",
      icon: <Receipt className="h-6 w-6" />
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What specific finance tasks can your specialists handle?",
      answer: "Our specialists can assist with bookkeeping, invoice management, financial reporting, payroll, budgeting, tax preparation support, forecasting, AR/AP management, and more—all tailored to your business needs."
    },
    {
      question: "Are your specialists proficient in accounting software like QuickBooks?",
      answer: "Yes, our specialists are proficient in QuickBooks, Xero, Sage, NetSuite, Zoho Books, and other leading platforms and can quickly adapt to your preferred system."
    },
    {
      question: "Can you handle day-to-day bookkeeping?",
      answer: "Absolutely. We manage daily transaction logging, categorization, account reconciliation, and ensure your records are always up to date and audit-ready."
    },
    {
      question: "Do you assist with invoice management?",
      answer: "Yes, we can generate, send, and track invoices, and follow up on outstanding payments to keep your cash flow steady and organized."
    },
    {
      question: "How do you handle payroll processing?",
      answer: "We handle timesheet tracking, payment calculations, payroll software entry, tax deductions, and ensure accurate and timely payroll runs."
    },
    {
      question: "Can you prepare financial statements?",
      answer: "Yes, we prepare accurate P&L statements, balance sheets, and custom financial reports to help you make informed business decisions."
    }
  ];
    
const softwareLogos = [
  {
    name: "QuickBooks",
    src: "https://www.customerparadigm.com/wp-content/uploads/2023/03/quickbooks-logo-1-1080x1079.png",
    alt: "QuickBooks Logo",
     description: "Popular cloud accounting for small and mid-sized businesses."
  },
  {
    name: "Microsoft Dynamics",
    src: "https://vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
    alt: "Microsoft Dynamics Logo",
     description: "Enterprise-grade ERP and financial management platform."
  },
  {
    name: "Wave",
    src: "https://wpforms.com/wp-content/uploads/cache/integrations/d911b34823c7674c292556dc56148c27.png",
    alt: "Wave Accounting Logo",
    description: "Free accounting software for freelancers and small businesses."
  },
 {
  name: "Xero",
  src: "https://vectorlogo.zone/logos/xero/xero-icon.svg",
  alt: "Xero Logo",
  description: "Cloud accounting software for small and growing businesses."
},
{
  name: "SAP",
  src: "https://vectorlogo.zone/logos/sap/sap-icon.svg",
  alt: "SAP Logo",
  description: "Global enterprise resource planning system."
},

  {
    name: "Zoho Books",
    src: "https://vectorlogo.zone/logos/zoho/zoho-icon.svg",
    alt: "Zoho Logo",
    description: "Smart online accounting for growing businesses."
  },
  {
    name: "Sage",
    src: "https://tse3.mm.bing.net/th/id/OIP.fRMkA3G-ze3RkP2SrJQ0MgHaD8?rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Sage Logo",
     description: "Trusted accounting and payroll solutions."
  }
];

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Hero Section */}
<section className="relative py-20 md:py-28 overflow-hidden">
  <div className="absolute inset-0">
    {/* Image background with overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
    </div>

    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        Smart accounting.{" "}
        <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Stronger business.
        </span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setShowContactForm(true)}
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
        >
          Start Your Consultation
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Main Services Grid */}

<section className="relative py-20 bg-blue-100 overflow-hidden">

  {/* ===== Highlighted Floating Background Objects ===== */}
<div className="absolute inset-0 z-0 pointer-events-none">

  {/* Dollar icon */}
  <motion.div
    animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-12 left-12"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/40 blur-3xl rounded-full scale-150"></div>
      <DollarSign className="relative w-16 h-16 text-blue-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Chart icon */}
  <motion.div
    animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/3 right-16"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500/40 blur-3xl rounded-full scale-150"></div>
      <BarChart3 className="relative w-14 h-14 text-teal-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Calculator */}
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-16 left-1/4"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full scale-150"></div>
      <Calculator className="relative w-16 h-16 text-blue-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Credit card */}
  <motion.div
    animate={{ y: [0, 25, 0], rotate: [0, -6, 0] }}
    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-12 right-20"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-cyan-500/40 blur-3xl rounded-full scale-150"></div>
      <CreditCard className="relative w-16 h-16 text-cyan-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Pie chart */}
  <motion.div
    animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-20 right-1/4"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500/40 blur-3xl rounded-full scale-150"></div>
      <PieChart className="relative w-16 h-16 text-teal-600 drop-shadow-xl" />
    </div>
  </motion.div>
  {/* Glass cube */}
<motion.div
  animate={{ y: [0, -40, 0], rotate: [0, 12, 0] }}
  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-32 left-1/3 w-28 h-28 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl"
/>

{/* Glass circle */}
<motion.div
  animate={{ y: [0, 35, 0], x: [0, -20, 0] }}
  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-24 right-1/4 w-32 h-32 bg-blue-300/20 backdrop-blur-xl border border-white/30 rounded-full shadow-xl"
/>

{/* Glass diamond */}
<motion.div
  animate={{ y: [0, -30, 0], rotate: [45, 65, 45] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/2 left-20 w-24 h-24 bg-teal-300/20 backdrop-blur-xl border border-blue/30 shadow-xl"
  style={{ transform: "rotate(45deg)" }}
/>

{/* Floating soft sphere */}
<motion.div
  animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-16 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
/>

{/* Small accent cube */}
<motion.div
  animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-10 left-10 w-20 h-20 bg-cyan-300/30 backdrop-blur-lg border border-blue/30 rounded-xl shadow-lg"
/>
{/* Large soft glow sphere */}
<motion.div
  animate={{ y: [0, 80, 0], x: [0, -60, 0] }}
  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl"
/>

{/* Medium glass orb */}
<motion.div
  animate={{ y: [0, -45, 0] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-40 right-1/3 w-36 h-36 bg-white/15 backdrop-blur-xl border border-blue/30 rounded-full shadow-xl"
/>

{/* Small floating cube */}
<motion.div
  animate={{ y: [0, 30, 0], rotate: [0, 20, 0] }}
  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/4 right-10 w-16 h-16 bg-blue-300/30 backdrop-blur-lg border border-blue/30 rounded-lg shadow-lg"
/>

{/* Thin glass rectangle */}
<motion.div
  animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-32 left-1/4 w-40 h-20 bg-blue/20 backdrop-blur-xl border border-blue/30 rounded-xl shadow-xl"
/>

{/* Tiny floating particles */}
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-20 left-1/2 w-4 h-4 bg-blue-400/40 rounded-full blur-sm"
/>

<motion.div
  animate={{ y: [0, 25, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-24 right-1/2 w-3 h-3 bg-teal-400/50 rounded-full blur-sm"
/>

<motion.div
  animate={{ y: [0, -18, 0] }}
  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/3 left-10 w-5 h-5 bg-cyan-400/40 rounded-full blur-sm"
/>
{/* Large soft gradient blob */}
<motion.div
  animate={{ y: [0, -80, 0], x: [0, 60, 0] }}
  transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
/>

{/* Teal glow blob */}
<motion.div
  animate={{ y: [0, 70, 0], x: [0, -40, 0] }}
  transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl"
/>

{/* Small glass ring */}
<motion.div
  animate={{ y: [0, -25, 0], rotate: [0, 360, 0] }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-300/30 rounded-full"
/>
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

  {/* Central light glow */}
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/2 left-1/2 w-[700px] h-[700px] 
               bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-teal-400/20 
               rounded-full blur-[140px] 
               transform -translate-x-1/2 -translate-y-1/2"
  />

  {/* Left gradient orb */}
  <motion.div
    animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/4 left-10 w-[420px] h-[420px] 
               bg-gradient-to-br from-blue-400/30 to-cyan-400/20 
               rounded-full blur-[110px]"
  />

  {/* Right gradient orb */}
  <motion.div
    animate={{ y: [0, 70, 0], x: [0, -40, 0] }}
    transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-1/4 right-10 w-[380px] h-[380px] 
               bg-gradient-to-br from-teal-400/30 to-blue-500/20 
               rounded-full blur-[100px]"
  />

  {/* Floating dollar icon */}
  <motion.div
    animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-24 left-24"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/40 blur-3xl rounded-full scale-150"></div>
      <DollarSign className="relative w-20 h-20 text-blue-600 drop-shadow-2xl" />
    </div>
  </motion.div>

  {/* Floating chart icon */}
  <motion.div
    animate={{ y: [0, 35, 0], rotate: [0, -8, 0] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-28 right-24"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500/40 blur-3xl rounded-full scale-150"></div>
      <BarChart3 className="relative w-20 h-20 text-teal-600 drop-shadow-2xl" />
    </div>
  </motion.div>
</div>


</div>
  {/* ===== Main Content ===== */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {primaryServices.map((service) => (
        <div
  key={service.id}
  className="group relative rounded-3xl overflow-hidden
             bg-white
             border border-gray-200
             shadow-lg hover:shadow-xl
             transition-all duration-500
             transform hover:-translate-y-2"
  onMouseEnter={() => setHoveredService(service.id)}
  onMouseLeave={() => setHoveredService(null)}
>
  {/* Top gradient accent line */}
  <div className="absolute top-0 left-0 right-0 h-1
                  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>

  <div className="relative z-10 p-8">
    {/* Icon + Title */}
    <div className="flex items-center mb-6">
      <div className="p-4 rounded-2xl bg-gray-50 shadow-sm mr-5">
        <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-xl">
          {React.cloneElement(service.icon, {
            className: "h-6 w-6 text-white",
          })}
        </div>
      </div>

      <div className="flex-1">
  <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-snug">
    {service.title}
  </h3>
  <p className="text-gray-500 text-sm leading-relaxed">
    {service.description}
  </p>
</div>

    </div>

    {/* Features */}
    <ul className="space-y-3">
      {service.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <div className="p-1.5 rounded-full bg-green-100 mr-3">
            <Check className="h-3.5 w-3.5 text-green-600" />
          </div>
          <span className="text-sm font-medium">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>

      ))}
    </div>
  </div>
</section>


      {/* Additional Services - COMPREHENSIVE FINANCIAL SUPPORT */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Image background for Comprehensive Financial Support section */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/80 to-gray-900/85"></div>
          </div>
          
          {/* Subtle gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Financial Support
            </h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 text-center hover:border-blue-400/50 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg group-hover:from-blue-700 group-hover:to-teal-700 transition-all duration-300`}>
                    {React.cloneElement(service.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600/80 to-teal-600/80 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center hover:scale-105">
              <MessageCircle className="h-4 w-4 mr-2" />
              Discuss Your Specific Needs
            </button>
          </div>
        </div>
      </section>

      {/* Process + FAQ Combined Section */}
<section className="relative py-20 bg-blue-100 overflow-hidden">

  {/* ===== Background Floating Icons ===== */}
  {/* Dollar icon */}
  <motion.div
    animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-12 left-12"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/40 blur-3xl rounded-full scale-150"></div>
      <DollarSign className="relative w-16 h-16 text-blue-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Chart icon */}
  <motion.div
    animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/3 right-16"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500/40 blur-3xl rounded-full scale-150"></div>
      <BarChart3 className="relative w-14 h-14 text-teal-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Calculator */}
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-16 left-1/4"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full scale-150"></div>
      <Calculator className="relative w-16 h-16 text-blue-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Credit card */}
  <motion.div
    animate={{ y: [0, 25, 0], rotate: [0, -6, 0] }}
    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-12 right-20"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-cyan-500/40 blur-3xl rounded-full scale-150"></div>
      <CreditCard className="relative w-16 h-16 text-cyan-600 drop-shadow-xl" />
    </div>
  </motion.div>

  {/* Pie chart */}
  <motion.div
    animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-20 right-1/4"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500/40 blur-3xl rounded-full scale-150"></div>
      <PieChart className="relative w-16 h-16 text-teal-600 drop-shadow-xl" />
    </div>
  </motion.div>
  {/* Glass cube */}
<motion.div
  animate={{ y: [0, -40, 0], rotate: [0, 12, 0] }}
  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-32 left-1/3 w-28 h-28 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl"
/>

{/* Glass circle */}
<motion.div
  animate={{ y: [0, 35, 0], x: [0, -20, 0] }}
  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-24 right-1/4 w-32 h-32 bg-blue-300/20 backdrop-blur-xl border border-white/30 rounded-full shadow-xl"
/>

{/* Glass diamond */}
<motion.div
  animate={{ y: [0, -30, 0], rotate: [45, 65, 45] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/2 left-20 w-24 h-24 bg-teal-300/20 backdrop-blur-xl border border-blue/30 shadow-xl"
  style={{ transform: "rotate(45deg)" }}
/>

{/* Floating soft sphere */}
<motion.div
  animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-16 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
/>

{/* Small accent cube */}
<motion.div
  animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-10 left-10 w-20 h-20 bg-cyan-300/30 backdrop-blur-lg border border-blue/30 rounded-xl shadow-lg"
/>
{/* Large soft glow sphere */}
<motion.div
  animate={{ y: [0, 80, 0], x: [0, -60, 0] }}
  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl"
/>

{/* Medium glass orb */}
<motion.div
  animate={{ y: [0, -45, 0] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-40 right-1/3 w-36 h-36 bg-white/15 backdrop-blur-xl border border-blue/30 rounded-full shadow-xl"
/>

{/* Small floating cube */}
<motion.div
  animate={{ y: [0, 30, 0], rotate: [0, 20, 0] }}
  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/4 right-10 w-16 h-16 bg-blue-300/30 backdrop-blur-lg border border-blue/30 rounded-lg shadow-lg"
/>

{/* Thin glass rectangle */}
<motion.div
  animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-32 left-1/4 w-40 h-20 bg-blue/20 backdrop-blur-xl border border-blue/30 rounded-xl shadow-xl"
/>

{/* Tiny floating particles */}
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-20 left-1/2 w-4 h-4 bg-blue-400/40 rounded-full blur-sm"
/>

<motion.div
  animate={{ y: [0, 25, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-24 right-1/2 w-3 h-3 bg-teal-400/50 rounded-full blur-sm"
/>

<motion.div
  animate={{ y: [0, -18, 0] }}
  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-1/3 left-10 w-5 h-5 bg-cyan-400/40 rounded-full blur-sm"
/>
{/* Small glass ring */}
<motion.div
  animate={{ y: [0, -25, 0], rotate: [0, 360, 0] }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-300/30 rounded-full"
/>

  {/* Central light glow */}
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/2 left-1/2 w-[700px] h-[700px] 
               bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-teal-400/20 
               rounded-full blur-[140px] 
               transform -translate-x-1/2 -translate-y-1/2"
  />

  {/* Soft center glow */}
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-1/2 left-1/2 w-[600px] h-[600px]
               bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-teal-400/15
               rounded-full blur-[120px]
               transform -translate-x-1/2 -translate-y-1/2"
  />
  <div className="container mx-auto px-4 relative z-10">


{/* HOW IT WORKS – EXACT TIMELINE STYLE */}
<section className="relative pt-4 pb-5 bg-blue-100 overflow-hidden">
  <div className="w-full px-6 lg:px-16">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        How It Works
      </h2>
      <p className="text-lg text-gray-600">
        We simplify the process to help you achieve your financial goals
        with ease.
      </p>
    </div>

    {/* Main Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Image */}
<div className="relative w-full h-[500px] flex items-center justify-center rounded-3xl bg-blue/40">

  <AnimatePresence mode="wait">
    <motion.img
      key={activeStep}
      src={steps[activeStep].image}
      alt={steps[activeStep].title}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="max-h-full max-w-full object-contain"
    />
  </AnimatePresence>
</div>

      {/* Right Timeline */}
<div className="relative">

  {/* Vertical line exactly through dot centers */}
  <div className="absolute left-5 top-3 bottom-3 w-[2px] bg-purple-700"></div>

  {steps.map((step, index) => (
    <div
      key={index}
      className="relative flex items-start gap-3 mb-12 cursor-pointer"
      onMouseEnter={() => setActiveStep(index)}
      onClick={() => setActiveStep(index)}
    >
      {/* Dot */}
      <div className="relative w-10 flex justify-center">
        <div
          className={`w-4 h-4 rounded-full ${
            activeStep === index
              ? "bg-purple-700"
              : "bg-purple-400"
          }`}
        ></div>
      </div>

      {/* Text */}
      <div>
        <h3
          className={`text-xl font-semibold mb-2 ${
            activeStep === index
              ? "text-purple-900"
              : "text-gray-800"
          }`}
        >
          {step.title}
        </h3>

        <p className="text-gray-600 leading-relaxed max-w-md">
          {step.text}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
</section>



     {/* WHY CHOOSE US SECTION */}
<section ref={sectionRef} className="relative py-20 bg-blue-100 overflow-hidden">
  

  <div className="max-w-6xl mx-auto px-4 text-center relative">

  {/* EXACT LABEL */}
  <div className="mb-6">
    <div className="inline-block px-4 py-2 bg-orange-100 text-gray-700 text-sm font-semibold rounded">
      WHY CHOOSE US
    </div>
  </div>
  {/* EXACT TITLE CARD */}
  <div className="relative z-10 inline-block bg-white shadow-xl rounded-xl px-12 py-4">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Our Value Proposition
    </h2>
  </div>


    {/* Connector lines */}
    <svg
      className="absolute left-1/2 top-32 -translate-x-1/2 hidden lg:block"
      width="900"
      height="220"
      viewBox="0 0 900 220"
      fill="none"
    >
      <path
        d="M450 0 V60 C450 80 430 90 410 90 H100 V180"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <path
        d="M450 0 V60 H300 V180"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <path
        d="M450 0 V60 H600 V180"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <path
        d="M450 0 V60 C450 80 470 90 490 90 H800 V180"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
    </svg>

    {/* Cards */}
    <div className="relative mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

      {/* PERSONAL SUPPORT */}
      <div className="flex flex-col items-center group">
        <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
          <img
            src={helpdeskImg}
            alt="Personal Support"
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
          PERSONAL SUPPORT
        </h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
          You get your own expert no bots, no confusion.
        </p>
      </div>

      {/* BETTER VALUE */}
      <div className="flex flex-col items-center group">
        <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
          <img
            src={increaseImg}
            alt="Better Value"
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
          BETTER VALUE
        </h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
          Quality accounting without the big price tag.
        </p>
      </div>

      {/* YOUR DASHBOARD */}
      <div className="flex flex-col items-center group">
        <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
          <img
            src={dashboardImg}
            alt="Your Dashboard"
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
          YOUR DASHBOARD
        </h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
          See your numbers anytime, anywhere.
        </p>
      </div>

      {/* LIVE UPDATE */}
      <div className="flex flex-col items-center group">
        <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
          <img
            src={updateImg}
            alt="Live Update"
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
          LIVE UPDATE
        </h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
          Stay in the loop with real-time financial info.
        </p>
      </div>

    </div>
  </div>
</section>


{/* ================= FAQ ================= */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-gray-600">
        Clarity begins with a question.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
        >
          <button
            onClick={() =>
              setActiveFAQ(activeFAQ === index ? null : index)
            }
            className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50/30 transition-all duration-300"
          >
            <span className="font-semibold text-lg text-gray-900 pr-8">
              {faq.question}
            </span>
            <div
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                activeFAQ === index
                  ? "bg-blue-100 text-blue-600 rotate-90"
                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </div>
          </button>

          <div
            className={`transition-all duration-300 ${
              activeFAQ === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 pt-0">
              <div className="pl-6 border-l-2 border-blue-400">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
     </section>
     

      
     {/* Accounting Software Logos Slider */}
<section className="relative py-14 pb-22 bg-blue-100 overflow-hidden">
  <div className="text-center mb-10">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
      Software{" "}
      <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
        Expertise
      </span>
    </h1>
  </div>

  {/* Slider container */}
 <div className="relative w-full overflow-hidden pt-10 pb-24">

    {/* Moving track */}
    <div className="flex gap-10 animate-slider px-10 w-max">
      {[...softwareLogos, ...softwareLogos].map((logo, index) => (
        <div
  key={index}
  className="group relative flex flex-col items-center
             bg-gray-50 border border-gray-200
             rounded-2xl px-10 py-6
             min-w-[220px] shadow-sm"
>
  {/* Logo */}
  <img
    src={logo.src}
    alt={logo.name}
    className="h-20 w-auto object-contain"
  />

  {/* Hover dropdown */}
 <div
  className="absolute left-1/2 -translate-x-1/2 top-full mt-3
             w-56
             bg-white border border-gray-200
             rounded-xl shadow-lg
             px-4 py-4 text-center
             opacity-0 scale-95
             pointer-events-none
             transition-all duration-200
             group-hover:opacity-100
             group-hover:scale-100
             group-hover:pointer-events-auto"
>
  <h4 className="font-semibold text-gray-900 text-sm">
    {logo.name}
  </h4>
  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
    {logo.description}
  </p>
</div>
</div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        
        <div className="absolute inset-0">
          {/* Image background for CTA section */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/80 to-gray-900/85"></div>
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to elevate your financial operations?
            </h2>
            <button 
              onClick={() => setShowContactForm(true)}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Start Your Financial Transformation</h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="financial-reporting">Financial Reporting</option>
                    <option value="payroll">Payroll Processing</option>
                    <option value="tax">Tax Support</option>
                    <option value="all">All Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell us about your business and financial needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default FinanceAccountingServices;