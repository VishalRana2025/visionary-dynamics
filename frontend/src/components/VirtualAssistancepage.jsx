import React from "react";

const VirtualAssistancepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔷 HERO SECTION */}
<section
  className="relative text-white px-6 text-center bg-cover bg-center h-[500px] flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://10web.io/blog/wp-content/uploads/sites/2/2024/03/DALL%C2%B7E-2024-03-12-22.29.23-Create-a-photorealistic-image-of-a-modern-sleek-laptop-similar-to-a-MacBook-placed-on-a-neatly-organized-office-desk-with-minimal-office-supplies-l.png')",
  }}
>
  {/* ✅ Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* ✅ Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Virtual Assistance Services
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Streamline your business with our professional virtual assistants.
      From admin tasks to customer support — we handle it all.
    </p>
  </div>
</section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-6">This Page is Coming Soon.....</h1>
       </section>
     
     

      
    </div>
  );
};

export default VirtualAssistancepage;