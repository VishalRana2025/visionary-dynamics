// CooperativeTaxPage.jsx
import React, { useState } from 'react';
import {
  Building2,
  Calculator,
  FileCheck,
  Shield,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Calendar,
  Percent,
  PiggyBank,
  Scale,
  FileText,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Files,
   FolderOpen,
    CalendarCheck,
    DollarSign,
    ClipboardList,
    FolderTree,
    CalendarDays
} from 'lucide-react';

const CooperativeTaxPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const taxBenefits = [
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Reduced Tax Rates",
      description: "Cooperatives often qualify for special reduced corporate tax rates, typically 15-25% lower than standard rates."
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Exempt Income",
      description: "Patronage dividends and certain member transactions may be tax-exempt under specific conditions."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Deductions",
      description: "Special deductions for member dividends, reserves, and operational expenses unique to cooperatives."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Tax Credits",
      description: "Eligibility for various tax credits including renewable energy, low-income housing, and community development."
    }
  ];

  const requirements = [
    {
      title: "Registration Documents",
      items: ["Cooperative Articles of Incorporation", "Bylaws and amendments", "Certificate of Registration", "Board resolutions"]
    },
    {
      title: "Financial Records",
      items: ["Audited financial statements", "Member transaction records", "Patronage dividend records", "Reserve fund statements"]
    },
    {
      title: "Tax Forms",
      items: ["Form 1120-C (U.S. Income Tax Return for Cooperatives)", "Form 1099-PATR (Patronage Dividends)", "Form 990 (if exempt)", "State-specific tax forms"]
    },
    {
      title: "Compliance Documents",
      items: ["Member meeting minutes", "Board meeting records", "Operational policies", "Compliance certificates"]
    }
  ];

  const services = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Tax Planning",
      description: "Strategic tax planning to maximize benefits and minimize liabilities for your cooperative."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Return Preparation",
      description: "Comprehensive preparation and filing of all cooperative-specific tax forms."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Review",
      description: "Regular compliance checks to ensure adherence to cooperative tax regulations."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Audit Support",
      description: "Expert representation and support during tax audits and inquiries."
    }
  ];

  const faqs = [
    {
      question: "What makes cooperative taxation different from regular corporations?",
      answer: "Cooperatives have unique tax treatment under Subchapter T of the Internal Revenue Code. They can exclude patronage dividends from taxable income and have special rules for calculating taxable income based on member transactions."
    },
    {
      question: "How are patronage dividends taxed?",
      answer: "Patronage dividends are generally tax-deductible for the cooperative when properly allocated to members. Members then report these dividends as income, creating a single level of taxation."
    },
    {
      question: "What tax forms do cooperatives need to file?",
      answer: "Most cooperatives file Form 1120-C, the special income tax return for cooperatives. Exempt cooperatives may file Form 990 series, and all cooperatives must file information returns for patronage dividends."
    },
    {
      question: "Are all cooperatives tax-exempt?",
      answer: "No, most cooperatives are taxable entities. However, certain types like rural electric cooperatives and some agricultural cooperatives may qualify for tax-exempt status under specific sections of the tax code."
    },
    {
      question: "What are the deadlines for cooperative tax filing?",
      answer: "Form 1120-C is generally due by the 15th day of the 4th month after the end of the tax year. For calendar year cooperatives, this is April 15th, with extensions available."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
{/* Hero Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Navigate Cooperative
          <span className="block text-blue-300">
            Taxation with Confidence
          </span>
        </h1>

        <p className="text-lg lg:text-xl mb-8 text-gray-200 max-w-xl">
          Specialized tax services for agricultural, consumer, worker, and
          housing cooperatives. Maximize benefits while ensuring full compliance.
        </p>

        
      </div>

      {/* Right Form */}
      <div className="hidden lg:block">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Get Your Free Consultation
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Cooperative Name"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-green-400"
            />

            <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-green-400">
              <option className="text-gray-800">
                Select Cooperative Type
              </option>
              <option className="text-gray-800">Agricultural</option>
              <option className="text-gray-800">Consumer</option>
              <option className="text-gray-800">Worker</option>
              <option className="text-gray-800">Housing</option>
              <option className="text-gray-800">Credit Union</option>
            </select>

            <button className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-600 rounded-lg font-semibold transition">
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>

  {/* Wave Divider */}
  <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
  <svg
    className="block w-full fill-blue-50"
    viewBox="0 40 1440 80"
    preserveAspectRatio="none"
  >
    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"></path>
  </svg>
</div>
</section>

      {/* Benefits Section with Light Blue BG and Moving Objects */}
<section id="benefits" className="py-24 relative overflow-hidden bg-blue-50">
  {/* Moving Background Objects */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Floating circles */}
    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
    <div className="absolute top-40 right-40 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-4000"></div>
    
    {/* Moving small circles */}
    <div className="absolute top-32 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce-slow"></div>
    <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-cyan-300 rounded-full opacity-20 animate-bounce-slow animation-delay-1000"></div>
    <div className="absolute top-2/3 left-1/2 w-12 h-12 bg-indigo-300 rounded-full opacity-20 animate-bounce-slow animation-delay-2000"></div>
    
    {/* Moving dots */}
    <div className="absolute top-10 right-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-40 animate-ping-slow"></div>
    <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-cyan-500 rounded-full opacity-40 animate-ping-slow animation-delay-1000"></div>
    <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-indigo-500 rounded-full opacity-40 animate-ping-slow animation-delay-2000"></div>
    
    {/* Moving lines */}
    <div className="absolute top-40 left-0 w-40 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-30 animate-slide"></div>
    <div className="absolute bottom-60 right-0 w-60 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full opacity-30 animate-slide animation-delay-3000"></div>
    
    {/* Rotating shapes */}
    <div className="absolute top-60 right-20">
      <div className="w-20 h-20 border-4 border-blue-300 rounded-lg opacity-20 animate-spin-slow"></div>
    </div>
    <div className="absolute bottom-32 left-20">
      <div className="w-16 h-16 border-4 border-cyan-300 rounded-full opacity-20 animate-spin-slow animation-delay-1500"></div>
    </div>
    
    {/* Floating triangles */}
    <div className="absolute top-1/3 left-10">
      <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-300 opacity-20 animate-float"></div>
    </div>
    <div className="absolute bottom-1/4 right-20">
      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-cyan-300 opacity-20 animate-float animation-delay-2500"></div>
    </div>
  </div>

  {/* Diagonal Lines Pattern */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-blue-600" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonalLines)" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        ✦ Tax Advantages
      </span>
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600">
          Tax Benefits
        </span>
        <br />
        <span className="text-gray-800">for Cooperatives</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Unlock <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">exclusive tax advantages</span> designed specifically for 
        cooperative business structures. Save more while staying compliant.
      </p>
      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
        <div className="w-2 h-2 rotate-45 bg-blue-500"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
      </div>
    </div>

    {/* Benefits Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {taxBenefits.map((benefit, index) => (
        <div
          key={index}
          className="group relative"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:border-transparent shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-all duration-500 shadow-lg">
                {benefit.icon}
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
              {benefit.title}
            </h3>
            <p className="text-gray-500 group-hover:text-gray-600 transition-colors leading-relaxed">
              {benefit.description}
            </p>

            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-tr-2xl rounded-bl-2xl"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Statistics Section */}
    <div className="mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Proven <span className="text-blue-600">Results</span>
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Trusted by cooperatives nationwide for maximizing returns
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Percent className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-1">30%</div>
            <div className="text-sm font-medium text-blue-600 mb-1">Average Savings</div>
            <div className="text-xs text-gray-400">Industry leading returns</div>
          </div>
        </div>

        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-1">15+</div>
            <div className="text-sm font-medium text-cyan-600 mb-1">Deduction Types</div>
            <div className="text-xs text-gray-400">Comprehensive coverage</div>
          </div>
        </div>

        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-1">100%</div>
            <div className="text-sm font-medium text-indigo-600 mb-1">Compliance Rate</div>
            <div className="text-xs text-gray-400">Audit-proof filing</div>
          </div>
        </div>

        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
            <div className="text-sm font-medium text-purple-600 mb-1">States Covered</div>
            <div className="text-xs text-gray-400">Nationwide presence</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Animations */}
 <style>{`
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(20px, -20px); }
      50% { transform: translate(40px, 0); }
      75% { transform: translate(20px, 20px); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
    }
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(2); opacity: 0.2; }
      100% { transform: scale(1); opacity: 0.4; }
    }
    @keyframes slide {
      0% { transform: translateX(-50px); }
      50% { transform: translateX(50px); }
      100% { transform: translateX(-50px); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-float { animation: float 15s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
    .animate-ping-slow { animation: ping-slow 3s ease-in-out infinite; }
    .animate-slide { animation: slide 8s ease-in-out infinite; }
    .animate-spin-slow { animation: spin-slow 12s linear infinite; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-1500 { animation-delay: 1.5s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-2500 { animation-delay: 2.5s; }
    .animation-delay-3000 { animation-delay: 3s; }
    .animation-delay-4000 { animation-delay: 4s; }
  `}</style>
</section>

      

      {/* Services Section with Background Image */}
<section id="services" className="py-20 relative overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
      alt="Tax and Accounting Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gray-900/80"></div>
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header - Light text on dark background */}
    <div className="text-center mb-16">
     
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        Our Cooperative Tax Services
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Comprehensive tax solutions tailored to your cooperative's needs
      </p>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
    </div>

    {/* Services Cards - Colorful Icons */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => {
        // Array of colorful gradients for icons
        const iconGradients = [
          "from-blue-500 to-cyan-500",
          "from-purple-500 to-pink-500",
          "from-orange-500 to-red-500",
          "from-green-500 to-emerald-500",
          "from-yellow-500 to-amber-500",
          "from-indigo-500 to-purple-500",
        ];
        
        const gradient = iconGradients[index % iconGradients.length];
        
        return (
          <div 
            key={index} 
            className="group bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40"
          >
            <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
              <div className="text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
            <a href="#" className="text-white/80 text-sm font-semibold hover:text-white flex items-center group/link">
              Learn More 
              <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
            
            {/* Decorative corner with matching gradient */}
            <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-tr-xl rounded-bl-xl transition-opacity`}></div>
          </div>
        );
      })}
    </div>

    {/* Bottom Stats Row - with Glow on Hover */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
        <div className="text-sm text-gray-300">Cooperatives Served</div>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
        <div className="text-sm text-gray-300">Years Experience</div>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2 group-hover:scale-110 transition-transform">50+</div>
        <div className="text-sm text-gray-300">Tax Professionals</div>
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2 group-hover:scale-110 transition-transform">100%</div>
        <div className="text-sm text-gray-300">Compliance Rate</div>
        <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>

    
  </div>
</section>

     {/* FAQ Section */}
<section id="faq" className="py-20 relative overflow-hidden bg-blue-50">
  {/* Visible moving objects */}
  <div className="absolute inset-0">
    {/* Large moving circles */}
    <div className="absolute top-10 left-10 w-48 h-48 border-4 border-blue-300 rounded-full opacity-40 animate-spin-slow"></div>
    <div className="absolute bottom-10 right-10 w-64 h-64 border-4 border-blue-400 rounded-full opacity-40 animate-spin-slow animation-delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-32 h-32 border-4 border-indigo-300 rounded-full opacity-40 animate-pulse-slow"></div>
    
    {/* Moving colored circles */}
    <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-bounce-slow"></div>
    <div className="absolute bottom-20 left-20 w-20 h-20 bg-indigo-400 rounded-full opacity-30 animate-bounce-slow animation-delay-500"></div>
    
    {/* Moving lines */}
    <div className="absolute top-40 left-1/4 w-60 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 animate-slide"></div>
    <div className="absolute bottom-40 right-1/4 w-60 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-40 animate-slide animation-delay-2000"></div>
    
    {/* Floating shapes */}
    <div className="absolute top-1/3 right-20">
      <div className="w-16 h-16 bg-green-400 opacity-30 rotate-45 animate-spin-slow"></div>
    </div>
    <div className="absolute bottom-1/3 left-20">
      <div className="w-20 h-20 bg-yellow-400 opacity-30 rotate-12 animate-pulse-slow"></div>
    </div>
    
    {/* Moving dots */}
    <div className="absolute top-32 left-1/2 w-4 h-4 bg-blue-600 rounded-full opacity-60 animate-float"></div>
    <div className="absolute bottom-32 right-1/2 w-5 h-5 bg-purple-600 rounded-full opacity-60 animate-float animation-delay-1000"></div>
    <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-pink-600 rounded-full opacity-60 animate-float animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-orange-600 rounded-full opacity-60 animate-float animation-delay-3000"></div>
    
    {/* Moving triangles */}
    <div className="absolute top-60 right-40">
      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-blue-500 opacity-40 animate-float"></div>
    </div>
    <div className="absolute bottom-60 left-40">
      <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-purple-500 opacity-40 animate-float animation-delay-1500"></div>
    </div>
    
    {/* Moving rings */}
    <div className="absolute top-1/2 right-1/4">
      <div className="w-12 h-12 border-4 border-green-500 rounded-full opacity-50 animate-ping-slow"></div>
    </div>
    <div className="absolute bottom-1/2 left-1/4">
      <div className="w-16 h-16 border-4 border-orange-500 rounded-full opacity-50 animate-ping-slow animation-delay-2000"></div>
    </div>
  </div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-12">
      
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600">
        Get answers to common questions about cooperative taxation
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-semibold text-gray-900 flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                {index + 1}
              </span>
              {faq.question}
            </span>
            <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
          </button>
          
          {activeFaq === index && (
            <div className="px-6 py-4 bg-blue-50 border-t-2 border-blue-100">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>

    
  </div>

  {/* Animations */}
  <style>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulse-slow {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 0.5; }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    @keyframes slide {
      0% { transform: translateX(-30px); }
      50% { transform: translateX(30px); }
      100% { transform: translateX(-30px); }
    }
    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(10px, -10px); }
      50% { transform: translate(20px, 0); }
      75% { transform: translate(10px, 10px); }
    }
    @keyframes ping-slow {
      0% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.5); opacity: 0.2; }
      100% { transform: scale(1); opacity: 0.5; }
    }
    .animate-spin-slow { animation: spin-slow 12s linear infinite; }
    .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
    .animate-slide { animation: slide 8s ease-in-out infinite; }
    .animate-float { animation: float 10s ease-in-out infinite; }
    .animate-ping-slow { animation: ping-slow 3s ease-in-out infinite; }
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-1500 { animation-delay: 1.5s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-3000 { animation-delay: 3s; }
  `}</style>
</section>


      {/* CTA Section */}
     <section className="py-20 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1565373679580-fc0cb538f49c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Tax Planning Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark Overlay - Pure dark with opacity */}
    <div className="absolute inset-0 bg-black/70"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
      Ready to Optimize Your Cooperative's Taxes?
    </h2>
    
    <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
      Join hundreds of cooperatives that trust us with their tax preparation and planning
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <a
  href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
>
  Schedule Free Consultation
</a>
      
     <a
  href="tel:+11234567890"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
>
  <Phone className="w-5 h-5 mr-2" />
  Call Now: +1 (123) 456-7890
</a>
    </div>

    
  </div>
</section>
      
    </div>
  );
};

export default CooperativeTaxPage;