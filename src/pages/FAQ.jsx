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
} from "lucide-react";
import "./Themes.css";

const faqs = [
  {
    icon: <BedDouble size={22} />,
    question: "What types of rooms do you offer?",
    answer: [
      "Single-occupancy units – with or without Patio and Kitchen.",
      "Double-occupancy units – with or without Patio and Kitchen.",
      "Triple-occupancy units – with or without Patio and Kitchen.",
      "Quad-occupancy units – with or without Patio and Kitchen.",
      "All rooms have En Suite Bathrooms.",
    ],
  },
  {
    icon: <Building2 size={22} />,
    question: "What rooms are still available?",
    answer: [
      "We have over 90 rooms of various occupancy.",
      "Message us and make an appointment to tour our buildings.",
      "The early bird gets the worm!",
    ],
  },
  {
    icon: <BadgeDollarSign size={22} />,
    question: "What are your rates?",
    answer: [
      "Tell us your budget and we will find you a bed.",
    ],
  },
  {
    icon: <CalendarCheck size={22} />,
    question: "Do you accept reservations?",
    answer: [
      "Booking is on a first come, first served basis.",
      "A Contract of Lease together with Advance and Security Deposits is required to secure a room or bed.",
    ],
  },
  {
    icon: <Wifi size={22} />,
    question: "Do you have WiFi?",
    answer: [
      "Free WiFi is available in the Reception Area, Common Kitchen/Dining, Study Halls, Study Balconies, Library and Gym.",
      "Personal internet connection is at your own expense.",
    ],
  },
  {
    icon: <BadgeDollarSign size={22} />,
    question: "Are your Basic Rates all-inclusive of Utilities?",
    answer: [
      "Utilities are sub-metered.",
      "Basic Rates exclude CUSA (Common Usage Service Area).",
    ],
  },
  {
    icon: <BedDouble size={22} />,
    question: "How much is your Solo Room?",
    answer: [
      "Single-occupancy rooms range from ₱9,000 to ₱14,000 per month depending on the size and location of the room.",
      "All rooms have En Suite Bathrooms.",
    ],
  },
  {
    icon: <MapPinned size={22} />,
    question: "How do I commute to the University of the Philippines Diliman?",
    answer: [
      "Jeepneys queue along our Katipunan frontage.",
      "Tricycles queue just a few paces down B. Gonzales Street.",
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="pinkfloral min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="dormtitle text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

        </motion.div>

        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/50 p-6 md:p-10"
        >
          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                whileHover={{ scale: 1.01 }}
                className="rounded-2xl border border-rose-100 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-md">
                      {faq.icon}
                    </div>

                    <h2 className="font-semibold text-lg text-slate-800">
                      {faq.question}
                    </h2>
                  </div>

                  <motion.div
                    animate={{
                      rotate: open === index ? 180 : 0,
                    }}
                  >
                    <ChevronDown size={26} />
                  </motion.div>
                </button>

                <AnimatePresence>
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
                        duration: .35,
                      }}
                    >
                      <div className="px-8 pb-7">
                        <ul className="space-y-3 list-disc pl-6 text-slate-600 leading-7">
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
                                delay: i * .08,
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
