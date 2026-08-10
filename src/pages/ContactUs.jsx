import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import "./Themes.css";

export default function ContactUs() {
  return (
    <div className="pinkfloral min-h-screen px-6 py-20 text-slate-800">
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="dormtitle text-5xl font-bold mb-3">
            Contact Us
          </h1>
        </motion.div>

        {/* CARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            backdrop-blur-xl
            bg-white/75
            border
            border-white/40
            rounded-3xl
            p-12 lg:p-16
            shadow-2xl
            space-y-10
            min-h-[720px]
          "
        >

          <div className="space-y-10">

            {/* LOCATION */}
            <div className="flex gap-6 items-start">

              {/* BIG LOCATION ICON */}
              <div
                className="
                  w-20 h-20
                  shrink-0
                  rounded-2xl
                  bg-rose-100
                  flex items-center justify-center
                  text-rose-800
                  border-2 border-rose-400
                  shadow-lg
                "
              >
                <MapPin size={42} strokeWidth={2.3} />
              </div>

              <div className="pt-1">

                {/* LOCATION TITLE */}
                <h3
                  className="
                    text-2xl
                    font-extrabold
                    text-rose-800
                    uppercase
                    tracking-[0.18em]
                    mb-3
                  "
                >
                  DORMITORYANA LOCATION
                </h3>

                {/* ADDRESS */}
                <p className="text-slate-800 text-lg font-medium leading-relaxed">

                  {/* Emphasize Katipunan */}
                  <span className="font-extrabold text-rose-800">
                    Katipunan Ave
                  </span>

                  <span className="font-semibold">
                    {" "}corner B. Gonzales St.
                  </span>

                  <br />

                  Loyola Heights, Quezon City, Philippines
                </p>

              </div>
            </div>


            {/* PHONE */}
            <div className="flex gap-4 items-start">

              <div
                className="
                  w-10 h-10
                  shrink-0
                  rounded-xl
                  bg-indigo-50
                  flex items-center justify-center
                  text-indigo-500
                  border border-indigo-100
                  shadow-sm
                "
              >
                <Phone size={20} />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Call / Text
                </h3>

                <div className="flex flex-col text-sm font-medium text-slate-800 space-y-1">

                  <a
                    href="tel:+639275745809"
                    className="hover:text-indigo-600 transition w-fit"
                  >
                    +(63) 927 574-5809
                  </a>

                  <a
                    href="tel:+639214774796"
                    className="hover:text-indigo-600 transition w-fit"
                  >
                    +(63) 921 477-4796
                  </a>

                </div>
              </div>
            </div>


            {/* EMAIL */}
            <div className="flex gap-4 items-start">

              <div
                className="
                  w-10 h-10
                  shrink-0
                  rounded-xl
                  bg-emerald-50
                  flex items-center justify-center
                  text-emerald-500
                  border border-emerald-100
                  shadow-sm
                "
              >
                <Mail size={20} />
              </div>

              <div>

                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Email
                </h3>

                <a
                  href="mailto:SMRCDORM@gmail.com?subject=Inquiry%20from%20Website"
                  className="
                    text-sm
                    font-medium
                    text-indigo-600
                    hover:text-indigo-800
                    underline
                    decoration-indigo-200
                    hover:decoration-indigo-600
                    transition
                    break-all
                  "
                >
                  SMRCDORM@gmail.com
                </a>

              </div>
            </div>

          </div>


          {/* WEBSITE */}
          <div className="flex items-center justify-end">

            <a
              href="https://smrcdormitoryana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs
                font-bold
                text-slate-500
                hover:text-rose-700
                transition
                tracking-wider
              "
            >
              SMRCDORMITORYANA.COM
            </a>

          </div>


          {/* MAP */}
          <div
            className="
              rounded-2xl
              overflow-hidden

              /* DARK PINK FRAME */
              border-[6px]
              border-rose-800

              /* Additional separation from floral background */
              shadow-[0_10px_35px_rgba(136,19,55,0.35)]
              ring-4
              ring-rose-200/70

              bg-rose-800
            "
          >

            <iframe
              title="Dormitory Location"
              src="https://www.google.com/maps?q=Katipunan+Ave+corner+B.+Gonzales+St.,+Loyola+Heights,+Quezon+City,+Philippines&z=17&output=embed"
              width="100%"
              height="600"
              style={{
                border: 0,
                filter: "grayscale(0.08) contrast(1.05)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>

        </motion.div>
      </div>
    </div>
  );
}
