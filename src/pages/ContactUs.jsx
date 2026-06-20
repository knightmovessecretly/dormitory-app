import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div
      className="min-h-screen px-6 py-20 text-slate-800"
      style={{
        background: "linear-gradient(to right, #f9c2c2, #ffffff)",
      }}
    >


      <div className="max-w-xl mx-auto w-full">
        {/* HEADER (Now safely outside the box) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
        <h1 className="text-5xl font-bold text-pink-500 mb-3">Contact Us</h1>

        </motion.div>

        {/* CARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="backdrop-blur-xl bg-white/75 border border-white/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
        >
          {/* CONTACT CHANNELS */}
          <div className="space-y-5">
            {/* ADDRESS */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100 shadow-sm">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Address</h3>
                <p className="text-slate-800 text-sm font-medium leading-relaxed">
                  155 B. Gonzales St. corner Katipunan Rd.<br />
                  Loyola Heights, Quezon City, Philippines
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 border border-indigo-100 shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call / Text</h3>
                <div className="flex flex-col text-sm font-medium text-slate-800 space-y-0.5">
                  <a href="tel:+639275745809" className="hover:text-indigo-600 transition w-fit">+(63) 927 574-5809</a>
                  <a href="tel:+639214774796" className="hover:text-indigo-600 transition w-fit">+(63) 921 477-4796</a>
                </div>
              </div>
            </div>

            {/* EMAIL (Clickable direct sender link) */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</h3>
                <a 
                  href="mailto:SMRCDORM@gmail.com?subject=Inquiry%20from%20Website" 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 hover:decoration-indigo-600 transition break-all"
                >
                  SMRCDORM@gmail.com
                </a>
              </div>
            </div>
          </div>

          <hr className="border-slate-200/60" />

          {/* SOCIAL LINKS & WEBSITE */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex gap-2.5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-md transition border border-slate-100">
                  <FaFacebook size={18} />
                </a>
                <a href="https://instagram.com/dormitoryanasmrc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-pink-500 hover:shadow-md transition border border-slate-100">
                  <FaInstagram size={18} />
                </a>
                <a href="https://smrcdormitoryana.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-cyan-500 hover:shadow-md transition border border-slate-100">
                  <Globe size={18} />
                </a>
              </div>
            </div>
            
            <div className="text-right">
              <a href="https://smrcdormitoryana.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-indigo-600 transition tracking-wider">
                SMRCDORMITORYANA.COM
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border border-white/50 shadow-md">
            <iframe
              title="Dormitory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2003719002933!2d121.0718448!3d14.6445778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7a1b32bb391%3A0x7d6a5cda01d1c447!2sB.%20Gonzales%2c%20Loyola%20Heights%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1625000000000!5m2!1sen!2sph"
              width="100%"
              height="200"
              style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}