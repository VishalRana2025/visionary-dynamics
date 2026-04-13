import React from "react";

const RPOPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔷 HERO SECTION */}
      <section
  className="relative text-white px-6 text-center bg-cover bg-center h-[500px] flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* ✅ Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* ✅ Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Recruitment Process Outsourcing (RPO)
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Hire smarter, faster, and more efficiently with our end-to-end
      recruitment solutions tailored to your business needs.
    </p>
  </div>
</section>

   <section className="py-16 px-6 max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">This Page is Coming Soon.....</h1>
  </section>   
    </div>
  );
};

export default RPOPage;