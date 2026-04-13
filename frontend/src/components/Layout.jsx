import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = ({ children, hero: CustomHero }) => {
  const HeroComponent = CustomHero || Hero;

  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* 🔥 FIXED HEADER */}
      <Header />

      {/* 🔥 MAIN CONTENT WRAPPER (CRITICAL FIX) */}
      <div className="pt-16 md:pt-20">
        
        {/* HERO */}
        <HeroComponent />

        {/* PAGE CONTENT */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;