import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import "./Themes.css";
const { API_URL, BASE_URL } = config;
export default function Rooms() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([
   {    id: 1,  roomType: "Solo",  name: "Solo",
      description:  "Perfect for students or professionals who value privacy and comfort.",
      images: [  "/images/bedroomSolo2.jpg",   "/images/bedroomSolo4.png",  "/images/bedroomSolo5.png",   
        "/images/bedroomDoubleBed.png",
      ],
      capacity: "Good for 1 person",
      amenities: ["En Suite Bathrooms"],
      availableBeds: 0,  },
    {
      id: 2, roomType: "Double", name: "Double",  description:
        "Comfortable shared room with spacious beds and storage.",
      images: [
        "/images/bedroomDouble.png",
        "/images/bedroomDouble2.png",
        "/images/bedroomDouble3.png",
      ],
      capacity: "Good for 2 persons",
      amenities: ["En Suite Bathrooms"],
    availableBeds: 0,
    },
    {  id: 3,  roomType: "Triple",  name: "Triple",
      description: "Affordable shared living space ideal for groups or barkadas.",
      images: [
        "/images/triple2.jpg",
        "/images/triple3.jpg",
        "/images/triple4.jpg",
      ],
      capacity: "",
      amenities: ["En Suite Bathrooms"],
       availableBeds: 0,  },
    {  id: 4,  roomType: "Quad",
      name: "Quad",
      description:   "Affordable shared living space ideal for groups or barkadas.",
      images: [ "/images/quad3.png",
        "/images/quad1.png",
        "/images/quad2.png",
      ],
      capacity: "Good for 4 persons",
      amenities: ["En Suite Bathrooms"],
      availableBeds: 0,
    },
    {  id: 5,  roomType: "Short Stay",
      name: "Short Stay",
      description: "",
      images: [   "/images/airbnb1.jpeg",  "/images/airbnb2.jpeg",  "/images/airbnb3.jpeg",
        "/images/airbnb4.jpeg",   "/images/airbnb5.jpeg",
        "/images/airbnb6.jpeg",
        "/images/airbnb7.jpeg",
        "/images/transient1.jpeg", 
        "/images/transient2.jpeg", 
        "/images/trainsient3.jpeg", 
        "/images/transient4.jpeg", 
      ],
      amenities: ["En Suite Bathrooms"],
      capacity: "",
    },    

    {  id: 6,  roomType: "Co-Share",
      name: "Co-Share",
      description: "",
      images: [   
        "/images/share1.jpg",
        "/images/share2.jpg",
        "/images/share3.jpg",
      ],
      amenities: ["En Suite Bathrooms"],
      capacity: "",
    },    
  ]);  
  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        console.log(API_URL);
        const res = await axios.get(
          `${API_URL}rooms/availability/type`
        );
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
        console.error( "Error fetching room availability:",  error );
      }
    };
    fetchAvailability();
  }, []);
  return (
    <div className="pinkfloral min-h-screen text-slate-800"   >
<section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl bottom-0 right-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4" >
<h1 className="dormtitle">
  ROOMS
</h1>
        </motion.div>
      </section>

      <section className="pt-2 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
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