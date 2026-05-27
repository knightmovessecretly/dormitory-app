import RoomCard from "../components/RoomCard";
import { motion } from "framer-motion";

export default function Rooms() {

  const rooms = [
    {
      id: 1,
      name: "Solo Bedroom",
      description:
        "Perfect for students or professionals who value privacy and comfort.",

      images: [
        "/images/bedroomSolo.png",
        "/images/bedroomSolo2.png",
        "/images/bedroomSolo4.png",
        "/images/bedroomSolo5.png",
        "/images/bedroomSoloroom.png",
        "/images/bedroomSoloRoom3.png",
        "/images/bedroomSoloRoomStudyArea.png",
        "/images/bedroomSolowithAircon.png",
      ],

      price: "₱4,500 / month",

      capacity: "Good for 1 person",

      amenities: [
        "WiFi",
        "Aircon",
        "Study Table",
        "Cabinet",
      ],
    },

    {
      id: 2,
      name: "Double Bedroom",
      description:
        "Comfortable shared room with spacious beds and storage.",

      images: [
        "/images/bedroomDouble.png",
        "/images/bedroomDouble2.png",
        "/images/bedroomDouble3.png",
        "/images/bedroomDoubleBed.png",
      ],

      price: "₱3,500 / person",

      capacity: "Good for 2 persons",

      amenities: [
        "WiFi",
        "Aircon",
        "Shared Cabinet",
        "Study Area",
      ],
    },

    {
      id: 3,
      name: "Triple Bedroom",
      description:
        "Affordable shared living space ideal for groups or barkadas.",

      images: [
        "/images/bedroomTriple.png",
        "/images/bedroom3Beds.png",
      ],

      price: "₱2,800 / person",

      capacity: "Good for 3 persons",

      amenities: [
        "WiFi",
        "Electric Fan",
        "Storage",
        "Common Study Area",
      ],
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* HERO */}
      <section
        className="
          relative
          h-[50vh]
          flex
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/images2/corridor.jpg')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            z-10
            text-center
            text-white
            px-4
          "
        >

          <h1 className="text-5xl font-bold mb-4">
            Our Rooms
          </h1>
<div className="space-y-2 text-gray-100">
  {[
    "Solo Room – with private toilet, bath, & kitchen space",
    "Double Occupancy Room",
    "Triple Occupancy Room",
    "Quadruple Occupancy Room",
  ].map((room, i) => (
    <div
      key={i}
      className="flex items-center gap-3 hover:text-[#bb0303] transition-colors duration-300"
    >
      <span className="text-[#bb0303] text-xl font-bold">✔</span>
      <span className="font-medium">{room}</span>
    </div>
  ))}
</div>
        </motion.div>

      </section>

      {/* ROOMS */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <span
              className="
                text-red-600
                font-semibold
                tracking-widest
              "
            >
              AVAILABLE ROOMS
            </span>

            <h2
              className="
                text-4xl
                font-bold
                mt-3
                text-slate-800
              "
            >
              Find Your Perfect Space
            </h2>

          </motion.div>

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-10
            "
          >

            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >

                <RoomCard room={room} />

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}