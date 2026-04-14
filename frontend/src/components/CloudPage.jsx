import React, { useState, useEffect } from "react";
import {
  Cloud,
  Database,
  Cpu,
  Shield,
  Workflow,
  ArrowRight,
  Zap,
  BarChart3,
  Lock,
  RefreshCw,
  CheckCircle,
  Globe,
  Server,
  TrendingUp,
  Clock,
  Award,
  Sparkles,

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

const CloudPage = () => {
  const [animated, setAnimated] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    setAnimated(true);
  }, []);

   const steps = [
    {
      title: "Data Collection",
      desc: "Collect data from apps, CRM, websites, and tools in real-time with intelligent data aggregation.",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      stats: "100+ Data Sources",
      statIcon: <Database className="w-3 h-3" />
    },
    {
      title: "Processing & Automation",
      desc: "Automate workflows and process data instantly using advanced cloud computing systems and AI.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      stats: "< 50ms Processing",
      statIcon: <Sparkles className="w-3 h-3" />
    },
    {
      title: "Secure Storage",
      desc: "Store data securely with automated backups, encryption, and controlled access management.",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      stats: "256-bit Encryption",
      statIcon: <Shield className="w-3 h-3" />
    },
    {
      title: "System Integration",
      desc: "Connect accounting, marketing, and business tools seamlessly with unified API architecture.",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      gradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-100",
      stats: "5000+ Integrations",
      statIcon: <Workflow className="w-3 h-3" />
    },
    {
      title: "Monitoring & Security",
      desc: "Track performance and secure systems using enterprise-grade cloud security standards.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-50 to-violet-50",
      borderColor: "border-indigo-100",
      stats: "24/7 Monitoring",
      statIcon: <CheckCircle className="w-3 h-3" />
    }
  ]; 

  const benefits = [
    {
      title: "Faster Operations",
      desc: "Reduce manual work and speed up processes by up to 75%",
      icon: <Zap className="w-6 h-6" />,
      stat: "75%",
      statLabel: "Faster Processing"
    },
    {
      title: "Real-time Insights",
      desc: "Get live data and analytics for better decision-making",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "99.9%",
      statLabel: "Data Accuracy"
    },
    {
      title: "Data Security",
      desc: "Enterprise-level protection and automated backup systems",
      icon: <Lock className="w-6 h-6" />,
      stat: "256-bit",
      statLabel: "Encryption"
    },
    {
      title: "Scalability",
      desc: "Easily scale your systems as your business grows",
      icon: <RefreshCw className="w-6 h-6" />,
      stat: "∞",
      statLabel: "Unlimited Scale"
    }
  ];

 const tools = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '🔷' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⚙️' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Jenkins', icon: '🤖' },
  { name: 'GitHub Actions', icon: '⚡' },
];

  return (
   <div className="relative w-full overflow-hidden bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200 to-emerald-200 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* HERO Section - Enhanced */}
        <div className="relative w-full overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://kripeshadwani.com/wp-content/uploads/2021/05/cloud-storage-1.jpg')"
    }}
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
  {/* Content */}
  <div
    className={`relative z-10 text-center px-6 py-28 transition-all duration-1000 transform ${
      animated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
  >
    
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
      Cloud Integration in
      <br />
      <span className="text-blue-400">Our Process</span>
    </h1>
    {/* Description */}
    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      We harness cloud technology to automate workflows, connect systems,
      and deliver speed, accuracy, and scalability across your business.
    </p>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</div>


        {/* first session  */}

       <div className="mb-24 mt-16 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative max-w-7xl mx-auto">
      <div className="relative">
        {/* Section Header with Enhanced Design */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Cloud Integration
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A systematic approach to transforming your business operations with cutting-edge 
            cloud technology and intelligent automation
          </p>

          
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group relative transform transition-all duration-700 cursor-pointer ${
                animated ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Animated Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:duration-200`}></div>
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br ${step.gradient} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${step.borderColor} h-full group-hover:border-transparent`}>
                {/* Step Number with Animation */}
                <div className="absolute top-6 right-6">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent border border-gray-200">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {hoveredStep === i && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                </div>
                
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className={`relative ${step.bgColor} rounded-xl w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <div className={`${step.iconColor} transition-transform duration-300`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-2 border-dashed border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Title with Gradient Hover */}
                 <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                   {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.desc}
                </p>
                
                {/* Stats Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200/50 mt-2">
                  <div className={`${step.bgColor} rounded-full p-1.5`}>
                    <div className={`${step.iconColor}`}>
                      {step.statIcon}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">{step.stats}</span>
                </div>
                
                {/* Hover Arrow Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className={`w-5 h-5 ${step.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* FLOW - Enhanced Timeline */}
