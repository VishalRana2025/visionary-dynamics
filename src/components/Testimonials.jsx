import React, { useState, useEffect } from "react";
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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova Solutions",
    content:
      "Their expertise transformed our financial operations completely. The transparency and attention to detail exceeded all expectations. Our efficiency improved by 65%!",
    rating: 5,
    avatar: "👩‍💼",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Michael Chen",
    role: "CFO, Global Innovations Inc.",
    content:
      "Outstanding service! The team provided customized solutions that perfectly fit our international operations. Their knowledge of global regulations is impeccable.",
    rating: 5,
    avatar: "👨‍💼",
    color: "from-emerald-400 to-green-400",
  },
  {
    name: "Priya Sharma",
    role: "Founder, BloomTech",
    content:
      "Affordable yet premium service. They saved us thousands while ensuring 100% compliance. The customer support team is available 24/7 and extremely helpful.",
    rating: 5,
    avatar: "👩‍🔬",
    color: "from-violet-400 to-purple-400",
  },
  {
    name: "Robert Williams",
    role: "Operations Director, ScaleFast",
    content:
      "The security measures and integrity shown by their team gave us complete peace of mind. Our sensitive financial data has never been more secure.",
    rating: 5,
    avatar: "👨‍💼",
    color: "from-amber-400 to-orange-400",
  },
  {
    name: "Emma Rodriguez",
    role: "Finance Manager, EcoSolutions",
    content:
      "Solution-focused approach that actually understands business needs. They don't just provide services; they provide strategic business solutions.",
    rating: 5,
    avatar: "👩‍🎓",
    color: "from-rose-400 to-pink-400",
  },
  {
    name: "David Kim",
    role: "Managing Partner, VentureGrowth",
    content:
      "Their expertise in financial technology is unmatched. They helped us scale from startup to Series B with flawless financial management every step of the way.",
    rating: 5,
    avatar: "👨‍🚀",
    color: "from-indigo-400 to-blue-400",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("none");

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setDirection("next");
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setDirection("none");
    }, 800);
  };

  const handlePrev = () => {
    setDirection("prev");
    setTimeout(() => {
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setDirection("none");
    }, 800);
  };

  const getCardIndex = (position) => {
    if (position === "left") {
      return (activeIndex - 1 + testimonials.length) % testimonials.length;
    } else if (position === "middle") {
      return activeIndex;
    } else {
      return (activeIndex + 1) % testimonials.length;
    }
  };

  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
       {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
      {/* ================= DARK BLUE HUD OVERLAY ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2070")',
          }}
        />

        {/* Primary Dark Blue Cinematic Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(2, 6, 23, 0.95) 0%,
                rgba(15, 23, 42, 0.90) 40%,
                rgba(30, 41, 59, 0.85) 100%
              )
            `,
          }}
        />

        {/* Soft Tech Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating particles/background elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)`,
              animation: `floatBackground ${
                15 + Math.random() * 20
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Vertical Data Spine */}
        <div className="hidden md:block absolute top-0 left-12 h-full w-px">
          <div
            className="h-full w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent blur-sm"
            style={{
              animation: "pulseLine 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div
              className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                animation: "pulseLine 3s ease-in-out infinite",
              }}
            />
            <span
              className="text-sm font-semibold text-cyan-300 uppercase tracking-widest bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-cyan-500/30"
              style={{
                animation: "floatSubtle 8s ease-in-out infinite",
              }}
            >
              Client Testimonials
            </span>
            <div
              className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                animation: "pulseLine 3s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              animation: "floatSubtle 10s ease-in-out infinite",
            }}
          >
            <span className="text-white">Trusted by </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Industry Leaders
            </span>
          </h2>

          <p
            className="text-lg text-blue-100/80 max-w-2xl mx-auto"
            style={{
              animation: "floatSubtle 12s ease-in-out infinite",
            }}
          >
            Join hundreds of satisfied clients who have transformed their
            business with our solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[550px] mb-16">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30"
            style={{
              animation: "floatSubtle 6s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          >
            <svg
              className="w-7 h-7 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsAutoPlaying(false)}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30"
            style={{
              animation: "floatSubtle 6s ease-in-out infinite",
              animationDelay: "0.6s",
            }}
          >
            <svg
              className="w-7 h-7 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container with Smooth Sliding */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left Card */}
            <div
              className={`absolute left-0 md:left-[2%] w-[90%] md:w-[38%] transform transition-all duration-600 ease-out ${
                direction === "next"
                  ? "animate-slideLeftToCenter"
                  : direction === "prev"
                  ? "animate-slideLeftOut"
                  : "-translate-x-1/4 opacity-70 scale-90"
              }`}
            >
              <TestimonialCard
                testimonial={testimonials[getCardIndex("left")]}
                isActive={false}
                direction={direction}
              />
            </div>

            {/* Middle Card */}
            <div
              className={`absolute z-20 w-[95%] md:w-[50%] transform transition-all duration-600 ease-out ${
                direction === "next"
                  ? "animate-slideCenterToLeft"
                  : direction === "prev"
                  ? "animate-slideCenterToRight"
                  : "scale-100"
              }`}
            >
              <TestimonialCard
                testimonial={testimonials[getCardIndex("middle")]}
                isActive={true}
                direction={direction}
              />
            </div>

            {/* Right Card */}
            <div
              className={`absolute right-0 md:right-[2%] w-[90%] md:w-[38%] transform transition-all duration-600 ease-out ${
                direction === "next"
                  ? "animate-slideRightIn"
                  : direction === "prev"
                  ? "animate-slideRightToCenter"
                  : "translate-x-1/4 opacity-70 scale-90"
              }`}
            >
              <TestimonialCard
                testimonial={testimonials[getCardIndex("right")]}
                isActive={false}
                direction={direction}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
     <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }

        @keyframes floatSubtle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes pulseLine {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes floatBackground {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
            opacity: 0.2;
          }
          66% {
            transform: translateY(20px) rotate(240deg);
            opacity: 0.15;
          }
        }

        /* Smooth Slide Animations for Next */
        @keyframes slideLeftToCenter {
          0% {
            transform: translateX(-25%) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideCenterToLeft {
          0% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-25%) scale(0.9);
            opacity: 0.7;
          }
        }

        @keyframes slideRightIn {
          0% {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateX(25%) scale(0.9);
            opacity: 0.7;
          }
        }

        /* Smooth Slide Animations for Prev */
        @keyframes slideLeftOut {
          0% {
            transform: translateX(-25%) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translateX(-100%) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes slideCenterToRight {
          0% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(25%) scale(0.9);
            opacity: 0.7;
          }
        }

        @keyframes slideRightToCenter {
          0% {
            transform: translateX(25%) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
        }

        /* Animation Classes — Smoother */
        .animate-slideLeftToCenter {
          animation: slideLeftToCenter 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-slideCenterToLeft {
          animation: slideCenterToLeft 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-slideRightIn {
          animation: slideRightIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-slideLeftOut {
          animation: slideLeftOut 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-slideCenterToRight {
          animation: slideCenterToRight 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-slideRightToCenter {
          animation: slideRightToCenter 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
      `}</style>
    </section>
  );
}

// ================= CARD COMPONENT =================
function TestimonialCard({ testimonial, isActive, direction }) {
  return (
    <div
      className="relative h-full"
      style={{
        animation:
          direction !== "none"
            ? "none"
            : isActive
            ? "cardFloat 8s ease-in-out infinite"
            : "inactiveCardFloat 8s ease-in-out infinite",
      }}
    >
      {/* White border stays — glow removed */}
      <div className="absolute -inset-2 rounded-3xl pointer-events-none" />

      {/* Card Container */}
      <div className="relative h-full rounded-3xl">
        {/* Color Background Inside */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.color} ${
            isActive ? "opacity-25" : "opacity-15"
          }`}
        />

        {/* Glass Card */}
        <div
          className={`relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 h-full flex flex-col transition-all duration-500 border-2 ${
            isActive ? "border-white/50" : "border-white/30"
          }`}
          style={{
            animation:
              direction !== "none"
                ? "none"
                : isActive
                ? "cardFloat 8s ease-in-out infinite"
                : "inactiveCardFloat 8s ease-in-out infinite",
          }}
        >
          {/* Inner glow effect (border only) */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />

          {/* Avatar and Info */}
          <div className="flex flex-col items-center text-center space-y-6 mb-8">
            <div className="relative">
              <div
                className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${testimonial.color} blur-lg ${
                  isActive ? "opacity-70" : "opacity-50"
                }`}
              />
              <div
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-2xl ${
                  isActive ? "ring-2 ring-white/40" : ""
                }`}
                style={{
                  animation:
                    direction !== "none"
                      ? "none"
                      : "floatSubtle 6s ease-in-out infinite",
                }}
              >
                <span className="text-4xl">{testimonial.avatar}</span>
              </div>
            </div>

            <div>
              <h3
                className={`font-bold ${
                  isActive ? "text-2xl text-white" : "text-xl text-white/80"
                }`}
              >
                {testimonial.name}
              </h3>
              <p
                className={`font-medium mt-2 ${
                  isActive ? "text-cyan-300" : "text-cyan-300/80"
                } text-base`}
              >
                {testimonial.role}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className={`${
                      isActive ? "w-6 h-6" : "w-5 h-5"
                    } text-amber-400 fill-current`}
                    viewBox="0 0 20 20"
                    style={
  direction !== "none" || !isActive
    ? {}
    : {
        animationName: "floatSubtle",
        animationDuration: "3s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDelay: `${i * 0.1}s`,
      }
}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span
                className={`ml-2 font-semibold ${
                  isActive
                    ? "text-cyan-200 text-lg"
                    : "text-cyan-200/80 text-base"
                }`}
              >
                {testimonial.rating}.0
              </span>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 relative">
            <div
              className={`absolute -top-4 -left-4 ${
                isActive ? "text-9xl" : "text-8xl"
              } text-white/10 font-serif`}
            >
              "
            </div>
            <div
              className={`absolute -bottom-4 -right-4 ${
                isActive ? "text-9xl" : "text-8xl"
              } text-white/10 font-serif rotate-180`}
            >
              "
            </div>

            <p
              className={`leading-relaxed relative z-10 ${
                isActive
                  ? "text-white/95 text-lg md:text-xl"
                  : "text-white/80 text-base md:text-lg"
              }`}
            >
              "{testimonial.content}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
