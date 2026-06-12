import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What are the room rates?",
      answer: "Rates depend on room type and occupancy.",
    },
    {
      question: "Is WiFi included?",
      answer: "Yes, high-speed WiFi is included.",
    },
    {
      question: "Are visitors allowed?",
      answer: "Visitors are allowed during visiting hours.",
    },
    {
      question: "Is there 24/7 security?",
      answer: "Yes, the dormitory is monitored 24/7.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div
      className="min-h-screen px-6 py-20 text-slate-800"
      style={{
        background: "linear-gradient(to right, #f9c2c2, #ffffff)",
      }}
    >
      <div className="max-w-4xl mx-auto">
               <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 text-pink-500"
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
                bg-white/70
                backdrop-blur-md
                border border-pink-100
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-lg
                transition
              "
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
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
                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>

                <span className="text-slate-600 text-xl">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-slate-600">
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