import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/videos/vd.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= HERO CENTER TEXT ================= */}
      <div className="absolute inset-0 flex items-center bottom-[50px] left-[30px] h-100 justify-center text-center z-20">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wide">
            Visionary
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-sky-400 mt-2 tracking-widest">
            Dynamics
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;