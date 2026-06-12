import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceGalleryModal({ service, onClose }) {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="
          bg-white
          rounded-2xl
          w-full
          max-w-3xl
          overflow-hidden
          relative
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full"
        >
          <X />
        </button>

        {/* TITLE */}
      <div className="p-4 font-bold text-lg border-b text-rose-600">
        {service.title}
      </div>
        {/* IMAGE */}
        <div className="relative">

          <img
            src={service.images[index]}
            className="w-full h-[400px] object-cover"
          />

          {/* LEFT */}
          <button
            onClick={prev}
            className="
              absolute left-3 top-1/2 -translate-y-1/2
              bg-black/50 text-white p-2 rounded-full
            "
          >
            <ChevronLeft />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              bg-black/50 text-white p-2 rounded-full
            "
          >
            <ChevronRight />
          </button>

        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-2 p-3 overflow-x-auto">

          {service.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setIndex(i)}
              className={`
                w-20 h-16 object-cover rounded-md cursor-pointer
                ${i === index ? "ring-2 ring-red-500" : ""}
              `}
            />
          ))}

        </div>

      </motion.div>

    </div>
  );
}