<div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-gradient-to-r from-blue-100 to-blue-100 rounded-2xl p-8 shadow-sm">          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How It Works</h2>
            <p className="text-gray-600">End-to-end cloud integration workflow</p>
          </div>
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2"></div>
            
            <div className="flex flex-wrap justify-center items-start gap-4 relative">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center flex-1 min-w-[120px] group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mb-3 shadow-lg transform transition-transform group-hover:scale-110 z-10`}>
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700 text-center">{step.title}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-5 h-5 text-gray-300 absolute transform translate-x-full group-hover:text-blue-400 transition-colors" style={{ left: `${(i + 1) * 20}%` }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>



        {/* Key BENEFITS Section */}
      <div className="relative mb-24 mt-16 px-6 py-20 overflow-hidden 
                min-h-[400px] md:min-h-[600px] 
                flex items-center justify-center">
        {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 

  {/* Background Image + Gradient Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `
        linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)),
        url('https://images.stockcake.com/public/8/d/4/8d46f9f6-9e60-44c8-83b7-fa199a51e409_large/team-meeting-discussion-stockcake.jpg')
      `
    }}
  />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Key Benefits
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Why leading businesses choose our cloud integration solutions
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((item, i) => (
        <div
          key={i}
          className={`group relative overflow-hidden
            bg-white/10 backdrop-blur-xl border border-white/20 
            rounded-2xl p-6 
            shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
            hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] 
            transition-all duration-300 transform hover:-translate-y-2
            ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
          style={{ transitionDelay: `${i * 100}ms` }}
        >

          {/* Glass Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20 pointer-events-none"></div>

          {/* Icon */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <div className="text-white">{item.icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-sm mb-4">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</div>

        {/* TECHNOLOGIES - Enhanced Grid */}
      <div className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Technologies We Use
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Leveraging industry-leading cloud platforms and integration tools
    </p>
  </div>

  {/* Tools Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {tools.map((tool, i) => (
      <div
        key={i}
        className={`group relative overflow-hidden 
          bg-gradient-to-br from-white to-gray-50 
          border border-gray-200 
          rounded-xl p-5 
          shadow-md hover:shadow-xl 
          transition-all duration-300 
          transform hover:-translate-y-1 hover:scale-105 
          text-center cursor-pointer
          ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
        style={{ transitionDelay: `${i * 50}ms` }}
      >

        {/* Glow Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-2 relative z-10">

          {/* Icon */}
          <div className="text-blue-600 group-hover:scale-125 group-hover:text-purple-600 transition-all duration-300">
            <span className="text-3xl">{tool.icon}</span>
          </div>

          {/* Name */}
          <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition">
            {tool.name}
          </span>

        </div>

      </div>
    ))}
  </div>

</div>

        {/* CTA - Enhanced */}
       <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] flex items-center justify-center">
          {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 

  {/* Background Image + Gradient Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `
        
        url('https://img.freepik.com/premium-photo/business-background_921096-1222.jpg')
      `
    }}
  />

  {/* Optional Pattern Overlay (extra premium look) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Animated Background Blobs */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
  </div>

  {/* Content */}
  <div className="relative px-8 py-12 md:py-16 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      Ready to Upgrade Your Business with Cloud?
    </h2>

    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
      Let's help you automate, integrate, and scale your operations with our cutting-edge cloud solutions.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact"
        className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Contact Us
        <ArrowRight className="w-4 h-4" />
      </a>

     
    </div>
  </div>

</div>

    
    </div>
    );
};

export default CloudPage;