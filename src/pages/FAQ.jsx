import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {

  const faqs = [
    {
      question: "What are the room rates?",
      answer:
        "Rates depend on room type and occupancy.",
    },

    {
      question: "Is WiFi included?",
      answer:
        "Yes, high-speed WiFi is included.",
    },

    {
      question: "Are visitors allowed?",
      answer:
        "Visitors are allowed during visiting hours.",
    },

    {
      question: "Is there 24/7 security?",
      answer:
        "Yes, the dormitory is monitored 24/7.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        px-6
        py-20
      "
    >

      <div className="max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-5xl
            font-bold
            text-center
            mb-16
          "
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
                className="
                  w-full
                  text-left
                  p-6
                  flex
                  justify-between
                  items-center
                "
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <span>
                  {active === index ? "−" : "+"}
                </span>

              </button>

              {active === index && (

                <div className="px-6 pb-6 text-gray-300">

                  {faq.answer}

                </div>
              )}

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}