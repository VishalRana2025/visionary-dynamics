import { useLocation, Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";
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
   "Pricing": {
  "AccountingPricing": [],
  "MarketingPricing": [],
  "DevelopmentPricing": [],
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
"DevelopmentPricing": "/pricing/development",
"MarketingPricing": "/pricing/marketing",
"AccountingPricing": "/pricing/accounting",
 "Blog": "/blog",
"VirtualAssistance": "/virtualassistance",
"RPO": "/rpo"
};

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* 🛒 CART COUNT */
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCart();
    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  /* 🔐 USER LOAD */
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

    return () => window.removeEventListener("storage", loadUser);
  }, [location]);

  /* 🔴 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
<header className="fixed top-0 left-0 w-full h-14 md:h-16 z-50 bg-[#0B1F3A] backdrop-blur-md">
        <div className="relative h-full px-6 flex items-center justify-between">

        {/* LOGO */}
        <img src="/VD-Logo-e1737873827576.png" className="h-14" />

        {/* 🔥 MOVING SLIDER */}
{/* <div className="hidden lg:flex justify-center absolute top-2 left-0 w-full pointer-events-none">
  <div className="w-[45%] overflow-hidden rounded-xl px-6 py-2 
    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">

    <div className="flex animate-marquee whitespace-nowrap text-xl font-semibold tracking-wide">
      
      <div className="flex items-center mr-12">
        <span className="text-green-400 font-bold mr-2">
          VISIONARY DYNAMICS
        </span>
        <span className="text-white">
          Where Vision, Strategy, and Innovation Come Together for Lasting Success
        </span>
      </div>

    </div>
  </div>
</div> */}

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white">
          <Link to="/">Home</Link>
          <MenuWithSub menu="Who We Are" data={MENU_DATA["Who We Are"]} />
          <MenuWithSub menu="What We Do" data={MENU_DATA["What We Do"]} />
          <MenuWithSub menu="How We Do" data={MENU_DATA["How We Do"]} />
           <Link to="/contact">Contact</Link>
          <MenuWithSub menu="Pricing" data={MENU_DATA["Pricing"]} />
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-3">

          {/* CART */}
          <Link
            to="/cart"
            className="relative px-4 py-2 rounded-full bg-blue-800 text-white"
          >
            Cart 🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {!user ? (
            <Link to="/login" className="px-6 py-2 rounded-full bg-sky-500">
              Login
            </Link>
          ) : (
            <UserDropdown handleLogout={handleLogout} />
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
  <div className="lg:hidden absolute top-14 md:top-16 left-0 w-full bg-[#0B1F3A] text-white px-6 py-6 z-50 space-y-4">

    {/* 🔹 HOME */}
    <Link to="/" className="block text-lg font-semibold">Home</Link>

    {/* 🔹 SAME MENU */}
    <MenuWithSub menu="Who We Are" data={MENU_DATA["Who We Are"]} />
    <MenuWithSub menu="What We Do" data={MENU_DATA["What We Do"]} />
    <MenuWithSub menu="How We Do" data={MENU_DATA["How We Do"]} />
    <MenuWithSub menu="PRICING" data={MENU_DATA["PRICING"]} />

    {/* 🔹 CART BUTTON */}
    <Link
      to="/cart"
      className="flex items-center gap-2 mt-4 bg-purple-600 px-4 py-2 rounded"
    >
      <ShoppingCart size={18} />
      Cart
    </Link>

    {/* 🔹 LOGIN / USER */}
    {!user ? (
      <button
        onClick={() => setShowLogin(true)}
        className="w-full mt-3 bg-sky-500 px-4 py-2 rounded"
      >
        Login
      </button>
    ) : (
      <>
        <Link
          to="/dashboard"
          className="block mt-3 bg-green-500 px-4 py-2 rounded text-center"
        >
          Dashboard
        </Link>

        <button
          onClick={handleLogout}
          className="w-full mt-2 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </>
    )}

  </div>
)}

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  );
};

/* ================= USER DROPDOWN ================= */
const UserDropdown = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-2 rounded-full bg-gray-800 text-white"
      >
        ☰ Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          <Link
            to="/dashboard"
            className="block px-4 py-3 hover:bg-green-100 text-green-600"
            onClick={() => setOpen(false)}
          >
            📊 Dashboard
          </Link>

          <button
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
            className="w-full text-left px-4 py-3 hover:bg-red-100 text-red-600"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
};

/* ================= MENU ================= */
const MenuWithSub = ({ menu, data = {} }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    const path = ROUTES[item];
    if (path) navigate(path);
  };

  return (
    <div className="relative group">

      {/* 🔹 MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        {menu} <ChevronDown size={18} />
      </button>

      {/* 🔹 DROPDOWN */}
      <div
        className={`absolute top-full left-0 min-w-[240px] bg-[#0f172a] z-[999] rounded-lg transition
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        lg:group-hover:visible lg:group-hover:opacity-100`}
      >
        {Object.keys(data).map((item) => (
          <div key={item} className="relative group/item">

            {/* 🔹 MAIN ITEM */}
            <div
              className="px-4 py-2 flex justify-between cursor-pointer hover:bg-sky-500/20"
              onClick={() => handleClick(item)}
            >
              {item}
              {data[item]?.length > 0 && <ChevronRight size={14} />}
            </div>

            {/* 🔹 SUBMENU */}
            {data[item]?.length > 0 && (
              <div className="absolute left-full top-0 min-w-[240px] bg-[#0f172a] z-[999] rounded-lg opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition">
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