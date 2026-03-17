import React, { useEffect, useRef } from "react";
import {
  Users,
  Shield,
  BarChart3,
  Clock,
  MessageSquare,
  Phone,
  ChevronRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

import preciseImg from "../assets/images/precise-accounting.png";
import finacialImg from "../assets/images/financial-reporting.png";
import taxSupportImg from "../assets/images/tax-support.png";
import increaseImg from "../animations/increase.png";
import dashboardImg from "../animations/dashboard.png";
import updateImg from "../animations/update.png";
import helpdeskImg from "../animations/help-desk.png";
const BookkeepingPage = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 40;
    const colors = [
  'rgba(59, 130, 246, 0.6)',
  'rgba(34, 197, 94, 0.6)',
  'rgba(139, 92, 246, 0.6)',
  'rgba(14, 165, 233, 0.6)',
  'rgba(168, 85, 247, 0.6)',
];


    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 25 + 5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = Math.random() > 0.5 ? 'circle' : 'triangle';
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Bounce off edges
        if (this.x > canvas.width - this.size || this.x < this.size) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height - this.size || this.y < this.size) {
          this.speedY = -this.speedY;
        }

        // Wrap around edges
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.15;

        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw triangle (financial chart shape)
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size * 0.866, this.size * 0.5);
          ctx.lineTo(-this.size * 0.866, this.size * 0.5);
          ctx.closePath();
          ctx.fill();
        }

        // Add subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const services = [
   {
  title: "Bank Reconciliation",
  icon: "💰",
  color: "from-blue-500 to-cyan-400",
  description: "We match your bank and credit card transactions to ensure accurate, error-free financial records."
},
{
  title: "Accounts Payable/Receivable",
  icon: "📊",
  color: "from-emerald-500 to-teal-400",
  description: "Track invoices, manage payments, and maintain healthy cash flow with organized AR and AP processes."
},
{
  title: "Day to Day Transaction Records",
  icon: "📈",
  color: "from-amber-500 to-orange-400",
  description: "We record and organize your daily financial transactions accurately, ensuring your books stay updated and error-free"
},
{
  title: "Data Migration",
  icon: "📋",
  color: "from-red-500 to-rose-400",
  description: "We securely transfer your financial data from legacy systems or spreadsheets into modern accounting platforms without data loss."
},
{
  title: "Backlog Cleanup",
  icon: "🧹",
  color: "from-gray-500 to-gray-400",
  description: "We organize and update your past transactions so your books are accurate and up to date."
},
{
  title: "Reliable Month-End and Fiscal Year-End Closing Support",
  icon: "📅",
  color: "from-blue-600 to-blue-400",
  description: "Comprehensive year-end adjustments and reports to prepare your business for tax season and planning."
}

  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Focus on your core business while we handle the books",
      icon: <Clock className="w-6 h-6" />,
      stats: "Save 15+ hours/month",
    },
    {
      title: "Improved Cash Flow",
      description: "Real-time tracking and better financial management",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Up to 30% improvement",
    },
    {
      title: "Expert Team",
      description: "Certified bookkeepers with industry experience",
      icon: <Users className="w-6 h-6" />,
      stats: "5+ years average experience",
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security and confidentiality",
      icon: <Shield className="w-6 h-6" />,
      stats: "256-bit encryption",
    },
  ];

  <div className="absolute -inset-6 bg-blue-100 rounded-3xl -z-10"></div>

 const features = [
  {
    title: "Precise Accounting",
    desc: "Rely on our outsourced accounting services and let us take care of your finances with ease. We keep your books accurate, process payroll on time, and prepare audit-ready records, so you can focus on making better business decisions.",
    image: preciseImg,
    reverse: false,
    bg: "bg-blue-100",
  },
  {
    title: "Time-Consuming Bookkeeping Tasks",
    desc: "Manual data entry and reconciliations take valuable time away from your core business operations. Our streamlined processes help you save time and focus on growth.",
    image: finacialImg,
    reverse: true,
    bgImage: "bg-blue-100",
  },
  {
    title: "Lack of Real-Time Financial Insights",
    desc: "Delayed or outdated financial reports make it difficult to make informed decisions. We provide timely and clear reports so you always know where your business stands.",
    image: taxSupportImg,
    reverse: false,
    bg: "bg-blue-100",
  },
];




  const overlay =
    "absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/80 to-[#0a2540]/90";

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">


      {/* Animated Background Canvas */}
<div className="absolute top-0 left-0 right-0 bottom-[400px] z-0 pointer-events-none">
  <canvas
    ref={canvasRef}
    className="absolute inset-0 w-full h-full"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-cyan-50/60" />
</div>



      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center text-center z-10">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg')",
    }}
  />

  {/* Overlay */}
  <div className={overlay} />

  {/* Content */}
  <div className="relative container mx-auto px-4 py-20 flex justify-center">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        <span className="text-blue-400">Bookkeeping</span> Services
      </h1>
      {/* <p className="text-lg md:text-xl text-gray-200">
        Accurate, reliable, and affordable bookkeeping solutions for
        growing businesses.
      </p> */}
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="relative container mx-auto px-4 py-20  z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Bookkeeping Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Everything you need for accurate financial management in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {services.map((service, index) => (
  <div
    key={index}
    className="group relative bg-white p-6 rounded-xl shadow-lg 
border border-gray-200 hover:shadow-2xl 
transition-all duration-300 hover:-translate-y-2 
overflow-hidden"

  >
    {/* Top gradient accent */}
<div
  className={`absolute top-0 left-0 right-0 h-1 
  bg-gradient-to-r ${service.color}`}
