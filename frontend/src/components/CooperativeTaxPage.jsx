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

export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px] xl:h-[200px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
      </svg>
    </div>
  );
};

const CooperativeTaxPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const taxBenefits = [
    {
      icon: <Percent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Reduced Tax Rates",
      description: "Cooperatives often qualify for special reduced corporate tax rates, typically 15-25% lower than standard rates."
    },
    {
      icon: <PiggyBank className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Exempt Income",
      description: "Patronage dividends and certain member transactions may be tax-exempt under specific conditions."
    },
    {
      icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Deductions",
      description: "Special deductions for member dividends, reserves, and operational expenses unique to cooperatives."
    },
    {
      icon: <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
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
      icon: <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Tax Planning",
      description: "Strategic tax planning to maximize benefits and minimize liabilities for your cooperative."
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Return Preparation",
      description: "Comprehensive preparation and filing of all cooperative-specific tax forms."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Compliance Review",
      description: "Regular compliance checks to ensure adherence to cooperative tax regulations."
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
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
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section - Responsive */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg')",
        }}
      >
       <div className="absolute inset-0 bg-black/75 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Navigate Cooperative
                <span className="block text-blue-300 mt-2 sm:mt-3">
                  Taxation with Confidence
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0">
                Specialized tax services for agricultural, consumer, worker, and
                housing cooperatives. Maximize benefits while ensuring full compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
               <a
  href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-center"
>
  Schedule Free Consultation
</a>
                <a
                  href="tel:+17275649476"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 gap-2"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now: +1(727) 564-9476
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
  <WaveTransition />
</div>
      </section>

      {/* Benefits Section - Responsive */}
      <section id="benefits" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-blue-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              ✦ Tax Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600">
                Tax Benefits
              </span>
              <br />
              <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl">for Cooperatives</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Unlock <span className="font-semibold text-blue-600 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg">exclusive tax advantages</span> designed specifically for 
              cooperative business structures. Save more while staying compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {taxBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-100 hover:border-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-4 sm:mb-5 md:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section - Responsive */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                Proven <span className="text-blue-600">Results</span>
              </h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto px-4">
                Trusted by cooperatives nationwide for maximizing returns
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">30%</div>
                <div className="text-xs sm:text-sm font-medium text-blue-600 mb-0.5">Average Savings</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Industry leading returns</div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">15+</div>
                <div className="text-xs sm:text-sm font-medium text-cyan-600 mb-0.5">Deduction Types</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Comprehensive coverage</div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">100%</div>
                <div className="text-xs sm:text-sm font-medium text-indigo-600 mb-0.5">Compliance Rate</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Audit-proof filing</div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center">
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-0.5 sm:mb-1">50+</div>
                <div className="text-xs sm:text-sm font-medium text-purple-600 mb-0.5">States Covered</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Nationwide presence</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -10px); }
            50% { transform: translate(20px, 0); }
            75% { transform: translate(10px, 10px); }
          }
          @media (min-width: 768px) {
            @keyframes float {
              0%, 100% { transform: translate(0, 0); }
              25% { transform: translate(20px, -20px); }
              50% { transform: translate(40px, 0); }
              75% { transform: translate(20px, 20px); }
            }
          }
          .animate-float { animation: float 15s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* Services Section - Responsive */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
       
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Tax and Accounting Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our Cooperative Tax Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive tax solutions tailored to your cooperative's needs
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {services.map((service, index) => {
              const iconGradients = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-orange-500 to-red-500",
                "from-green-500 to-emerald-500",
              ];
              const gradient = iconGradients[index % iconGradients.length];
              
              return (
                <div 
                  key={index} 
                  className="group bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Cooperatives Served</div>
            </div>
            <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Tax Professionals</div>
            </div>
            <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-gray-300">Compliance Rate</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* FAQ Section - Responsive */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
              Get answers to common questions about cooperative taxation
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-blue-50 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600 transition-transform flex-shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-blue-50 border-t border-blue-100">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full -mt-2 sm:-mt-3 z-10">
          <WaveTransition direction="top" />
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565373679580-fc0cb538f49c?q=80&w=1170&auto=format&fit=crop"
            alt="Tax Planning Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-6 sm:mt-8 md:mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            Ready to Optimize Your Cooperative's Taxes?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto px-4">
            Join hundreds of cooperatives that trust us with their tax preparation and planning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-center"
            >
              Schedule Free Consultation
            </a>
            
            <a
              href="tel:+17275649476"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 gap-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now: +1(727) 564-9476
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CooperativeTaxPage;