// BusinessAnalystPage.jsx
import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const BusinessAnalystPage = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with advanced analytics and visualization techniques."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Research",
      description: "Comprehensive market analysis to identify opportunities and optimize business strategies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stakeholder Management",
      description: "Bridge the gap between technical teams and business stakeholders for seamless communication."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Process Optimization",
      description: "Streamline business processes to increase efficiency and reduce operational costs."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Develop data-driven strategies that align with your business goals and objectives."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Requirements Analysis",
      description: "Gather and document precise business requirements for successful project delivery."
    }
  ];

  const skills = [
    { name: "Data Analysis", percentage: 95 },
    { name: "Business Strategy", percentage: 90 },
    { name: "Requirements Gathering", percentage: 92 },
    { name: "Process Modeling", percentage: 88 },
    { name: "Stakeholder Management", percentage: 94 }
  ];

  const stats = [
    { icon: <Award />, value: "50+", label: "Projects Completed" },
    { icon: <Users />, value: "30+", label: "Happy Clients" },
    { icon: <Clock />, value: "5+", label: "Years Experience" },
    { icon: <TrendingUp />, value: "95%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "The business analysis provided was instrumental in restructuring our operations. Highly recommended!",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateLabs",
      content: "Exceptional analytical skills and deep understanding of business needs. Transformed our decision-making process.",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    {/* Hero Section */}
<section className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden -mb-1">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://tse1.mm.bing.net/th/id/OIP.GmzeuKcTXVM4aCBWFgbkRAHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3" 
      alt="Business Analytics Background" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80 z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          Business Analyst
          <span className="block text-2xl lg:text-3xl mt-4 text-blue-200">
            Turning Data into Decisions
          </span>
        </h1>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl text-gray-200">
          Unlock your business potential with data-driven insights and strategic analysis. 
          Transform complex problems into actionable solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
  href="https://api.visionarydynamicsas.com/widget/booking/WvhcpLf9ARBqdkX75EQk"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
>
  Schedule Consultation
</a>
         
        </div>
      </div>

     <div className="hidden lg:block relative">
  <img 
    src="https://img.freepik.com/premium-vector/comprehensive-analytics-dashboard-ui-with-diverse-data-visualization-user-interface-analytics-dashboard-featuring-variety-graphs-charts-efficient-data-management-monitoring_924480-25.jpg" 
    alt="Business Analytics" 
    className="rounded-lg shadow-2xl animate-float"
  />
</div>
    </div>
  </div>

 {/* Wave Decoration */}
<div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
  <svg
    className="block w-full fill-blue-50"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
  </svg>
</div>
</section>

     {/* Services Section */}
<section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue to-sky-50">
  {/* Moving Objects - Animated Bubbles */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Bubble 1 */}
    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float-slow"></div>
    
    {/* Bubble 2 */}
    <div className="absolute top-40 right-20 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl animate-float-medium"></div>
    
    {/* Bubble 3 */}
    <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-float-fast"></div>
    
   {/* Floating Particles */}
<div className="absolute inset-0 overflow-hidden">
  {/* Existing particles */}
  <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-ping-slow"></div>
  <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-sky-400/20 rounded-full animate-ping-slow animation-delay-1000"></div>
  <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-indigo-400/20 rounded-full animate-ping-slow animation-delay-2000"></div>
  
  {/* Additional floating objects - Small dots */}
  <div className="absolute top-20 left-[10%] w-1 h-1 bg-blue-300/30 rounded-full animate-float-particle"></div>
  <div className="absolute top-40 left-[20%] w-1.5 h-1.5 bg-sky-300/30 rounded-full animate-float-particle animation-delay-500"></div>
  <div className="absolute top-60 left-[30%] w-2 h-2 bg-cyan-300/30 rounded-full animate-float-particle animation-delay-1000"></div>
  <div className="absolute top-80 left-[40%] w-1 h-1 bg-indigo-300/30 rounded-full animate-float-particle animation-delay-1500"></div>
  <div className="absolute top-100 left-[50%] w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-float-particle animation-delay-2000"></div>
  
  {/* Medium dots - Right side */}
  <div className="absolute top-32 right-[15%] w-2 h-2 bg-blue-300/25 rounded-full animate-float-slow"></div>
  <div className="absolute top-52 right-[25%] w-2.5 h-2.5 bg-sky-300/25 rounded-full animate-float-medium animation-delay-500"></div>
  <div className="absolute top-72 right-[35%] w-1.5 h-1.5 bg-cyan-300/25 rounded-full animate-float-fast animation-delay-1000"></div>
  <div className="absolute top-92 right-[45%] w-3 h-3 bg-indigo-300/25 rounded-full animate-float-slow animation-delay-1500"></div>
  
  {/* Floating circles with trails */}
  <div className="absolute top-[15%] left-[15%] w-16 h-16 border border-blue-200/20 rounded-full animate-spin-slow">
    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-300/40 rounded-full"></div>
  </div>
  <div className="absolute bottom-[25%] right-[20%] w-24 h-24 border border-sky-200/20 rounded-full animate-spin-slower">
    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-sky-300/40 rounded-full"></div>
  </div>
  
  {/* Floating plus signs */}
  <div className="absolute top-[30%] left-[60%] text-blue-200/30 text-2xl animate-float-slow">+</div>
  <div className="absolute bottom-[40%] right-[30%] text-sky-200/30 text-3xl animate-float-medium animation-delay-1000">+</div>
  
  {/* Floating diamonds */}
  <div className="absolute top-[70%] left-[80%] w-2 h-2 bg-blue-300/30 rotate-45 animate-float-particle"></div>
  <div className="absolute top-[85%] left-[10%] w-3 h-3 bg-sky-300/30 rotate-45 animate-float-particle animation-delay-2000"></div>
  
  {/* Floating stars */}
  <div className="absolute top-[45%] left-[85%] text-yellow-200/30 text-xl animate-pulse-slow">✦</div>
  <div className="absolute top-[55%] left-[5%] text-yellow-200/30 text-lg animate-pulse-slow animation-delay-1000">✦</div>
  
  {/* Additional ping particles */}
  <div className="absolute top-[10%] left-[90%] w-1 h-1 bg-purple-400/20 rounded-full animate-ping-slow animation-delay-500"></div>
  <div className="absolute top-[90%] left-[70%] w-2 h-2 bg-pink-400/20 rounded-full animate-ping-slow animation-delay-1500"></div>
  <div className="absolute top-[20%] left-[95%] w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-ping-slow animation-delay-2500"></div>
  <div className="absolute top-[80%] left-[40%] w-1 h-1 bg-cyan-400/20 rounded-full animate-ping-slow animation-delay-3000"></div>
  
  {/* Floating rings */}
  <div className="absolute top-[60%] left-[70%] w-8 h-8 border border-blue-200/10 rounded-full animate-ping-slow"></div>
  <div className="absolute top-[30%] left-[80%] w-12 h-12 border border-sky-200/10 rounded-full animate-ping-slow animation-delay-2000"></div>
  
  {/* Moving dots in grid pattern */}
  {[...Array(8)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-300/20 rounded-full"
      style={{
        top: `${10 + i * 10}%`,
        left: `${5 + i * 3}%`,
        animation: `float-particle ${6 + i}s ease-in-out infinite`,
        animationDelay: `${i * 0.3}s`
      }}
    />
  ))}
  
  {[...Array(8)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-sky-300/20 rounded-full"
      style={{
        top: `${15 + i * 8}%`,
        right: `${8 + i * 4}%`,
        animation: `float-particle ${7 + i}s ease-in-out infinite`,
        animationDelay: `${i * 0.5}s`
      }}
    />
  ))}
  
  {/* Floating dashes */}
  <div className="absolute top-[25%] left-[45%] w-4 h-0.5 bg-blue-200/20 rounded-full animate-float-particle"></div>
  <div className="absolute top-[75%] left-[55%] w-6 h-0.5 bg-sky-200/20 rounded-full animate-float-particle animation-delay-1500"></div>
  
  {/* Tiny sparkles */}
  <div className="absolute top-[35%] left-[25%] text-white/20 text-xs animate-pulse">✨</div>
  <div className="absolute top-[65%] left-[75%] text-white/20 text-xs animate-pulse animation-delay-2000">✨</div>
