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
     <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO */}
         <div className="space-y-4">
<Link to="/">
  <img
    src="/VD-Logo-e1737873827576.png"
    alt="Visionary Dynamics"
    className="h-12 w-auto mb-4 cursor-pointer"
  />
</Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Smart solutions and scalable IT services helping businesses grow
              through innovation and technology.
            </p>
             <p className="text-white/70 text-sm leading-relaxed">
              Providing reliable and future-ready technology services that help organizations adapt, compete, and succeed through innovation and efficiency.
            </p>
             <p className="text-white/70 text-sm leading-relaxed">
              Transforming ideas into powerful digital solutions that enable businesses to innovate faster, scale seamlessly, and stay ahead in a competitive landscape.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:ml-36">

            <h4 className="font-semibold mb-5 text-white">Quick Links</h4>
           <ul className="space-y-2 text-white/70 text-sm">
  <li><Link to="/" className="hover:text-white">Home</Link></li>
  
  <li><Link to="/about" className="hover:text-white">About</Link></li>
  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
   <li><Link to="/accounting" className="hover:text-white">Accounting</Link></li>
    <li><Link to="/webdesign" className="hover:text-white">Marketing</Link></li>
     <li><Link to="/mobile" className="hover:text-white">I.T</Link></li>
</ul>
          </div>

          {/* SERVICES */}
          <div className="space-y-4">
  <h4 className="font-semibold mb-5 text-white">Policies</h4>

  <ul className="space-y-2 text-white/70 text-sm">
    <li>
      <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Privacy Policy
      </a>
    </li>

    <li>
      <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Terms & Conditions
      </a>
    </li>

    <li>
      <a href="/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Cookie Policy
      </a>
    </li>

    <li>
      <a href="/datasecurity" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Data Security Policy
      </a>
    </li>

    <li>
      <a href="/intellectual" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Intellectual Property Policy
      </a>
    </li>

    <li>
      <a href="/complaint" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Complaint & Grievance Policy
      </a>
    </li>

    <li>
      <a href="/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        Disclaimer
      </a>
    </li>
  </ul>
</div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

           <ul className="space-y-4 text-white/70 text-sm mb-6">
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
  <p> 7901 4th St N STE 300 St. Petersburg, Florida-33702 USA <br />
 </p>
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
