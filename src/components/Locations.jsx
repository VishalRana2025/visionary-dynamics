import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Building2, Navigation, Users, Clock, Award, Shield } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";
 
  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[150px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.15" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.25" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" fillOpacity="0.35" />
      </svg>
    </div>
  );
};

/* Fix Leaflet marker icons in Vite */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* ================= LOCATIONS DATA ================= */
const locations = [
  {
    id: "florida",
    name: "florida",
    country: "United States",
    city: "saint petersburg",
    address: "Brickell Financial District, Miami, FL",
    lat: 27.7731,
    lng: -82.6403,
    zoom: 6,
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our flagship headquarters with state-of-the-art facilities"
  },
  {
    id: "usa",
    name: "United States",
    city: "Dallas",
    address: "350 Fifth Avenue, Manhattan, NY",
    lat: 32.7767,
    lng: -96.7970,
    zoom: 6,
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Financial hub connecting global markets"
  },
  {
    id: "canada",
    name: "Canada",
    city: "Vancouver, British",
    address: "Downtown Toronto, ON",
    lat: 49.2827,
    lng: -123.1207,
    zoom: 6,
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "North American innovation center"
  },
  {
    id: "India",
    name: "India",
    city: "Noida",
    address: "Sector 16, Noida, UP",
    lat: 28.4595,
    lng: 77.0266,
    zoom: 6,
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Indian headquarters with modern facilities"
  },
];

/* Fly animation */
function FlyTo({ position, zoom }) {
  const map = useMap();
  map.flyTo(position, zoom, { duration: 1.5 });
  return null;
}

