import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
const { API_URL, BASE_URL } = config;

export default function Rooms() {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomType: "Solo Room",
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
      capacity: "Good for 1 person",
      amenities: ["WiFi", "Aircon", "Study Table", "Cabinet"],
      availableBeds: 0,
    },
    {
      id: 2,
      roomType: "Double/Twin Sharing",
      name: "Double/Twin Sharing",
      description:
        "Comfortable shared room with spacious beds and storage.",
      images: [
        "/images/bedroomDouble.png",
        "/images/bedroomDouble2.png",
        "/images/bedroomDouble3.png",
        "/images/bedroomDoubleBed.png",
      ],
      capacity: "Good for 2 persons",
      amenities: ["WiFi", "Aircon", "Shared Cabinet", "Study Area"],
      availableBeds: 0,
    },
    {
      id: 3,
      roomType: "Triple Sharing",
      name: "Triple Sharing",
      description:
        "Affordable shared living space ideal for groups or barkadas.",
      images: [
        "/images/bedroomTriple.png",
        "/images/bedroom3Beds.png",
      ],
      capacity: "Good for 3 persons",
      amenities: [
        "WiFi",
        "Electric Fan",
        "Storage",
        "Common Study Area",
      ],
      availableBeds: 0,
    },
    {
      id: 4,
      roomType: "Quad Room",
      name: "Quadruple Occupancy Room",
      description:
        "Affordable shared living space ideal for groups or barkadas.",
      images: [
        "/quadbedroom3.jpg",
        "/quadbed2.jpg",
        "/quadroom4.jpg",
      ],
      capacity: "Good for 4 persons",
      amenities: [
        "WiFi",
        "Electric Fan",
        "Storage",
        "Common Study Area",
      ],
      availableBeds: 0,
    },
  ]);  
  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        console.log("------------------");
        console.log(API_URL);
        const res = await axios.get(
          `${API_URL}rooms/availability/type`
        );
        console.log("LLLLLLLLLLLLLLLL");
        console.log(`${API_URL}rooms/availability/type`);
        setRooms((prevRooms) =>
          prevRooms.map((room) => {
            const match = res.data.find(
              (item) => item.room_type === room.roomType
            );
            return {
              ...room,
              availableBeds: match
                ? match.available_beds
                : 0,
            };
          })
        );
      } catch (error) {
        console.error(
          "Error fetching room availability:",
          error
        );
      }
    };

    fetchAvailability();
  }, []);

  return (
    <div
      className="min-h-screen text-slate-800"
      style={{
        background:
          "linear-gradient(to right, #f9c2c2 0%, #ffe3e3 40%, #ffffff 100%)",
      }}
    >
      {/* HERO */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl bottom-0 right-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl font-bold text-pink-500 mb-4">
            Our Rooms
          </h1>

          <div className="space-y-3 text-slate-700">
            {[
              "Solo Room – with private toilet, bath, & kitchen space",
              "Double/Twin Sharing",
              "Triple Sharing",
              "Quadruple Occupancy Room",
            ].map((room, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3"
              >
                <span className="text-pink-500 text-lg font-bold">
                  ✔
                </span>
                <span className="font-medium">{room}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ROOMS SECTION */}
      <section className="pt-2 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-pink-500 text-4xl font-bold mt-3">
              AVAILABLE ROOMS
            </h2>

            <p className="text-slate-600 mt-3">
              Comfortable, affordable, and designed for
              students and professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
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