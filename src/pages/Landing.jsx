import { Link,useNavigate } from "react-router-dom";
import "./Landing.css";
import Navbar from "../components/Navbar";
import AboutUsPreview from "./AboutUsPreview";
export default function Landing() {
const navigate = useNavigate();
  const rooms = [
  {  id: 1,  name: "Solo Bedroom",
    description:
      "Spacious room with modern furniture, air conditioning and study area.",
    image:  "/images/bedroomSolo.png",  available: 3,  capacity: "Good for 1 person",  },
  {  id: 2,  name: "Double Bedroom",  description:
      "Perfect shared room setup with comfortable beds and storage space.",
    image:  "/images/bedroomDouble.png",
    available: 5,   capacity: "Good for 2 persons",
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
    {
      id: 4,
      roomType: "Quad Room",
      name: "Quadruple Occupancy Room",
      description:
        "Affordable shared living space ideal for groups or barkadas.",
      image:  "/images/quad3.png",
      available:2,      
      capacity: "Good for 4 persons",
    },
];
  return (
    <div className="landing-page">
      {/* NAVBAR */}
      <header className="navbar">
      </header>
      {/* HERO */}
<section  id="home" className="hero-section relative min-h-screen  bg-[#1a0000] text-[#ffecec]"
>
  <div className="absolute inset-0 bg-black/20 z-0" />
  <div className="container relative z-20 mx-auto px-4 py-16 lg:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* LEFT CONTENT */}
      <div className="relative text-center lg:text-left">
        <div className="relative z-10">
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
  " >
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
<div className="grid grid-cols-2 gap-3">
  {[
    {
      title: "Safe",
      icon: "🛡️",
      desc: "24/7 Security",
    },
    {
      title: "Cozy",
      icon: "🛏️",
      desc: "Feels like home",
    },
    {
      title: "Affordable",
      icon: "💗",
      desc: "Budget-friendly",
    },
    {
      title: "Exclusive",
      icon: "✨",
      desc: "Female-only dorm",
    },
  ].map((item, index) => (
    <div
      key={item.title}
      className="
        relative overflow-hidden
        rounded-2xl
        p-4

        bg-gradient-to-br
        from-pink-200/15
        via-rose-200/10
        to-pink-300/15

        backdrop-blur-xl
        border border-pink-300/20

        shadow-[0_4px_20px_rgba(255,105,180,0.15)]

        hover:-translate-y-1
        hover:shadow-[0_8px_25px_rgba(255,105,180,0.25)]

        transition-all duration-300
        group
      "
      style={{
        animation: `float 4s ease-in-out infinite`,
        animationDelay: `${index * 0.4}s`,
      }}
    >
      {/* Glow */}
      <div
        className="
          absolute
          -top-8
          -right-8
          w-20 h-20
          rounded-full
          bg-pink-400/15
          blur-2xl
        "
      />

      <div className="relative z-10">
        <div
          className="
            w-10 h-10
            rounded-xl
            bg-gradient-to-br
            from-pink-400
            to-rose-500

            flex items-center justify-center
            text-lg

            shadow-md
            shadow-pink-400/30

            mb-3
          "
        >
          {item.icon}
        </div>

        <h3 className="text-sm md:text-base font-semibold text-pink-100">
          {item.title}
        </h3>

        <p className="text-xs text-pink-100/70 mt-1">
          {item.desc}
        </p>
      </div>
    </div>
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
            Ready for your Second Home..
          </h2>

          <p>
           Get your room today and experience comfortable dormitory living.
          </p>

        </div>
      </section>
    </div>
  );
}