</div>
</div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
     
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Comprehensive Business
        <span className="block text-blue-600">Analysis Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        I provide end-to-end business analysis solutions tailored to your specific needs
      </p>
    </div>
    
    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        // Array of vibrant gradient colors for icons
        const iconGradients = [
          "from-purple-500 to-pink-500",
          "from-green-500 to-emerald-500",
          "from-orange-500 to-red-500",
          "from-yellow-500 to-amber-500",
          "from-indigo-500 to-purple-500",
          "from-pink-500 to-rose-500"
        ];
        
        const gradientClass = iconGradients[index % iconGradients.length];
        
        return (
          <div 
            key={index} 
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-sky-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon with colorful gradient */}
            <div className="relative p-8">
              <div className="relative mb-6 inline-block group-hover:animate-bounce-subtle">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>  
              {/* Link with colorful hover */}
              <a 
                href="#" 
                className={`inline-flex items-center font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${gradientClass} transition-all duration-300`}
              >
              </a>
            </div>
            
            {/* Bottom gradient bar that matches icon color */}
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        );
      })}
    </div>

  </div>
</section>



      {/* Stats Section */}
<section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
  {/* Moving Background Objects */}
  <div className="absolute inset-0 overflow-hidden">
   
    
    {/* Floating particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 6}s`
        }}
      />
    ))}
    
    {/* Moving waves */}
    <svg className="absolute bottom-0 left-0 w-full opacity-30 animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#3b82f6" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        <animate 
          attributeName="d" 
          dur="20s" 
          repeatCount="indefinite"
          values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,218.7C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </path>
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
    
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Our Impact in Numbers
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Delivering measurable results for businesses worldwide
      </p>
    </div>
    
    {/* Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        // Array of vibrant colors for icons
        const iconColors = [
          "from-purple-500 to-pink-500",
          "from-green-500 to-emerald-500",
          "from-orange-500 to-red-500",
          "from-yellow-500 to-amber-500",
          "from-indigo-500 to-purple-500",
          "from-pink-500 to-rose-500",
          "from-cyan-500 to-blue-500",
          "from-fuchsia-500 to-purple-500"
        ];
        
        const gradientClass = iconColors[index % iconColors.length];
        
        return (
          <div 
            key={index} 
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-white/60 transform hover:-translate-y-1"
          >
            <div className="relative p-8">
              {/* Icon with colorful gradient - reduced blur */}
              <div className="relative mb-6 flex justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-full blur-md opacity-30 group-hover:opacity-40 transition-all`}></div>
                <div className={`relative w-20 h-20 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center text-white text-3xl shadow-sm transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
                  {stat.icon}
                </div>
                {/* Small sparkle dot - reduced opacity */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/70 rounded-full animate-ping"></div>
              </div>
              
              {/* Value */}
              <div className="text-center">
                <div className={`text-4xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${gradientClass} transition-all duration-500`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      

      {/* Skills Section */}
     <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
  {/* Moving Background Objects */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Large floating bubbles */}
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-slow"></div>
    <div className="absolute top-40 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl animate-float-medium"></div>
    <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-float-fast"></div>
    
    {/* Floating particles */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-ping-slow"></div>
    <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-sky-400/20 rounded-full animate-ping-slow animation-delay-1000"></div>
    <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400/20 rounded-full animate-ping-slow animation-delay-2000"></div>
    
    {/* Additional floating objects */}
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-float-particle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 6}s`
        }}
      />
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


    
    {/* Section Header */}
    <div className="text-center mb-12">
      
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Technical & Business
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
          Expertise
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        With years of experience across various industries, I bring a unique blend of 
        technical knowledge and business acumen to every project.
      </p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Column - Skills */}
      <div className="space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-sky-600 rounded-full"></span>
            Professional Skills
          </h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-blue-600 font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 relative"
                    style={{ 
                      width: `${skill.percentage}%`,
                      background: 'linear-gradient(90deg, #3b82f6, #0ea5e9)'
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Right Column - Core Competencies */}
      <div className="space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-sky-600 rounded-full"></span>
            Core Competencies
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Agile Methodologies", icon: "🔄", color: "from-purple-500 to-pink-500" },
              { name: "SQL & Databases", icon: "🗄️", color: "from-blue-500 to-cyan-500" },
              { name: "Data Visualization", icon: "📈", color: "from-green-500 to-emerald-500" },
              { name: "Process Modeling", icon: "⚙️", color: "from-orange-500 to-red-500" },
              { name: "Requirements Management", icon: "📋", color: "from-indigo-500 to-purple-500" },
              { name: "Risk Analysis", icon: "⚠️", color: "from-yellow-500 to-amber-500" },
              { name: "Cost-Benefit Analysis", icon: "💰", color: "from-teal-500 to-cyan-500" },
              { name: "Stakeholder Management", icon: "🤝", color: "from-pink-500 to-rose-500" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-blue-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`}></div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {item.name}
                  </span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     

     {/* Contact Section */}
<section className="relative py-20 text-white overflow-hidden">
  
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop')"
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12">
      
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Let's Discuss Your Business Needs
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Ready to take your business to the next level? Get in touch for a free consultation.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@visionarydynamics.com" className="hover:text-white">
    connect@visionarydynamicsas.com
  </a>
          </div>
          <div className="flex items-center space-x-4">
             <a
                         href="tel:+17275649476"
                         className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
                       >
                         <Phone className="w-5 h-5 mr-2" />
                         Call Now: +1(727) 564-9476
                       </a>
          </div>
          <div className="flex items-center space-x-4">
           <li className="flex items-start gap-3">
  <MapPin size={16} className="text-sky-400 mt-1" />
  <a
  href="https://www.google.com/maps?q=7901+4th+St+N+STE+300+St+Petersburg+Florida+33702+USA"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white"
>
  7901 4th St N STE 300 St. Petersburg, Florida-33702 USA <br />
  St. Petersburg, Florida-33702 USA
</a>
</li>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white"
          />
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white"
          />
          <textarea 
            rows="4"
            placeholder="Tell me about your project"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white"
          ></textarea>
          <button className="w-full px-6 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>
    </div>
  );
};

export default BusinessAnalystPage;