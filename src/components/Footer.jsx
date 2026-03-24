import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">

      {/* TOP FOOTER */}
      <div className="w-full px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* LOGO */}
          <div>
            <img
src="/VD-Logo-e1737873827576.png"
              alt="Visionary Dynamics"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Smart solutions and scalable IT services helping businesses grow
              through innovation and technology.
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering businesses with modern technology, innovation, and
              scalable digital solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
           <ul className="space-y-2 text-white/70 text-sm">
  <li><Link to="/" className="hover:text-white">Home</Link></li>
  
  <li><Link to="/about" className="hover:text-white">About</Link></li>
  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
</ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
           <ul className="space-y-2 text-white/70 text-sm">
  <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
  <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
  <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
  <li><Link to="/datasecurity" className="hover:text-white">Data Security Policy</Link></li>
  <li><Link to="/intellectual" className="hover:text-white">Intellectual Property Policy</Link></li>
  <li><Link to="/complaint" className="hover:text-white">Complaint & Grievance Policy</Link></li>
  <li><Link to="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
</ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-white/70 text-sm mb-6">
             <li className="flex items-center gap-3">
  <Mail size={16} className="text-sky-400" />
  <a href="mailto:contact@visionarydynamics.com" className="hover:text-white">
   connect@visionarydynamicsas.com
  </a>
</li>

              <li className="flex items-center gap-3">
  <Phone size={16} className="text-sky-400" />
  <a href="tel:+17275649476" className="hover:text-white">
   +1(727) 564-9476
  </a>
</li>

              <li className="flex items-start gap-3">
  <MapPin size={16} className="text-sky-400 mt-1" />
  <a
  href="https://www.google.com/maps?q=7901+4th+St+N+STE+300+St+Petersburg+Florida+33702+USA"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white"
>
  7901 4th St N STE 300 St. Petersburg, Florida-33702 USA <br />
  St. Petersburg, Florida-33702 USA
</a>
</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
             <a
  href="https://in.linkedin.com/company/visionarydynamicsas"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full bg-white/5 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40 transition"
>
  <Linkedin size={18} />
</a>

             <a
  href="https://x.com/VisionaryD64371"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full bg-white/5 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40 transition"
>
  <Twitter size={18} />
</a>

              <a
                href="https://www.facebook.com/visionarydynamicsas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/40 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/visionary.dynamics/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/40 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 text-center py-4 text-white/60 text-sm">
        © {new Date().getFullYear()} Visionary Dynamics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
