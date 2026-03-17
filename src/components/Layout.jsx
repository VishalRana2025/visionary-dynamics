import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const Layout = ({ children, hero: CustomHero }) => {
  const HeroComponent = CustomHero || Hero;
  
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <HeroComponent />
      <main className="flex-grow relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;