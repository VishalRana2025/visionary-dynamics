// AIConsultingPage.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Brain,
  Zap,
  Shield,
  Globe,
  BarChart3,
  ArrowRight,
  Star,
  Users,
  Clock,
  Target,
  TrendingUp,
  Award,
  Headphones,
  FileText,
  Settings,
  Play,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Lightbulb,
  Rocket,
  LineChart,
  Puzzle,
  Coffee,
  Briefcase,
  GraduationCap,
  Network,
  MessageSquare,
  PieChart,
  Download,
  Calendar,
  ThumbsUp,
  Check,
  Search,
  Smartphone,
  Code
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

const AIConsultingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

 // Replace consultingServices with services
const services = [
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable intelligence with AI-powered analytics that predict trends and optimize decision-making.",
    features: [
      "Predictive analytics & forecasting",
      "Real-time data visualization",
      "Automated reporting & dashboards",
      "Customer behavior analysis"
    ],
    color: "blue"
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Intelligent Customer Support",
    description: "Deliver exceptional customer experiences with AI-enhanced support systems that understand context and provide instant solutions.",
    features: [
      "AI-powered chatbots & virtual assistants",
      "Sentiment analysis & customer insights",
      "Automated ticket routing & prioritization",
      "24/7 multilingual support"
    ],
    color: "purple"
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Smart Automation Solutions",
    description: "Streamline operations and reduce manual effort with intelligent automation that learns and adapts to your workflows.",
    features: [
      "Robotic process automation (RPA)",
      "Intelligent document processing",
      "Workflow optimization",
      "Automated quality assurance"
    ],
    color: "green"
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Marketing Intelligence",
    description: "Supercharge your marketing efforts with AI-driven insights that optimize campaigns and maximize ROI.",
    features: [
      "Personalized content recommendations",
      "Campaign performance prediction",
      "Customer segmentation & targeting",
      "Social media sentiment analysis"
    ],
    color: "orange"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "AI-Enhanced Security",
    description: "Protect your digital assets with intelligent security systems that detect and respond to threats in real-time.",
    features: [
      "Threat detection & prevention",
      "Anomaly detection algorithms",
      "Automated incident response",
      "Compliance monitoring"
    ],
    color: "red"
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Smart Development",
    description: "Accelerate software development with AI-assisted coding, testing, and deployment tools that boost productivity.",
    features: [
      "AI-powered code assistance",
      "Automated testing & QA",
      "Intelligent deployment pipelines",
      "Performance optimization"
    ],
    color: "indigo"
  }
];

 const methodology = [
  {
    phase: "1. Automation",
    icon: <Search className="w-8 h-8" />,
    description:
      "AI helps automate repetitive and time-consuming tasks like data entry, reports, and routine operations.",
    steps: [
      "Reduce manual effort",
      "Save time",
      "Automate routine tasks",
      "Improve workflow efficiency",
      "Focus on high-value work"
    ],
    duration: "Efficiency Boost"
  },
  {
    phase: "2. Data Analysis",
    icon: <Target className="w-8 h-8" />,
    description:
      "AI processes large amounts of data quickly and accurately to generate valuable insights.",
    steps: [
      "Fast data processing",
      "Identify patterns",
      "Generate insights",
      "Better decision-making",
      "Smart strategies"
    ],
    duration: "Smart Insights"
  },
  {
    phase: "3. Accuracy & Error Reduction",
    icon: <Rocket className="w-8 h-8" />,
    description:
      "AI minimizes human errors and ensures more reliable and consistent results across services.",
    steps: [
      "Reduce human errors",
      "Improve consistency",
      "Ensure accuracy",
      "Reliable outputs",
      "Quality improvement"
    ],
    duration: "High Accuracy"
  },
  {
    phase: "4. Speed & Efficiency",
    icon: <TrendingUp className="w-8 h-8" />,
    description:
      "AI speeds up workflows and enhances productivity, enabling faster service delivery.",
    steps: [
      "Faster execution",
      "Boost productivity",
      "Optimize workflows",
      "Quick turnaround",
      "Maintain quality"
    ],
    duration: "Faster Delivery"
  }
];
  const expertiseAreas = [
  {
    title: "Financial Services",
    description:
      "Using AI to automate financial processes, detect anomalies, and generate faster, data-driven insights for better decision-making.",
    icon: "💰",
   
  },
  {
    title: "Healthcare",
    description:
      "Applying AI to streamline patient data management, support clinical decisions, and improve operational efficiency.",
    icon: "🏥",
   
  },
  {
    title: "Retail & CPG",
    description:
      "Leveraging AI for demand forecasting, customer behavior analysis, and personalized experiences to boost sales and efficiency.",
    icon: "🛒",
   
  },
  {
    title: "Manufacturing",
    description:
      "Integrating AI to monitor production, predict maintenance needs, and enhance quality control processes.",
    icon: "🏭",
   
  },
  {
    title: "Technology",
    description:
      "Enhancing development workflows with AI-driven automation, faster debugging, and smarter product optimization.",
    icon: "💻",
   
  },
  {
    title: "Energy & Utilities",
    description:
      "Utilizing AI for system monitoring, demand prediction, and efficient resource management to support sustainable operations.",
    icon: "⚡",
   
  }
];

  const thoughtLeadership = [
    {
      title: "The AI Adoption Playbook for Enterprises",
      type: "Whitepaper",
      description: "A comprehensive guide to successfully implementing AI in large organizations",
      image: "📚",
      date: "Feb 2024",
      readTime: "15 min read"
    },
    {
      title: "ROI of AI: Measuring Success in Consulting",
      type: "Research Report",
      description: "Framework for calculating and tracking AI investment returns",
      image: "📊",
      date: "Jan 2024",
      readTime: "10 min read"
    },
    {
      title: "AI Ethics: Building Trustworthy Systems",
      type: "Guide",
      description: "Best practices for responsible AI development and deployment",
      image: "⚖️",
      date: "Dec 2023",
      readTime: "12 min read"
    },
    {
      title: "Future of Work: AI & Human Collaboration",
      type: "Webinar",
      description: "On-demand session with industry experts",
      image: "🎥",
      date: "Recorded",
      readTime: "45 min watch"
    }
  ];

  const stats = [
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      value: "200+", 
      label: "Client Projects", 
      description: "Across 20+ industries" 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      value: "50+", 
      label: "AI Experts", 
      description: "PhD-level consultants" 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      value: "85%", 
      label: "ROI Achievement", 
      description: "Average client ROI" 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      value: "15+", 
      label: "Countries", 
      description: "Global presence" 
    }
  ];


  

  
  const faqs = [
    {
      question: "How do you approach AI consulting differently?",
      answer: "We combine deep technical expertise with practical business acumen. Our approach starts with understanding your business goals, then identifies where AI can create real value. We don't just deliver reports; we partner with you through implementation and help build internal capabilities."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in financial services, healthcare, retail, manufacturing, and technology. Our consultants bring both industry domain knowledge and technical AI expertise, ensuring solutions that are both innovative and practical."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Engagements vary based on scope. A strategic assessment typically takes 4-6 weeks. Pilot projects run 8-12 weeks. Full-scale transformation programs are longer-term partnerships, usually 6-12 months with ongoing support."
    },
    {
      question: "Do you help with implementation or just strategy?",
      answer: "Both. We offer end-to-end support from strategy through implementation. We can help you build internal teams, select vendors, develop proofs of concept, and provide hands-on technical guidance during deployment."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear KPIs at the start of every engagement. These could include ROI targets, efficiency gains, cost savings, or revenue growth. We track progress rigorously and adjust our approach as needed to ensure results."
    },
    {
      question: "What makes your team qualified?",
      answer: "Our consultants combine top-tier academic credentials (PhDs from leading universities) with practical industry experience at companies like Google, McKinsey, and IBM. Many have built and scaled AI solutions at enterprise level."
    }
  ];

  const resources = [
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your organization's preparedness for AI adoption",
      type: "Tool",
      icon: "📊"
    },
    {
      title: "ROI Calculator",
      description: "Estimate potential returns from AI investments",
      type: "Tool",
      icon: "🧮"
    },
    {
      title: "Vendor Selection Guide",
      description: "Framework for choosing AI technology partners",
      type: "Guide",
      icon: "📘"
    },
    {
      title: "AI Ethics Checklist",
      description: "Ensure responsible AI development",
      type: "Checklist",
      icon: "✓"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      

      {/* Hero Section - Consulting Focused */}
   <section className="relative overflow-hidden text-white h-[500px]">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://static.vecteezy.com/system/resources/previews/029/922/756/original/artificial-intelligence-landing-page-ai-banner-website-template-for-deep-learning-concept-stock-illustration-vector.jpg" 
      alt="Business strategy meeting" 
      className="w-full h-full object-cover"
    />
    {/* Dark Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
    </div>
  
  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex items-center">
    <div className="w-full">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl">
          Strategic AI Consulting for 
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Business Transformation</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
  <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group">
    Contact Us 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
          
        </div>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</section>
    
     

      {/* Services Section */}
      
<section id="services" className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100 py-24 relative overflow-hidden">
  {/* Animated background elements */}
 

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header with decorative elements */}
    <div className="text-center mb-16 relative">
      
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">What Our AI Can Do</span>
      </h2>
      {/* Decorative dots */}
      
    </div>

    {/* Services Grid - 3 columns with enhanced cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        // Icon color combinations
        const iconStyles = {
          purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600', light: 'bg-purple-50' },
          blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600', light: 'bg-blue-50' },
          green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-500 to-green-600', light: 'bg-green-50' },
          orange: { bg: 'bg-orange-100', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600', light: 'bg-orange-50' },
          red: { bg: 'bg-red-100', text: 'text-red-600', gradient: 'from-red-500 to-red-600', light: 'bg-red-50' },
          indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-600', light: 'bg-indigo-50' }
        };

        const style = iconStyles[service.color] || iconStyles.purple;

        return (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
            
            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${style.gradient} opacity-10 rounded-bl-3xl rounded-tr-3xl`}></div>
            
            {/* Service number with gradient */}
            <div className="absolute top-6 right-6">
              <span className={`text-5xl font-black bg-gradient-to-br ${style.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>

            {/* Icon with glow effect */}
            <div className="relative mb-8">
              <div className={`absolute inset-0 ${style.bg} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
              <div className={`relative w-20 h-20 ${style.bg} rounded-2xl flex items-center justify-center ${style.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
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

            {/* Features with colorful bullets */}
            <div className="space-y-3 mb-8">
              {service.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm">
                  <div className={`w-5 h-5 ${style.light} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                    <div className={`w-2 h-2 ${style.bg} rounded-full`}></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
             
            </div>
            {/* Bottom gradient line */}
            <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${style.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Methodology Section */}
     <section id="methodology" className="relative py-24 overflow-hidden">
      {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image with Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://rejolut.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-20-12.37.13-Design-a-professional-and-futuristic-banner-image-illustrating-the-theme-_Top-10-Artificial-Intelligence-Technologies-In-2024._-The-image-should-visua.webp" 
      alt="Team working on strategy" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
    
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header with decorative elements - updated for dark background */}
    <div className="text-center mb-16">
      
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Transforming Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> with AI</span>
      </h2>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        A proven approach to deliver measurable results for your business
      </p>
      
      {/* Decorative line */}
      <div className="flex justify-center gap-1 mt-6">
        <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
        <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
        <div className="w-4 h-1 bg-purple-400 rounded-full"></div>
      </div>
    </div>

    {/* Methodology cards - with semi-transparent background for dark mode */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {methodology.map((phase, index) => {
        // Dynamic colors based on index - updated for dark background
        const colors = [
          { bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: 'bg-purple-500', text: 'text-purple-300', gradient: 'from-purple-500 to-purple-600', iconBg: 'bg-purple-500/20' },
          { bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'bg-blue-500', text: 'text-blue-300', gradient: 'from-blue-500 to-blue-600', iconBg: 'bg-blue-500/20' },
          { bg: 'bg-green-500/10', border: 'border-green-500/20', icon: 'bg-green-500', text: 'text-green-300', gradient: 'from-green-500 to-green-600', iconBg: 'bg-green-500/20' },
          { bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: 'bg-orange-500', text: 'text-orange-300', gradient: 'from-orange-500 to-orange-600', iconBg: 'bg-orange-500/20' }
        ];
        
        const color = colors[index % colors.length];
        
        return (
          <div 
            key={index} 
            className="group relative"
          >
            {/* Card with hover effect - semi-transparent background */}
            <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border ${color.border} hover:-translate-y-2 h-full flex flex-col hover:bg-white/10`}>
              
              {/* Phase number badge */}
              <div className={`absolute top-4 right-4 w-10 h-10 ${color.icon} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {index + 1}
              </div>
              
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 ${color.iconBg} rounded-xl flex items-center justify-center ${color.text} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 backdrop-blur-sm`}>
                {phase.icon}
              </div>
              
              {/* Phase label */}
              <div className="mb-2">
                <span className={`text-xs font-semibold ${color.text} bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border ${color.border}`}>
                  {phase.phase}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {phase.phase.replace('Phase ', 'Step ')}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {phase.description}
              </p>
              
              {/* Steps list with checkmarks */}
              <div className="space-y-2 mb-4">
                {phase.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className={`flex-shrink-0 w-5 h-5 ${color.iconBg} rounded-full flex items-center justify-center mr-2 mt-0.5 backdrop-blur-sm`}>
                      <Check className={`w-3 h-3 ${color.text}`} />
                    </div>
                    <span className="text-sm text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
              
              {/* Duration with icon */}
              <div className={`flex items-center text-sm ${color.text} border-t ${color.border} pt-4 mt-2`}>
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">{phase.duration}</span>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.gradient} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
            
            {/* Connector line between cards - updated for dark mode */}
            {index < methodology.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                <div className="relative">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-gray-600 to-gray-500"></div>
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-gray-500" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</section>

      {/* Industry Expertise Section */}
     <section className="bg-gradient-to-b from-blue-100 to-blue-100 py-24 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header with decorative elements */}
    <div className="text-center mb-16">
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Expertise</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Deep domain knowledge across key sectors
      </p>

      
    </div>

    {/* Expertise Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {expertiseAreas.map((area, index) => {
        // Dynamic color based on index
        const colors = [
          { bg: 'bg-purple-100', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200', hover: 'hover:border-purple-300', gradient: 'from-purple-600 to-purple-700' },
          { bg: 'bg-blue-100', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200', hover: 'hover:border-blue-300', gradient: 'from-blue-600 to-blue-700' },
          { bg: 'bg-green-100', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200', hover: 'hover:border-green-300', gradient: 'from-green-600 to-green-700' },
          { bg: 'bg-orange-100', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200', hover: 'hover:border-orange-300', gradient: 'from-orange-600 to-orange-700' },
          { bg: 'bg-pink-100', text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-200', hover: 'hover:border-pink-300', gradient: 'from-pink-600 to-pink-700' },
          { bg: 'bg-indigo-100', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200', hover: 'hover:border-indigo-300', gradient: 'from-indigo-600 to-indigo-700' }
        ];
        
        const color = colors[index % colors.length];
        
        return (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color.gradient} opacity-10 rounded-bl-full`}></div>
            
            {/* Icon with background */}
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 ${color.bg} rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {area.icon}
              </div>
              
              {/* Expert count badge */}
              <div className={`${color.light} ${color.text} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                <Users className="w-4 h-4" />
                {area.experts}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
              {area.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {area.description}
            </p>
            {/* Bottom gradient line */}
            <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${color.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        );
      })}
    </div>
  </div>
</section>
    
      {/* CTA Section */}
     <section id="contact" className="relative py-20 overflow-hidden">
      {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image with Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
     src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="AI concept - neural network visualization" 
      className="w-full h-full object-cover"
    />
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
    
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}></div>
  </div>

  {/* Floating AI elements for visual interest */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    
    {/* Animated particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${5 + Math.random() * 10}s infinite`
        }}
      ></div>
    ))}
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Main heading */}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
      Ready to Transform Your Business with 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> AI?</span>
    </h2>
    
    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
      Let's discuss how we can help you navigate the AI landscape and achieve measurable results.
    </p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <a
  href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center cursor-pointer">
    <Calendar className="w-5 h-5 mr-2" />
    Schedule Free Consultation
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
  </button>
</a>
      
      
    </div>
  </div>
</section>
     
    </div>
  );
};

export default AIConsultingPage;