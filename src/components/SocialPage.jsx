// SocialMediaMarketingPage.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { 
 Facebook, 
 Instagram,
 Linkedin,
 Twitter,
 Youtube,
 MessageCircle,
 Video,
 TrendingUp,
 Users,
 Target,
 BarChart3,
 ChevronRight,
 Play,
 CheckCircle,
 Star
} from "lucide-react";

const SocialMediaMarketingPage = () => {
  const services = [
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook Marketing",
      description: "Targeted campaigns that reach your ideal audience and drive engagement.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram Growth",
      description: "Creative visual strategies to build your brand presence and following.",
      color: "bg-pink-100 text-pink-600"
    },
    {
  icon: <FaXTwitter className="w-8 h-8" />,
  title: "Twitter Marketing",
  description: "Build brand conversations and grow your audience on X.",
  color: "bg-gray-100 text-black"
   },
   {
  icon: <FaTiktok className="w-8 h-8" />,
  title: "TikTok Marketing",
  description: "Viral video content and trends to capture the attention of Gen Z and millennials.",
  color: "bg-black text-white"
  },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "Video Marketing",
      description: "Compelling video content that tells your story and converts viewers.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Advertising",
      description: "Data-driven ad campaigns across all major social platforms.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { value: "10M+", label: "People Reached", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "98%", label: "Client Retention", icon: <Star className="w-6 h-6" /> },
    { value: "24/7", label: "Support Available", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Their social media strategy increased our engagement by 300% in just 3 months. Absolutely phenomenal work!",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "The team understands our brand perfectly. Our social presence has never been stronger.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Emma Davis",
      role: "Small Business Owner",
      content: "Finally found a social media partner that delivers real results. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
  {/* Background Image with Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`,
      }}
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />
    {/* Optional: Add a subtle gradient overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30" />
  </div>
  
  {/* Grid Pattern Overlay (optional - can be removed if you want cleaner look) */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10"></div>
  
  <div className="container mx-auto px-4 py-16 lg:py-24 relative z-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        {/* Removed the "Social Media Marketing Experts" chip as it might not show well on dark bg */}
        {/* You can keep it with light styling if needed */}
        
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
          Grow Your Brand
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Through Social Media
          </span>
        </h1>
        <div className="flex flex-wrap gap-4">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2">
            Get Started
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
        
      
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30"></div>
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="grid grid-cols-2 gap-4">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  {platform === 'Facebook' && <Facebook className="w-5 h-5 text-blue-400" />}
                  {platform === 'Instagram' && <Instagram className="w-5 h-5 text-pink-400" />}
                  {platform === 'Twitter' && <Twitter className="w-5 h-5 text-sky-400" />}
                  {platform === 'LinkedIn' && <Linkedin className="w-5 h-5 text-blue-400" />}
                  <span className="font-semibold text-white">{platform}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">+{Math.floor(Math.random() * 200) + 100}%</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Services Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header with animated underline */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        Our Services
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Comprehensive{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Social Media
        </span>{" "}
        Solutions
      </h2>
      
      <p className="text-xl text-gray-600 leading-relaxed">
        We offer end-to-end social media marketing services tailored to your business needs, 
        helping you stand out in the digital landscape
      </p>
      
      {/* Decorative line */}
      <div className="flex justify-center mt-8">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
      </div>
    </div>
    
    {/* Services Grid with enhanced cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
        >
          {/* Card background gradient on hover - more subtle */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-bl-[100px] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          
          {/* Icon with enhanced styling */}
          <div className="relative mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 ${service.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl transition-all duration-300`}>
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>
            
            {/* Floating number indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-gray-400 border border-gray-100 group-hover:border-purple-200 group-hover:text-purple-600 transition-all duration-300">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
          
          {/* Content - FIXED: Removed gradient text on hover */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {service.description}
          </p>
          
          {/* Features list */}
          <div className="space-y-2 mb-6">
            {service.features?.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                <CheckCircle className="w-4 h-4 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Link with enhanced animation - FIXED: Better hover state */}
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-purple-600 font-semibold group/link relative"
          >
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover/link:w-full transition-all duration-300"></span>
            </span>
            <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
          
          {/* Bottom border gradient on hover */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      ))}
    </div>
    
    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-gray-600 mb-6">
        Not sure which service is right for you?
      </p>
      <button
  onClick={() =>
    window.open(
      "https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn",
      "_blank"
    )
  }
  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 inline-flex items-center gap-2"
>
  Get a Free Consultation
  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
    </div>
  </div>
</section>

       {/* Stats Section - Option 3: Dynamic & Animated */}
<section className="py-20 relative">
  {/* Background image with overlay */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
   <div className="absolute inset-0 bg-black/80"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          We're on a mission to transform businesses through social media
        </h2>
        <p className="text-purple-100 text-lg mb-8 leading-relaxed">
          Our data-driven approach and creative strategies have helped hundreds of businesses 
          achieve remarkable growth and connect with their audience meaningfully.
        </p>
        
        {/* Feature list */}
        <div className="space-y-4">
          {['Data-driven strategies', 'Dedicated account managers', 'Weekly performance reports'].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-purple-100">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300/30 transition-all duration-300 hover:scale-105">
          Learn More About Our Process
        </button>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform origin-left">
              {stat.value}
            </div>
            <div className="text-purple-100 text-sm mb-4">{stat.label}</div>
            
            {/* Progress bar (example) */}
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-1000"
                style={{ width: `${Math.random() * 40 + 60}%` }}
              ></div>
            </div>
            
            {/* Mini icon */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
     
   <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
        Testimonials
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Loved by businesses everywhere
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
    </div>
    
    {/* Testimonials Grid with Gradient Cards */}
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className="relative group"
        >
          {/* Background gradient card */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl group-hover:blur-2xl"></div>
          
          {/* Main card */}
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
            {/* Company logo placeholder */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">{testimonial.name.charAt(0)}</span>
              </div>
            </div>
            
            {/* Rating with numbers */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-purple-600">{testimonial.rating}.0/5.0</span>
            </div>
            
            {/* Testimonial */}
            <p className="text-gray-700 mb-6 flex-grow">
              "{testimonial.content}"
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
<section className="relative py-20 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://img.freepik.com/premium-photo/blur-background-empty-modern-office-background-city-center-workspace-interior-design_327072-42494.jpg"
      alt="Social media marketing"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/75"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center z-10">
    <h2 className="text-4xl font-bold text-white mb-4">
      Ready to Grow Your Social Media Presence?
    </h2>

    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
      Join hundreds of businesses that have transformed their social media marketing with us
    </p>

   <button
  onClick={() =>
    window.open(
      "https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn",
      "_blank"
    )
  }
  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 hover:scale-105"
>
  Start Your Free Consultation
</button>
  </div>

</section>
    </div>
  );
};

export default SocialMediaMarketingPage;