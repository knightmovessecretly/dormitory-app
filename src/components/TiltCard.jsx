import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function TiltCard({ service, onBook }) {

  const cardRef = useRef(null);

  // motion values (for smooth physics feel)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };

  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  // glow position
  const glowX = useSpring(x, springConfig);
  const glowY = useSpring(y, springConfig);

  const handleMove = (e) => {

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const xVal = clientX - rect.left - rect.width / 2;
    const yVal = clientY - rect.top - rect.height / 2;

    x.set(xVal / 15);
    y.set(-yVal / 15);

  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        rounded-3xl
        overflow-hidden
        shadow-xl
        cursor-pointer
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        p-6
      "
    >

      {/* 🌟 GLOW EFFECT */}
      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `radial-gradient(
            400px circle at ${glowX.get()}px ${glowY.get()}px,
            rgba(255, 0, 0, 0.25),
            transparent 80%
          )`,
        }}
      />

      {/* 🎥 BACKGROUND IMAGE (PARALLAX) */}
      <motion.img
        src={service.image}
        alt={service.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-30
          scale-110
        "
        style={{
          transform: "translateZ(-20px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center">

        {/* ICON */}
        <div
          className="
            w-16
            h-16
            mx-auto
            mb-4
            rounded-2xl
            bg-white/20
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-red-500
          "
        >
          {service.icon}
        </div>


<motion.h3
  initial={{ opacity: 0, y: 10, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.07,
    textShadow: "0px 2px 18px rgba(4, 4, 26, 0.35)",
  }}
  className="
    text-2xl md:text-3xl font-extrabold
    text-center
    text-[#04041a]

    tracking-wide
    leading-tight

    drop-shadow-sm
  "
>
  {service.title}
</motion.h3>


                    <img
            src={service.coverImage}
            alt={service.title}
            className="w-full h-40 object-cover rounded-xl"
            />

        {/* DESCRIPTION */}
        <p className="text-white/80 text-sm mt-2 mb-5">
          {service.description}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => onBook(service)}
          className="
            bg-red-600
            text-white
            px-5
            py-2
            rounded-full
            hover:bg-red-700
            transition
          "
        >
          Explore   
        </button>

      </div>

    </motion.div>
  );
}