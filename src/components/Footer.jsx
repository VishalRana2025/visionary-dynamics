import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
              <li className="hover:text-white cursor-pointer">Data Security Policy</li>
              <li className="hover:text-white cursor-pointer">Intellectual Property Policy</li>
              <li className="hover:text-white cursor-pointer">Complaint & Grievance Policy</li>
              <li className="hover:text-white cursor-pointer">Disclaimer</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-white/70 text-sm mb-6">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-400" />
                contact@visionarydynamics.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-400" />
                +1 (123) 456-7890
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-1" />
                <span>
                  123 Business Avenue <br />
                  New York, NY, USA
                </span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-400/40 transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/40 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
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
