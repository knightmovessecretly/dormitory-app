import { useState } from "react";
import { motion } from "framer-motion";
import ServiceGalleryModal from "../components/ServiceGalleryModal";
import {
  Dumbbell,
  BookOpen,
  Sofa,
  Church,
  Toilet,
  Building2,
  X,
} from "lucide-react";
import TiltCard from "../components/TiltCard";

export default function Services() {

  const [selectedService, setSelectedService] = useState(null);


const services = [
  {
    id: 1,
    title: "Gym Access",
    description: "Fully equipped gym for residents.",
    icon: <Dumbbell size={32} />,
    coverImage: "/images/gym.png",
   images: [
      "/images/gym.png",
      "/images/gym2.png",
      "/images/gym3.png",
    ],
  },
  {
    id: 2,
    title: "Study Room",
    description: "Quiet study area for focus.",
    icon: <BookOpen size={32} />,
    coverImage: "/images/studyareaLounge.png", 
    images: [
      "/images/studyareaLounge.png",
    ],
  },
  {
    id: 3,
    title: "Lobby Lounge",
    description: "Relax and socialize comfortably.",
    icon: <Sofa size={32} />,
    coverImage: "/images2/community2.jpg",
    images: [
      "/images2/community2.jpg",
      "/images2/community3.jpg",
      "/images2/community4.jpg",
    ],
  },
  {
    id: 4,
    title: "Prayer Room",
    description: "Peaceful space for prayer.",
    icon: <Church size={32} />,
    coverImage: "/images/prayerRoom.png",
    images: [
      "/images/prayerRoom.jpg",
    ],
  },
  {
    id: 5,
    title: "Comfort Room",
    description: "Clean comfort rooms.",
    icon: <Toilet size={32} />,
    coverImage: "/images/cleanComfortroom.png",
    images: [
      "/images/cleanComfortroom.png",
    ],
  },
  {
    id: 6,
    title: "Rooftop Lounge",
    description: "City view relaxation area.",
    icon: <Building2 size={32} />,
    coverImage: "/images/roofdeck.png",
    images: [
      "/images/roofdeck.png",
      "/images/roofDeckrestAndRecreation.png",
    ],
  },
    {
    id: 7,
    title: "Library",
    description: "The land of the smart students",
    icon: <Building2 size={32} />,
    coverImage: "/images/library.png",
    images: [
      "/images/library2.png",
      "/images/library3.png",
      "/images/library4.png",
    ],
  },
 
];

  
  return (
<div className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-rose-50 to-slate-100">

  {/* ================= HERO ================= */}
  <section
    className="
      relative
      min-h-[75vh]
      flex
      items-center
      justify-center
      px-6
      bg-cover
      bg-center
    "
    style={{ backgroundImage: "url('/background.jpg')" }}
  >

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/70" />

    {/* GLOW EFFECTS */}
    <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#bb0303]/40 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-red-500/20 blur-[120px] rounded-full" />

    {/* HERO CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        z-10
        max-w-6xl
        mx-auto
        text-center
        text-white
      "
    >

      {/* BADGE */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          border
          border-white/20
          bg-white/10
          backdrop-blur-xl
          shadow-lg
          mb-6
        "
      >
        <div className="w-2 h-2 rounded-full bg-[#bb0303] animate-pulse" />
        <span className="uppercase tracking-[0.25em] text-sm text-gray-200">
          Premium Living Experience
        </span>
      </div>

      {/* TITLE */}
      <h1
        className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          tracking-tight
          drop-shadow-2xl
        "
      >
        Services & Amenities
      </h1>

      {/* SUBTEXT */}
      <p
        className="
          mt-6
          max-w-3xl
          mx-auto
          text-lg
          md:text-xl
          leading-relaxed
          text-gray-200
        "
      >
        Designed for comfort, security, productivity, and peace —
        experience a modern and welcoming environment built around your lifestyle.
      </p>

      {/* AMENITIES GRID */}
      <div className="mt-14 grid sm:grid-cols-2 gap-6">

        {[
          "24/7 Security – Round-the-clock guard service & CCTV monitoring",
          "High-Speed WiFi – Stay connected anytime",
          "Free Use of Fully Equipped Gym",
          "Library Quiet Study Areas for focused learning",
          "Prayer Room",
          "Peaceful & Quiet Garden Ambiance",
          "Vibrant & Friendly Community",
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.03,
              y: -4,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              p-5
              shadow-2xl
              transition-all
              duration-500
              hover:border-red-300/40
            "
          >

            {/* HOVER GLOW */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-r
                from-[#bb0303]/20
                to-red-500/10
              "
            />

            <div className="relative flex items-start gap-4">

              {/* ICON */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  min-w-[48px]
                  h-12
                  rounded-2xl
                  bg-[#bb0303]
                  shadow-lg
                  shadow-red-900/40
                  text-white
                  text-lg
                  font-bold
                "
              >
                ✓
              </div>

              {/* TEXT */}
              <span className="text-gray-100 leading-relaxed text-left">
                {feature}
              </span>

            </div>

          </motion.div>
        ))}

      </div>

    </motion.div>
  </section>

  {/* ================= SERVICES SECTION ================= */}
  <section className="relative py-24 px-6">

    {/* BACKGROUND GLOW */}
    <div className="absolute top-20 left-0 w-72 h-72 bg-[#bb0303]/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/10 blur-[140px] rounded-full" />

    <div className="relative max-w-7xl mx-auto">

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <span
          className="
            uppercase
            tracking-[0.3em]
            text-[#bb0303]
            font-semibold
            text-sm
          "
        >
          Explore More
        </span>

        <h2
          className="
            mt-4
            text-4xl
            md:text-5xl
            font-black
            text-gray-900
          "
        >
          Our Available Services
        </h2>

        <div className="w-28 h-1.5 bg-[#bb0303] mx-auto mt-5 rounded-full" />

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Carefully curated spaces and facilities designed to elevate your
          everyday living experience.
        </p>

      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="
              group
              relative
            "
          >

            {/* OUTER GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-3xl
                bg-[#bb0303]/0
                group-hover:bg-[#bb0303]/10
                blur-2xl
                transition-all
                duration-500
              "
            />

            {/* GLASS CARD */}
            <div
              className="
                relative
                rounded-3xl
                border
                border-white/40
                bg-white/60
                backdrop-blur-2xl
                shadow-xl
                overflow-hidden
                transition-all
                duration-500
                group-hover:shadow-red-900/20
              "
            >

              <TiltCard
                service={service}
                onBook={() => setSelectedService(service)}
                onClick={() => setSelectedService(service)}
              />

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  </section>

  {/* ================= MODAL ================= */}
  {selectedService && (
    <ServiceGalleryModal
      service={selectedService}
      onClose={() => setSelectedService(null)}
    />
  )}

</div>
  );
}