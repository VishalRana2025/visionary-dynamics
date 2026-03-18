import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

/* ================= ROUTE MAP ================= */
const ROUTES = {
  "About Us": "/about",
  "Our Locations": "/location",
  "Industries we Serve": "/industries",
  "What Our Clients Say": "/clients",

  "Accounting": "/accounting",
  "Bookkeeping": "/bookkeeping",
  "Payroll": "/payroll",
  "Financial Reporting and Analysis": "/financial",
  "Software Setup & Migration": "/software",

  "Taxation": "/taxation",
  "Cooperative Tax": "/cooperative",
  "Individual Tax": "/individual",

  "Business Analytics": "/business",

  "Website Design & Development": "/webdesign",
  "Search Engine Optimization": "/seo",
  "Social Media Marketing": "/social",
  "Email Marketing": "/email",
  "LinkedIn Marketing": "/linkedin",

  "AI": "/ai",
  "Automation": "/automation",

  "MS 365 Management": "/ms365",
  "Mobile Device Management": "/mobile",
  "Managed Network Services": "/network",
};

const Header = () => {
  return (
    <header className="relative z-30 bg-[#0B1F3A]/70 backdrop-blur-md">
      
      <div className="relative h-16 px-6 flex items-center justify-between">

        {/* LOGO */}
       <div className="flex items-center h-24">
  <img
    src="/VD-Logo-e1737873827576.png"
    alt="Visionary Dynamics Logo"
    className="h-full w-auto object-contain"
  />
</div>
        {/* SLIDING TEXT */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[60%] overflow-hidden">
          <div className="bg-white/10 rounded-full px-4 py-1 border border-white/20">
            <div className="whitespace-nowrap animate-marquee text-sm font-bold text-white">
              <span className="text-green-400 mr-2">VISIONARY DYNAMICS</span>
              Where Vision, Strategy, and Innovation Come Together
            </div>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 top-[60px] text-base font-medium text-white">
          
          <Link to="/" className="hover:text-sky-300">Home</Link>

          <MenuWithSub menu="Who We Are" data={MENU_DATA["Who We Are"]} />
          <MenuWithSub menu="What We Do" data={MENU_DATA["What We Do"]} />
          <MenuWithSub menu="How We Do" data={MENU_DATA["How We Do"]} />

          <Link to="/contact" className="hover:text-sky-300">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="absolute top-[15px] right-6 hidden lg:flex">
          <button className="px-6 py-2 rounded-full bg-sky-500 hover:bg-sky-600">
            Try Free Call
          </button>
        </div>
      </div>

      {/* MARQUEE STYLE */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </header>
  );
};

/* ================= MENU COMPONENT ================= */
const MenuWithSub = ({ menu, data }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const path = ROUTES[item];
    if (path) navigate(path);
  };

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
              onClick={() => handleClick(item)}
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
                    onClick={() => handleClick(sub)}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* STYLES */}
      <style>{`
        .submenu {
          position: absolute;
          top: 130%;
          left: 0;
          min-width: 240px;
          background: rgba(15,23,42,0.95);
          border-radius: 10px;
          padding: 8px 0;
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
          cursor: pointer;
          display: flex;
          justify-content: space-between;
        }

        .submenu-item:hover {
          background: rgba(56,189,248,0.2);
          color: #38bdf8;
        }

        .subsubmenu {
          position: absolute;
          top: 0;
          left: 100%;
          min-width: 240px;
          background: rgba(15,23,42,0.95);
          border-radius: 10px;
          padding: 8px 0;
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