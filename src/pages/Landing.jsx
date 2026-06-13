import { Link,useNavigate } from "react-router-dom";
//import {Navbar } from "../components/Navbar";
import "./Landing.css";
import Navbar from "../components/Navbar";
//import image1 from "../pages/public/images/";
//import soloBedroom from './assets/images/bedroomSolo.png';
import AboutUsPreview from "./AboutUsPreview";
export default function Landing() {
 const navigate = useNavigate();
  const rooms = [
  {
    id: 1,
    name: "Solo Bedroom",
    description:
      "Spacious room with modern furniture, air conditioning and study area.",
    image:  "/images/bedroomSolo.png",
      
    available: 3,
    capacity: "Good for 1 person",
  },
  {
    id: 2,
    name: "Double Bedroom",
    description:
      "Perfect shared room setup with comfortable beds and storage space.",
    image:  "/images/bedroomDouble.png",
     
    available: 5,
    capacity: "Good for 2 persons",
  },
  {
    id: 3,
    name: "Triple",
    description:
      "Private studio room with kitchen area and modern interior design.",
    image:
      "/images/bedroomTriple.png",
    available: 2,
    capacity: "Good for 2-3 persons",
  },
];

  const handleExplore = () => {
    navigate("/explore");
  };

  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <header className="navbar">

      </header>
      {/* HERO */}

<section
  id="home"
  className="hero-section relative min-h-screen  bg-[#1a0000] text-[#ffecec]"
>
  {/* Optional dark overlay if your background image is bright */}

  <div className="absolute inset-0 bg-black/20 z-0" />

  <div className="container relative z-20 mx-auto px-4 py-16 lg:py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="relative text-center lg:text-left">

        {/* Decorative SVG Logo */}
        {/* Actual Content */}
        <div className="relative z-10">
          {/* Decorative SVG Logo */}
<div
  className="
    absolute
    top-0          {/* Changed from -top-20 */}
    left-0         {/* Changed from -left-20 */}
    lg:top-0       {/* Changed from lg:-top-28 */}
    lg:left-0      {/* Changed from lg:-left-32 */}
    z-0
    pointer-events-none
    opacity-15
    select-none
  "
>
  <img
    src="/dormitoryana-logo.svg"
    alt=""
    className="
      w-[320px]
      md:w-[500px]
      lg:w-[750px]
      max-w-none
      drop-shadow-[0_0_40px_rgba(255,77,77,0.25)]
    "
  />
</div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pink-500">
            Exclusive Female Dorm
          </h1>

          <p className="mt-6 text-sm md:text-base lg:text-lg text-[#ffecec]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Dormitoryana has over 90 rooms with different pricing and room
            configurations. Each room is unique with en-suite bathrooms.
            Ocular visits are by appointment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/rooms"
              className="
                px-6 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-[#ff0000] to-[#b30000]
                hover:from-[#ff4d4d] hover:to-[#ff0000]
                shadow-lg shadow-red-900/40
                transition
              "
            >
              Explore Rooms
            </Link>

            <Link
              to="/about"
              className="
                px-6 py-3 rounded-xl font-semibold
                border border-[#ff4d4d]/40
                bg-[#320000]/40
                hover:bg-[#500000]/60
                transition
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT FEATURE CARDS */}
      <div className="grid grid-cols-2 gap-4">
        {["Safe", "Cozy", "Affordable", "Exclusive"].map((item, index) => (
          <button
            key={item}
            className="
              group relative overflow-hidden
              w-full px-5 py-5 rounded-2xl

              border border-[#ff4d4d]/30
              bg-gradient-to-br
              from-[#320000]/90
              via-[#500000]/70
              to-[#1a0000]/90

              backdrop-blur-xl
              text-left text-[#ffecec]
              font-semibold

              shadow-xl shadow-red-900/30

              transition-all duration-500
              hover:scale-105 hover:-translate-y-1
              active:scale-95
            "
            style={{
              animation: `float 3s ease-in-out infinite`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <span
              className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                bg-gradient-to-r
                from-[#ff0000]/10
                via-[#ff4d4d]/25
                to-[#ff0000]/10
                transition
              "
            />

            <span className="relative z-10 flex items-center gap-3">
              <span className="text-xl">✦</span>
              <span className="group-hover:tracking-widest transition">
                {item}
              </span>
            </span>
          </button>
        ))}
      </div>

    </div>
  </div>

  <style>
    {`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0px); }
      }
    `}
  </style>
</section>      


      {/* FEATURES  #ff6060 */}
<section className="features-section py-20 bg-slate-50"
      style={{
        background:
          "linear-gradient(to right, #f9c2c2 0%, #ffe3e3 40%, #ffffff 100%)",
      }}

>
  <div className="container max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <div className="section-title text-center mb-12">

      <h3 className="text-3xl md:text-4xl font-bold mt-3 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
         Modern Dormitory Living
      </h3>
    </div>

    {/* FEATURES GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon: "🔐",
          title: "24/7 Security",
          desc: "Round-the-clock guard service & CCTV monitoring for your safety",
        },
        {
          icon: "📶",
          title: "High-Speed WiFi",
          desc: "Stay connected anytime",
        },
        {
          icon: "🏋️",
          title: "Free Gym Access",
          desc: "Free use of fully equipped gym for residents",
        },
        {
          icon: "📚",
          title: "Study Library",
          desc: "Quiet study areas for focused learning",
        },
        {
          icon: "🕌",
          title: "Prayer Room",
          desc: "Dedicated peaceful space for prayer and reflection",
        },
        {
          icon: "🌿",
          title: "Peaceful Environment",
          desc: "Quiet atmosphere with relaxing garden ambiance",
        },
        {
          icon: "🤝",
          title: "Friendly Community",
          desc: "Vibrant and welcoming community lifestyle",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            group
            relative
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-xl
            hover:border-[#bb0303]/30
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >

          {/* ICON */}
          <div
            className="
              text-3xl
              mb-4
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-xl
              bg-[#bb0303]/10
              group-hover:bg-[#bb0303]
              transition-all
              duration-300
            "
          >
            <span className="group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* ROOMS */}
<section className="rooms-section" id="rooms bg-gradient-to-r from-pink-600 to-rose-800 " 
>

  <div className="container">

    <div className="section-title">
      <span>OUR ROOMS</span>
      <h2>Featured Accommodations</h2>
    </div>

    <div className="rooms-grid">

      {rooms.map((room) => (
        <div className="room-card" key={room.id}>

          <img
            src={room.image}
            alt={room.name}
          />

          <div className="room-content">

            <div className="room-top">
              <h3>{room.name}</h3>
            </div>

            <p>{room.description}</p>

            <small>{room.capacity}</small>

            <div className="room-status">
 
              <span className="red-accent">
                Only {room.available} Rooms Left
              </span>

            </div>


          </div>

        </div>
      ))}

    </div>

  </div>

</section>

      {/* ABOUT */}
      <AboutUsPreview/>

      {/* CTA */}
      <section className="cta-section">

        <div className="container cta-content">

          <h2>
            Ready To Reserve Your Room?
          </h2>

          <p>
           Get your room today and experience comfortable dormitory living.
          </p>

        </div>
      </section>
    </div>
  );
}