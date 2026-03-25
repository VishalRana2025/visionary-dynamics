// IndividualTaxationPage.jsx
import React, { useState } from 'react';
import {
  User,
  Calculator,
  FileText,
  Calendar,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Percent,
  Home,
  GraduationCap,
  Heart,
  Car,
  Briefcase,
  TrendingUp,
  PieChart,
  DollarSign,
  Users,
  Award,
  MessageCircle,
  Headphones,
  FileCheck,
  AlertCircle,
  Upload,
  Search,
  Lock,
    Globe,
    BarChart,
        CreditCard,
     Building,
     UserCheck,
     UserX,
     FilePlus,
     FileMinus,
    FileWarning
} from 'lucide-react';

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

const IndividualTaxationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('filers');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Maximum Refunds",
      description: "We identify every deduction and credit you qualify for to maximize your tax refund."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Audit Protection",
      description: "Complete audit support and representation if the IRS has questions about your return."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Average 3-5 day turnaround with electronic filing and direct deposit options."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Year-Round Support",
      description: "Access to tax professionals whenever you have questions, not just during tax season."
    }
  ];

  const filingStatuses = [
    { status: "Single", description: "Unmarried individuals", percentage: "35%" },
    { status: "Married Filing Jointly", description: "Married couples filing together", percentage: "45%" },
    { status: "Married Filing Separately", description: "Married couples filing separately", percentage: "5%" },
    { status: "Head of Household", description: "Unmarried with dependents", percentage: "12%" },
    { status: "Qualifying Widow(er)", description: "With dependent child", percentage: "3%" }
  ];

  const deductions = [
    { name: "Standard Deduction 2024", amount: "$14,600", type: "Single" },
    { name: "Standard Deduction 2024", amount: "$29,200", type: "Married Joint" },
    { name: "Standard Deduction 2024", amount: "$21,900", type: "Head of Household" },
    { name: "Medical Expenses", amount: "7.5% of AGI", type: "Itemized" },
    { name: "State & Local Taxes", amount: "$10,000 limit", type: "Itemized" },
    { name: "Mortgage Interest", amount: "Up to $750,000", type: "Itemized" }
  ];

  const credits = [
    {
      icon: <Users className="w-6 h-6" />,
      name: "Child Tax Credit",
      amount: "Up to $2,000 per child",
      description: "For qualifying children under 17"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      name: "Education Credits",
      amount: "Up to $2,500",
      description: "American Opportunity & Lifetime Learning"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Earned Income Credit",
      amount: "Up to $7,430",
      description: "For low to moderate income workers"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Child & Dependent Care",
      amount: "Up to $3,000",
      description: "For care expenses while working"
    }
  ];

  const documents = [
    {
      category: "Income Documents",
      items: [
        "W-2 forms from all employers",
        "1099-NEC for freelance work",
        "1099-INT for interest income",
        "1099-DIV for dividends",
        "K-1 forms for partnerships",
        "Social Security benefits statement"
      ]
    },
    {
      category: "Deduction Documents",
      items: [
        "Mortgage interest statement (1098)",
        "Property tax receipts",
        "Charitable donation receipts",
        "Medical expense records",
        "Student loan interest statement",
        "IRA contribution records"
      ]
    },
    {
      category: "Personal Documents",
      items: [
        "Social Security cards",
        "Driver's licenses/ID",
        "Previous year's tax return",
        "Identity Protection PIN",
        "Bank account/routing numbers",
        "Health insurance statements"
      ]
    }
  ];

  const faqs = [
    {
      question: "When is the tax filing deadline for 2024?",
      answer: "The tax filing deadline for 2023 returns is April 15, 2024. You can request an automatic 6-month extension to October 15, 2024, but any taxes owed are still due by April 15."
    },
    {
      question: "What's the difference between a tax credit and a tax deduction?",
      answer: "A tax credit directly reduces your tax bill dollar-for-dollar, while a tax deduction reduces your taxable income. For example, a $1,000 tax credit saves you $1,000 in taxes, while a $1,000 deduction saves you $220-370 depending on your tax bracket."
    },
    {
      question: "How long should I keep my tax records?",
      answer: "Generally, keep tax records for 3-7 years. The IRS can audit returns for up to 3 years, or 6 years if you underreport income by more than 25%. Keep records related to property indefinitely until you sell it."
    },
    {
      question: "What if I can't pay my tax bill?",
      answer: "The IRS offers payment plans including short-term extensions (up to 120 days) and long-term installment agreements. You can also apply for an Offer in Compromise if you qualify based on your financial situation."
    },
    {
      question: "Do I need to file if I didn't earn much income?",
      answer: "Filing requirements depend on your age, filing status, and income type. For 2023, single filers under 65 generally need to file if gross income exceeds $13,850. Even if not required, you may want to file to claim refundable credits."
    }
  ];

  const brackets = [
    { rate: "10%", single: "$0 - $11,000", married: "$0 - $22,000", head: "$0 - $15,700" },
    { rate: "12%", single: "$11,001 - $44,725", married: "$22,001 - $89,450", head: "$15,701 - $59,850" },
    { rate: "22%", single: "$44,726 - $95,375", married: "$89,451 - $190,750", head: "$59,851 - $95,350" },
    { rate: "24%", single: "$95,376 - $182,100", married: "$190,751 - $364,200", head: "$95,351 - $182,100" },
    { rate: "32%", single: "$182,101 - $231,250", married: "$364,201 - $462,500", head: "$182,101 - $231,250" },
    { rate: "35%", single: "$231,251 - $578,125", married: "$462,501 - $693,750", head: "$231,251 - $578,100" },
    { rate: "37%", single: "$578,126+", married: "$693,751+", head: "$578,101+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dark Overlay */}
      <section className="relative min-h-[600px] py-24 flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Person working on taxes" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Stress-Free Tax Filing
                <span className="block text-gray-300">For Individuals & Families</span>
              </h1>
            </div>

            {/* Tax Calculator Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Estimate Your Refund</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Annual Income</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="75,000"
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Filing Status</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-white">
                    <option className="bg-gray-900 text-white">Single</option>
                    <option className="bg-gray-900 text-white">Married Filing Jointly</option>
                    <option className="bg-gray-900 text-white">Head of Household</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4">
                  Calculate Estimate
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  *Estimate only. Final refund depends on your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
      </section>

      {/* Benefits Section - Transparent Moving Objects */}
      <section className="py-20 relative overflow-hidden bg-blue-100">
        {/* Transparent Moving Background Objects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles - transparent */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/15 rounded-full mix-blend-multiply animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/12 rounded-full mix-blend-multiply animate-float animation-delay-2000"></div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-indigo-200/10 rounded-full mix-blend-multiply animate-float animation-delay-4000"></div>
          
          {/* Small moving dots - transparent */}
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-cyan-400/18 rounded-full animate-bounce-slow animation-delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-indigo-400/15 rounded-full animate-bounce-slow animation-delay-2000"></div>
          
          {/* Moving lines - transparent */}
          <div className="absolute top-60 left-0 w-40 h-px bg-gradient-to-r from-blue-400/20 to-transparent rounded-full animate-slide"></div>
          <div className="absolute bottom-60 right-0 w-60 h-px bg-gradient-to-l from-cyan-400/20 to-transparent rounded-full animate-slide animation-delay-3000"></div>
          
          {/* Floating shapes - transparent */}
          <div className="absolute top-1/3 right-20">
            <div className="w-12 h-12 border border-blue-300/10 rounded-lg animate-spin-slow"></div>
          </div>
          <div className="absolute bottom-1/3 left-20">
            <div className="w-16 h-16 border border-cyan-300/10 rounded-full animate-spin-slow animation-delay-1500"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Smart Tax Filing
              </span>
              <br />
              <span className="text-gray-800">for Individuals</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const gradients = [
                "from-blue-500 to-cyan-500",
                "from-cyan-500 to-teal-500",
                "from-indigo-500 to-blue-500",
                "from-sky-500 to-indigo-500"
              ];
              
              const bgGradients = [
                "bg-gradient-to-br from-blue-100/80 to-cyan-100/60",
                "bg-gradient-to-br from-cyan-100/80 to-teal-100/60",
                "bg-gradient-to-br from-indigo-100/80 to-blue-100/60",
                "bg-gradient-to-br from-sky-100/80 to-indigo-100/60"
              ];
              
              const gradient = gradients[index % gradients.length];
              const bgGradient = bgGradients[index % bgGradients.length];
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br ${bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border overflow-hidden`}
                >
                  {/* Decorative background pattern - transparent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                  
                  {/* Icon with gradient */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {benefit.icon}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${gradient} transition-all`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Bottom bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  {/* Number badge */}
                  <div className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12 group-hover:rotate-0`}>
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Row - Transparent */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-200/30">
              <div className="text-3xl font-black text-blue-600">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-cyan-200/30">
              <div className="text-3xl font-black text-cyan-600">$2.3B</div>
              <div className="text-sm text-gray-600 mt-1">Refunds Secured</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-indigo-200/30">
              <div className="text-3xl font-black text-indigo-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-200/30">
              <div className="text-3xl font-black text-blue-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
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
            50% { transform: translateY(-20px); }
          }
          @keyframes slide {
            0% { transform: translateX(-30px); }
            50% { transform: translateX(30px); }
            100% { transform: translateX(-30px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-float { animation: float 15s ease-in-out infinite; }
          .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
          .animate-slide { animation: slide 8s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 12s linear infinite; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-1500 { animation-delay: 1.5s; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-3000 { animation-delay: 3s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>

      {/* Documents Checklist - Transparent Background */}
      <section className="relative w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80"
      alt="Tax documents background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-white mt-6 lg:mt-10">
    
    {/* Header */}
    <div className="text-center mb-16 lg:mb-20">
      <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-blue-300 rounded-full text-sm font-semibold mb-6">
        Get Organized
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        What You'll Need
      </h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Use our checklist to gather everything before you start.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {documents.map((section, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-bold mb-6 text-white">
            {section.category}
          </h3>

          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>
<div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</section>

      {/* Documents Checklist - Colorful Rainbow Style with Transparent Elements */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100">
        {/* Transparent floating colorful shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300/8 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-yellow-300/8 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-green-300/8 rounded-full animate-float animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/8 rounded-full animate-float animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                What You'll Need
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything organized in one colorful place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((section, idx) => {
              const themes = [
                {
                  gradient: "from-red-500 to-orange-500",
                  lightBg: "bg-gradient-to-br from-red-50/80 to-orange-50/70",
                  border: "border-red-200/50",
                  iconBg: "bg-red-100/60",
                  iconColor: "text-red-600",
                  badge: "bg-red-100/60 text-red-700",
                },
                {
                  gradient: "from-blue-500 to-cyan-500",
                  lightBg: "bg-gradient-to-br from-blue-50/80 to-cyan-50/70",
                  border: "border-blue-200/50",
                  iconBg: "bg-blue-100/60",
                  iconColor: "text-blue-600",
                  badge: "bg-blue-100/60 text-blue-700",
                },
                {
                  gradient: "from-purple-500 to-pink-500",
                  lightBg: "bg-gradient-to-br from-purple-50/80 to-pink-50/70",
                  border: "border-purple-200/50",
                  iconBg: "bg-purple-100/60",
                  iconColor: "text-purple-600",
                  badge: "bg-purple-100/60 text-purple-700",
                }
              ];
              
              const theme = themes[idx];
              
              return (
                <div 
                  key={idx} 
                  className={`group ${theme.lightBg} backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${theme.border} relative overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${theme.gradient}`}></div>
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/30 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/30 rounded-full"></div>
                  
                  <div className="relative flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {idx === 0 && <FileText className="w-8 h-8" />}
                      {idx === 1 && <DollarSign className="w-8 h-8" />}
                      {idx === 2 && <User className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                      <span className={`inline-block mt-1 text-xs font-bold px-3 py-1 rounded-full ${theme.badge}`}>
                        {section.items.length} items
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, i) => {
                      const itemColors = [
                        "text-red-600",
                        "text-orange-600",
                        "text-yellow-600",
                        "text-green-600",
                        "text-blue-600",
                        "text-purple-600"
                      ];
                      
                      return (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <div className={`w-5 h-5 ${itemColors[i % itemColors.length]} flex-shrink-0 mt-0.5`}>
                            <div className={`w-5 h-5 border-2 ${itemColors[i % itemColors.length].replace('text', 'border')} rounded group-hover/item:bg-${itemColors[i % itemColors.length].replace('text', '')} transition-colors`}></div>
                          </div>
                          <span className="text-gray-700 text-sm flex-1">{item}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="relative pt-4 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-500">Progress</span>
                      <span className={`font-bold ${theme.iconColor}`}>0/{section.items.length}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200/50 rounded-full overflow-hidden">
                      <div className={`h-full w-0 bg-gradient-to-r ${theme.gradient} rounded-full transition-all duration-500 group-hover:w-1/2`}></div>
                    </div>
                  </div>

                  <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12 group-hover:rotate-0`}>
                    {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section - Transparent Moving Objects */}
     <section className="relative w-full py-20 overflow-hidden bg-blue-100">
      
        {/* Transparent floating colorful shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300/8 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-yellow-300/8 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-green-300/8 rounded-full animate-float animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/8 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about individual taxation
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-gray-200/50">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/90 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 py-4 bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Dark Overlay */}
      <section className="py-20 relative overflow-hidden">
        {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Tax consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Maximize Your Tax Refund?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied clients who trust us with their taxes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Start Your Return
            </a>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 (123) 456-7890
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>✓ Free Consultation</span>
            <span>✓ Secure Upload</span>
            <span>✓ Maximum Refund Guarantee</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualTaxationPage;