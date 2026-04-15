// App.jsx
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  MessageCircle,
  ChevronRight,
  Star,
  CheckCircle,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Zap,
  Search,
  Filter,
  Clock,
  Shield,
  Award,
  Building2,
  Briefcase,
  PieChart,
  Network,
  Rocket,
  Crown,
  Sparkles,
  ChevronDown,
  Download,
  Eye,
  UserPlus,
  BookOpen,
  Globe,
  Settings,
  DollarSign,
  Calendar,
  Bell,
  TrendingUp as Trending,
  Users as TeamIcon,
  FileText,
  Database,
  Share2,
  Layers,
  Grid,
  Sliders,
  Bookmark,
  AlertCircle,
  UserCheck,
 Scale,
 Info,
  HelpCircle,
       

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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeTab, setActiveTab] = useState('premium');

  // Detailed service definitions
  const premiumServices = [
    {
      category: "Profile & Visibility",
      icon: <Eye className="h-6 w-6" />,
      features: [
        { name: "Profile Views Analytics", description: "See who viewed your profile in the last 90 days", premium: true, salesNav: true },
        { name: "Profile Badge", description: "Premium badge on your profile", premium: true, salesNav: true },
        { name: "Open Profile", description: "Message anyone on LinkedIn", premium: true, salesNav: true },
        { name: "Who's Followed You", description: "Track your follower growth", premium: true, salesNav: false }
      ]
    },
    {
      category: "Messaging & Communication",
      icon: <MessageCircle className="h-6 w-6" />,
      features: [
        { name: "InMail Credits", description: "Message people outside your network", premium: "15/month", salesNav: "50/month" },
        { name: "Message Templates", description: "Save and reuse message templates", premium: false, salesNav: true },
        { name: "InMail Analytics", description: "Track open and response rates", premium: false, salesNav: true },
        { name: "Smart Links", description: "Share content with tracking", premium: false, salesNav: true }
      ]
    },
    {
      category: "Search & Discovery",
      icon: <Search className="h-6 w-6" />,
      features: [
        { name: "Advanced Search Filters", description: "Filter by company, location, industry", premium: "Basic (5 filters)", salesNav: "Advanced (40+ filters)" },
        { name: "Saved Searches", description: "Save search criteria", premium: "5 saved", salesNav: "Unlimited" },
        { name: "Search Alerts", description: "Get notified of new matches", premium: false, salesNav: true },
        { name: "Boolean Search", description: "Complex search queries", premium: false, salesNav: true }
      ]
    },
    {
      category: "Lead Management",
      icon: <Target className="h-6 w-6" />,
      features: [
        { name: "Lead Recommendations", description: "AI-powered lead suggestions", premium: "Basic", salesNav: "Advanced" },
        { name: "Saved Leads", description: "Save leads to track", premium: "500", salesNav: "Unlimited" },
        { name: "Lead Lists", description: "Organize leads into lists", premium: false, salesNav: true },
        { name: "Lead Alerts", description: "Real-time lead updates", premium: false, salesNav: true }
      ]
    },
    {
      category: "Company Intelligence",
      icon: <Building2 className="h-6 w-6" />,
      features: [
        { name: "Company Insights", description: "Company growth and hiring trends", premium: "Basic", salesNav: "Detailed" },
        { name: "Company Alerts", description: "Job changes, funding news", premium: false, salesNav: true },
        { name: "Org Charts", description: "View company hierarchy", premium: false, salesNav: true },
        { name: "Similar Companies", description: "Find similar target accounts", premium: false, salesNav: true }
      ]
    },
    {
      category: "Integration & Export",
      icon: <Database className="h-6 w-6" />,
      features: [
        { name: "Export to CRM", description: "Export lead data", premium: false, salesNav: true },
        { name: "CRM Integration", description: "Sync with Salesforce, HubSpot", premium: false, salesNav: true },
        { name: "API Access", description: "Programmatic access", premium: false, salesNav: "Limited" },
        { name: "Bulk Actions", description: "Manage leads in bulk", premium: false, salesNav: true }
      ]
    }
  ];

  const salesNavServices = [
    {
      category: "Advanced Lead Building",
      icon: <UserPlus className="h-6 w-6" />,
      features: [
        { name: "Spotlight Leads", description: "Leads matching your ideal customer profile", available: true },
        { name: "TeamLink", description: "Leverage team connections", available: true },
        { name: "PointDrive", description: "Share presentations with tracking", available: true },
        { name: "Lead Builder", description: "Build targeted lead lists", available: true }
      ]
    },
    {
      category: "Account Targeting",
      icon: <Target className="h-6 w-6" />,
      features: [
        { name: "Account Lists", description: "Create and manage target accounts", available: true },
        { name: "Account Alerts", description: "Real-time account updates", available: true },
        { name: "Similar Accounts", description: "Find comparable companies", available: true },
        { name: "Account Hub", description: "Centralized account view", available: true }
      ]
    },
    {
      category: "Sales Insights",
      icon: <PieChart className="h-6 w-6" />,
      features: [
        { name: "Lead Recommendations", description: "AI-powered lead suggestions", available: true },
        { name: "Job Change Alerts", description: "Know when leads change jobs", available: true },
        { name: "Company News", description: "Real-time company updates", available: true },
        { name: "Sales Insights", description: "Key buying signals", available: true }
      ]
    },
    {
      category: "Team Collaboration",
      icon: <TeamIcon className="h-6 w-6" />,
      features: [
        { name: "Team Folders", description: "Shared lead lists", available: true },
        { name: "Deal Spotlight", description: "Collaborate on deals", available: true },
        { name: "Team Activity", description: "See team engagement", available: true },
        { name: "Admin Controls", description: "Manage team access", available: true }
      ]
    }
  ];

  const featureComparison = [
    {
      category: "Profile Features",
      items: [
        { feature: "Premium Profile Badge", premium: "✅", salesNav: "✅" },
        { feature: "Profile Views (90 days)", premium: "✅", salesNav: "✅" },
        { feature: "Who's Followed You", premium: "✅", salesNav: "❌" },
        { feature: "Open Profile", premium: "✅", salesNav: "✅" }
      ]
    },
    {
      category: "Search & Filters",
      items: [
        { feature: "Basic Search Filters", premium: "15 filters", salesNav: "40+ filters" },
        { feature: "Boolean Search", premium: "❌", salesNav: "✅" },
        { feature: "Saved Searches", premium: "5", salesNav: "Unlimited" },
        { feature: "Search Alerts", premium: "❌", salesNav: "✅" }
      ]
    },
    {
      category: "Messaging",
      items: [
        { feature: "Monthly InMail Credits", premium: "15", salesNav: "50" },
        { feature: "Message Templates", premium: "❌", salesNav: "✅" },
        { feature: "InMail Analytics", premium: "❌", salesNav: "✅" },
        { feature: "Smart Links", premium: "❌", salesNav: "✅" }
      ]
    },
    {
      category: "Lead Management",
      items: [
        { feature: "Saved Leads", premium: "500", salesNav: "Unlimited" },
        { feature: "Lead Recommendations", premium: "Basic", salesNav: "AI-Powered" },
        { feature: "Lead Lists", premium: "❌", salesNav: "✅" },
        { feature: "Lead Alerts", premium: "❌", salesNav: "✅" }
      ]
    },
    {
      category: "Company Intelligence",
      items: [
        { feature: "Company Insights", premium: "Basic", salesNav: "Advanced" },
        { feature: "Company Alerts", premium: "❌", salesNav: "✅" },
        { feature: "Org Charts", premium: "❌", salesNav: "✅" },
        { feature: "Similar Companies", premium: "❌", salesNav: "✅" }
      ]
    },
    {
      category: "Integration",
      items: [
        { feature: "CRM Export", premium: "❌", salesNav: "✅" },
        { feature: "CRM Sync", premium: "❌", salesNav: "✅ (Salesforce, HubSpot)" },
        { feature: "API Access", premium: "❌", salesNav: "Limited" },
        { feature: "Bulk Actions", premium: "❌", salesNav: "✅" }
      ]
    },
    {
      category: "Team Features",
      items: [
        { feature: "Team Collaboration", premium: "❌", salesNav: "✅" },
        { feature: "Team Folders", premium: "❌", salesNav: "✅" },
        { feature: "Admin Controls", premium: "❌", salesNav: "✅" },
        { feature: "Activity Reports", premium: "❌", salesNav: "✅" }
      ]
    }
  ];

  const useCases = [
   
    {
      role: "Business Professional",
      icon: <Building2 className="h-6 w-6" />,
      description: "Grow your professional network",
      features: ["Advanced profile views", "15 InMail credits/month", "Company insights", "Open profile"],
      plan: "Business Pro",
      color: "purple"
    },
    {
      role: "Sales Professional",
      icon: <Target className="h-6 w-6" />,
      description: "Find and close more deals",
      features: ["40+ search filters", "50 InMail credits/month", "Lead recommendations", "CRM integration"],
      plan: "Sales Accelerator",
      color: "green"
    },
    {
      role: "Sales Manager",
      icon: <TeamIcon className="h-6 w-6" />,
      description: "Lead your team to success",
      features: ["Team collaboration", "Deal spotlight", "Team analytics", "Admin controls"],
      plan: "Sales Accelerator Team",
      color: "orange"
    }
  ];

  const faqData = [
  {
    q: "What's the main difference between Business Pro and Sales Accelerator?",
    a: "Business Pro is designed for individual professionals to enhance their profile, network, and career opportunities. It focuses on personal branding, profile visibility, and professional development. Sales Accelerator is specifically built for sales professionals with advanced search capabilities (40+ filters), lead recommendations, real-time alerts, and CRM integration to find and close deals.",
    category: "general"
  },
  {
    q: "Can I use both Business Pro and Sales Accelerator?",
    a: "Yes, you can have both subscriptions, but it's usually unnecessary as Sales Accelerator includes all Business Pro features plus additional sales-specific tools. However, some power users choose to maintain both for different purposes.",
    category: "general"
  },
  {
    q: "How many InMail messages do I get?",
    a: "Business Pro includes 15 InMail credits per month, while Sales Accelerator includes 50 credits per month. Unused credits don't roll over to the next month. Additional InMail credits can be purchased as needed.",
    category: "messaging"
  },
  {
    q: "What search filters does Sales Accelerator have that Business Pro doesn't?",
    a: "Sales Accelerator offers 40+ advanced filters including seniority level, years in position, company size, geography, function, tenure, and boolean search capabilities. Business Pro has basic filters like location, industry, and company size.",
    category: "search"
  },
  {
    q: "Can I export data from Sales Accelerator to my CRM?",
    a: "Yes, Sales Accelerator allows you to export leads and integrate directly with major CRMs like Salesforce, HubSpot, Microsoft Dynamics, and more. You can sync leads, accounts, and activity data in real-time.",
    category: "integration"
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, both Premium and Sales Accelerator offer a 30-day free trial. No credit card is required to start your trial. You can cancel anytime during the trial period with no charges.",
    category: "billing"
  },
  {
    q: "Can I switch plans or cancel anytime?",
    a: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle. There are no long-term contracts or cancellation fees.",
    category: "billing"
  }
];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section 
  id="home" 
  className="pt-24 pb-16 relative overflow-hidden min-h-[600px] flex items-center"
