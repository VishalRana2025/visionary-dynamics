import React from 'react';
import {
  Shield,
  Smartphone,
  Lock,
  Cloud,
  Users,
  Settings,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  BarChart3,
  AlertCircle,
  ChevronRight
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
 
const MDMPage = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption and threat detection"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Multi-OS Support",
      description: "Manage iOS, Android, Windows, and macOS devices seamlessly"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Remote Lock & Wipe",
      description: "Remotely lock or wipe devices in case of loss or theft"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Management",
      description: "Centralized cloud-based console for easy management"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Management",
      description: "Role-based access control and user group management"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Policy Enforcement",
      description: "Automated policy deployment and compliance checking"
    }
  ];
 
  const benefits = [
    "Reduce security risks by 85%",
    "Save 40% on IT management costs",
    "99.9% device compliance rate",
    "24/7 real-time monitoring"
  ];
 
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Devices Managed" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];
 
  const pricingPlans = [
    {
      name: "Starter",
      price: "$3",
      period: "per device/month",
      features: [
        "Basic device management",
        "Security policies",
        "5GB cloud storage",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$6",
      period: "per device/month",
      features: [
        "Advanced security features",
        "Containerization",
        "25GB cloud storage",
        "Priority support",
        "API access"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Unlimited devices",
        "Advanced analytics",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee"
      ],
      highlighted: false
    }
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     
{/* Hero Section */}
<section className="relative py-20 md:py-28 overflow-hidden">
<div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">

  <WaveTransition />
</div>
 
  {/* Background */}
  <div className="absolute inset-0">
 
  {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=2000&q=80')",
  }}
></div>
 
{/* Dark Black Overlay */}
<div className="absolute inset-0 bg-black/80"></div>
 
    {/* Pattern Overlay - Changed to network/dots pattern */}
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ccff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
    </div>
 
    {/* Additional Abstract Lines for Tech Feel */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-blue-400/30 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-teal-400/20 rounded-full"></div>
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
    </div>
 
  </div>
 
  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
 
      {/* Heading - Updated for Managed Network Services */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        Managed Network{" "}
        <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Services
        </span>
      </h1>
 
      {/* Description - New addition for context */}
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        24/7 proactive monitoring, enterprise-grade security, and seamless connectivity
        for businesses of all sizes.
      </p>
 
      {/* Feature Pills - New addition
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {['99.9% Uptime', '24/7 Monitoring', 'Enterprise Security', 'Cloud Integration'].map((feature, index) => (
          <span key={index} className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
            {feature}
          </span>
        ))}
      </div> */}
 
      {/* Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
  href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
>
  Start Your Consultation
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</a>
        
      </div>
 
   
    </div>
  </div>
 
  {/* Bottom gradient fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
 
</section>
 
 
  {/* Hero Section */}
<section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100 to-purple-50">
  {/* Background Shapes */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>
 
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
    {/* LEFT CONTENT */}
    <div>
      {/* Small Heading */}
      <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wide">
        VISIONARY DYNAMICS
      </p>
 
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Empowering businesses with seamless connectivity and peace of mind, one
        network at a time.
      </h1>
 
      {/* Paragraph */}
      <p className="text-gray-600 leading-relaxed mb-6">
        Managed network services encompass a spectrum of offerings tailored to
        meet the specific needs of website owners. From proactive monitoring and
        maintenance to swift troubleshooting and resolution, these services
        provide a comprehensive solution to ensure optimal performance and
        security for websites of all sizes.
      </p>
 
      <p className="text-gray-600 leading-relaxed mb-8">
        With experts vigilantly monitoring network activity and swiftly
        addressing any issues that arise, website owners can rest assured knowing
        that their online presence is in capable hands. Managed services often
        include advanced security measures like intrusion detection, firewalls
        and malware protection.
      </p>
 
      {/* Button */}
      <a
       href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
       target="_blank"
       rel="noopener noreferrer"
       className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all"
     >
       Free Consultation
       <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
     </a>
    </div>
 
   {/* RIGHT SIDE DASHBOARD */}
       <div className="relative">
   
         {/* Glass Card */}
         <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-8">
   
           <div className="flex items-center justify-between mb-6">
             <h3 className="font-semibold text-gray-800">Device Management</h3>
             <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
               Active
             </span>
           </div>
   
           {/* Stats */}
           <div className="grid grid-cols-2 gap-4 mb-6">
   
             <div className="bg-blue-50 p-4 rounded-xl">
               <p className="text-sm text-blue-600">Total Devices</p>
               <h2 className="text-2xl font-bold text-gray-900">1,284</h2>
             </div>
   
             <div className="bg-green-50 p-4 rounded-xl">
               <p className="text-sm text-green-600">Compliance</p>
               <h2 className="text-2xl font-bold text-gray-900">98%</h2>
             </div>
   
           </div>
   
           {/* Device List */}
           <div className="space-y-3">
   
             {[1,2,3].map((item)=>(
               <div key={item} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
   
                 <div className="flex items-center">
                   <Smartphone className="w-4 h-4 text-gray-400 mr-2"/>
                   <span className="text-sm text-gray-600">
                     iPhone 13 Pro
                   </span>
                 </div>
   
                 <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                   Active
                 </span>
   
               </div>
             ))}
   
           </div>
   
           {/* Footer */}
           <div className="flex items-center justify-between pt-6 mt-6 border-t">
   
             <div className="flex items-center text-sm text-gray-600">
               <Lock className="w-4 h-4 mr-2"/>
               Secured Devices
             </div>
             
             <Shield className="w-5 h-5 text-blue-600"/>
   
           </div>
   
         </div>
         
   
         {/* Floating Card */}
         <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center">
           <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
           <span className="text-xs font-semibold text-gray-700">
             Real-time Sync
           </span>
         </div>
   
       </div>
  </div>
</section>
 
{/* Benefits Section */}
<section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
 {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Add Font Awesome in your head section or component */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
 
  {/* Abstract Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>
 
  {/* Subtle Grid Pattern */}
  <div className="absolute inset-0" style={{
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
    backgroundSize: '40px 40px'
  }}></div>
 
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
 
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold tracking-wider mb-4">
        WHY CHOOSE US
      </span>
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Benefits That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Matter</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
        We deliver comprehensive solutions that transform your business operations
      </p>
    </div>
 
    {/* Cards Grid */}
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
 
      {/* Card 1 - Security */}
      <div className="group relative">
        {/* Card Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
       
        {/* Card Content */}
        <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 group-hover:border-transparent h-full flex flex-col">
         
          {/* Icon Container */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform">
              <i className="fas fa-shield-halved text-white text-2xl"></i>
            </div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/20 rounded-2xl -z-10 animate-ping-slow"></div>
          </div>
 
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            Enhanced Security
          </h3>
         
          <p className="text-gray-400 mb-6 leading-relaxed">
            Continuous monitoring and proactive threat mitigation reduce the risk of data breaches and cyberattacks.
          </p>
 
          {/* Feature List with Icons */}
          <ul className="space-y-3 text-sm mt-auto">
            <li className="flex items-center text-gray-300">
              <i className="fas fa-shield text-blue-400 w-5 mr-3 text-sm"></i>
              <span>Real-time threat monitoring</span>
            </li>
            <li className="flex items-center text-gray-300">
              <i className="fas fa-bolt text-yellow-400 w-5 mr-3 text-sm"></i>
              <span>Automated incident response</span>
            </li>
            <li className="flex items-center text-gray-300">
              <i className="fas fa-check-circle text-green-400 w-5 mr-3 text-sm"></i>
              <span>Compliance management</span>
            </li>
          </ul>
        </div>
      </div>
 
      {/* Card 2 - Cost Efficiency */}
      <div className="group relative">
        {/* Card Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
       
        {/* Card Content */}
        <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 group-hover:border-transparent h-full flex flex-col">
         
          {/* Icon Container */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform">
              <i className="fas fa-coins text-white text-2xl"></i>
            </div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-green-500/20 rounded-2xl -z-10 animate-ping-slow"></div>
          </div>
 
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
            Cost Efficiency
          </h3>
         
          <p className="text-gray-400 mb-6 leading-relaxed">
            Outsourcing network management helps control expenses by reducing the need for in-house resources.
          </p>
 
          {/* Feature List with Icons */}
          <ul className="space-y-3 text-sm mt-auto">
            <li className="flex items-center text-gray-300">
              <i className="fas fa-chart-line text-green-400 w-5 mr-3 text-sm"></i>
              <span>40% reduction in IT costs</span>
            </li>
            <li className="flex items-center text-gray-300">
              <i className="fas fa-calendar-check text-blue-400 w-5 mr-3 text-sm"></i>
              <span>Predictable monthly pricing</span>
            </li>
            <li className="flex items-center text-gray-300">
              <i className="fas fa-ban text-red-400 w-5 mr-3 text-sm"></i>
              <span>No hidden fees</span>
            </li>
          </ul>
        </div>
      </div>
 
      {/* Card 3 - Performance */}
      <div className="group relative">
        {/* Card Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
       
        {/* Card Content */}
        <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 group-hover:border-transparent h-full flex flex-col">
         
          {/* Icon Container */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform">
              <i className="fas fa-gauge-high text-white text-2xl"></i>
            </div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-purple-500/20 rounded-2xl -z-10 animate-ping-slow"></div>
          </div>
 
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
            Improved Performance
          </h3>
         
          <p className="text-gray-400 mb-6 leading-relaxed">
            Expert management optimizes network infrastructure, leading to faster, more reliable connectivity.
          </p>
 
          {/* Feature List with Icons */}
          <ul className="space-y-3 text-sm mt-auto">
            <li className="flex items-center text-gray-300">
              <i className="fas fa-rocket text-purple-400 w-5 mr-3 text-sm"></i>
              <span>99.9% guaranteed uptime</span>
            </li>
            <li className="flex items-center text-gray-300">
              <i className="fas fa-gauge text-green-400 w-5 mr-3 text-sm"></i>
              <span>50% faster load times</span>
            </li>
            <li className="flex items-center text-gray-300">
              <i className="fas fa-globe text-blue-400 w-5 mr-3 text-sm"></i>
              <span>Global CDN integration</span>
            </li>
          </ul>
        </div>
      </div>
 
    </div>
 
  </div>
 
  {/* Floating Icons Background (Decorative) */}
  <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none hidden lg:block">
    <i className="fas fa-shield-halved text-white text-9xl"></i>
  </div>
  <div className="absolute top-20 right-0 opacity-5 pointer-events-none hidden lg:block">
    <i className="fas fa-coins text-white text-9xl"></i>
  </div>
  <div className="absolute bottom-40 right-20 opacity-5 pointer-events-none hidden lg:block">
    <i className="fas fa-gauge-high text-white text-9xl"></i>
  </div>
 
  {/* Add Font Awesome for icons (alternative placement) */}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"></script>
 <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
 
</section>
 
<style jsx>{`
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
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
 
  .animate-ping-slow {
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
 
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
 
  /* Ensure icons display properly */
  :global(.fas) {
    display: inline-block;
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
  }
`}</style>
 
 
<section className="py-24 bg-gradient-to-br from-blue-100 via-blue to-blue-100 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
 
  {/* Background Elements */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30"></div>
 
  {/* Animated background dots */}
  <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
  <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
 
  <div className="max-w-7xl mx-auto relative z-10">
 
    {/* Header with animations */}
    <div className="text-center mb-12 animate-fadeIn">
      <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm mb-5 hover:shadow-md transition-all duration-300 hover:scale-105">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '100ms'}}></div>
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
        <span className="text-sm font-semibold text-gray-600">Microsoft Partner</span>
      </div>
 
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Microsoft Intune
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient"> Services</span>
      </h2>
 
      <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slideUp">
        Comprehensive device and application management solutions for the modern workplace.
      </p>
    </div>
 {/* Auto Slider Container */}
    <div className="relative group"
         onMouseEnter={() => document.querySelector('.animate-auto-slide').style.animationPlayState = 'paused'}
         onMouseLeave={() => document.querySelector('.animate-auto-slide').style.animationPlayState = 'running'}>
     
      {/* Gradient Overlays for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
     
      {/* Slider Track */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-auto-slide">
         
          {/* First Set of Services - با 12 سرویس کامل */}
          {[
            { icon: "fa-shield-halved", title: "Monitoring", color: "blue", desc: "Continuous oversight to detect issues", gradient: "from-blue-400 to-blue-600" },
            { icon: "fa-lock", title: "Security", color: "indigo", desc: "Protect against threats", gradient: "from-indigo-400 to-indigo-600" },
            { icon: "fa-gears", title: "Configuration", color: "green", desc: "Optimize network devices", gradient: "from-green-400 to-green-600" },
            { icon: "fa-cloud-arrow-up", title: "Disaster Recovery", color: "purple", desc: "Backup solutions", gradient: "from-purple-400 to-purple-600" },
            { icon: "fa-chart-line", title: "Performance", color: "orange", desc: "Enhance infrastructure", gradient: "from-orange-400 to-orange-600" },
            { icon: "fa-wifi", title: "VPN Services", color: "teal", desc: "Secure remote connections", gradient: "from-teal-400 to-teal-600" },
            { icon: "fa-diagram-project", title: "SDN", color: "cyan", desc: "Centralized control", gradient: "from-cyan-400 to-cyan-600" },
            { icon: "fa-scale-balanced", title: "Load Balancing", color: "amber", desc: "Traffic distribution", gradient: "from-amber-400 to-amber-600" },
            { icon: "fa-phone", title: "UC", color: "rose", desc: "Voice & video integration", gradient: "from-rose-400 to-rose-600" },
            { icon: "fa-network-wired", title: "Managed Wi-Fi", color: "violet", desc: "Wireless infrastructure", gradient: "from-violet-400 to-violet-600" },
            { icon: "fa-cloud", title: "Cloud Networking", color: "sky", desc: "Cloud resource management", gradient: "from-sky-400 to-sky-600" },
            { icon: "fa-clipboard-check", title: "Compliance", color: "emerald", desc: "Regulatory adherence", gradient: "from-emerald-400 to-emerald-600" },
          ].map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-none w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group/card"
              onMouseEnter={(e) => {
                e.currentTarget.closest('.group').querySelector('.animate-auto-slide').style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.closest('.group').querySelector('.animate-auto-slide').style.animationPlayState = 'running';
              }}
            >
              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`}></div>
             
              {/* Icon with enhanced colors and animations */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6 group-hover/card:shadow-xl animate-float`}>
                  <i className={`fas ${item.icon} text-white text-2xl`}></i>
                </div>
               
                {/* Glowing effect */}
                <div className={`absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl blur-lg opacity-0 group-hover/card:opacity-50 transition-opacity duration-500`}></div>
              </div>
             
              {/* Content */}
              <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-blue-600 group-hover/card:to-purple-600 transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
             
              {/* Stats Badge with animation */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${item.gradient} text-white rounded-full transform transition-all duration-300 group-hover/card:scale-105`}>
                  Active
                </span>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center opacity-0 group-hover/card:opacity-100 transform translate-x-2 group-hover/card:translate-x-0 transition-all duration-500`}>
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </div>
              </div>
 
              {/* Progress bar on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                <div className={`h-full bg-gradient-to-r ${item.gradient} rounded-b-2xl w-0 group-hover/card:w-full transition-all duration-1000`}></div>
              </div>
            </div>
          ))}
 
          {/* Duplicate Set for Seamless Loop - همان 12 سرویس برای لوپ بی‌نقص */}
          {[
            { icon: "fa-shield-halved", title: "Monitoring", color: "blue", desc: "Continuous oversight to detect issues", gradient: "from-blue-400 to-blue-600" },
            { icon: "fa-lock", title: "Security", color: "indigo", desc: "Protect against threats", gradient: "from-indigo-400 to-indigo-600" },
            { icon: "fa-gears", title: "Configuration", color: "green", desc: "Optimize network devices", gradient: "from-green-400 to-green-600" },
            { icon: "fa-cloud-arrow-up", title: "Disaster Recovery", color: "purple", desc: "Backup solutions", gradient: "from-purple-400 to-purple-600" },
            { icon: "fa-chart-line", title: "Performance", color: "orange", desc: "Enhance infrastructure", gradient: "from-orange-400 to-orange-600" },
            { icon: "fa-wifi", title: "VPN Services", color: "teal", desc: "Secure remote connections", gradient: "from-teal-400 to-teal-600" },
            { icon: "fa-diagram-project", title: "SDN", color: "cyan", desc: "Centralized control", gradient: "from-cyan-400 to-cyan-600" },
            { icon: "fa-scale-balanced", title: "Load Balancing", color: "amber", desc: "Traffic distribution", gradient: "from-amber-400 to-amber-600" },
            { icon: "fa-phone", title: "UC", color: "rose", desc: "Voice & video integration", gradient: "from-rose-400 to-rose-600" },
            { icon: "fa-network-wired", title: "Managed Wi-Fi", color: "violet", desc: "Wireless infrastructure", gradient: "from-violet-400 to-violet-600" },
            { icon: "fa-cloud", title: "Cloud Networking", color: "sky", desc: "Cloud resource management", gradient: "from-sky-400 to-sky-600" },
            { icon: "fa-clipboard-check", title: "Compliance", color: "emerald", desc: "Regulatory adherence", gradient: "from-emerald-400 to-emerald-600" },
          ].map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-none w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group/card"
              onMouseEnter={(e) => {
                e.currentTarget.closest('.group').querySelector('.animate-auto-slide').style.animationPlayState = 'paused';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.closest('.group').querySelector('.animate-auto-slide').style.animationPlayState = 'running';
              }}
            >
              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`}></div>
             
              {/* Icon with enhanced colors and animations */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6 group-hover/card:shadow-xl animate-float`}>
                  <i className={`fas ${item.icon} text-white text-2xl`}></i>
                </div>
               
                {/* Glowing effect */}
                <div className={`absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl blur-lg opacity-0 group-hover/card:opacity-50 transition-opacity duration-500`}></div>
              </div>
             
              {/* Content */}
              <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-blue-600 group-hover/card:to-purple-600 transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
             
              {/* Stats Badge with animation */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${item.gradient} text-white rounded-full transform transition-all duration-300 group-hover/card:scale-105`}>
                  Active
                </span>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center opacity-0 group-hover/card:opacity-100 transform translate-x-2 group-hover/card:translate-x-0 transition-all duration-500`}>
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </div>
              </div>
 
              {/* Progress bar on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                <div className={`h-full bg-gradient-to-r ${item.gradient} rounded-b-2xl w-0 group-hover/card:w-full transition-all duration-1000`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Navigation Buttons با انیمیشن بهتر */}
      <button className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110 z-20"
              onClick={() => {
                const slider = document.querySelector('.animate-auto-slide');
                slider.style.animation = 'none';
                slider.offsetHeight;
                slider.style.animation = 'autoSlide 30s linear infinite';
              }}>
        <i className="fas fa-chevron-left text-gray-600 group-hover:text-white transition-colors duration-300"></i>
      </button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110 z-20"
              onClick={() => {
                const slider = document.querySelector('.animate-auto-slide');
                slider.style.animation = 'none';
                slider.offsetHeight;
                slider.style.animation = 'autoSlide 30s linear infinite';
              }}>
        <i className="fas fa-chevron-right text-gray-600 group-hover:text-white transition-colors duration-300"></i>
      </button>
    </div>
 
    {/* Pagination Dots با انیمیشن */}
    <div className="flex justify-center gap-3 mt-8">
      {[1, 2, 3, 4, 5, 6].map((dot) => (
        <button
          key={dot}
          className={`h-2 rounded-full transition-all duration-500 ${
            dot === 1 ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
          }`}
          onMouseEnter={() => {
            const slider = document.querySelector('.animate-auto-slide');
            slider.style.animationPlayState = 'paused';
          }}
          onMouseLeave={() => {
            const slider = document.querySelector('.animate-auto-slide');
            slider.style.animationPlayState = 'running';
          }}
        ></button>
      ))}
    </div>
 
   
 
  </div>
 
  {/* Custom CSS for animations */}
  <style jsx>{`
    @keyframes autoSlide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-320px * 12));
      }
    }
 
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
    }
 
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
 
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
 
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
 
    .animate-auto-slide {
      animation: autoSlide 40s linear infinite;
      width: fit-content;
      animation-play-state: running;
    }
 
    .group:hover .animate-auto-slide {
      animation-play-state: paused;
    }
 
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
 
    .animate-fadeIn {
      animation: fadeIn 1s ease-out;
    }
 
    .animate-slideUp {
      animation: slideUp 0.8s ease-out;
    }
 
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }
 
    .delay-100 {
      animation-delay: 100ms;
    }
 
    .delay-200 {
      animation-delay: 200ms;
    }
 
    .delay-300 {
      animation-delay: 300ms;
    }
  `}</style>
 
</section>
 
{/* Managed Services & Packages */}
<section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
 {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80')",
    }}
  ></div>
 
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
 
  <div className="relative max-w-7xl mx-auto">
 
    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold mb-4 border border-blue-400/30">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Comprehensive IT Solutions
      </h2>
      <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
        Choose the perfect plan for your business needs
      </p>
    </div>
 
    {/* Service Cards */}
    <div className="grid lg:grid-cols-3 gap-8">
 
      {[
        {
          name: "Essential",
          price: "$2,499",
          period: "/month",
          description: "Perfect for small businesses",
          features: [
            "24/7 Network Monitoring",
            "Basic Security Suite",
            "Weekly Backups",
            "Email Support",
            "5 Devices Included"
          ],
          color: "from-blue-400 to-blue-600",
          popular: false
        },
        {
          name: "Professional",
          price: "$4,999",
          period: "/month",
          description: "Ideal for growing companies",
          features: [
            "Everything in Essential",
            "Advanced Threat Protection",
            "Daily Backups",
            "24/7 Phone Support",
            "15 Devices Included",
            "Monthly Strategy Calls"
          ],
          color: "from-purple-400 to-purple-600",
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "For large organizations",
          features: [
            "Everything in Professional",
            "Dedicated Security Team",
            "Real-time Backup",
            "SLA Guarantee",
            "Unlimited Devices",
            "Quarterly Audits"
          ],
          color: "from-orange-400 to-orange-600",
          popular: false
        }
      ].map((plan, index) => (
        <div
          key={index}
          className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
            plan.popular
              ? 'border-blue-400/60 scale-105 lg:scale-110'
              : 'border-white/20 hover:border-white/40'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
              Most Popular
            </div>
          )}
 
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-blue-100/70 mb-4">{plan.description}</p>
         
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-blue-100/60">{plan.period}</span>
          </div>
 
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-blue-100">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
 
          <button className={`w-full py-3 rounded-xl font-semibold transition-all hover:scale-105 bg-gradient-to-r ${plan.color} text-white`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
 
    {/* Trust Badges */}
    <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
      <span className="text-white/40 text-lg">Trusted by companies using</span>
      {['AWS', 'Azure', 'Google Cloud', 'Cisco'].map((company, i) => (
        <span key={i} className="text-white/60 font-semibold">{company}</span>
      ))}
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</section>
 
{/* Why Outsource to Visionaries Section */}
<section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
 
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#c9d9ee] via-[#d7e4f5] to-[#c7d6eb]"></div>
 
  {/* Dotted Grid Background */}
  <div className="absolute inset-0
    bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)]
    [background-size:24px_24px] opacity-30">
  </div>
 
  {/* Glow Effects */}
  <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full"></div>
 
  <div className="relative max-w-7xl mx-auto">
 
    {/* Header */}
    <div className="text-center mb-16">
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-4">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <span className="text-blue-700 font-semibold text-sm tracking-wide">WHY PARTNER WITH US</span>
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      </div>
     
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why outsource Managed Network Services <br className="hidden md:block" />
        <span className="text-blue-600">to Visionaries?</span>
      </h2>
     
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Discover the strategic advantages of entrusting your IT infrastructure to experts
      </p>
    </div>
 
    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
     
      {/* Access to expert insights */}
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Expert Insights</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access to expert insights and analysis
            </p>
          </div>
        </div>
      </div>
 
      {/* Reduces Cost & Saves Time */}
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Cost & Time Efficient</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reduces Cost & Saves Time
            </p>
          </div>
        </div>
      </div>
 
      {/* Mitigate risk */}
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Risk Mitigation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mitigate the risk of errors and discrepancies
            </p>
          </div>
        </div>
      </div>
 
      {/* Focus on core business */}
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Core Business Focus</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Allows you to focus on core business functions
            </p>
          </div>
        </div>
      </div>
 
      {/* Fresh perspectives */}
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Fresh Perspectives</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fresh perspectives and innovative approaches to problem-solving
            </p>
          </div>
        </div>
      </div>
 
      {/* Leverage latest technology */}
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Latest Technology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leverage the latest software and technology
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Tailored Services - Full Width Card */}
    <div className="mt-8 max-w-6xl mx-auto">
      <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1 text-lg">Tailored Services</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored services to suit your business objectives and budget constraints.
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Bottom Highlight */}
    <div className="mt-12 text-center max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
        <p className="text-xl font-semibold text-white">
          Focus on core business activities while Visionaries handles your IT assets with professionalism.
        </p>
       
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-white/60 rounded-full"></span>
          <span className="w-2 h-2 bg-white/60 rounded-full"></span>
          <span className="w-2 h-2 bg-white/60 rounded-full"></span>
        </div>
      </div>
    </div>
 
  </div>
</section>
      {/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="Mobile device security and protection"
      className="w-full h-full object-cover"
    />
    {/* Dark black overlay */}
    <div className="absolute inset-0 bg-black/80" />
  </div>
 
  <div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Optimize Your Network Infrastructure?
    </h2>
 
    <p className="text-xl text-white/90 mb-8">
      Join thousands of companies that trust DeviceGuard for their Managed Network Services
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
  href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
>
  Start Your Free Trial
</a>
      <a
  href="/contact"
  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition"
>
  Contact Sales
</a>
    </div>
    <p className="text-white/80 mt-4">No credit card required • 14-day free trial</p>
  </div>
</section>
     
 
    </div>
  );
};
 
export default MDMPage;
 