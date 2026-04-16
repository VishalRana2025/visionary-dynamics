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
        className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px]"
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
    name: "Florida",
    country: "United States",
    city: "Saint Petersburg",
    address: "7901 4th St N STE 300 St. Petersburg, Florida-33702 USA",
    lat: 27.7731,
    lng: -82.6403,
    zoom: 12,
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our flagship headquarters with state-of-the-art facilities"
  },
  {
    id: "usa",
    name: "United States",
    city: "Dallas",
    address: "Dallas, Texas",
    lat: 32.7767,
    lng: -96.7970,
    zoom: 10,
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Financial hub connecting global markets"
  },
  {
    id: "canada",
    name: "Canada",
    city: "Vancouver",
    address: "Vancouver, British Columbia",
    lat: 49.2827,
    lng: -123.1207,
    zoom: 10,
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "North American innovation center"
  },
  {
    id: "india",
    name: "India",
    city: "Noida",
    address: "Sector 16, Noida, UP",
    lat: 28.4595,
    lng: 77.0266,
    zoom: 12,
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

/* Floating Objects Component - Optimized for mobile */
const FloatingObjects = () => {
  // Reduced number of floating elements for better mobile performance
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Larger animated floating circles - Reduced count for mobile */}
      {[...Array(4)].map((_, i) => {
        const size = Math.random() * 80 + 40;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 2;
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
              background: `radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.03) 70%)`,
              border: '1px solid rgba(96, 165, 250, 0.12)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
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

      {/* Floating glow dots - Reduced count */}
      {[...Array(10)].map((_, i) => {
        const size = Math.random() * 8 + 3;
        const duration = Math.random() * 8 + 5;
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
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(96, 165, 250, 0.25)',
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 60 - 30],
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
    </div>
  );
};

/* ================= COMPONENT ================= */
export default function Locations() {
  const [active, setActive] = useState(locations[0]);

  const offices = [
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
  title: "United Arab Emirates",
  subtitle: "UAE",
  text: "The UAE is a global business hub where we collaborate with enterprises, startups, and government organizations to drive digital innovation, smart infrastructure, and scalable growth solutions.",
  image: "https://dubai.savills.ae/_images/downtown-dubai-7-760.jpg",
  features: ["Global Business Hub", "Smart Infrastructure", "Strategic Location"],
},
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/3d-location-with-world-map-gps-navigator-pin-3d-render-illustration_974729-16638.jpg?w=2000')",
          }}
        />

        {/* Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#020617]/45 to-[#020617]/50" />

        {/* Soft Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.3)_55%,rgba(2,6,23,0.45)_85%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg">
            Our Locations
          </h1>
         
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden bg-blue-100">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Objects */}
        <FloatingObjects />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent px-4">
              Our Global Presence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-900/70 max-w-3xl mx-auto leading-relaxed px-4">
              Strategic offices across key global markets, delivering exceptional consulting services worldwide
            </p>
          </motion.div>

          {/* STATS BAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-16"
          >
            {[
              { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "4", label: "Global Offices" },
              { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "50+", label: "Team Members" },
              { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "24/7", label: "Support" },
              { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-blue-300/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center shadow-lg shadow-blue-200/50"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-blue-200/60 mb-2 sm:mb-3 md:mb-4">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 text-blue-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-blue-700/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* LOCATIONS LIST WITH IMAGES */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-5 sm:space-y-6"
            >
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-blue-900">
                  Explore Our Offices
                </h2>
                <p className="text-sm sm:text-base text-blue-700/80">
                  Select a location to view details and explore our presence in key markets worldwide
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {locations.map((loc) => (
                  <motion.button
                    key={loc.id}
                    onClick={() => setActive(loc)}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left rounded-xl sm:rounded-2xl border transition-all duration-300 group overflow-hidden backdrop-blur-sm
                      ${
                        active.id === loc.id
                          ? "bg-blue-200/80 border-blue-500/70 shadow-lg shadow-blue-300/50"
                          : "bg-white/80 border-blue-400/50 shadow-md shadow-blue-200/40"
                      }
                    `}
                  >
                    <div className="flex flex-row">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent z-10" />
                        <img
                          src={loc.image}
                          alt={loc.city}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
                          <span className="text-lg sm:text-xl drop-shadow-md">{loc.flag}</span>
                        </div>
                      </div>
                      <div className="flex-1 p-3 sm:p-4 md:p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className={`font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 ${
                              active.id === loc.id ? "text-blue-900" : "text-blue-800"
                            }`}>
                              {loc.name === "Florida" ? `${loc.name}, ${loc.country}` : loc.name}
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-1 sm:mb-2">
                              <MapPin className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                active.id === loc.id ? "text-blue-700" : "text-blue-600"
                              }`} />
                              <span className={`text-xs sm:text-sm ${
                                active.id === loc.id ? "text-blue-800" : "text-blue-700"
                              }`}>
                                {loc.city}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-blue-800/80 line-clamp-2 hidden sm:block">
                              {loc.description}
                            </p>
                          </div>
                          <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 ${
                            active.id === loc.id 
                              ? "border-blue-700 bg-blue-200 shadow-md shadow-blue-300" 
                              : "border-blue-500 bg-blue-100/80"
                          }`}>
                            {active.id === loc.id && (
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-blue-700"
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

            {/* MAP SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 sticky top-24"
            >
              <div className="relative bg-white/80 backdrop-blur-md border border-blue-400/60 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl shadow-blue-200/50">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-blue-200/70 border border-blue-400/50">
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900">Interactive Map</h3>
                    <p className="text-xs sm:text-sm text-blue-800/80">Currently viewing: {active.city}</p>
                  </div>
                </div>
                
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg sm:rounded-xl overflow-hidden border border-blue-300/60 shadow-lg">
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
                    className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-blue-100/80 border border-blue-400/60 backdrop-blur-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl overflow-hidden border border-blue-400/50 flex-shrink-0">
                            <img
                              src={active.image}
                              alt={active.city}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold flex items-center gap-1 sm:gap-2 text-blue-900">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" />
                              {active.city}
                            </h3>
                            <p className="text-xs sm:text-sm text-blue-800/80 mt-0.5">
                              {active.name === "Florida" ? `${active.name}, ${active.country}` : active.name}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-800/80 break-words">
                          {active.address}
                        </p>
                      </div>
                      {/* <button 
                        onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(active.address)}`, "_blank")}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:from-blue-700 hover:to-blue-800 transition whitespace-nowrap"
                      >
                        Get Directions
                      </button> */}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE CARDS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>
 
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#020617]/35 to-blue-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,rgba(2,6,23,0.25)_45%,rgba(2,6,23,0.45)_80%)]" />
        </div>
        
        <div className="relative z-10">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent px-4">
                Countries We Serve
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto px-4">
                State-of-the-art facilities designed for collaboration, innovation, and exceptional client service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
              {offices.map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
                >
                  <div className="h-36 sm:h-40 md:h-44 lg:h-48 relative overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                      <div className="text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-sm text-white">
                        {office.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-white group-hover:text-blue-200 transition-colors duration-300">
                      {office.title}
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                      {office.text}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {office.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 10s;
          }
        }
      `}</style>
    </div>
  );
}