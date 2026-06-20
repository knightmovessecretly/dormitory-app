import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What are the room rates?",
      answer: "Rates depend on room type and occupancy.",
    },
    {
      question: "What room types are available?",
      answer: "Solo, Double, Triple, Quadroom",
    },
    {
      question: "What are your amenities and services inside the dormitory",
      answer: "We have our air-conditioned libray, fitness gym and prayer room.  Likewise we have our student lounge area ,  study areas, spacious courtyard and garden area, common kitchen area for cooking and students common dining areas. ",
    },
    {
      question: "How do i schedule actual viewing and occular inspection of rooms?",
      answer: "Just get in touch with us and we will schedule you for a tour of our facilities anytime from Monday to Friday only.",
    },
    {
      question: "Whats the curfew? Are visitors allowed?",
      answer: 'Curfew for dormers is at 10pm unless there is an advanced notrice or request. Visitors are allowed in the lounge area only.  Bo overnight guest. "Ladies only is strictly enforced at all times"',
    },
  {
      question: "Whats are your safely and security measures?",
      answer: '24/7 guard on duty. CCTV in hallways and major areas. Gated entry and exit points "',
    },
  {
      question: "Is there a security deposit? Is it refundable?",
      answer: 'Yes, usually 1 month deposit.  Refundable if no damages + 30 day notice given."',
    },
      {
      question: "Can I cook inside the room?  ",
      answer: 'No. Only in common kitchen .  Induction/rice cooker only.  No gas stoves allowed for fire safety."',
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