import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BedDouble,
  BadgeDollarSign,
  Wifi,
  Building2,
  MapPinned,
  CalendarCheck,
  Shirt,
  CookingPot,
} from "lucide-react";
import "./Themes.css";

const faqs = [
  {
    icon: <BedDouble size={22} />,
    question: "ROOMS TYPES?",
    answer: [
      "Single-occupancy units – with or without Patio and/or Kitchen.",
      "Double-occupancy units – with or without Patio and/or Kitchen.",
      "Triple-occupancy units – with or without Patio and/or Kitchen.",
      "Quad-occupancy units – with or without Patio and/or Kitchen.",
      "Short-Stay / AirBnB.",
      "Co-Share Work Space.",
      "All rooms have En Suite Bathrooms.",
    ],
  },
  {
    icon: <Building2 size={22} />,
    question: "ROOM AVAILABILITY?",
    answer: [
      "We have over 90 rooms of various Occupancy.",
      "Message us and make an appointment to tour our four buildings.",
      "The early bird gets the worm!",
    ],
  },
  {
    icon: <BadgeDollarSign size={22} />,
    question: "ROOM RATES?",
    answer: [
      "Tell us your Budget and we will find you a Bed or Room.",
    ],
  },
  {
    icon: <CalendarCheck size={22} />,
    question: "ROOM RESERVATION?",
    answer: [
      "Booking is on a first come-first serve basis.",
      "Contract of Lease with Advance and Security Deposits are required in order to secure a Room or Bed.",
    ],
  },
  {
    icon: <Wifi size={22} />,
    question: "INTERNET AVAILABLE?",
    answer: [
      "Free WIFI is available in the Reception Area, Common Kitchen/Dining, Guard’s, Study Halls, Study Balconies, Library and Gym.",
      "Personal internet connection is at your own expense.",
    ],
  },
  {
    icon: <BadgeDollarSign size={22} />,
    question: "BASIC RATE EXCLUSIONS?",
    answer: [
      "Utilities are sub-metered and billed monthly.",
      "Basic Rates exclude CUSA (Common Usage Service Area) fee.",
    ],
  },
  {
    icon: <BedDouble size={22} />,
    question: "ROOM INCLUSIONS?",
    answer: [
      "Wardrobe/Closet, Desk and Chair, Twin-size Bed Frames. (Bring your own Mattress and Beddings.)",
      "Short-Stay Rooms are mattress-ready.",
      "Electric Fan or ACU and Water Heaters, depending on room.",
    ],
  },
  {
    icon: <BadgeDollarSign size={22} />,
    question: "SOLO ROOM PRICING?",
    answer: [
      "Single-occupancy Basic Rates range from php9k to php14k monthly, depending on the size and location of the room.",
      "All Solos have En Suite Bathrooms.",
    ],
  },
  {
    icon: <Shirt size={22} />,
    question: "LAUNDRY SERVICE?",
    answer: [
      "Commercial Laundry Service in the building.",
      "Private Laundry pick up and delivery. Make your own arrangements at Guard’s.",
    ],
  },
  {
    icon: <CookingPot size={22} />,
    question: "COOKING ALLOWED?",
    answer: [
      "No cooking inside rooms.",
      "There are three (3) Common Kitchens spread out.",
      "House Rules state restrictions on appliances that are allowed inside rooms.",
    ],
  },
  {
    icon: <Shirt size={22} />,
    question: "IRONING ALLOWED?",
    answer: [
      "No ironing allowed inside rooms.",
      "There is an ironing/steamer area at Guard’s.",
    ],
  },
  {
    icon: <MapPinned size={22} />,
    question: "COMMUTING TO UNIVERSITY OF THE PHILIPPINES?",
    answer: [
      "Jeepney queueing is along SMRC’s Katipunan frontage.",
      "Tricycle queueing is just a few paces down B. Gonzales Rd.",
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="pinkfloral min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">




        {/* Header */}

{/* Header */}
<motion.div
  initial={{ opacity: 0, y: -25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-10 md:mb-14 px-4"
>
  <h1
    className="
      dormtitle
      mx-auto
      max-w-full
      font-bold
      leading-tight
      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      text-slate-800
      break-words
    "
  >
    FREQUENTLY ASKED QUESTIONS
  </h1>
</motion.div>


        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            backdrop-blur-xl
            bg-white/80
            rounded-3xl
            shadow-2xl
            border
            border-white/50
            p-4
            sm:p-6
            md:p-10
          "
        >
          <div className="space-y-4 sm:space-y-5">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                whileHover={{ scale: 1.01 }}
                className="
                  rounded-2xl
                  border
                  border-rose-100
                  bg-white
                  shadow-sm
                  overflow-hidden
                "
              >
                {/* Question Button */}
                <button
                  onClick={() =>
                    setOpen(open === index ? -1 : index)
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    gap-3
                    p-4
                    sm:p-5
                    md:p-6
                    text-left
                  "
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                    {/* Icon */}
                    <div
                      className="
                        w-10
                        h-10
                        sm:w-12
                        sm:h-12
                        rounded-xl
                        bg-gradient-to-br
                        from-rose-500
                        to-pink-600
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-md
                        shrink-0
                      "
                    >
                      {faq.icon}
                    </div>

                    {/* Question */}
                    <h2
                      className="
                        font-semibold
                        text-base
                        sm:text-lg
                        text-slate-800
                        leading-snug
                      "
                    >
                      {faq.question}
                    </h2>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      rotate: open === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={24}
                      className="sm:w-[26px] sm:h-[26px]"
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-7">
                        <ul
                          className="
                            space-y-3
                            list-disc
                            pl-5
                            sm:pl-6
                            text-slate-600
                            leading-7
                            text-sm
                            sm:text-base
                          "
                        >
                          {faq.answer.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: i * 0.08,
                              }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </div>
  );
}
