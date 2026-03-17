// SEOPageComplete.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  LifebuoyIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

const SEOPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Your Company Name - SEO Services",
    "description": "Professional SEO services to boost your online presence",
    "url": "https://yourwebsite.com/seo-services",
    "provider": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourwebsite.com"
    }
  };

  // Services data
  const services = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8" />,
      title: "Keyword Research",
      description: "Identify high-value keywords that your target audience is searching for to drive qualified traffic."
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "On-Page SEO",
      description: "Optimize your website content, meta tags, and structure for better search engine visibility."
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: "Link Building",
      description: "Build high-quality backlinks from authoritative websites to boost your domain authority."
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8" />,
      title: "Content Strategy",
      description: "Create engaging, SEO-optimized content that resonates with your audience and search engines."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographical area."
    },
    {
      icon: <ArrowTrendingUpIcon className="h-8 w-8" />,
      title: "Technical SEO",
      description: "Optimize your website's technical aspects for better crawlability and user experience."
    }
  ];

  // Process steps data
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your website, competitors, and target audience to create a customized SEO strategy."
    },
    {
      number: "02",
      title: "Keyword Research",
      description: "Identify high-value keywords and search terms that your ideal customers are using."
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description: "Optimize your website content, meta tags, and structure for search engines."
    },
    {
      number: "04",
      title: "Content Creation",
      description: "Develop engaging, SEO-optimized content that attracts and retains visitors."
    },
    {
      number: "05",
      title: "Link Building",
      description: "Build quality backlinks to improve your website authority and rankings."
    },
    {
      number: "06",
      title: "Monitoring & Reporting",
      description: "Track progress, analyze results, and continuously optimize for better performance."
    }
  ];

  // Why choose us data
  const reasons = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "100% White Hat SEO",
      description: "We follow ethical SEO practices that deliver sustainable, long-term results."
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Data-Driven Approach",
      description: "All our strategies are backed by thorough data analysis and research."
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Expert Team",
      description: "Certified SEO professionals with years of industry experience."
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "We respect your time and deliver results within agreed timelines."
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      title: "Transparent Pricing",
      description: "No hidden costs, clear pricing with detailed breakdowns."
    },
    {
      icon: <LifebuoyIcon className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support for all your SEO queries and concerns."
    }
  ];

  // Technologies data
  const technologies = [
    { name: "Google Analytics", category: "Analytics", icon: "📊" },
    { name: "Google Search Console", category: "Analytics", icon: "🔍" },
    { name: "SEMrush", category: "SEO Tools", icon: "📈" },
    { name: "Ahrefs", category: "SEO Tools", icon: "🔗" },
    { name: "Moz Pro", category: "SEO Tools", icon: "📉" },
    { name: "Yoast SEO", category: "CMS Tools", icon: "⚡" },
    { name: "Screaming Frog", category: "Technical SEO", icon: "🐸" },
    { name: "Majestic", category: "Link Building", icon: "🔗" },
    { name: "Google PageSpeed", category: "Performance", icon: "⚡" },
    { name: "GTmetrix", category: "Performance", icon: "📊" },
    { name: "Hotjar", category: "UX Analytics", icon: "🔥" },
    { name: "WordPress", category: "CMS", icon: "📝" }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. While some improvements can be seen in 3-6 months, significant results typically take 6-12 months depending on competition, industry, and current website status."
    },
    {
      question: "What is included in your SEO services?",
      answer: "Our comprehensive SEO services include keyword research, on-page optimization, content strategy, link building, technical SEO audits, local SEO optimization, and monthly performance reporting."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "We cannot guarantee specific rankings as search engines use complex algorithms. However, we guarantee to implement proven strategies that improve your visibility and drive organic traffic."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including organic traffic, keyword rankings, conversion rates, bounce rates, domain authority, and ROI through tools like Google Analytics and Search Console."
    },
    {
      question: "What is the cost of your SEO services?",
      answer: "Our pricing varies based on your specific needs, competition level, and goals. We offer customized packages starting from $X/month. Contact us for a personalized quote."
    },
    {
      question: "Do you work with local businesses?",
      answer: "Yes, we specialize in local SEO for businesses looking to attract customers in their geographical area. We optimize Google My Business profiles and local citations."
    }
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

 // Floating objects component - FIXED VERSION
