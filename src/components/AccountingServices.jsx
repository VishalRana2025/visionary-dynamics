import axios from "axios";
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

export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

import increaseImg from "../animations/increase.png";
import dashboardImg from "../animations/dashboard.png";
import updateImg from "../animations/update.png";
import helpdeskImg from "../animations/help-desk.png";
import howItWorks1Img from "../animations/how-it-works1.png";
import howItWorks2Img from "../animations/how-it-works2.png";
import howItWorks3Img from "../animations/how-it-works3.png";

const FinanceAccountingServices = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '', 
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
      icon: <Users size={32} className="sm:size-40" />,
      title: "Part-time/Full-time Resource",
      color: "bg-slate-700",
    },
    {
      icon: <Clock size={32} className="sm:size-40" />,
      title: "Pay as you go for actual number of hours worked",
      color: "bg-orange-500",
    },
    {
      icon: <HandCoins size={32} className="sm:size-40" />,
      title: "Fixed/Engagement based fee",
      color: "bg-cyan-500",
    },
  ];

  // Main Services Data
  const primaryServices = [
    {
      id: 1,
      title: "Bookkeeping",
      icon: <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />,
      description: "Accurate daily transaction recording",
      features: [
        "Record daily transactions",
        "Maintain ledgers & journals",
        "Categorize expenses & income"
      ]
    },
    {
      id: 2,
      title: "Financial Reporting",
      icon: <BarChart className="h-6 w-6 sm:h-7 sm:w-7" />,
      description: "Clear insights into performance",
      features: [
        "Generate monthly reports",
        "Share performance insights",
        "Create custom financial summaries",
      ]
    },
    {
      id: 3,
      title: "Bank Reconciliation",
      icon: <RefreshCw className="h-6 w-6 sm:h-7 sm:w-7" />,
      description: "Match and verify transactions",
      features: [
        "Match transactions automatically",
        "Resolve discrepancies",
        "Maintain financial accuracy"
      ]
    },
    {
      id: 4,
      title: "Profit & Loss Statements",
      icon: <PieChart className="h-6 w-6 sm:h-7 sm:w-7" />,
      description: "Analyze profitability",
      features: [
        "Compile revenue & costs",
        "Analyze net gains/losses",
        "Deliver easy-to-read reports"
      ]
    },
    {
      id: 5,
      title: "Payroll Processing",
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7" />,
      description: "Timely and accurate payroll",
      features: [
        "Calculate wages & taxes",
        "Process direct deposits",
        "Handle deductions & compliance"
      ]
    },
    {
      id: 6,
      title: "AR & AP Management",
      icon: <CreditCard className="h-6 w-6 sm:h-7 sm:w-7" />,
      description: "Optimize cash flow",
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
      icon: <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      id: 14,
      title: "Credit & Debt Management",
      description: "Stay in control of your obligations.",
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      id: 15,
      title: "Managing Financial Documents",
      description: "Secure, accessible, and organized files.",
      icon: <Folder className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      id: 16,
      title: "Expense Reporting",
      description: "Know where your money goes.",
      icon: <Receipt className="h-5 w-5 sm:h-6 sm:w-6" />
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

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // ✅ Add dynamic type from selected service
    const payload = {
      ...formData,
      type: formData.service || "General"
    };

    const response = await axios.post(
      "http://localhost:5000/api/form",
      payload
    );

    console.log("Response:", response.data);
    alert("Form Submitted Successfully ✅");

    setShowContactForm(false);

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });

  } catch (error) {
    console.error("Error:", error);
    alert("Error submitting form ❌");
  }
};

  return (
    <div className="min-h-screen bg-blue-50 overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
          </div>
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Smart accounting.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Stronger business.
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              >
                Start Your Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
  <WaveTransition />
</div>
      </section>

      {/* Main Services Grid - Responsive Cards */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-blue-100 overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {primaryServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                <div className="relative z-10 p-5 sm:p-6 md:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 rounded-2xl bg-gray-50 shadow-sm mr-4 sm:mr-5">
                      <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-xl">
                        {React.cloneElement(service.icon, {
                          className: "h-5 w-5 sm:h-6 sm:w-6 text-white",
                        })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="p-1 rounded-full bg-green-100 mr-2 sm:mr-3 flex-shrink-0">
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-600" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium">
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

      {/* Additional Services - Responsive */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-20">
          <WaveTransition direction="top" />
        </div>
       
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/80 to-gray-900/85"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto z-10 mt-8 sm:mt-12 lg:mt-16">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive Financial Support
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {additionalServices.map((service) => (
              <div 
                key={service.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 sm:p-6 lg:p-8 text-center hover:border-blue-400/50 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg">
                    {React.cloneElement(service.icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-white" })}
                  </div>
                </div>
                <div className="pt-6 sm:pt-8">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full mt-8 z-20">
          <WaveTransition />
        </div>
      </section>

      {/* Process + FAQ Combined Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-blue-100 overflow-hidden">
        {/* Background decorative elements (simplified for mobile) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[400px] sm:h-[600px] md:h-[700px] bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-teal-400/20 rounded-full blur-[100px] sm:blur-[140px] transform -translate-x-1/2 -translate-y-1/2"
        />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* HOW IT WORKS SECTION */}
          <section className="relative pt-4 pb-8 sm:pb-12 bg-blue-100 overflow-hidden">
            <div className="w-full px-3 sm:px-6 lg:px-16">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  How It Works
                </h2>
                <p className="text-base sm:text-lg text-gray-600 px-4">
                  We simplify the process to help you achieve your financial goals with ease.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-blue-100/40">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeStep}
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4 }}
                      className="max-h-full max-w-full object-contain p-4"
                    />
                  </AnimatePresence>
                </div>

                {/* Right Timeline - Touch Friendly */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-[2px] bg-purple-700 hidden sm:block"></div>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12 cursor-pointer touch-manipulation"
                      onMouseEnter={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      onTouchStart={() => setActiveStep(index)}
                    >
                      <div className="relative w-8 sm:w-10 flex justify-center flex-shrink-0">
                        <div
                          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                            activeStep === index ? "bg-purple-700" : "bg-purple-400"
                          }`}
                        ></div>
                        {index < steps.length - 1 && (
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[2px] h-12 sm:h-16 bg-purple-300 block sm:hidden"></div>
                        )}
                      </div>
                      <div>
                        <h3
                          className={`text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 ${
                            activeStep === index ? "text-purple-900" : "text-gray-800"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
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
          <section ref={sectionRef} className="relative py-12 sm:py-16 bg-blue-100 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center relative">
              <div className="mb-4 sm:mb-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-gray-700 text-xs sm:text-sm font-semibold rounded">
                  WHY CHOOSE US
                </div>
              </div>
              <div className="relative z-10 inline-block bg-white shadow-xl rounded-lg sm:rounded-xl px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
                  Our Value Proposition
                </h2>
              </div>

              {/* Cards - Responsive Grid */}
              <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
                {[
                  { img: helpdeskImg, title: "PERSONAL SUPPORT", desc: "You get your own expert no bots, no confusion." },
                  { img: increaseImg, title: "BETTER VALUE", desc: "Quality accounting without the big price tag." },
                  { img: dashboardImg, title: "YOUR DASHBOARD", desc: "See your numbers anytime, anywhere." },
                  { img: updateImg, title: "LIVE UPDATE", desc: "Stay in the loop with real-time financial info." }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-4 sm:mb-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 max-w-xs text-center group-hover:text-gray-900 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Clarity begins with a question.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex justify-between items-center hover:bg-blue-50/30 transition-all duration-300"
                >
                  <span className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                      activeFAQ === index
                        ? "bg-blue-100 text-blue-600 rotate-90"
                        : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${
                    activeFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 pt-0">
                    <div className="pl-3 sm:pl-4 md:pl-6 border-l-2 border-blue-400">
                      <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Logos Slider - Responsive */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-blue-100 overflow-hidden">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
            Software{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
        </div>

        <div className="relative w-full overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 animate-slider px-4 w-max">
            {[...softwareLogos, ...softwareLogos].map((logo, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] shadow-sm"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 sm:mt-3
                             w-48 sm:w-52 md:w-56
                             bg-white border border-gray-200
                             rounded-lg sm:rounded-xl shadow-lg
                             px-3 sm:px-4 py-3 sm:py-4 text-center
                             opacity-0 scale-95
                             pointer-events-none
                             transition-all duration-200
                             group-hover:opacity-100
                             group-hover:scale-100
                             group-hover:pointer-events-auto
                             z-20"
                >
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
                    {logo.name}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1 sm:mt-2 leading-relaxed">
                    {logo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/80 to-gray-900/85"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to elevate your financial operations?
            </h2>
            <button 
              onClick={() => setShowContactForm(true)}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal - Mobile Optimized */}
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
                    <option value="tax">Tax Support</option>
                    <option value="all">All Services</option>
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

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slider {
          animation: slider 25s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-slider {
            animation-duration: 20s;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default FinanceAccountingServices;