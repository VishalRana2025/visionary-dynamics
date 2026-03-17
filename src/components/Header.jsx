import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

/* ================= MENU DATA ================= */
const MENU_DATA = {
  "Who We Are": {
    "About Us": [],
    "Our Locations": [],
    "Industries we Serve": [],
    "What Our Clients Say": [],
    "Career": [],
    "Our Gallery": [],
  },
  "What We Do": {
    "Accounting": ["Bookkeeping", "Payroll","Financial Reporting and Analysis","Software Setup & Migration"],
    "Taxation": ["Cooperative Tax", "Individual Tax"],
    "Business Analytics": [],
    "Marketing": [
      "Website Design & Development",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Email Marketing",
      "LinkedIn Marketing",
    ],
    "IT Asset Management": [
      "MS 365 Management",
      "Mobile Device Management",
      "Managed Network Services",
    ],
  },
  "How We Do": {
    "Tools we use": ["AI", "Automation", "Cloud"],
    "Our Partners": [],
    "Future": [],
    "Blog": [],
    
  },
};

const Header = () => {
  const [activeSC, setActiveSC] = useState(null);

  return (
    <header className="relative z-30 bg-[#0B1F3A]/70 backdrop-blur-md">
<div className="relative h-16 px-6 flex items-center justify-between">
        {/* LOGO */}
      <a href="/" className="flex items-center">
          <div className="p-1 transition-all duration-300 scale-105 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            <img
  src="/VD-Logo-e1737873827576.png"
  alt="Visionary Dynamics Logo"
  className="h-80 w-auto mix-blend-multiply"
/>
          </div>
        </a>

        {/* ================= SLIDING TEXT ================= */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[60%] overflow-hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
            <div className="whitespace-nowrap animate-marquee text-base font-bold text-white">
              <span className="text-green-400 mr-2">VISIONARY DYNAMICS</span>
              Where Vision, Strategy, and Innovation Come Together for Lasting Success
            </div>
          </div>
        </div>

        {/* ================= MENU ================= */}
<nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 top-[60px] text-base font-medium text-white">          <a href="/" className="hover:text-sky-300">Home</a>

          <MenuWithSub
            menu="Who We Are"
            data={MENU_DATA["Who We Are"]}
            setActiveSC={setActiveSC}
          />

          <MenuWithSub
            menu="What We Do"
            data={MENU_DATA["What We Do"]}
            setActiveSC={setActiveSC}
          />

          <MenuWithSub
            menu="How We Do"
            data={MENU_DATA["How We Do"]}
            setActiveSC={setActiveSC}
          />

          <a href="#" className="hover:text-sky-300">Contact</a>
        </nav>

        {/* CTA */}
        <div className="absolute top-[15px] right-6 hidden lg:flex">
          <button className="px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium">
            Try Free Call
          </button>
        </div>
      </div>

      {/* ================= SC PANEL ================= */}
      {activeSC && (
        <div
          className="fixed inset-0 z-40 bg-[#0F172A]/95 text-white"
          onClick={() => setActiveSC(null)}
        >
          <div
            className="max-w-6xl mx-auto pt-32 px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-6">{activeSC}</h2>
            <button
              className="mt-10 text-sky-400"
              onClick={() => setActiveSC(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= STYLES ================= */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </header>
  );
};

/* ================= MENU COMPONENT ================= */
const MenuWithSub = ({ menu, data, setActiveSC }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-sky-300">
        {menu} <ChevronDown size={14} />
      </button>

      {/* SUBMENU */}
      <div className="submenu">
        {Object.keys(data).map((item) => (
          <div key={item} className="relative group/item">
            <div
              className="submenu-item"
              onClick={() => setActiveSC(item)}
            >
              {item}
              {data[item].length > 0 && <ChevronRight size={14} />}
            </div>

            {/* SUB-SUBMENU */}
            {data[item].length > 0 && (
              <div className="subsubmenu">
                {data[item].map((sub) => (
                  <div
                    key={sub}
                    className="submenu-item"
                    onClick={() => setActiveSC(sub)}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .submenu {
          position: absolute;
          top: 130%;
          left: 0;
          min-width: 240px;
          background: rgba(15,23,42,0.95);
          border-radius: 10px;
          padding: 8px 0;
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .group:hover .submenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .submenu-item {
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          color: white;
          white-space: nowrap;
        }

        .submenu-item:hover {
          background: rgba(56,189,248,0.15);
          color: #38bdf8;
        }

        .subsubmenu {
          position: absolute;
          top: 0;
          left: 100%;
          min-width: 260px;
          background: rgba(15,23,42,0.97);
          border-radius: 10px;
          padding: 8px 0;
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }

        .group\\/item:hover .subsubmenu {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default Header;