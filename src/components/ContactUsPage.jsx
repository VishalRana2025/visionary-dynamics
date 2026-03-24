import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ChevronDown,
  Sparkles,
  Shield,
  Zap,
  Users,
  Globe,
  Star,
  Award,
  Heart,
  Facebook,
} from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.visionarydynamicsas.com/js/form_embed.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const scrollToContent = () => {
    document.getElementById('contact-content').scrollIntoView({ behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1(727) 564-9476',
      subDetails: 'Mon-Fri 9am-6pm EST',
      gradient: 'from-green-500 to-emerald-600',
      lightBg: 'bg-green-50',
      textColor: 'text-green-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'connect@visionarydynamics.com',
      subDetails: 'We reply within 24 hours',
      gradient: 'from-blue-500 to-indigo-600',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: ' 7901 4th St N STE 300 St. Petersburg, Florida-33702 USA',
      subDetails: 'New York, NY 10001',
      gradient: 'from-purple-500 to-pink-600',
      lightBg: 'bg-purple-50',
      textColor: 'text-purple-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600'
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/VisionaryD64371', label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://in.linkedin.com/company/visionarydynamicsas', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/visionarydynamicsas/', label: 'Facebook', color: 'hover:bg-[#0A66c2]' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/visionary.dynamics/', label: 'Instagram', color: 'hover:bg-[#E4405F]' }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Average response time under 2 hours'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Dedicated account managers for business clients'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Support',
      description: 'Multi-language support available 24/7'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Happy Clients', icon: <Users className="w-5 h-5" /> },
    { value: '98%', label: 'Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '24/7', label: 'Support', icon: <Clock className="w-5 h-5" /> },
    { value: '2h', label: 'Response', icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-[20s] hover:scale-110"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
          }}
        >
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Connect
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200 leading-relaxed">
            We're here to turn your ideas into reality. Join thousands of satisfied clients who've transformed their businesses with our support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={scrollToContent}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-blue-500/25 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
           
          </div>

        </div>

       
      </div>

      {/* Main Content */}
      <div id="contact-content" className="relative -mt-20">
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow animation-delay-2000"></div>
        </div>

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="text-center">
           
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How can we{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                assist you?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us. Our team is ready to help with anything you need.
            </p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${item.iconBg} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2 font-medium">{item.details}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.subDetails}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1 scale-105 opacity-10 blur-2xl"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form Section */}
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-gray-900">
                        Send us a Message
                      </h3>
                      <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                    </div>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  {/* Form Container */}
                 <div className="relative rounded-xl overflow-hidden shadow-inner bg-gradient-to-br from-gray-50 to-white border border-gray-100">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

  <div className="p-1 min-h-[900px]">  
    <iframe
      src="https://api.visionarydynamicsas.com/widget/form/8qkFMzuix1Vhm0zLuX1I"
      style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
      id="inline-8qkFMzuix1Vhm0zLuX1I"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Contact Us - Web Page"
      data-height="687"
      data-layout-iframe-id="inline-8qkFMzuix1Vhm0zLuX1I"
      data-form-id="8qkFMzuix1Vhm0zLuX1I"
      title="Contact Us - Web Page"
      className="w-full h-full"
    />
  </div>
</div>

                  {/* Trust Indicators */}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>256-bit SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>24h Response Time</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>100% Satisfaction</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-12 text-white overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Why Choose Us Section */}
                    <div className="mb-10">
                      <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
                        <Award className="w-8 h-8 text-yellow-400" />
                        Why choose us?
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {features.map((feature, index) => (
                          <div 
                            key={index} 
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-300">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
                        <div className="text-sm text-gray-300">Customer Satisfaction</div>
                        <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                          <div className="w-[98%] bg-blue-400 h-1 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="text-3xl font-bold text-purple-400 mb-1">Fast</div>
                        <div className="text-sm text-gray-300">Support Available</div>
                        <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                          <div className="w-full bg-purple-400 h-1 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Preview */}
                    <div className="mb-10 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-200 mb-4 italic">
                        "The support team went above and beyond to help us. Response time was incredible!"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          SJ
                        </div>
                        <div>
                          <p className="text-sm font-medium">Sarah Johnson</p>
                          <p className="text-xs text-gray-400">CEO, TechStart</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <p className="text-lg font-medium mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-400" />
                        Connect with us
                      </p>
                      <div className="flex gap-3">
                        {socialLinks.map((social, index) => (
                         <a
  key={index}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-3`}
  aria-label={social.label}
>
  {social.icon}
</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;