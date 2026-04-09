import React, { useState } from "react";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
   ChevronDown
} from 'lucide-react';

export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";

  return (
    <div className={`relative w-full ${isTop ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 320"
        className="block w-full h-[160px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        {/* BACK WAVE */}
        <path
          d="M0,200C320,300 640,80 960,200C1280,320 1440,120 1440,200V320H0Z"
          fill="#37393b"
          opacity="0.3"
        />

        {/* MIDDLE WAVE */}
        <path
          d="M0,220C480,340 960,120 1440,220V320H0Z"
          fill="#93C5FD"
          opacity="0.6"
        />

        {/* FRONT WAVE */}
        <path
          d="M0,260C480,380 960,160 1440,260V320H0Z"
          fill="#b5c7df"
        />
      </svg>
    </div>
  );
};

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className="text-lg font-semibold text-gray-900">
          {faq.question}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 pt-0 text-gray-600">
          {faq.answer}
        </div>
      </div>
    </div>
  );
} 

const TaxationPage = () => {
 const taxServices = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Individual Tax Preparation (Form 1040)",
    description: "Accurate preparation and e-filing of federal and state income tax returns, including credits, deductions, and self-employment income."
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Business Tax Returns (1120, 1120S, 1065)",
    description: "Complete corporate, S-corp, and partnership tax return preparation with compliance and strategic tax-saving guidance."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Sales Tax Compliance",
    description: "Multi-state sales tax registration, reporting, and filing services to ensure compliance with U.S. state regulations."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "IRS Audit & Notice Representation",
    description: "Professional representation before the IRS for audits, notices, penalty resolution, and compliance issues."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quarterly Estimated Tax Planning",
    description: "Proactive quarterly tax planning and estimated payment calculations to avoid penalties and optimize cash flow."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Estate & Trust Tax Services (Form 1041)",
    description: "Specialized preparation and planning for estates and trusts, including fiduciary income tax returns."
  }
];

  const benefits = [
    "Maximize your tax deductions and credits",
    "Stay compliant with latest tax laws",
    "Reduce audit risk with accurate filing",
    "Strategic tax planning for future savings",
    "Year-round support and consultation",
    "Peace of mind with professional expertise"
  ];
  const industries = [
  {
    name: "Healthcare",
    icon: "🏥",
    color: "from-blue-500 to-blue-700",
    count: "150+ clients",
    description:
      "Specialized tax planning and compliance solutions for hospitals, clinics, and medical professionals."
  },
  {
    name: "Real Estate",
    icon: "🏢",
    color: "from-purple-500 to-purple-700",
    count: "200+ clients",
    description:
      "Strategic tax structuring and advisory services for developers, investors, and property managers."
  },
  {
    name: "Technology",
    icon: "💻",
    color: "from-green-500 to-green-700",
    count: "180+ clients",
    description:
      "Tax optimization and compliance support for startups, SaaS companies, and IT enterprises."
  },
  {
    name: "Manufacturing",
    icon: "🏭",
    color: "from-amber-500 to-amber-700",
    count: "90+ clients",
    description:
      "Efficient tax planning, cost optimization, and regulatory compliance for manufacturing businesses."
  },
  {
    name: "Construction",
    icon: "🔨",
    color: "from-cyan-500 to-cyan-700",
    count: "85+ clients",
    description:
      "Project-based tax solutions and financial structuring for contractors and construction firms."
  },
  {
    name: "Transportation",
    icon: "🚚",
    color: "from-violet-500 to-violet-700",
    count: "75+ clients",
    description:
      "Compliance management and tax efficiency strategies for logistics and transport operators."
  }
];

 const faqs = [
  {
    question: "When should I start planning for taxes?",
    answer: "Tax planning is most effective when done year-round. However, the best time to start is at the beginning of the tax year or when your financial situation changes significantly."
  },
  {
    question: "What documents do I need for tax preparation?",
    answer: "Typically you'll need W-2s, 1099s, receipts for deductions, previous year's tax returns, and any investment or business income statements."
  },
  {
    question: "How long does the tax filing process take?",
    answer: "For individual returns, typically 3–5 business days. Business returns may take 1–2 weeks depending on complexity and documentation."
  },
  {
    question: "Can you help reduce my tax liability legally?",
    answer: "Yes. We use strategic tax planning methods, eligible deductions, credits, and compliance-based structuring to minimize your tax burden legally and efficiently."
  },
  {
    question: "Do you provide services for businesses and startups?",
    answer: "Absolutely. We offer corporate tax planning, GST/VAT compliance, payroll tax management, and advisory services tailored to startups, SMEs, and large enterprises."
  },
  {
    question: "What happens if I receive a tax notice?",
    answer: "If you receive a tax notice, our experts will review it, prepare the required documentation, and represent you before the relevant tax authorities to resolve the issue quickly."
  },
  {
    question: "Is my financial information kept confidential?",
    answer: "Yes. We follow strict data security protocols and confidentiality standards to ensure your financial information remains secure and protected at all times."
  },
  {
    question: "Do you offer ongoing tax advisory services?",
    answer: "Yes. We provide year-round tax advisory and quarterly planning sessions to help you stay compliant and financially optimized throughout the year."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve a wide range of industries including retail, technology, real estate, healthcare, freelancers, and high-net-worth individuals."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is simple. Schedule a free consultation, share your financial details securely, and our experts will create a customized tax strategy for you."
  }
];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white ">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg"
      alt="Taxation Services"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Centered Content */}
  <div className="relative min-h-[500px] flex items-center justify-center text-center px-4">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Taxation Services
      </h1>

      <p className="text-xl md:text-2xl text-blue-100 mb-8">
        Expert tax solutions tailored to your needs. Maximize returns, minimize stress.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
  href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center"
>
  Schedule Consultation
  <ArrowRight className="ml-2 w-5 h-5" />
</a>
      </div>
    </div>
  </div>
 
 <div className="absolute bottom-0 left-0 w-full pointer-events-none">
  <WaveTransition />
</div>
 
</div>

{/* Tax Services Grid */}
<div className="relative py-24 bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-50">    
  {/* Moving 3D Background Elements - Only these move */}
  <div className="absolute inset-0 perspective-1000 pointer-events-none">
    {/* Animated floating cubes - MOVING */}
    <div className="absolute top-20 left-[10%] w-20 h-20 bg-blue-400/20 rounded-2xl rotate-45 animate-float-3d"
         style={{ transform: 'translateZ(50px) rotateX(20deg) rotateY(30deg)' }}></div>
    <div className="absolute top-40 right-[15%] w-32 h-32 bg-purple-400/20 rounded-3xl rotate-12 animate-float-3d-delay"
         style={{ transform: 'translateZ(80px) rotateX(15deg) rotateY(45deg)' }}></div>
    <div className="absolute bottom-32 left-[20%] w-24 h-24 bg-cyan-400/20 rounded-full animate-float-3d-slow"
         style={{ transform: 'translateZ(30px) rotateX(10deg)' }}></div>
    <div className="absolute top-[60%] right-[25%] w-40 h-40 bg-indigo-400/20 rounded-[40px] rotate-90 animate-float-3d"
         style={{ transform: 'translateZ(100px) rotateX(25deg) rotateY(60deg)' }}></div>
  </div>

  {/* Moving 3D Grid Lines - MOVING */}
  <div className="absolute inset-0 opacity-20 pointer-events-none animate-grid-move">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-3d" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 60 0 L 60 60" fill="none" stroke="url(#grad1)" strokeWidth="0.5" strokeOpacity="0.3"/>
          <path d="M 0 0 L 0 60 L 60 60" fill="none" stroke="url(#grad2)" strokeWidth="0.5" strokeOpacity="0.3"/>
        </pattern>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-3d)"/>
    </svg>
  </div>

  {/* Moving 3D Spheres - MOVING */}
  <div className="absolute inset-0 perspective-1000 pointer-events-none">
    <div className="absolute top-[15%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl animate-pulse-3d"
         style={{ transform: 'translateZ(20px) rotateX(45deg)' }}></div>
    <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-3xl animate-pulse-3d-delay"
         style={{ transform: 'translateZ(40px) rotateY(30deg)' }}></div>
  </div>

  {/* Moving 3D Rotating Rings - MOVING */}
  <div className="absolute inset-0 perspective-1000 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-blue-200/30 rounded-full animate-spin-3d"
         style={{ transform: 'translateZ(60px) rotateX(60deg)' }}></div>
    <div className="absolute bottom-1/3 right-1/3 w-64 h-64 border-2 border-purple-200/30 rounded-full animate-spin-3d-reverse"
         style={{ transform: 'translateZ(80px) rotateY(45deg)' }}></div>
  </div>

  {/* Moving Floating Particles with Depth - MOVING */}
  <div className="absolute inset-0 perspective-1000 pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `translateZ(${Math.random() * 100 + 20}px)`,
          animation: `float-particle ${Math.random() * 8 + 5}s linear infinite`,
          animationDelay: `${Math.random() * 3}s`
        }}
      ></div>
    ))}
  </div>

  {/* Moving light rays - MOVING */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-ray-move"></div>
  </div>

  {/* STATIC CONTENT - Everything below this line is static */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Elegant Header - STATIC */}
    <div className="text-center mb-16">
      
      {/* Static main heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
          Comprehensive Tax
        </span>
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Solutions That Deliver
        </span>
      </h2>
    </div>

    {/* Services Grid - STATIC cards with hover effects */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
      {taxServices.map((service, index) => {
        // Premium color palette
        const colors = [
          { 
            primary: "#2563eb", 
            secondary: "#7c3aed", 
            light: "#dbeafe", 
            gradient: "from-blue-600 to-purple-600",
            iconBg: "bg-gradient-to-br from-blue-500 to-purple-600",
            badge: "bg-blue-100 text-blue-700",
            shadow: "shadow-blue-500/20"
          },
          { 
            primary: "#7c3aed", 
            secondary: "#db2777", 
            light: "#ede9fe", 
            gradient: "from-purple-600 to-pink-600",
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
            badge: "bg-purple-100 text-purple-700",
            shadow: "shadow-purple-500/20"
          },
          { 
            primary: "#059669", 
            secondary: "#2563eb", 
            light: "#d1fae5", 
            gradient: "from-emerald-600 to-blue-600",
            iconBg: "bg-gradient-to-br from-emerald-500 to-blue-600",
            badge: "bg-emerald-100 text-emerald-700",
            shadow: "shadow-emerald-500/20"
          },
          { 
            primary: "#dc2626", 
            secondary: "#ea580c", 
            light: "#fee2e2", 
            gradient: "from-red-600 to-orange-600",
            iconBg: "bg-gradient-to-br from-red-500 to-orange-600",
            badge: "bg-red-100 text-red-700",
            shadow: "shadow-red-500/20"
          },
          { 
            primary: "#d97706", 
            secondary: "#dc2626", 
            light: "#fef3c7", 
            gradient: "from-amber-600 to-red-600",
            iconBg: "bg-gradient-to-br from-amber-500 to-red-600",
            badge: "bg-amber-100 text-amber-700",
            shadow: "shadow-amber-500/20"
          },
          { 
            primary: "#4f46e5", 
            secondary: "#7c3aed", 
            light: "#e0e7ff", 
            gradient: "from-indigo-600 to-purple-600",
            iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
            badge: "bg-indigo-100 text-indigo-700",
            shadow: "shadow-indigo-500/20"
          }
        ];
        
        const color = colors[index % colors.length];

        return (
          <div
            key={index}
            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 "
          >
            {/* Animated gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.gradient} transform origin-left transition-transform duration-500`}></div>

            {/* Card content */}
            <div className="relative p-8">
              {/* Icon with attractive design */}
              <div className="flex items-start justify-between mb-6">
                <div className={`relative w-16 h-16 ${color.iconBg} rounded-xl text-white flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {React.cloneElement(service.icon, { 
                    className: "w-8 h-8",
                    strokeWidth: 1.5
                  })}
                </div>
                
                {/* Popular badge for first few services */}
                {index < 2 && (
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                    POPULAR
                  </span>
                )}
              </div>

              {/* Title with hover effect */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Professional pricing and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
               
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${color.gradient} opacity-5 rounded-tl-[100px]`}></div>
          </div>
        );
      })}
    </div>
  </div>