const FloatingObjects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
    {/* Floating orbs with higher opacity and better colors */}
    <motion.div
      className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
      animate={{
        y: [0, 40, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-40 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl"
      animate={{
        y: [0, -50, 0],
        x: [0, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-60 right-20 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"
      animate={{
        y: [0, 35, 0],
        x: [0, -25, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-40 left-1/3 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
      animate={{
        y: [0, 30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 left-1/4 w-28 h-28 bg-green-400/20 rounded-full blur-xl"
      animate={{
        y: [0, -40, 0],
        x: [0, 25, 0],
      }}
      transition={{
        duration: 11,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    
    {/* Geometric shapes with better visibility */}
    <motion.div
      className="absolute top-32 left-1/4 w-16 h-16 border-4 border-blue-400/30 rounded-lg"
      animate={{
        y: [0, 30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute bottom-32 right-1/3 w-20 h-20 border-4 border-purple-400/30 rounded-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-1/2 left-10 w-12 h-12 border-4 border-pink-400/30 transform rotate-45"
      animate={{
        y: [0, 25, 0],
        rotate: [45, 90, 45],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    
    {/* Floating dots - increased quantity and visibility */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
        }}
        animate={{
          y: [null, Math.random() * 100 - 50 + "%"],
          x: [null, Math.random() * 100 - 50 + "%"],
        }}
        transition={{
          duration: Math.random() * 15 + 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Animated particles with trails */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
        }}
        animate={{
          y: [null, Math.random() * 200 - 100 + "%"],
          x: [null, Math.random() * 200 - 100 + "%"],
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Floating waves */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-30">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200 T1500,200"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.5,
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M0,300 Q200,200 400,300 T800,300 T1200,300 T1600,300"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.3,
          x: [0, -50, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />
    </svg>
  </div>
);

  return (
    <>
      <Helmet>
        <title>SEO Services | Boost Your Online Presence | Your Company</title>
        <meta name="description" content="Professional SEO services to improve your website ranking, drive organic traffic, and increase conversions. Expert strategies tailored for your business." />
        <meta name="keywords" content="SEO services, search engine optimization, website ranking, organic traffic, digital marketing" />
        <link rel="canonical" href="https://yourwebsite.com/seo-services" />
        <meta property="og:title" content="SEO Services | Boost Your Online Presence" />
        <meta property="og:description" content="Professional SEO services to improve your website ranking and drive organic traffic." />
        <meta property="og:url" content="https://yourwebsite.com/seo-services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services | Boost Your Online Presence" />
        <meta name="twitter:description" content="Professional SEO services to improve your website ranking and drive organic traffic." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/person-manage-search-engine-optimization-seo-digital-marketing-with-social-media-content_34141-1030.jpg"
              alt="Digital marketing analytics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Boost Your Online Presence with{" "}
                <span className="text-yellow-300">Expert SEO Services</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg">
                  Get Free SEO Audit
                </button>

                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section with Floating Objects */}
        <section className="relative py-20 bg-gradient-to-b from-blue-100 to-blue-100 overflow-hidden">
          <FloatingObjects />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Section Header with decorative elements */}
            <div className="text-center mb-16 relative">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">SEO Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We offer end-to-end SEO solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                // Define color schemes for each card
                const colorSchemes = [
                  {
                    bgLight: "bg-blue-100",
                    bgDark: "dark:bg-blue-900/30",
                    text: "text-blue-600",
                    textDark: "dark:text-blue-400",
                    hoverBg: "group-hover:bg-blue-600",
                    gradientFrom: "from-blue-600",
                    ring: "ring-blue-200"
                  },
                  {
                    bgLight: "bg-purple-100",
                    bgDark: "dark:bg-purple-900/30",
                    text: "text-purple-600",
                    textDark: "dark:text-purple-400",
                    hoverBg: "group-hover:bg-purple-600",
                    gradientFrom: "from-purple-600",
                    ring: "ring-purple-200"
                  },
                  {
                    bgLight: "bg-pink-100",
                    bgDark: "dark:bg-pink-900/30",
                    text: "text-pink-600",
                    textDark: "dark:text-pink-400",
                    hoverBg: "group-hover:bg-pink-600",
                    gradientFrom: "from-pink-600",
                    ring: "ring-pink-200"
                  },
                  {
                    bgLight: "bg-green-100",
                    bgDark: "dark:bg-green-900/30",
                    text: "text-green-600",
                    textDark: "dark:text-green-400",
                    hoverBg: "group-hover:bg-green-600",
                    gradientFrom: "from-green-600",
                    ring: "ring-green-200"
                  },
                  {
                    bgLight: "bg-orange-100",
                    bgDark: "dark:bg-orange-900/30",
                    text: "text-orange-600",
                    textDark: "dark:text-orange-400",
                    hoverBg: "group-hover:bg-orange-600",
                    gradientFrom: "from-orange-600",
                    ring: "ring-orange-200"
                  },
                  {
                    bgLight: "bg-red-100",
                    bgDark: "dark:bg-red-900/30",
                    text: "text-red-600",
                    textDark: "dark:text-red-400",
                    hoverBg: "group-hover:bg-red-600",
                    gradientFrom: "from-red-600",
                    ring: "ring-red-200"
                  }
                ];

                const colors = colorSchemes[index % colorSchemes.length];

                return (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Background decorative element with dynamic color */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bgLight} ${colors.bgDark} rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-150`}></div>
                    
                    {/* Icon with gradient background - dynamic colors */}
                    <div className="relative z-10 mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bgLight} ${colors.bgDark} rounded-xl ${colors.text} ${colors.textDark} ${colors.hoverBg} group-hover:text-white transition-all duration-300`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:${colors.text} dark:group-hover:${colors.textDark} transition-colors`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom gradient border on hover */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradientFrom} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Process Section with Floating Objects */}
        <section className="relative py-20 bg-gradient-to-br from-blue-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <FloatingObjects />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Proven SEO Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A systematic approach to achieving sustainable SEO results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                // Define icons for each step
                const icons = [
                  <svg key="analysis" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>,
                  <svg key="keyword" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>,
                  <svg key="optimization" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>,
                  <svg key="content" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>,
                  <svg key="link" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>,
                  <svg key="reporting" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ];

                // Color schemes for each step
                const colors = [
                  "from-blue-500 to-cyan-500",
                  "from-purple-500 to-pink-500",
                  "from-green-500 to-emerald-500",
                  "from-orange-500 to-amber-500",
                  "from-red-500 to-rose-500",
                  "from-indigo-500 to-blue-500"
                ];

                return (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Top gradient border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index % colors.length]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    
                    <div className="p-8">
                      {/* Header with icon and step number */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 bg-gradient-to-br ${colors[index % colors.length]} bg-opacity-10 rounded-xl text-gray-700 dark:text-white group-hover:scale-110 transition-transform duration-300`}>
                          {icons[index % icons.length]}
                        </div>
                        <span className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${colors[index % colors.length]} opacity-20 group-hover:opacity-30 transition-opacity`}>
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Step indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${colors[index % colors.length]} rounded-full transition-all duration-700`}
                            style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                          {index + 1}/{steps.length}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 overflow-hidden bg-gray-900">
          {/* Top Dark to Light Wave */}
          <div className="absolute -top-4 left-0 w-full overflow-hidden leading-none z-30">
            <svg
              viewBox="0 0 1440 120"
              className="relative block w-full h-24 md:h-32"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="topWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#1f2937" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M0,64L80,69C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58L1440,64L1440,0L0,0Z"
                fill="url(#topWaveGradient)"
              />
            </svg>
          </div>

          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <img
              src="https://media.handwerk-magazin.de/uploads/2024/02/SEO.jpeg"
              alt="SEO analytics dashboard with charts and graphs"
              className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-10000"
            />
            {/* Overlay pattern for texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>
          
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
            
            {/* Grid overlay for tech feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%239C92AC%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>

          {/* Main Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-24 pb-24">
            {/* Section Header with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {/* Main title with gradient */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Why Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Us
                </span>
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"
              ></motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                What sets us apart from other SEO agencies
              </motion.p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {reasons.map((reason, index) => {
                // Enhanced color schemes with more vibrant options
                const colorSchemes = [
                  {
                    gradient: "from-blue-500 to-cyan-400",
                    light: "bg-blue-500/10",
                    border: "border-blue-500/20",
                    text: "text-blue-400",
                    shadow: "shadow-blue-500/20",
                    glow: "group-hover:shadow-blue-500/30"
                  },
                  {
                    gradient: "from-purple-500 to-pink-400",
                    light: "bg-purple-500/10",
                    border: "border-purple-500/20",
                    text: "text-purple-400",
                    shadow: "shadow-purple-500/20",
                    glow: "group-hover:shadow-purple-500/30"
                  },
                  {
                    gradient: "from-green-500 to-emerald-400",
                    light: "bg-green-500/10",
                    border: "border-green-500/20",
                    text: "text-green-400",
                    shadow: "shadow-green-500/20",
                    glow: "group-hover:shadow-green-500/30"
                  },
                  {
                    gradient: "from-orange-500 to-amber-400",
                    light: "bg-orange-500/10",
                    border: "border-orange-500/20",
                    text: "text-orange-400",
                    shadow: "shadow-orange-500/20",
                    glow: "group-hover:shadow-orange-500/30"
                  },
                  {
                    gradient: "from-red-500 to-rose-400",
                    light: "bg-red-500/10",
                    border: "border-red-500/20",
                    text: "text-red-400",
                    shadow: "shadow-red-500/20",
                    glow: "group-hover:shadow-red-500/30"
                  },
                  {
                    gradient: "from-indigo-500 to-blue-400",
                    light: "bg-indigo-500/10",
                    border: "border-indigo-500/20",
                    text: "text-indigo-400",
                    shadow: "shadow-indigo-500/20",
                    glow: "group-hover:shadow-indigo-500/30"
                  }
                ];

                const colors = colorSchemes[index % colorSchemes.length];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Glow effect behind card */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500 ${colors.glow}`}></div>
                    
                    {/* Card with glassmorphism effect */}
                    <div className={`relative bg-white/5 backdrop-blur-md border ${colors.border} rounded-2xl p-8 shadow-xl transition-all duration-300 overflow-hidden`}>
                      {/* Animated background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Icon container with glow */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                        <div className={`relative w-20 h-20 ${colors.light} backdrop-blur-sm rounded-2xl flex items-center justify-center border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                          <div className={`${colors.text} w-10 h-10`}>
                            {reason.icon}
                          </div>
                        </div>
                        
                        {/* Floating particles */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${colors.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping`}></div>
                        <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-300`}></div>
                      </div>
                      
                      {/* Content */}
                      <h3 className={`text-xl font-bold text-white mb-3 group-hover:${colors.text} transition-colors duration-300`}>
                        {reason.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {reason.description}
                      </p>

                      {/* Feature indicator */}
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                        <span className={`text-xs font-semibold ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          EXCLUSIVE FEATURE
                        </span>
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-bl-3xl transform rotate-12 translate-x-8 -translate-y-8 group-hover:opacity-20 transition-opacity`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
                
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-1">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-900 rounded-2xl p-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        { value: "98%", label: "Client Retention", gradient: "from-blue-400 to-purple-400", icon: "📊" },
                        { value: "50+", label: "Happy Clients", gradient: "from-purple-400 to-pink-400", icon: "😊" },
                        { value: "1+", label: "Years Experience", gradient: "from-green-400 to-emerald-400", icon: "⭐" },
                        { value: "50+", label: "Keywords Ranked", gradient: "from-orange-400 to-red-400", icon: "🎯" }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="text-center group"
                        >
                          <div className="relative">
                            <div className="text-3xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                              {stat.icon}
                            </div>
                            <div className={`text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                            <div className="w-16 h-1 mx-auto bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true }}
                                className={`h-full bg-gradient-to-r ${stat.gradient}`}
                              ></motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden shadow-2xl hover:shadow-blue-600/30 transition-shadow">
                  <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative">Start Your Success Story</span>
                  <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles for dynamic effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                animate={{
                  y: [null, -30, 30, -30],
                  x: [null, 30, -30, 30],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          {/* Bottom Light to Dark Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
            <svg
              viewBox="0 0 1440 120"
              className="relative block w-full h-24 md:h-32"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="bottomWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1f2937" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path
                d="M0,64L80,69C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58L1440,64L1440,120L0,120Z"
                fill="url(#bottomWaveGradient)"
              />
            </svg>
          </div>
        </section>

        {/* Technologies Section with Floating Objects */}
        <section className="relative py-20 bg-gradient-to-b from-blue-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <FloatingObjects />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Section Header with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Tech Stack
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">We Use</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Industry-leading tools and technologies for optimal SEO results
              </p>
            </motion.div>
            
            {/* Technology Cards */}
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="mb-16 last:mb-0"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 w-1 h-8 rounded-full mr-3"></span>
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {technologies
                    .filter(tech => tech.category === category)
                    .map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        
                        {/* Icon with glow effect */}
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                          <span className="relative text-5xl block transform group-hover:scale-110 transition-transform duration-300">
                            {tech.icon}
                          </span>
                        </div>
                        
                        {/* Technology name */}
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </h4>
                        
                        {/* Hover indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-blue-100 dark:bg-gray-800 overflow-hidden">
          <FloatingObjects />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Got questions? We've got answers about our SEO services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Still have questions? We're here to help!
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
<section className="relative py-24 overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
     src="https://images.squarespace-cdn.com/content/v1/50c9c50fe4b0a97682fac903/1612917261766-MQLT5X4OZ95GXKY2R27V/image-asset.jpeg"
      alt="Digital marketing growth"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center text-white z-10">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      Ready to Grow Your
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        {" "}Online Visibility?
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
    >
      Let our SEO experts help you increase rankings, drive organic traffic,
      and grow your business with data-driven strategies.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-5 justify-center"
    >
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-blue-500/40">
        Get Free SEO Audit
      </button>

      <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
        Contact Our Experts
      </button>
    </motion.div>

  </div>
</section>
    </>
  );
};

export default SEOPage;