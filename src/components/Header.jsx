import { useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* ================= MENU DATA ================= */
const MENU_DATA = {
  "Who We Are": {
    "About Us": [],
    "Our Locations": [],
    "Industries we Serve": [],
    "What Our Clients Say": [],
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
    "Blog": [],
  },
};


/* ================= ROUTES ================= */
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
  "Cloud": "/cloud",
  "MS 365 Management": "/ms365",
  "Mobile Device Management": "/mobile",
  "Managed Network Services": "/network",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  /* 🔐 LOAD USER */
 
const location = useLocation();

useEffect(() => {
  const loadUser = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  loadUser();

  window.addEventListener("storage", loadUser);

  return () => {
    window.removeEventListener("storage", loadUser);
  };

}, [location]);

  /* 🔴 LOGOUT */
 const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
};

  return (
    <header className="relative z-50 bg-[#0B1F3A]/70 backdrop-blur-md">

      <div className="relative h-16 px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center h-24">
          <img src="/VD-Logo-e1737873827576.png" alt="Logo" className="h-14" />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 top-[70px] text-white">

          <Link to="/" className="hover:text-sky-300">Home</Link>

          <MenuWithSub menu="Who We Are" data={MENU_DATA["Who We Are"]} />
          <MenuWithSub menu="What We Do" data={MENU_DATA["What We Do"]} />
          <MenuWithSub menu="How We Do" data={MENU_DATA["How We Do"]} />

          <Link to="/contact" className="hover:text-sky-300">Contact</Link>
        </nav>

        {/* AUTH BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">

        {!user ? (
  <Link
    to="/login"
    className="px-6 py-2 rounded-full bg-sky-500"
  >
    Login
  </Link>
) : (
  <>
    <Link
      to="/dashboard"
      className="px-4 py-2 rounded-full bg-green-500"
    >
      Dashboard
    </Link>

    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-full bg-red-500"
    >
      Logout
    </button>
  </>
)}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B1F3A] text-white px-6 py-6 space-y-4">

          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {!user ? (
            <button
              onClick={() => setShowLogin(true)}
              className="block mt-4 bg-sky-500 px-4 py-2 rounded"
            >
              Login
            </button>
          ) : (
            <>
              <Link to="/dashboard" className="block mt-4 bg-green-500 px-4 py-2 rounded">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full mt-4 bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          )}

        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}

    </header>
  );
};


/* ================= SAFE DROPDOWN ================= */
const MenuWithSub = ({ menu, data = {} }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const path = ROUTES[item];
    if (path) navigate(path);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-sky-300">
        {menu} <ChevronDown size={18} />
      </button>

      <div className="absolute top-full left-0 min-w-[240px] bg-[#0f172a] rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">

        {Object.keys(data).map((item) => (
          <div key={item} className="relative group/item">

            <div
              className="px-4 py-2 flex justify-between cursor-pointer hover:bg-sky-500/20"
              onClick={() => handleClick(item)}
            >
              {item}
              {data[item]?.length > 0 && <ChevronRight size={14} />}
            </div>

            {data[item]?.length > 0 && (
              <div className="absolute left-full top-0 min-w-[240px] bg-[#0f172a] rounded-lg opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition">

                {data[item].map((sub) => (
                  <div
                    key={sub}
                    className="px-4 py-2 cursor-pointer hover:bg-sky-500/20"
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
    </div>
  );
};

export default Header;