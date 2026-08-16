import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import "./Themes.css";

export default function ContactUs() {
  return (
    <div className="pinkfloral min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 text-slate-800">
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="dormtitle text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 tracking-[0.08em]">
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
            rounded-2xl
            sm:rounded-3xl
            p-5
            sm:p-8
            lg:p-10
            shadow-2xl
            space-y-8
            sm:space-y-10
          "
        >

          {/* CONTACT INFORMATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* =========================
                LEFT — LOCATION
            ========================== */}
            <div className="flex gap-5 sm:gap-6 items-start">

              {/* LOCATION ICON */}
              <div
                className="
                  w-16 h-16
                  sm:w-20 sm:h-20
                  shrink-0
                  rounded-2xl
                  bg-rose-100
                  flex items-center justify-center
                  text-rose-800
                  border-2 border-rose-400
                  shadow-lg
                "
              >
                <MapPin
                  size={34}
                  className="sm:w-[42px] sm:h-[42px]"
                  strokeWidth={2.3}
                />
              </div>


              {/* LOCATION TEXT */}
              <div className="pt-0 sm:pt-1 min-w-0">

                <h3
                  className="
                    text-lg
                    sm:text-xl
                    lg:text-2xl
                    font-extrabold
                    text-rose-800
                    uppercase
                    tracking-[0.1em]
                    sm:tracking-[0.15em]
                    lg:tracking-[0.18em]
                    mb-2
                    sm:mb-3
                  "
                >
                  Dormitoryana Location
                </h3>

                <p
                  className="
                    text-slate-800
                    text-base
                    sm:text-lg
                    font-medium
                    leading-relaxed
                  "
                >
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


            {/* =========================
                RIGHT — CONTACT DETAILS
            ========================== */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-1
                xl:grid-cols-2
                gap-6
              "
            >

              {/* PHONE */}
              <div className="flex gap-4 items-start">

                {/* PHONE ICON */}
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


                {/* PHONE DETAILS */}
                <div className="min-w-0">

                  <h3
                    className="
                      text-xs
                      font-bold
                      text-slate-400
                      uppercase
                      tracking-widest
                      mb-1
                    "
                  >
                    Call / Text
                  </h3>
                  <div
                    className="
                      flex
                      flex-col
                      text-sm
                      sm:text-base
                      font-medium
                      text-slate-800
                      space-y-1
                    "
                  >

                    <a
                      href="tel:+639275745809"
                      className="
                        hover:text-indigo-600
                        transition
                        w-fit
                      "
                    >
                      +(63) 927 574-5809
                    </a>

                    <a
                      href="tel:+639214774796"
                      className="
                        hover:text-indigo-600
                        transition
                        w-fit
                      "
                    >
                      +(63) 921 477-4796
                    </a>

                  </div>

                </div>
              </div>


              {/* EMAIL */}
              <div className="flex gap-4 items-start">

                {/* EMAIL ICON */}
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


                {/* EMAIL DETAILS */}
                <div className="min-w-0">

                  <h3
                    className="
                      text-xs
                      font-bold
                      text-slate-400
                      uppercase
                      tracking-widest
                      mb-1
                    "
                  >
                    Email
                  </h3>

<a
  href="mailto:SMRCDORM@gmail.com?subject=Inquiry%20from%20Website"
  className="
    text-sm
    sm:text-base
    font-medium
    text-indigo-600
    hover:text-indigo-800
    underline
    decoration-indigo-200
    hover:decoration-indigo-600
    transition
    whitespace-nowrap
  "
>
  SMRCDORM@gmail.com
</a>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              WEBSITE
          ========================== */}
          <div className="flex justify-center sm:justify-end pt-0">

            <a
              href="https://smrcdormitoryana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[11px]
                sm:text-xs
                font-bold
                text-slate-500
                hover:text-rose-700
                transition
                tracking-wider
                text-center
              "
            >
              SMRCDORMITORYANA.COM
            </a>

          </div>


          {/* =========================
              MAP
          ========================== */}
          <div
            className="
              rounded-xl
              sm:rounded-2xl
              overflow-hidden
              border-4
              sm:border-[6px]
              border-rose-800
              shadow-[0_10px_35px_rgba(136,19,55,0.35)]
              ring-2
              sm:ring-4
              ring-rose-200/70
              bg-rose-800
            "
          >

            <iframe
              title="Dormitory Location"
              src="https://www.google.com/maps?q=Katipunan+Ave+corner+B.+Gonzales+St.,+Loyola+Heights,+Quezon+City,+Philippines&z=17&output=embed"
              width="100%"
              height="100%"
              className="
                block
                w-full
                h-[300px]
                sm:h-[400px]
                md:h-[450px]
                lg:h-[600px]
              "
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
