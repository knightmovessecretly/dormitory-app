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

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* OUR STORY */}
          <div>

            <h2 className="flex items-center gap-2 text-xl font-bold mb-3">
              <Heart
                size={22}
                className="fill-pink-100 text-pink-100"
              />
              Our Story
            </h2>

            <p className="text-pink-100 text-sm leading-6">
              SMRC Dormitoryana is committed to providing a safe,
              peaceful, and comfortable home for students and
              professionals. We offer quality accommodations,
              modern amenities, and a welcoming community where
              residents can study, grow, and truly feel at home.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="flex items-center gap-2 text-xl font-bold mb-3">
              <Sparkles size={22} />
              Quick Links
            </h2>

            <div className="grid grid-cols-2 gap-y-3 text-sm">

              <a
                href="/"
                className="flex items-center gap-2 hover:text-pink-100 transition"
              >
                <Home size={16} />
                Home
              </a>

              <a
                href="/rooms"
                className="flex items-center gap-2 hover:text-pink-100 transition"
              >
                <BedDouble size={16} />
                Rooms
              </a>

              <a
                href="/offerings"
                className="flex items-center gap-2 hover:text-pink-100 transition"
              >
                <Sparkles size={16} />
                Offerings
              </a>

              <a
                href="/gallery"
                className="flex items-center gap-2 hover:text-pink-100 transition"
              >
                <Image size={16} />
                Gallery
              </a>

              <a
                href="/about"
                className="flex items-center gap-2 hover:text-pink-100 transition"
              >
                <BookOpen size={16} />
                Our Story
              </a>

              <a
                href="/contact"
                className="flex items-center gap-2 hover:text-pink-100 transition"
              >
                <PhoneCall size={16} />
                Contact Us
              </a>

            </div>

          </div>

          {/* CONTACT US */}
          <div>

            <h2 className="flex items-center gap-2 text-xl font-bold mb-3">
              <PhoneCall size={22} />
              Contact Us
            </h2>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                SMRCDORM@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +63 927 574 5809
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Quezon City, Philippines
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-5">

              <p className="text-sm font-semibold mb-3">
                Follow Us
              </p>

              <div className="flex gap-3">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-pink-500 transition duration-300 flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-pink-500 transition duration-300 flex items-center justify-center"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-pink-500 transition duration-300 flex items-center justify-center"
                >
                  <FaTiktok />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-pink-500 transition duration-300 flex items-center justify-center"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-300">

        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © 2026 <span className="font-semibold">SMRC Dormitoryana</span>. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1 mt-2 md:mt-0 text-pink-100">

            Made with

            <Heart
              size={15}
              className="fill-pink-100 text-pink-100"
            />

            for students

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;