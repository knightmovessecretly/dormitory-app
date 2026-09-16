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
  HelpCircle,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../pages/Themes.css";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/rooms", label: "Rooms", icon: BedDouble },
    { to: "/offerings", label: "Offerings", icon: Sparkles },
    { to: "/about", label: "Our Story", icon: BookOpen },
    { to: "/contact", label: "Contact Us", icon: PhoneCall },
    { to: "/faq", label: "FAQ", icon: HelpCircle },
    { to: "/news", label: "Events", icon: CalendarDays },
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-600 via-pink-500 to-rose-500 text-white mt-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* Top Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-10" />

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ================= QUICK LINKS ================= */}
          <div className="text-center">

            <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-extrabold mb-6">
              <Sparkles size={22} strokeWidth={2.5} />
              Quick Links
            </h2>

            <nav aria-label="Footer navigation">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-lg mx-auto">

                {quickLinks.map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    className="
                      group
                      flex items-center
                      justify-between
                      gap-3
                      min-h-12
                      px-4
                      py-3
                      rounded-xl
                      text-pink-50
                      font-semibold
                      text-base
                      md:text-lg

                      bg-white/10
                      border border-white/10

                      hover:bg-white/20
                      hover:text-white
                      hover:border-white/20

                      active:bg-white/30
                      active:scale-[0.98]

                      transition-all duration-200
                    "
                  >
                    <span className="flex items-center gap-3">

                      <Icon
                        size={19}
                        strokeWidth={2.3}
                        className="
                          shrink-0
                          transition-transform
                          duration-200
                          group-hover:scale-110
                        "
                      />

                      <span>{label}</span>

                    </span>

                    {/* Arrow makes it obvious this is clickable */}
                    <ArrowRight
                      size={18}
                      className="
                        shrink-0
                        opacity-50
                        -translate-x-1
                        transition-all
                        duration-200
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    />

                  </Link>
                ))}

              </div>

            </nav>
          </div>


          {/* ================= CONTACT ================= */}
          <div className="text-center">

            <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-extrabold mb-6">
              <PhoneCall size={22} strokeWidth={2.5} />
              Contact Us
            </h2>

            <div className="space-y-3">

              {/* EMAIL */}
              <a
                href="mailto:SMRCDORM@gmail.com"
                className="
                  group
                  flex items-center justify-center
                  gap-3
                  min-h-12
                  px-4
                  py-3
                  rounded-xl
                  bg-white/10
                  border border-white/10
                  text-pink-50
                  hover:bg-white/20
                  hover:text-white
                  active:bg-white/30
                  transition-all duration-200
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <Mail
                  size={20}
                  strokeWidth={2.3}
                  className="shrink-0"
                />

                <span className="break-all">
                  SMRCDORM@gmail.com
                </span>

                <ArrowRight
                  size={17}
                  className="shrink-0 opacity-50 group-hover:opacity-100"
                />
              </a>


              {/* PHONE */}
              <a
                href="tel:+639275745809"
                className="
                  group
                  flex items-center justify-center
                  gap-3
                  min-h-12
                  px-4
                  py-3
                  rounded-xl
                  bg-white/10
                  border border-white/10
                  text-pink-50
                  hover:bg-white/20
                  hover:text-white
                  active:bg-white/30
                  transition-all duration-200
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <Phone
                  size={20}
                  strokeWidth={2.3}
                  className="shrink-0"
                />

                <span>
                  +63 927 574 5809
                </span>

                <ArrowRight
                  size={17}
                  className="shrink-0 opacity-50 group-hover:opacity-100"
                />
              </a>


              {/* LOCATION */}
              <div
                className="
                  flex items-center justify-center
                  gap-3
                  min-h-12
                  px-4
                  py-3
                  rounded-xl
                  bg-white/10
                  border border-white/10
                  text-pink-50
                  text-base
                  md:text-lg
                  font-semibold
                "
              >
                <MapPin
                  size={20}
                  strokeWidth={2.3}
                  className="shrink-0"
                />

                <span>
                  Quezon City, Philippines
                </span>
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
                aria-label="Visit SMRC Dormitoryana on Facebook"
                className="
                  w-12 h-12
                  md:w-14 md:h-14
                  rounded-xl
                  bg-white/10
                  border border-white/20
                  backdrop-blur-sm
                  hover:bg-white
                  hover:text-pink-500
                  hover:-translate-y-1
                  active:scale-95
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