import {
  Home,
  BedDouble,
  Image,
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Sparkles,
  BookOpen,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../pages/Themes.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-10" />

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ================= QUICK LINKS ================= */}
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-2 text-lg md:text-xl font-bold mb-5">
              <Sparkles size={20} />
              Quick Links
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm mx-auto">

              <Link
                to="/"
                className="flex items-center justify-center sm:justify-start gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition"
              >
                <Home size={16} />
                Home
              </Link>

              <Link
                to="/rooms"
                className="flex items-center justify-center sm:justify-start gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition"
              >
                <BedDouble size={16} />
                Rooms
              </Link>

              <Link
                to="/offerings"
                className="flex items-center justify-center sm:justify-start gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition"
              >
                <Sparkles size={16} />
                Offerings
              </Link>

              <Link
                to="/gallery"
                className="flex items-center justify-center sm:justify-start gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition"
              >
                <Image size={16} />
                Gallery
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center sm:justify-start gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition"
              >
                <BookOpen size={16} />
                Our Story
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center sm:justify-start gap-2 text-pink-100 hover:text-white hover:translate-x-1 transition"
              >
                <PhoneCall size={16} />
                Contact Us
              </Link>

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="text-center">
            <h2 className="flex items-center justify-center gap-2 text-lg md:text-xl font-bold mb-5">
              <PhoneCall size={20} />
              Contact Us
            </h2>

            <div className="space-y-4">

              <a
                href="mailto:SMRCDORM@gmail.com"
                className="flex items-center justify-center gap-3 text-pink-100 hover:text-white transition"
              >
                <Mail size={18} />
                <span className="break-all">SMRCDORM@gmail.com</span>
              </a>

              <a
                href="tel:+639275745809"
                className="flex items-center justify-center gap-3 text-pink-100 hover:text-white transition"
              >
                <Phone size={18} />
                <span>+63 927 574 5809</span>
              </a>

              <div className="flex items-center justify-center gap-3 text-pink-100">
                <MapPin size={18} />
                <span>Quezon City, Philippines</span>
              </div>

            </div>
          </div>

          {/* ================= SOCIAL ================= */}
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold mb-5">
              Follow Us
            </h2>

            <p className="text-pink-100 text-sm md:text-base leading-6 mb-6 max-w-xs mx-auto">
              Stay connected with us through our social media pages.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all flex items-center justify-center text-lg"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all flex items-center justify-center text-lg"
              >
                <FaInstagram />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all flex items-center justify-center text-lg"
              >
                <FaTiktok />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white hover:text-pink-500 hover:-translate-y-1 transition-all flex items-center justify-center text-lg"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-sm text-pink-100">

          <p className="text-center md:text-left">
            © 2026{" "}
            <span className="font-semibold text-white">
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