</div>


        {/* Integrated Stats Section - With Background */}
<div className="relative py-24 text-white ">
{/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/6693656/pexels-photo-6693656.jpeg"
      alt="Financial statistics background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Label */}
    <div className="text-center mb-16">
      
      <span className="text-sm font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
        Our Impact in Numbers
      </span>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

      {/* Stat 1 */}
      <div className="group text-center">
        <span className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          500+
        </span>

        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-3 rounded-full group-hover:w-24 transition-all duration-300"></div>

        <h3 className="text-2xl font-bold mt-6">Tax Returns Filed</h3>
        <p className="text-gray-300 max-w-xs mx-auto mt-3">
          Successfully processed with maximum refunds and full compliance.
        </p>
      </div>

      {/* Stat 2 */}
      <div className="group text-center">
        <span className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          98%
        </span>

        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-3 rounded-full group-hover:w-24 transition-all duration-300"></div>

        <h3 className="text-2xl font-bold mt-6">Client Satisfaction</h3>
        <p className="text-gray-300 max-w-xs mx-auto mt-3">
          Trusted by hundreds of satisfied individuals and businesses.
        </p>
      </div>

      {/* Stat 3 */}
      <div className="group text-center">
        <span className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
          $2.5M
        </span>

        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-3 rounded-full group-hover:w-24 transition-all duration-300"></div>

        <h3 className="text-2xl font-bold mt-6">Tax Savings Generated</h3>
        <p className="text-gray-300 max-w-xs mx-auto mt-3">
          Millions saved through strategic and compliant tax planning.
        </p>
      </div>

    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
  <WaveTransition />
</div>
</div>
  
      {/* Why Choose Us - Light Blue BG with Moving 3D Objects */}
<div className="relative py-24 ">
  {/* Light Blue Base Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"></div>
  
  {/* Moving 3D Objects - Only these move */}
  <div className="absolute inset-0 perspective-1000 pointer-events-none">
    {/* Floating cubes */}
    <div className="absolute top-10 left-[5%] w-16 h-16 bg-blue-400/20 rounded-xl rotate-12 animate-float-3d"
         style={{ transform: 'translateZ(30px) rotateX(15deg) rotateY(25deg)' }}></div>
    <div className="absolute top-32 right-[8%] w-24 h-24 bg-purple-400/20 rounded-2xl rotate-45 animate-float-3d-delay"
         style={{ transform: 'translateZ(60px) rotateX(20deg) rotateY(35deg)' }}></div>
    <div className="absolute bottom-24 left-[12%] w-20 h-20 bg-cyan-400/20 rounded-3xl rotate-90 animate-float-3d-slow"
         style={{ transform: 'translateZ(40px) rotateX(10deg) rotateY(45deg)' }}></div>
    
    {/* Floating spheres */}
    <div className="absolute top-1/3 right-[15%] w-32 h-32 bg-blue-300/20 rounded-full blur-sm animate-float-3d"
         style={{ transform: 'translateZ(50px)' }}></div>
    <div className="absolute bottom-1/4 left-[20%] w-40 h-40 bg-purple-300/20 rounded-full blur-sm animate-float-3d-slow"
         style={{ transform: 'translateZ(70px)' }}></div>
    
    {/* Rotating rings */}
    <div className="absolute top-2/3 left-[30%] w-36 h-36 border-2 border-blue-300/30 rounded-full animate-spin-3d"
         style={{ transform: 'translateZ(45px) rotateX(50deg)' }}></div>
    <div className="absolute top-1/2 right-[25%] w-48 h-48 border-2 border-purple-300/30 rounded-full animate-spin-3d-reverse"
         style={{ transform: 'translateZ(80px) rotateY(40deg)' }}></div>
    
    {/* Floating particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `translateZ(${Math.random() * 80 + 20}px)`,
          animation: `float-particle ${Math.random() * 6 + 4}s linear infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      ></div>
    ))}
    
    {/* 3D grid lines */}
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="moving-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-grad)" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#moving-grid)"/>
      </svg>
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Why Choose Us Content (Static) */}
      <div className="space-y-8">

        {/* Main Heading with Gradient */}
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Why Choose Our
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tax Services?
          </span>
        </h2>

        {/* Description with Icon */}
        <div className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-blue-100/50 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            With <span className="font-bold text-blue-600">15+ years of experience</span> and a commitment to excellence, 
            we ensure your taxes are handled with precision and care.
          </p>
        </div>

        {/* Benefits Grid with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => {
            const colors = [
              { bg: "bg-blue-100/80", text: "text-blue-600", border: "border-blue-200", icon: "text-blue-600" },
              { bg: "bg-purple-100/80", text: "text-purple-600", border: "border-purple-200", icon: "text-purple-600" },
              { bg: "bg-green-100/80", text: "text-green-600", border: "border-green-200", icon: "text-green-600" },
              { bg: "bg-amber-100/80", text: "text-amber-600", border: "border-amber-200", icon: "text-amber-600" },
              { bg: "bg-pink-100/80", text: "text-pink-600", border: "border-pink-200", icon: "text-pink-600" },
              { bg: "bg-indigo-100/80", text: "text-indigo-600", border: "border-indigo-200", icon: "text-indigo-600" }
            ];
            const color = colors[index % colors.length];

            return (
              <div 
                key={index} 
                className={`group flex items-center gap-3 p-4 ${color.bg} backdrop-blur-sm rounded-xl border ${color.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-8 h-8 rounded-full bg-white ${color.icon} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column - Consultation Form (Static) */}
      <div className="relative">
        {/* Decorative background - static but with glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
        
        {/* Main Form Card */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl  border border-white/50">
          {/* Top gradient bar */}
          <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          
          {/* Decorative pattern - static */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="form-pattern-static" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#3b82f6"/>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#form-pattern-static)"/>
            </svg>
          </div>

          <div className="relative p-8 md:p-10">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Ready to optimize your taxes?</h3>
                <p className="text-gray-500">Get a free consultation today</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full border border-blue-200">✓ Free 30-min call</span>
              <span className="px-3 py-1 bg-purple-100/80 backdrop-blur-sm text-purple-700 text-xs font-semibold rounded-full border border-purple-200">✓ No obligation</span>
              <span className="px-3 py-1 bg-green-100/80 backdrop-blur-sm text-green-700 text-xs font-semibold rounded-full border border-green-200">✓ Expert advice</span>
            </div>

            {/* Form */}
           <div className="space-y-5">
  <iframe
    src="https://api.visionarydynamicsas.com/widget/form/vPyj7lYiQxstLAQ1zD8p"
    style={{
      width: "100%",
      height: "500px",
      border: "none",
      borderRadius: "12px",
    }}
    id="inline-vPyj7lYiQxstLAQ1zD8p"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-activation-type="alwaysActivated"
    data-deactivation-type="neverDeactivate"
    data-form-name="Taxation Form"
    data-height="328"
    data-form-id="vPyj7lYiQxstLAQ1zD8p"
    title="Taxation Form"
    className="w-full"
  />
</div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</div>

{/* Industries We Serve - Alternative Design */}
<div className="relative py-24 ">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-50"></div>
  
  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider"></span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
       Industries We Serve 
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        From healthcare to construction, our tax expertise spans across sectors
      </p>
    </div>

    {/* Industries Grid - Icon & Heading Inline */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {industries.map((industry, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Hover Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
      ></div>

      <div className="relative">

        {/* 🔥 Icon + Heading Same Row */}
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${industry.color} text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
          >
            {industry.icon}
          </div>

          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {industry.name}
          </h3>
        </div>

        {/* Client Count */}
        <p className="text-sm text-blue-600 font-semibold mt-3">
          {industry.count}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {industry.description}
        </p>

      </div>
    </div>
  ))}
</div>
  </div>
</div>

{/* FAQ Section with Light Blue BG and Moving Objects */}
<div className="relative py-24 ">
  {/* Light Blue Base Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"></div>
  
  {/* Moving 3D Background Elements */}
  <div className="absolute inset-0 perspective-1000 pointer-events-none">
    {/* Floating cubes */}
    <div className="absolute top-20 left-[8%] w-20 h-20 bg-blue-400/20 rounded-xl rotate-12 animate-float-3d"
         style={{ transform: 'translateZ(40px) rotateX(20deg) rotateY(30deg)' }}></div>
    <div className="absolute top-40 right-[10%] w-28 h-28 bg-purple-400/20 rounded-2xl rotate-45 animate-float-3d-delay"
         style={{ transform: 'translateZ(60px) rotateX(15deg) rotateY(45deg)' }}></div>
    <div className="absolute bottom-32 left-[15%] w-24 h-24 bg-cyan-400/20 rounded-3xl rotate-90 animate-float-3d-slow"
         style={{ transform: 'translateZ(50px) rotateX(25deg) rotateY(20deg)' }}></div>
    
    {/* Floating spheres */}
    <div className="absolute top-1/3 right-[20%] w-40 h-40 bg-blue-300/20 rounded-full blur-sm animate-float-3d"
         style={{ transform: 'translateZ(70px)' }}></div>
    <div className="absolute bottom-1/4 left-[10%] w-48 h-48 bg-purple-300/20 rounded-full blur-sm animate-float-3d-slow"
         style={{ transform: 'translateZ(80px)' }}></div>
    
    {/* Rotating rings */}
    <div className="absolute top-2/3 left-[30%] w-44 h-44 border-2 border-blue-300/30 rounded-full animate-spin-3d"
         style={{ transform: 'translateZ(55px) rotateX(45deg)' }}></div>
    <div className="absolute top-1/2 right-[25%] w-56 h-56 border-2 border-purple-300/30 rounded-full animate-spin-3d-reverse"
         style={{ transform: 'translateZ(65px) rotateY(35deg)' }}></div>
    
    {/* Floating question marks for theme */}
    <div className="absolute top-32 left-[20%] text-6xl text-blue-200/20 font-bold animate-float-3d">?</div>
    <div className="absolute bottom-40 right-[15%] text-8xl text-purple-200/20 font-bold animate-float-3d-delay">?</div>
    <div className="absolute top-1/2 left-[5%] text-4xl text-cyan-200/20 font-bold animate-float-3d-slow">?</div>
    
    {/* Floating particles */}
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `translateZ(${Math.random() * 100 + 20}px)`,
          animation: `float-particle ${Math.random() * 8 + 5}s linear infinite`,
          animationDelay: `${Math.random() * 3}s`
        }}
      ></div>
    ))}
    
    {/* Decorative grid lines */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="faq-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#faq-grad)" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="faq-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#faq-grid)"/>
      </svg>
    </div>
  </div>

  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header with decorative elements */}
    <div className="text-center mb-16">
      

      {/* Main heading with gradient */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
          Frequently Asked
        </span>
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
    </div>

    {/* FAQ Items Container */}
    <div className="space-y-4 relative">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden lg:block"></div>
      
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} />
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-12 pt-8 border-t border-blue-200/50">
    
      <p className="text-gray-600 mb-4">
        Still have questions? We're here to help!
      </p>
      <a
        href="/contact"
        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
      >
        <span>Contact Our Support Team</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
</div>

      {/* CTA Section */}
<div className="relative py-24 text-white ">
{/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
 
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg"
      alt="Tax consultation background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Don't Let Tax Season Stress You Out
    </h2>

    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
      Let our experts handle your taxes while you focus on what matters most.
    </p>

   <a
  href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-2xl hover:-translate-y-1"
>
  Schedule Your Free Consultation
  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
  </div>
</div>
    </div>
  );
};

export default TaxationPage;