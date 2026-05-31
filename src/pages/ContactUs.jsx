import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  Send,
//  Instagram,
  Globe,
} from "lucide-react";

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
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        text-white
      "
    >
      {/* HERO */}
      <section
        className="
          relative
          h-[40vh]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* BACKGROUND BLUR */}
        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            bg-red-500/20
            rounded-full
            blur-3xl
            -top-40
            -left-40
          "
        />

        <div
          className="
            absolute
            w-[400px]
            h-[400px]
            bg-blue-500/20
            rounded-full
            blur-3xl
            bottom-0
            right-0
          "
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            z-10
            text-center
            px-4
          "
        >
          <h1 className="text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 text-lg">
            Reach out anytime — we’d love to help.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-20">
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-10
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              backdrop-blur-xl
              bg-white/10
              border
              border-white/20
              rounded-3xl
              p-10
              shadow-2xl
            "
          >
            <h2 className="text-3xl font-bold mb-10">
              Get In Touch
            </h2>

            {/* ADDRESS */}
            <div className="flex gap-5 mb-8">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-red-500/20
                  flex
                  items-center
                  justify-center
                  text-red-400
                "
              >
                <MapPin size={30} />
              </motion.div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Address
                </h3>

                <p className="text-gray-300 leading-relaxed">
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
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-blue-400
                "
              >
                <Phone size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Call / Text
                </h3>

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+639275745809"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    +(63) 927 574-5809
                  </a>

                  <a
                    href="tel:+639214774796"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    +(63) 921 477-4796
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-5 mb-8">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-green-500/20
                  flex
                  items-center
                  justify-center
                  text-green-400
                "
              >
                <Mail size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:SMRCDORM@gmail.com"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  SMRCDORM@gmail.com
                </a>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="flex gap-5 mb-8">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-pink-500/20
                  flex
                  items-center
                  justify-center
                  text-pink-400
                "
              >
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Instagram
                </h3>

                <a
                  href="https://instagram.com/dormitoryanasmrc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  @dormitoryanasmrc
                </a>
              </div>
            </div>

            {/* FACEBOOK */}
            <div className="flex gap-5 mb-8">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-600/20
                  flex
                  items-center
                  justify-center
                  text-blue-500
                "
              >
                <FaFacebook size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Facebook
                </h3>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  SMRC Dormitoryana
                </a>
              </div>
            </div>

            {/* WEBSITE */}
            <div className="flex gap-5">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                "
              >
                <Globe size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Website
                </h3>

                <a
                  href="https://smrcdormitoryana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  smrcdormitoryana.com
                </a>
              </div>
            </div>

            {/* MAP */}
            <div
              className="
                mt-10
                rounded-3xl
                overflow-hidden
                border
                border-white/20
                h-[300px]
              "
            >
              <iframe
                title="Dormitory Location"
                src="https://www.google.com/maps?q=155+B.+Gonzales+St.+corner+Katipunan+Rd.,+Loyola+Heights,+Quezon+City,+Philippines&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              backdrop-blur-xl
              bg-white/10
              border
              border-white/20
              rounded-3xl
              p-10
              shadow-2xl
            "
          >
            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  bg-white/10
                  border
                  border-white/20
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  text-white
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  bg-white/10
                  border
                  border-white/20
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  text-white
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="
                  w-full
                  bg-white/10
                  border
                  border-white/20
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  text-white
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition
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