>
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
      alt="LinkedIn Professional Background"
      className="w-full h-full object-cover"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
  </div>

  {/* Content - Centered */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="flex flex-col items-center text-center">
      
      {/* Badge */}
      

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
        Choose Your Path to{' '}
        <span className="text-blue-400">LinkedIn Success</span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
        Whether you're building your career or closing deals, we have the perfect LinkedIn solution for your needs.
      </p>
      {/* CTA Buttons - Centered */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
       <button
  onClick={() =>
    window.open(
      "https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn",
      "_blank"
    )
  }
  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center font-semibold shadow-lg shadow-blue-500/30"
>
  Start Free Trial 
  <ChevronRight className="ml-2 h-5 w-5" />
</button>
      </div>

    </div>
  </div>
 <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
  <WaveTransition />
</div>
 
</section>

      {/* Service Tabs */}
<section id="services" className="py-20 bg-gradient-to-b from-blue-100 to-blue-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header with Animation */}
    <div className="text-center mb-16">
      
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Features</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover the powerful tools and capabilities designed to supercharge your LinkedIn presence
      </p>

      {/* Enhanced Tab Navigation with Icons */}
      <div className="flex justify-center mt-10">
        <div className="bg-white p-1.5 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('premium')}
              className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'premium' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-200' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Crown className={`h-5 w-5 ${activeTab === 'premium' ? 'text-yellow-300' : 'text-purple-400'}`} />
              Business Pro
              {activeTab === 'premium' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('salesnav')}
              className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'salesnav' 
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Target className={`h-5 w-5 ${activeTab === 'salesnav' ? 'text-yellow-300' : 'text-green-400'}`} />
              Sales Accelerator
              {activeTab === 'salesnav' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Active Tab Indicator */}
      <div className="mt-4 text-sm text-gray-500">
        {activeTab === 'premium' ? (
          <span className="flex items-center justify-center gap-2">
            <Crown className="h-4 w-4 text-purple-500" />
            Showing Business Pro features
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Target className="h-4 w-4 text-green-500" />
            Showing Sales Accelerator features
          </span>
        )}
      </div>
    </div>

    {/* Premium Services Grid - Enhanced Design with Colorful Icons */}
    {activeTab === 'premium' && (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {premiumServices.map((category, idx) => {
          // Colorful icon combinations
          const iconColors = [
            { from: "from-purple-500", to: "to-pink-500", bg: "bg-purple-100", text: "text-purple-600", light: "from-purple-50", medium: "to-pink-50" },
            { from: "from-blue-500", to: "to-cyan-500", bg: "bg-blue-100", text: "text-blue-600", light: "from-blue-50", medium: "to-cyan-50" },
            { from: "from-amber-500", to: "to-orange-500", bg: "bg-amber-100", text: "text-amber-600", light: "from-amber-50", medium: "to-orange-50" },
            { from: "from-emerald-500", to: "to-teal-500", bg: "bg-emerald-100", text: "text-emerald-600", light: "from-emerald-50", medium: "to-teal-50" },
            { from: "from-rose-500", to: "to-red-500", bg: "bg-rose-100", text: "text-rose-600", light: "from-rose-50", medium: "to-red-50" },
            { from: "from-indigo-500", to: "to-purple-500", bg: "bg-indigo-100", text: "text-indigo-600", light: "from-indigo-50", medium: "to-purple-50" }
          ];
          
          const color = iconColors[idx % iconColors.length];
          
          return (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Hover Effect - Now with proper opacity and z-index */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color.light} ${color.medium} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
              
              {/* Content with higher z-index */}
              <div className="relative z-10">
                {/* Colorful Icon with Pulse Effect */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${color.from} ${color.to} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(category.icon, { className: "h-7 w-7" })}
                  </div>
                </div>

                {/* Category Title */}
                <h3 className={`text-xl font-bold text-gray-900 mb-4 group-hover:${color.text} transition-colors`}>
                  {category.category}
                </h3>

                {/* Features List */}
                <ul className="space-y-4">
                  {category.features.map((feature, fIdx) => {
                    // Feature-specific colors
                    const featureColors = [
                      "text-purple-600 bg-purple-100",
                      "text-blue-600 bg-blue-100", 
                      "text-amber-600 bg-amber-100",
                      "text-emerald-600 bg-emerald-100"
                    ];
                    const featureColor = featureColors[fIdx % featureColors.length];
                    
                    return (
                      <li key={fIdx} className="text-sm border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {feature.premium ? (
                              <div className={`w-5 h-5 ${featureColor.split(' ')[1]} rounded-full flex items-center justify-center`}>
                                <CheckCircle className={`h-3 w-3 ${featureColor.split(' ')[0]}`} />
                              </div>
                            ) : (
                              <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-gray-900">{feature.name}</span>
                              {typeof feature.premium === 'string' && (
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                  fIdx === 0 ? 'bg-purple-100 text-purple-700' :
                                  fIdx === 1 ? 'bg-blue-100 text-blue-700' :
                                  fIdx === 2 ? 'bg-amber-100 text-amber-700' :
                                  'bg-emerald-100 text-emerald-700'
                                }`}>
                                  {feature.premium}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-500 text-xs mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Feature Count Badge with matching color */}
                <div className={`absolute top-4 right-4 ${color.bg} ${color.text} text-xs font-semibold px-2 py-1 rounded-full`}>
                  {category.features.length} features
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )}

    {/* Sales Navigator Services Grid - Enhanced Design with Colorful Icons */}
    {activeTab === 'salesnav' && (
      <div className="grid md:grid-cols-2 gap-8">
        {salesNavServices.map((category, idx) => {
          // Colorful icon combinations for sales
          const iconColors = [
            { from: "from-emerald-500", to: "to-teal-500", bg: "bg-emerald-100", text: "text-emerald-600", light: "from-emerald-50", medium: "to-teal-50" },
            { from: "from-blue-500", to: "to-indigo-500", bg: "bg-blue-100", text: "text-blue-600", light: "from-blue-50", medium: "to-indigo-50" },
            { from: "from-amber-500", to: "to-orange-500", bg: "bg-amber-100", text: "text-amber-600", light: "from-amber-50", medium: "to-orange-50" },
            { from: "from-purple-500", to: "to-pink-500", bg: "bg-purple-100", text: "text-purple-600", light: "from-purple-50", medium: "to-pink-50" }
          ];
          
          const color = iconColors[idx % iconColors.length];
          
          return (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 animate-fadeInUp lg:col-span-1 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Hover Effect - Now with proper opacity and z-index */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color.light} ${color.medium} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
              
              {/* Content with higher z-index */}
              <div className="relative z-10">
                {/* Colorful Icon with Pulse Effect */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${color.from} ${color.to} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${color.from} ${color.to} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(category.icon, { className: "h-7 w-7" })}
                  </div>
                </div>

                {/* Category Title */}
                <h3 className={`text-xl font-bold text-gray-900 mb-4 group-hover:${color.text} transition-colors`}>
                  {category.category}
                </h3>

                {/* Features List */}
                <ul className="space-y-4">
                  {category.features.map((feature, fIdx) => {
                    // Feature icon colors
                    const featureIconColors = [
                      "text-emerald-600 bg-emerald-100",
                      "text-blue-600 bg-blue-100",
                      "text-amber-600 bg-amber-100",
                      "text-purple-600 bg-purple-100"
                    ];
                    const featureColor = featureIconColors[fIdx % featureIconColors.length];
                    
                    return (
                      <li key={fIdx} className="text-sm border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-5 h-5 ${featureColor.split(' ')[1]} rounded-full flex items-center justify-center`}>
                              <CheckCircle className={`h-3 w-3 ${featureColor.split(' ')[0]}`} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-gray-900 block mb-1">{feature.name}</span>
                            <p className="text-gray-500 text-xs">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Feature Count Badge with matching color */}
                <div className={`absolute top-4 right-4 ${color.bg} ${color.text} text-xs font-semibold px-2 py-1 rounded-full`}>
                  {category.features.length} features
                </div>

                {/* Sales Navigator Specific Badge */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs">
                    <Rocket className={`h-4 w-4 ${color.text}`} />
                    <span className="text-gray-500">Sales Accelerator Exclusive Features</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )}

    {/* Bottom CTA */}
    
  </div>

</section>


      {/* Detailed Comparison Table */}
<section id="comparison" className="pt-10 pb-24 bg-gradient-to-b from-blue-100 to-blue-100 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    {/* Section Header - Enhanced */}
    <div className="text-center mb-6">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gray-900">Side-by-Side </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Comparison</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        See exactly what you get with each plan and make an informed decision
      </p>

      {/* Plan headers */}
    <div className="relative flex justify-center items-center mt-2">

  <div className="absolute left-[58%] top-6 flex items-center gap-16">

    <div className="flex items-center gap-5 bg-white px-6 py-3 rounded-xl shadow-sm border border-purple-100">
      <div className="text-left">
        <p className="font-bold text-gray-900">Business</p>
        <p className="font-bold text-gray-900">Pro</p>
      </div>
    </div>
    
    <div className="mx-6 text-gray-300 text-xl font-light">VS</div>
    
    <div className="flex items-center gap-5 bg-white px-6 py-3 rounded-xl shadow-sm border border-green-100">
      <div className="text-left">
        <p className="font-bold text-gray-900">Sales</p>
        <p className="font-bold text-gray-900">Accelerator</p>
      </div>
    </div>

  </div>
 </div>
</div>
    

    {/* Comparison Table - Redesigned */}
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {featureComparison.map((section, idx) => (
        <div key={idx} className="border-b border-gray-100 last:border-b-0">
          {/* Section Header with gradient */}
          <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
              <h3 className="font-bold text-lg text-gray-900">{section.category}</h3>
            </div>
          </div>

          {/* Table */}
          <table className="w-full">
            <tbody>
              {section.items.map((item, iIdx) => (
                <tr 
                  key={iIdx} 
                  className="group border-b border-gray-50 last:border-b-0 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-white transition-all duration-200"
                >
                  {/* Feature name */}
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-purple-400 transition-colors"></span>
                      <span className="text-gray-700 font-medium">{item.feature}</span>
                    </div>
                  </td>

                  {/* Premium column */}
                  <td className="px-8 py-5 w-1/4">
                    <div className="flex items-center justify-center">
                      {typeof item.premium === 'string' && item.premium !== "✅" && item.premium !== "❌" ? (
                        <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-sm font-medium border border-purple-100 shadow-sm">
                          {item.premium}
                        </span>
                      ) : item.premium === "✅" ? (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Sales Navigator column */}
                  <td className="px-8 py-5 w-1/4">
                    <div className="flex items-center justify-center">
                      {typeof item.salesNav === 'string' && item.salesNav !== "✅" && item.salesNav !== "❌" ? (
                        <span className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-medium border border-green-100 shadow-sm">
                          {item.salesNav}
                        </span>
                      ) : item.salesNav === "✅" ? (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

    </div>

    {/* Bottom CTA */}
   
  </div>
</section>

      {/* Use Cases Section */}
     <section id="use-cases" className="py-24 bg-gradient-to-b from-blue-100 to-blue-100 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    {/* Section Header - Enhanced */}
    <div className="text-center mb-16">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gray-900">Find Your </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Perfect Match</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Choose the perfect LinkedIn solution based on your professional goals and career aspirations
      </p>
    </div>

    {/* Use Cases Grid - Redesigned */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {useCases.map((useCase, idx) => {
        // Color schemes for each card
        const colorSchemes = {
         
          purple: {
            light: "bg-purple-50",
            medium: "bg-purple-100",
            dark: "text-purple-600",
            border: "border-purple-200",
            gradient: "from-purple-500 to-purple-600",
            hover: "group-hover:border-purple-300",
            badge: "bg-purple-600"
          },
          green: {
            light: "bg-green-50",
            medium: "bg-green-100",
            dark: "text-green-600",
            border: "border-green-200",
            gradient: "from-green-500 to-green-600",
            hover: "group-hover:border-green-300",
            badge: "bg-green-600"
          },
          orange: {
            light: "bg-orange-50",
            medium: "bg-orange-100",
            dark: "text-orange-600",
            border: "border-orange-200",
            gradient: "from-orange-500 to-orange-600",
            hover: "group-hover:border-orange-300",
            badge: "bg-orange-600"
          }
        };

        const scheme = colorSchemes[useCase.color] || colorSchemes.blue;

        return (
          <div 
            key={idx} 
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
          >
            {/* Background gradient effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${scheme.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
            
            {/* Content with higher z-index */}
            <div className="relative z-10">
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${scheme.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${scheme.gradient} rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {useCase.icon}
                </div>
                
                {/* Decorative dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-white shadow-lg">
                  <div className={`w-full h-full ${scheme.badge} rounded-full`}></div>
                </div>
              </div>

              {/* Role and Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.role}</h3>
              <p className="text-sm text-gray-500 mb-4">{useCase.description}</p>

              {/* Plan Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1 px-3 py-1.5 ${scheme.light} ${scheme.dark} rounded-full text-xs font-semibold border ${scheme.border}`}>
                  <Crown className="h-3 w-3" />
                  {useCase.plan}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {useCase.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm">
                    <div className={`flex-shrink-0 w-5 h-5 ${scheme.light} rounded-full flex items-center justify-center mt-0.5`}>
                      <CheckCircle className={`h-3 w-3 ${scheme.dark}`} />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all duration-300 ${
                useCase.color === 'blue' ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' :
                useCase.color === 'purple' ? 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white' :
                useCase.color === 'green' ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white' :
                'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              } hover:shadow-lg transform hover:scale-105`}>
                Choose {useCase.plan}
              </button>

              {/* Popular tag for specific card */}
              {idx === 1 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  
  </div>
</section>

      {/* Key Differences Summary */}
     <section className="py-24 relative overflow-hidden">
      {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
  {/* Background Image with Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
      alt="Professional background"
      className="w-full h-full object-cover"
    />
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Key Differences <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">at a Glance</span>
      </h2>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Understand the core distinction between the two solutions
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Premium Business Card */}
      <div className="group relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-gray-900 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Crown className="h-8 w-8" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Business Pro</h3>
          <p className="text-gray-300 mb-6">Best for individual professionals focused on:</p>
          
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-400/20 group-hover/item:border-yellow-400/40 transition-all">
                <UserPlus className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Personal Brand Building</p>
                <p className="text-sm text-gray-400">Establish thought leadership and grow your network</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-400/20 group-hover/item:border-yellow-400/40 transition-all">
                <Eye className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Profile Visibility</p>
                <p className="text-sm text-gray-400">See who's viewing your profile and track engagement</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-400/20 group-hover/item:border-yellow-400/40 transition-all">
                <BookOpen className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Learning & Development</p>
                <p className="text-sm text-gray-400">Access to LinkedIn Learning courses</p>
              </div>
            </li>
          </ul>

          {/* Bottom accent */}
          
        </div>
      </div>

      {/* Sales Navigator Card */}
      <div className="group relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon with glow effect */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-green-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-gray-900 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Target className="h-8 w-8" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Sales Accelerator</h3>
          <p className="text-gray-300 mb-6">Designed for sales professionals focusing on:</p>
          
          <ul className="space-y-5">
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400/20 group-hover/item:border-green-400/40 transition-all">
                <Search className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Advanced Prospect Discovery</p>
                <p className="text-sm text-gray-400">40+ search filters to find ideal leads</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400/20 group-hover/item:border-green-400/40 transition-all">
                <Bell className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Real-time Lead Alerts</p>
                <p className="text-sm text-gray-400">Get notified when leads change jobs or roles</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4 group/item">
              <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-400/20 group-hover/item:border-green-400/40 transition-all">
                <Database className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">CRM Integration</p>
                <p className="text-sm text-gray-400">Seamless sync with Salesforce, HubSpot, and more</p>
              </div>
            </li>
          </ul>

          
        </div>
      </div>
    </div>   
  </div>
  <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
</section>

      {/* Pricing Section */}
     <section id="pricing" className="py-24 bg-gradient-to-b from-blue-100 to-blue-100 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    {/* Section Header - Enhanced */}
    <div className="text-center mb-16">
      
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gray-900">Choose Your </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Perfect Plan</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Simple, transparent pricing with no hidden fees. Start your 30-day free trial today.
      </p>

      {/* Billing Toggle - Enhanced */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <span className={`text-base font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
          Monthly billing
        </span>
        
        <button
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
              billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
            }`}
          />
        </button>
        
        <div className="flex items-center gap-2">
          <span className={`text-base font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-400'}`}>
            Annual billing
          </span>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
            Save 20%
          </span>
        </div>
      </div>
    </div>

    {/* Pricing Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
     
     

      {/* Premium Business Card - Featured */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-500 hover:-translate-y-2">
        {/* Most Popular Badge */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-20">
          🏆 Most Popular
        </div>

        {/* Hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-purple-400 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Crown className="h-7 w-7" />
            </div>
          </div>

          {/* Plan details */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Business Pro</h3>
          <p className="text-sm text-gray-500 mb-4">For professionals</p>
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${billingCycle === 'annual' ? '47.99' : '59.99'}
            </span>
            <span className="text-gray-500 text-sm ml-1">/month</span>
            {billingCycle === 'annual' && (
              <div className="mt-1 text-xs text-green-600 font-medium">Billed annually</div>
            )}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-lg hover:shadow-purple-200 mb-6">
            Start Free Trial
          </button>

          {/* Features */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Everything in Career, plus:
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              15 InMail credits/month
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Company insights
            </li>
          </ul>
        </div>
      </div>

      {/* Sales Navigator Core Card */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
        {/* Hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-green-400 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Target className="h-7 w-7" />
            </div>
          </div>

          {/* Plan details */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Sales Accelerator Core</h3>
          <p className="text-sm text-gray-500 mb-4">For individual sales pros</p>
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${billingCycle === 'annual' ? '79.99' : '99.99'}
            </span>
            <span className="text-gray-500 text-sm ml-1">/month</span>
            {billingCycle === 'annual' && (
              <div className="mt-1 text-xs text-green-600 font-medium">Billed annually</div>
            )}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-200 mb-6">
            Start Free Trial
          </button>

          {/* Features */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Advanced lead search (40+ filters)
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              50 InMail credits/month
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Lead recommendations
            </li>
          </ul>
        </div>
      </div>

      {/* Sales Navigator Advanced Card */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:-translate-y-2">
        {/* Team Badge */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          👥 Best for Teams
        </div>

        {/* Hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-orange-400 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Rocket className="h-7 w-7" />
            </div>
          </div>

          {/* Plan details */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Sales Accelerator Advanced</h3>
          <p className="text-sm text-gray-500 mb-4">For sales teams</p>
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${billingCycle === 'annual' ? '119.99' : '149.99'}
            </span>
            <span className="text-gray-500 text-sm ml-1">/month per seat</span>
            {billingCycle === 'annual' && (
              <div className="mt-1 text-xs text-green-600 font-medium">Billed annually</div>
            )}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all hover:shadow-lg hover:shadow-orange-200 mb-6">
            Contact Sales
          </button>

          {/* Features */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Everything in Core, plus:
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Team collaboration tools
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              CRM integration
            </li>
          </ul>
        </div>
      </div>
    </div>
 
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-blue-100 to-blue-100 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
    {/* Section Header - Enhanced */}
    <div className="text-center mb-16">
      
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gray-900">Frequently Asked </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Questions</span>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Everything you need to know about our services and plans
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="space-y-4">
      {faqData.map((faq, index) => {
        const [isOpen, setIsOpen] = useState(index === 0); // First one open by default
        
        return (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Question Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Question number */}
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Question text */}
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.q}
                </span>
              </div>
              
              {/* Expand/collapse icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-purple-100 rotate-180' : 'group-hover:bg-gray-200'
              }`}>
                <ChevronDown className={`h-5 w-5 transition-colors ${
                  isOpen ? 'text-purple-600' : 'text-gray-500'
                }`} />
              </div>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-6">
                {/* Decorative line */}
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mb-4"></div>
                
                {/* Answer content */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8"></div> {/* Spacer to align with question number */}
                  <div className="flex-1">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                    
                    {/* Additional metadata for certain answers */}
                    {faq.q.includes("InMail") && (
                      <div className="mt-4 flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-600 rounded-full">
                          <Mail className="h-3 w-3" />
                          <span>Premium: 15/month</span>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-full">
                          <Mail className="h-3 w-3" />
                          <span>Sales Nav: 50/month</span>
                        </div>
                      </div>
                    )}
                    
                    {faq.q.includes("search filters") && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">40+ filters</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">Boolean search</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">Company size</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
 
  </div>
</section>

      
     {/* CTA Section */}
<section className="relative py-16 overflow-hidden">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
      alt="LinkedIn marketing background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Ready to choose your LinkedIn solution?
    </h2>

    <p className="text-xl text-blue-100 mb-8">
      Start your 30-day free trial today
    </p>

    <div className="flex flex-wrap gap-4 justify-center">
      

      <button
  onClick={() =>
    window.open(
      "https://api.visionarydynamicsas.com/widget/booking/mD00AZHzMYkdAb3d4RBn",
      "_blank"
    )
  }
  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
>
  Start Sales Accelerator Trial
</button>
    </div>
  </div>

</section>
    </div>
  );
};

export default App;