/* Floating Objects Component - TRANSPARENT VERSION */
const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Larger animated floating circles - Transparent */}
      {[...Array(8)].map((_, i) => {
        const size = Math.random() * 120 + 60;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        return (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              background: `radial-gradient(circle, rgba(96, 165, 250, 0.12) 0%, rgba(59, 130, 246, 0.04) 70%)`,
              border: '1px solid rgba(96, 165, 250, 0.15)',
              backdropFilter: 'blur(2px)',
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}

      {/* Floating glow dots - Transparent */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 10 + 4;
        const duration = Math.random() * 10 + 6;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        return (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: 'rgba(59, 130, 246, 0.25)',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        );
      })}

      {/* Moving connection lines - Transparent */}
      {[...Array(10)].map((_, i) => {
        const width = Math.random() * 150 + 50;
        const height = 1;
        const duration = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        return (
          <motion.div
            key={`line-${i}`}
            className="absolute"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              left: `${left}%`,
              top: `${top}%`,
              background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        );
      })}

      {/* Floating geometric shapes - Transparent */}
      {[...Array(6)].map((_, i) => {
        const size = Math.random() * 50 + 30;
        const duration = Math.random() * 18 + 12;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const rotation = Math.random() * 360;
        
        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              border: '1.5px solid rgba(96, 165, 250, 0.2)',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '12px' : '6px',
              transform: `rotate(${rotation}deg)`,
              backdropFilter: 'blur(1px)',
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 40 - 20],
              rotate: [rotation, rotation + 180, rotation + 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Animated world map markers - Transparent */}
      {[
        { left: "10%", top: "25%", size: 12 },
        { left: "90%", top: "35%", size: 10 },
        { left: "20%", top: "75%", size: 14 },
        { left: "80%", top: "80%", size: 8 },
      ].map((marker, i) => (
        <motion.div
          key={`map-marker-${i}`}
          className="absolute"
          style={{
            left: marker.left,
            top: marker.top,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="rounded-full flex items-center justify-center relative"
            style={{
              width: `${marker.size * 2.2}px`,
              height: `${marker.size * 2.2}px`,
              backgroundColor: 'rgba(59, 130, 246, 0.18)',
              border: '2px solid rgba(96, 165, 250, 0.3)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <div 
              className="rounded-full"
              style={{
                width: `${marker.size}px`,
                height: `${marker.size}px`,
                backgroundColor: 'rgba(96, 165, 250, 0.6)',
              }}
            />
            {/* Pulse effect - Transparent */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/40"
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Floating clouds/abstract forms - Transparent */}
      {[...Array(6)].map((_, i) => {
        const width = Math.random() * 150 + 100;
        const height = Math.random() * 80 + 50;
        const duration = Math.random() * 25 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        return (
          <motion.div
            key={`cloud-${i}`}
            className="absolute rounded-[50%]"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              left: `${left}%`,
              top: `${top}%`,
              background: `radial-gradient(ellipse, rgba(59, 130, 246, 0.06) 0%, rgba(59, 130, 246, 0.02) 70%)`,
              filter: 'blur(20px)',
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 60 - 30],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          />
        );
      })}
    </div>
  );
};

/* ================= COMPONENT ================= */
export default function Locations() {
  const [active, setActive] = useState(locations[0]);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Transparent Overlay */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        {/* Transparent Gradient Overlay - More transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#020617]/35 to-[#020617]/40" />

        {/* Soft Cinematic Vignette - Transparent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.25)_55%,rgba(2,6,23,0.4)_85%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg">
            Our Locations
          </h1>
          <p className="mt-4 text-blue-100/80 text-base sm:text-lg max-w-xl mx-auto">
            Global presence with local expertise
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* MAIN CONTENT - Transparent Background */}
     <section className="relative py-12 px-6 overflow-hidden bg-blue-100">
  {/* Subtle grid pattern - More transparent */}
  <div 
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    }}
  />
   
  <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
        Our Global Presence
      </h1>
      <p className="text-xl text-blue-900/70 max-w-3xl mx-auto leading-relaxed">
        Strategic offices across key global markets, delivering exceptional consulting services worldwide
      </p>
    </motion.div>

    {/* STATS BAR - Always Highlighted Cards */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {[
        { icon: <Building2 className="w-6 h-6 text-blue-600" />, value: "4", label: "Global Offices" },
        { icon: <Users className="w-6 h-6 text-blue-600" />, value: "50+", label: "Team Members" },
        { icon: <Clock className="w-6 h-6 text-blue-600" />, value: "24/7", label: "Support" },
        { icon: <Award className="w-6 h-6 text-blue-600" />, value: "10+", label: "Years Experience" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white/60 backdrop-blur-md border border-blue-300/50 rounded-2xl p-6 text-center shadow-xl shadow-blue-200/50"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-200/60 mb-4">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold mb-2 text-blue-900">{stat.value}</div>
          <div className="text-sm text-blue-700/80">{stat.label}</div>
        </div>
      ))}
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* LOCATIONS LIST WITH IMAGES - Always Highlighted Cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Explore Our Offices
          </h2>
          <p className="text-blue-700/80">
            Select a location to view details and explore our presence in key markets worldwide
          </p>
        </div>

        <div className="space-y-4">
          {locations.map((loc) => (
            <motion.button
              key={loc.id}
              onClick={() => setActive(loc)}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left rounded-2xl border transition-all duration-300 group overflow-hidden backdrop-blur-md
                ${
                  active.id === loc.id
                    ? "bg-blue-200/70 border-blue-500/70 shadow-xl shadow-blue-300/50"
                    : "bg-white/70 border-blue-400/50 shadow-lg shadow-blue-200/40"
                }
              `}
            >
              <div className="flex">
                <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent z-10" />
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-2xl drop-shadow-md">{loc.flag}</span>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`font-semibold text-lg mb-1 ${
                        active.id === loc.id ? "text-blue-900" : "text-blue-800"
                      }`}>
                        {loc.name === "Florida" ? `${loc.name}, ${loc.country}` : loc.name}
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <MapPin className={`w-4 h-4 ${
                          active.id === loc.id ? "text-blue-700" : "text-blue-600"
                        }`} />
                        <span className={`${
                          active.id === loc.id ? "text-blue-800" : "text-blue-700"
                        }`}>
                          {loc.city}
                        </span>
                      </div>
                      <p className="text-sm text-blue-800/80 line-clamp-2">
                        {loc.description}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      active.id === loc.id 
                        ? "border-blue-700 bg-blue-200 shadow-md shadow-blue-300" 
                        : "border-blue-500 bg-blue-100/80"
                    }`}>
                      {active.id === loc.id && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 rounded-full bg-blue-700"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* MAP SECTION - Always Highlighted Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="sticky top-24"
      >
        <div className="relative bg-white/70 backdrop-blur-md border border-blue-400/60 rounded-3xl p-8 shadow-2xl shadow-blue-200/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-200/70 border border-blue-400/50">
              <Navigation className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Interactive Map</h3>
              <p className="text-sm text-blue-800/80">Currently viewing: {active.city}</p>
            </div>
          </div>
          
          <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-blue-300/60 shadow-xl">
            <MapContainer
              center={[active.lat, active.lng]}
              zoom={active.zoom}
              className="w-full h-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <FlyTo
                position={[active.lat, active.lng]}
                zoom={active.zoom}
              />
              <Marker position={[active.lat, active.lng]} />
            </MapContainer>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-blue-100/70 border border-blue-400/60 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-400/50">
                      <img
                        src={active.image}
                        alt={active.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
                        <MapPin className="w-5 h-5 text-blue-700" />
                        {active.city}
                      </h3>
                      <p className="text-sm text-blue-800/80 mt-1">
                        {active.name === "Florida" ? `${active.name}, ${active.country}` : active.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-800/80">
                    {active.address}
                  </p>
                </div>
                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30">
                  Get Directions
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* OFFICE CARDS SECTION - Transparent Background */}
      <section className="py-24 relative overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
 
        {/* Background Image with Transparent Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          {/* Base transparent dark layer - Reduced opacity */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Blue cinematic tint - More transparent */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#020617]/25 to-blue-900/30" />

          {/* Soft center highlight - More transparent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,rgba(2,6,23,0.2)_45%,rgba(2,6,23,0.4)_80%)]" />

          {/* Top fade for text contrast - Transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/15" />
        </div>
        
        <div className="relative z-10">
          <div className="w-full px-4 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Countries We Serve 
              </h3>
              <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
                State-of-the-art facilities designed for collaboration, innovation, and exceptional client service
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "USA",
                  subtitle: "United States",
                  text: "The United States is one of our core markets, where we partner with startups, enterprises, and global organizations to drive digital transformation, operational excellence, and sustainable growth.",
                  image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["Security", "Conference Rooms", "Tech Hub"],
                },
                {
                  title: "U.K",
                  subtitle: "United Kingdom",
                  text: "The United Kingdom is a strategic hub for our global operations, where we support organizations across finance, professional services, healthcare, retail, and technology.",
                  image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["Market Access", "Networking", "Research Center"],
                },
                {
                  title: "Canada",
                  subtitle: "Canada",
                  text: "In Canada, we work closely with businesses to drive innovation, sustainability, and scalable growth across industries such as energy, financial services, healthcare, education, and technology.",
                  image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["Innovation Lab", "Sustainability", "Tech Integration"],
                },
                {
                  title: "India",
                  subtitle: "India",
                  text: "India represents a dynamic and fast-growing market where we partner with enterprises, startups, and public sector organizations to accelerate digital transformation and operational excellence.",
                  image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["EU Gateway", "Historic Building", "Global Access"],
                },
              ].map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-xs font-medium px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white">
                        {office.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
                      {office.title}
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed text-sm mb-4">
                      {office.text}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {office.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}