></div>

    {/* Glass effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Gradient background effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    
    {/* Icon + Title Row */}
    <div className="flex items-center gap-4 mb-3 relative z-10">
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color}
        flex items-center justify-center text-white text-xl
        shadow-md group-hover:scale-110 transition-transform duration-300`}
      >
        {service.icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {service.title}
      </h3>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-8000 relative z-10 leading-relaxed">
      {service.description}
    </p>
  </div>
))}

        </div>
      </section>

{/* Features Section */}

 <section className="w-full">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
    Accounting Challenges
  </span>
</h1>


  {features.map((item, index) => (
    <div key={index} className="relative py-20">
      
      {/* Background image */}
      {item.bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.bgImage})` }}
        />
      )}

      {/* Dark overlay */}
      {item.darkOverlay && (
        <div className="absolute inset-0 bg-black/70"></div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            item.reverse ? "md:grid-flow-dense" : ""
          }`}
        >
          {/* Text */}
          <div className={`${item.reverse ? "md:col-start-2" : ""}`}>
           <h2
  className={`text-3xl md:text-4xl font-semibold mb-4 ${
    item.darkOverlay ? "text-white" : "text-black-900"
  }`}
>

              {item.title}
            </h2>
           <p
  className={`leading-relaxed text-lg ${
    item.darkOverlay ? "text-gray-200" : "text-gray-600"
  }`}
>

              {item.desc}
            </p>
          </div>

          {/* Image */}
          <div className={`${item.reverse ? "md:col-start-1" : ""}`}>
            <div
              className={`relative ${
                item.imageBg
                  ? "p-8 bg-blue-100 rounded-3xl"
                  : ""
              }`}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg w-full"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  delay: index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</section>



      {/* Benefits Section */}
      <section className="relative py-16 z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className={overlay} />

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              The Advantages of Our Bookkeeping Solutions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our professional approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className="relative">
                  {/* Icon container */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {benefit.stats}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* WHY CHOOSE US SECTION */}
<section className="relative container mx-auto px-4 py-20  z-10">       
     
       <div className="max-w-6xl mx-auto px-4 text-center relative">
     
       {/* EXACT LABEL */}
       <div className="mb-6">
         <div className="inline-block px-4 py-2 bg-orange-100 text-gray-700 text-sm font-semibold rounded">
           WHY CHOOSE US
         </div>
       </div>
       {/* EXACT TITLE CARD */}
       <div className="relative z-10 inline-block bg-white shadow-xl rounded-xl px-12 py-4">
         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
           Our Value Proposition
         </h2>
       </div>
     
     
         {/* Connector lines */}
         <svg
           className="absolute left-1/2 top-32 -translate-x-1/2 hidden lg:block"
           width="900"
           height="220"
           viewBox="0 0 900 220"
           fill="none"
         >
           <path
             d="M450 0 V60 C450 80 430 90 410 90 H100 V180"
             stroke="#9CA3AF"
             strokeWidth="2"
             strokeDasharray="6 6"
           />
           <path
             d="M450 0 V60 H300 V180"
             stroke="#9CA3AF"
             strokeWidth="2"
             strokeDasharray="6 6"
           />
           <path
             d="M450 0 V60 H600 V180"
             stroke="#9CA3AF"
             strokeWidth="2"
             strokeDasharray="6 6"
           />
           <path
             d="M450 0 V60 C450 80 470 90 490 90 H800 V180"
             stroke="#9CA3AF"
             strokeWidth="2"
             strokeDasharray="6 6"
           />
         </svg>
     
         {/* Cards */}
         <div className="relative mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
     
           {/* PERSONAL SUPPORT */}
           <div className="flex flex-col items-center group">
             <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
               <img
                 src={helpdeskImg}
                 alt="Personal Support"
                 className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
               />
             </div>
             <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
               PERSONAL SUPPORT
             </h3>
             <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
               You get your own expert no bots, no confusion.
             </p>
           </div>
     
           {/* BETTER VALUE */}
           <div className="flex flex-col items-center group">
             <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
               <img
                 src={increaseImg}
                 alt="Better Value"
                 className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
               />
             </div>
             <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
               BETTER VALUE
             </h3>
             <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
               Quality accounting without the big price tag.
             </p>
           </div>
     
           {/* YOUR DASHBOARD */}
           <div className="flex flex-col items-center group">
             <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
               <img
                 src={dashboardImg}
                 alt="Your Dashboard"
                 className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
               />
             </div>
             <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
               YOUR DASHBOARD
             </h3>
             <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
               See your numbers anytime, anywhere.
             </p>
           </div>
     
           {/* LIVE UPDATE */}
           <div className="flex flex-col items-center group">
             <div className="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center mb-6">
               <img
                 src={updateImg}
                 alt="Live Update"
                 className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
               />
             </div>
             <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
               LIVE UPDATE
             </h3>
             <p className="text-gray-600 text-sm mt-2 max-w-xs group-hover:text-gray-900 transition-colors">
               Stay in the loop with real-time financial info.
             </p>
           </div>
     
         </div>
       </div>
     </section>  


      {/* CTA Section */}
      <section className="relative py-16 z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className={overlay} />

        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Bookkeeping?
            </h2>
            <p className="text-gray-200 mb-8">
              Join hundreds of businesses who trust us with their financial
              management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
                <Phone className="mr-3 w-5 h-5" /> 
                <span>Schedule Call</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <MessageSquare className="mr-3 w-5 h-5" /> 
                <span>Chat Us</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-gray-300 text-sm mt-6">
              Get a free consultation within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookkeepingPage;