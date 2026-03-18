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
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.3" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.5" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" />
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

/* Floating Objects Component - VISIBLE VERSION */
const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Larger animated floating circles - Very Visible */}
      {[...Array(6)].map((_, i) => {
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
              background: `radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, rgba(59, 130, 246, 0.1) 70%)`,
              boxShadow: '0 0 50px rgba(59, 130, 246, 0.3)',
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

      {/* Floating glow dots - Very Visible */}
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 12 + 6;
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
              backgroundColor: 'rgba(59, 130, 246, 0.5)',
              boxShadow: '0 0 25px rgba(59, 130, 246, 0.7)',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.3, 1],
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

      {/* Moving connection lines - Very Visible */}
      {[...Array(8)].map((_, i) => {
        const width = Math.random() * 150 + 50;
        const height = 2;
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
              background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)`,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              opacity: [0.5, 0.9, 0.5],
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

      {/* Floating geometric shapes - Very Visible */}
      {[...Array(5)].map((_, i) => {
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
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              border: '2px solid rgba(96, 165, 250, 0.4)',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '12px' : '6px',
              transform: `rotate(${rotation}deg)`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
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

      {/* Animated world map markers - Very Visible */}
      {[
        { left: "10%", top: "25%", size: 14 },
        { left: "90%", top: "35%", size: 12 },
        { left: "20%", top: "75%", size: 16 },
        { left: "80%", top: "80%", size: 10 },
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
            scale: [1, 1.3, 1],
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
              width: `${marker.size * 2.5}px`,
              height: `${marker.size * 2.5}px`,
              backgroundColor: 'rgba(59, 130, 246, 0.35)',
              border: '3px solid rgba(96, 165, 250, 0.5)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
            }}
          >
            <div 
              className="rounded-full"
              style={{
                width: `${marker.size}px`,
                height: `${marker.size}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
            />
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Floating clouds/abstract forms - Very Visible */}
      {[...Array(4)].map((_, i) => {
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
              background: `radial-gradient(ellipse, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.04) 70%)`,
              filter: 'blur(20px)',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 60 - 30],
              opacity: [0.4, 0.7, 0.4],
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
    <div className="min-h-screen text-white">

      <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Lighter Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/55 via-[#020617]/65 to-[#020617]/80" />

      {/* Soft Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.5)_55%,rgba(2,6,23,0.85)_85%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg">
          Our Locations
        </h1>

        <p className="mt-4 text-blue-100/90 text-base sm:text-lg max-w-xl mx-auto">
        </p>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full z-30">
  <WaveTransition />
</div>
    </section>


      {/* Main Content - Light Blue Background with Floating Objects */}
      <section className="relative py-12 px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
        {/* Floating Objects */}
        <FloatingObjects />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
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
            <p className="text-xl text-blue-900/80 max-w-3xl mx-auto leading-relaxed">
              Strategic offices across key global markets, delivering exceptional consulting services worldwide
            </p>
          </motion.div>

          {/* STATS BAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: <Building2 className="w-6 h-6 text-blue-600" />, value: "4", label: "Global Offices", color: "from-white to-blue-50", textColor: "text-blue-900" },
              { icon: <Users className="w-6 h-6 text-blue-600" />, value: "50+", label: "Team Members", color: "from-white to-blue-50", textColor: "text-blue-900" },
              { icon: <Clock className="w-6 h-6 text-blue-600" />, value: "Team", label: "Support", color: "from-white to-blue-50", textColor: "text-blue-900" },
              { icon: <Award className="w-6 h-6 text-blue-600" />, value: "10+", label: "Years Experience", color: "from-white to-blue-50", textColor: "text-blue-900" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.color} border border-blue-200 rounded-2xl p-6 text-center shadow-sm backdrop-blur-sm`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100/80 mb-4">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.textColor}`}>{stat.value}</div>
                <div className="text-sm text-blue-700/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LOCATIONS LIST WITH IMAGES */}
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left rounded-2xl border transition-all duration-300 group overflow-hidden backdrop-blur-sm
                      ${
                        active.id === loc.id
                          ? "bg-gradient-to-r from-blue-100 to-blue-50 border-blue-300 shadow-lg shadow-blue-200/50"
                          : "bg-white/90 border-blue-200 hover:bg-white hover:border-blue-300"
                      }
                    `}
                  >
                    <div className="flex">
                      {/* Location Image */}
                      <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent z-10" />
                        <img
                          src={loc.image}
                          alt={loc.city}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 z-20">
                          <span className="text-2xl">{loc.flag}</span>
                        </div>
                      </div>

                      {/* Location Details */}
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
                                active.id === loc.id ? "text-blue-600" : "text-blue-500"
                              }`} />
                              <span className={`${
                                active.id === loc.id ? "text-blue-700" : "text-blue-600/80"
                              }`}>
                                {loc.city}
                              </span>
                            </div>
                            <p className="text-sm text-blue-700/70 line-clamp-2">
                              {loc.description}
                            </p>
                          </div>
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                            active.id === loc.id 
                              ? "border-blue-600 bg-blue-100" 
                              : "border-blue-300 group-hover:border-blue-400"
                          }`}>
                            {active.id === loc.id && (
                              <div className="w-3 h-3 rounded-full bg-blue-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* MAP SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <div className="relative bg-white border border-blue-200 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-blue-100 border border-blue-300">
                    <Navigation className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Interactive Map</h3>
                    <p className="text-sm text-blue-700/80">Currently viewing: {active.city}</p>
                  </div>
                </div>
                
                {/* Map Container */}
                <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
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

                {/* Active Location Info */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 p-6 rounded-2xl bg-blue-50/80 border border-blue-200 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-300">
                            <img
                              src={active.image}
                              alt={active.city}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-900">
                              <MapPin className="w-5 h-5 text-blue-600" />
                              {active.city}
                            </h3>
                            <p className="text-sm text-blue-700/80 mt-1">
                              {active.name === "Florida" ? `${active.name}, ${active.country}` : active.name}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700/80">
                          {active.address}
                        </p>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25">
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

      {/* OFFICE CARDS WITH IMAGES - With Background Image & Overlay */}
      <section className="py-24 relative overflow-hidden">
        {/* Top Wave */}
  <div className="absolute top-0 left-0 w-full -mt-1 z-10">
    <WaveTransition direction="top" />
  </div>
 
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          {/* Base dark layer */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Blue cinematic tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#020617]/50 to-blue-900/60" />

          {/* Soft center highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,rgba(2,6,23,0.4)_45%,rgba(2,6,23,0.85)_80%)]" />

          {/* Top fade for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />

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
              <p className="text-xl text-blue-100/90 max-w-3xl mx-auto">
                State-of-the-art facilities designed for collaboration, innovation, and exceptional client service
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "USA",
                  subtitle: "United States",
                  text: "The United States is one of our core markets, where we partner with startups, enterprises, and global organizations to drive digital transformation, operational excellence, and sustainable growth. ",
                  image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: [" Security", "Conference Rooms", "Tech Hub"],
                  gradient: "from-blue-900/30 to-blue-800/20",
                  border: "border-blue-400/30",
                },
                {
                  title: "U.K",
                  subtitle: "United Kingdom",
                  text: "The United Kingdom is a strategic hub for our global operations, where we support organizations across finance, professional services, healthcare, retail, and technology.",
                  image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["Market Access", "Networking", "Research Center"],
                  gradient: "from-blue-800/30 to-purple-800/20",
                  border: "border-blue-300/30",
                },
                {
                  title: "Canada",
                  subtitle: "Canada",
                  text: "In Canada, we work closely with businesses to drive innovation, sustainability, and scalable growth across industries such as energy, financial services, healthcare, education, and technology.",
                  image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["Innovation Lab", "Sustainability", "Tech Integration"],
                  gradient: "from-emerald-900/30 to-cyan-800/20",
                  border: "border-emerald-400/30",
                },
                {
                  title: "India",
                  subtitle: "India",
                  text: "India represents a dynamic and fast-growing market where we partner with enterprises, startups, and public sector organizations to accelerate digital transformation and operational excellence.",
                  image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  features: ["EU Gateway", "Historic Building", "Global Access"],
                  gradient: "from-amber-900/30 to-orange-800/20",
                  border: "border-amber-400/30",
                },
              ].map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`bg-gradient-to-br ${office.gradient} backdrop-blur-xl ${office.border} rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group`}
                >
                  {/* Office Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-xs font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white">
                        {office.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Office Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
                      {office.title}
                    </h3>
                    <p className="text-blue-100/90 leading-relaxed text-sm mb-4">
                      {office.text}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {office.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
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