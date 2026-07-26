import {
  Home,
  BedDouble,
  Image,
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Heart,
  Sparkles,
  BookOpen,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import "../pages/Themes.css";

const Footer = () => {
  return (
    <footer className="dormtitle bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500 text-white mt-10">
       <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-4" />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* QUICK LINKS */}
            <div>
              <h2 className=" flex items-center justify-center gap-2 text-xl font-bold mb-4">
                <Sparkles size={20} />
                Quick Links
              </h2>

              <div className="dormtext grid grid-cols-2 gap-x-6 gap-y-4 max-w-xs mx-auto text-left">
                <a
                  href="/"
                  className="dormtext flex items-center gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <Home size={16} />
                  Home
                </a>

                <a
                  href="/rooms"
                  className="dormtext flex items-center gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <BedDouble size={16} />
                  Rooms
                </a>

                <a
                  href="/offerings"
                  className="dormtext flex items-center gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <Sparkles size={16} />
                  Offerings
                </a>

                <a
                  href="/gallery"
                  className="dormtext flex items-center gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <Image size={16} />
                  Gallery
                </a>

                <a
                  href="/about"
                  className="dormtext flex items-center gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <BookOpen size={16} />
                  Our Story
                </a>

                <a
                  href="/contact"
                  className="dormtext flex items-center gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <PhoneCall size={16} />
                  Contact Us
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="dormtitle  flex items-center justify-center gap-2 text-xl font-bold mb-4">
                <PhoneCall size={20} />
                Contact Us
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:SMRCDORM@gmail.com"
                  className="dormtext flex items-center justify-center gap-3 text-pink-100 hover:text-white transition"
                >
                  <Mail size={18} />
                  <span>SMRCDORM@gmail.com</span>
                </a>

                <a
                  href="tel:+639275745809"
                  className="dormtext flex items-center justify-center gap-3 text-pink-100 hover:text-white transition"
                >
                  <Phone size={18} />
                  <span>+63 927 574 5809</span>
                </a>

                <div className="dormtext flex items-center justify-center gap-3 text-pink-100">
                  <MapPin size={18} />
                  <span>Quezon City, Philippines</span>
                </div>
              </div>
            </div>

            {/* FOLLOW US */}
            <div>
              <h2 className="dormtitle  text-xl font-bold mb-4">
                Follow Us
              </h2>

              <p className="dormtext text-pink-100 text-sm leading-6 mb-4">
                Stay connected with us through our social media pages.
              </p>

              <div className="dormtext flex justify-center flex-wrap gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dormtext w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <FaTiktok />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dormtext w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-pink-100">
          <p className="dormtext text-center md:text-left">
            © 2026{" "}
            <span className="dormtext font-semibold text-white">
              SMRC Dormitoryana
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
