import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };
  return (
    <div
      className="min-h-screen text-slate-800"
      style={{
        background:
          "linear-gradient(to right, #f9c2c2 0%, #ffe3e3 40%, #ffffff 100%)",
      }}
    >
      {/* HERO */}
  <section className="relative h-[4vh] flex items-center justify-center overflow-hidden">
        {/* soft blobs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-pink-500 text-6xl font-bold mb-4">
  Contact Us
</h1>
          <p className="text-slate-600 text-lg">
            Reach out anytime — we’d love to help.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
        <section className="px-6 pb-7 -mt-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* LEFT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              backdrop-blur-xl
              bg-white/70
              border
              border-gray-200
              rounded-3xl
              p-10
              shadow-md
              hover:shadow-lg
              transition
            "
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Get In Touch
            </h2>

            {/* ADDRESS */}
            <div className="flex gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 shadow-sm">
                <MapPin size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Address
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  155 B. Gonzales St.
                  <br />
                  corner Katipunan Rd.,
                  <br />
                  Loyola Heights,
                  <br />
                  Quezon City,
                  <br />
                  Philippines
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-500 shadow-sm">
                <Phone size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Call / Text
                </h3>

                <div className="flex flex-col gap-1 text-slate-600">
                  <a
                    href="tel:+639275745809"
                    className="hover:text-blue-500 transition"
                  >
                    +(63) 927 574-5809
                  </a>
                  <a
                    href="tel:+639214774796"
                    className="hover:text-blue-500 transition"
                  >
                    +(63) 921 477-4796
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-500 shadow-sm">
                <Mail size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Email
                </h3>

                <a
                  href="mailto:SMRCDORM@gmail.com"
                  className="text-slate-600 hover:text-green-500 transition"
                >
                  SMRCDORM@gmail.com
                </a>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="flex gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 shadow-sm">
                📸
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Instagram
                </h3>

                <a
                  href="https://instagram.com/dormitoryanasmrc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-pink-500 transition"
                >
                  @dormitoryanasmrc
                </a>
              </div>
            </div>

            {/* FACEBOOK */}
            <div className="flex gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <FaFacebook size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Facebook
                </h3>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-500 transition"
                >
                  SMRC Dormitoryana
                </a>
              </div>
            </div>

            {/* WEBSITE */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-500 shadow-sm">
                <Globe size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Website
                </h3>

                <a
                  href="https://smrcdormitoryana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-cyan-500 transition"
                >
                  smrcdormitoryana.com
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-10 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                title="Dormitory Location"
                src="https://www.google.com/maps?q=155+B.+Gonzales+St.+corner+Katipunan+Rd.,+Loyola+Heights,+Quezon+City,+Philippines&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              backdrop-blur-xl
              bg-white/70
              border
              border-gray-200
              rounded-3xl
              p-10
              shadow-md
              hover:shadow-lg
              transition
            "
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Send Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  bg-white/80
                  border
                  border-gray-200
                  rounded-2xl
                  px-5
                  py-4
                  text-slate-800
                  placeholder-slate-400
                  outline-none
                  focus:ring-2
                  focus:ring-pink-200
                  focus:border-pink-300
                  transition
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  bg-white/80
                  border
                  border-gray-200
                  rounded-2xl
                  px-5
                  py-4
                  text-slate-800
                  placeholder-slate-400
                  outline-none
                  focus:ring-2
                  focus:ring-pink-200
                  focus:border-pink-300
                  transition
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="
                  w-full
                  bg-white/80
                  border
                  border-gray-200
                  rounded-2xl
                  px-5
                  py-4
                  text-slate-800
                  placeholder-slate-400
                  outline-none
                  resize-none
                  focus:ring-2
                  focus:ring-pink-200
                  focus:border-pink-300
                  transition
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-gradient-to-r
                  from-red-400
                  to-pink-400
                  hover:from-red-500
                  hover:to-pink-500
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-md
                  hover:shadow-lg
                  transition-all
                "
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}