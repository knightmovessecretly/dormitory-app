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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* Top Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-10" />


        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">


          {/* ================= QUICK LINKS ================= */}
          <div className="text-center">

            <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-extrabold mb-6">
              <Sparkles size={22} strokeWidth={2.5} />
              Quick Links
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto">

              <Link
                to="/"
                className="
                  flex items-center justify-center sm:justify-start
                  gap-3
                  text-pink-50
                  hover:text-white
                  hover:translate-x-1
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <Home size={19} strokeWidth={2.3} />
                Home
              </Link>


              <Link
                to="/rooms"
                className="
                  flex items-center justify-center sm:justify-start
                  gap-3
                  text-pink-50
                  hover:text-white
                  hover:translate-x-1
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <BedDouble size={19} strokeWidth={2.3} />
                Rooms
              </Link>


              <Link
                to="/offerings"
                className="
                  flex items-center justify-center sm:justify-start
                  gap-3
                  text-pink-50
                  hover:text-white
                  hover:translate-x-1
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <Sparkles size={19} strokeWidth={2.3} />
                Offerings
              </Link>


              <Link
                to="/gallery"
                className="
                  flex items-center justify-center sm:justify-start
                  gap-3
                  text-pink-50
                  hover:text-white
                  hover:translate-x-1
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <Image size={19} strokeWidth={2.3} />
                Gallery
              </Link>


              <Link
                to="/about"
                className="
                  flex items-center justify-center sm:justify-start
                  gap-3
                  text-pink-50
                  hover:text-white
                  hover:translate-x-1
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <BookOpen size={19} strokeWidth={2.3} />
                Our Story
              </Link>


              <Link
                to="/contact"
                className="
                  flex items-center justify-center sm:justify-start
                  gap-3
                  text-pink-50
                  hover:text-white
                  hover:translate-x-1
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <PhoneCall size={19} strokeWidth={2.3} />
                Contact Us
              </Link>

            </div>
          </div>


          {/* ================= CONTACT ================= */}
          <div className="text-center">

            <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-extrabold mb-6">
              <PhoneCall size={22} strokeWidth={2.5} />
              Contact Us
            </h2>


            <div className="space-y-5">

              {/* EMAIL */}
              <a
                href="mailto:SMRCDORM@gmail.com"
                className="
                  flex items-center justify-center
                  gap-3
                  text-pink-50
                  hover:text-white
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                  whitespace-nowrap
                "
              >
                <Mail size={20} strokeWidth={2.3} />
                <span>SMRCDORM@gmail.com</span>
              </a>


              {/* PHONE */}
              <a
                href="tel:+639275745809"
                className="
                  flex items-center justify-center
                  gap-3
                  text-pink-50
                  hover:text-white
                  transition
                  text-base
                  md:text-lg
                  font-semibold
                  whitespace-nowrap
                "
              >
                <Phone size={20} strokeWidth={2.3} />
                <span>+63 927 574 5809</span>
              </a>


              {/* LOCATION */}
              <div
                className="
                  flex items-center justify-center
                  gap-3
                  text-pink-50
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <MapPin size={20} strokeWidth={2.3} />
                <span>Quezon City, Philippines</span>
              </div>
            </div>
          </div>


          {/* ================= SOCIAL ================= */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-extrabold mb-5">
              Follow Us
            </h2>
            <p
              className="
                text-pink-50
                text-base
                md:text-lg
                font-medium
                leading-7
                mb-7
                max-w-sm
                mx-auto
              "
            >
              Stay connected with us through our social media pages.
            </p>


            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.facebook.com/SMRCDorm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  w-11 h-11
                  md:w-13 md:h-13
                  rounded-xl
                  bg-white/10
                  border border-white/20
                  backdrop-blur-sm
                  hover:bg-white
                  hover:text-pink-500
                  hover:-translate-y-1
                  transition-all
                  flex items-center justify-center
                  text-xl
                  md:text-2xl
                "
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

        </div>
      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/20">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            md:justify-between
            gap-3
            text-base
            text-pink-50
          "
        >

          <p className="text-center md:text-left font-medium">

            © 2026{" "}

            <span className="font-extrabold text-white">
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
