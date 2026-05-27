import { Link } from "react-router-dom";
//import {Navbar } from "../components/Navbar";
import "./Landing.css";
import Navbar from "../components/Navbar";
//import image1 from "../pages/public/images/";
//import soloBedroom from './assets/images/bedroomSolo.png';
import AboutUsPreview from "./AboutUsPreview";
export default function Landing() {
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

  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <header className="navbar">

      </header>

      {/* HERO */}
      <section className="hero-section" id="home">


        <div className="container hero-content">




          <div className="hero-left">






            <h1>Exclusive Female Dorm<br />
            </h1>
        <div className="hero-overlay"></div>

            <p>Dormitoryana has over 90 rooms with different pricing and room configurations.  
Each room is unique. Units and clusters have en suite bathrooms each.
If you would like to schedule an appointment for a Room Tour, please email us your ID and Vaxcard.
Oculars are by appointment only, upon 2-days minimum advance notice.
We have a room for your budget! See you 😉
            </p>

            <div className="hero-buttons">

              <Link to="/rooms" className="btn-primary">
                Explore Rooms
              </Link>

              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>

            </div>

          </div>

<div className="flex flex-col items-start gap-6 bg-transparent p-6 rounded-3xl">
  {["Safe", "Cozy", "Affordable", "Exclusive"].map((item, index) => (
    <button
      key={item}
      className="
        group
        relative overflow-hidden

        w-72
        px-7 py-4

        rounded-2xl
        border border-[#ff4d4d]/30

        bg-gradient-to-br
        from-[#320000]/90
        via-[#500000]/70
        to-[#1a0000]/90

        backdrop-blur-2xl

        text-left
        text-[#ffecec]
        font-semibold
        tracking-wide

        shadow-xl shadow-red-900/30

        transition-all duration-500 ease-out
        cursor-pointer

        hover:translate-x-5
        hover:-translate-y-2
        hover:rotate-[1deg]
        hover:scale-105

        hover:border-[#ff6666]
        hover:shadow-[0_0_45px_rgba(255,0,0,0.5)]

        active:scale-95

        before:absolute
        before:inset-0
        before:rounded-2xl
        before:border
        before:border-[#ff4d4d]/10
        before:animate-pulse
      "
      style={{
        animation: `float 3s ease-in-out infinite`,
        animationDelay: `${index * 0.4}s`,
      }}
    >
      {/* Animated background glow */}
      <span
        className="
          absolute inset-0
          opacity-0
          bg-gradient-to-r
          from-[#ff0000]/10
          via-[#ff4d4d]/25
          to-[#ff0000]/10

          transition-all duration-700
          group-hover:opacity-100
        "
      />

      {/* Moving shine line */}
      <span
        className="
          absolute top-0 left-[-120%]
          h-full w-1/2
          skew-x-[-20deg]

          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent

          transition-all duration-1000
          group-hover:left-[140%]
        "
      />

      {/* Floating particles */}
      <span className="absolute top-2 right-3 h-2 w-2 rounded-full bg-red-400/70 animate-ping" />
      <span className="absolute bottom-3 right-8 h-1.5 w-1.5 rounded-full bg-red-300/60 animate-pulse" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-4">
        {/* Animated icon */}
        <span
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full

            bg-gradient-to-br
            from-[#ff4d4d]/30
            to-[#ff0000]/10

            text-[#ff8c8c]

            shadow-inner
            shadow-red-500/30

            transition-all duration-500

            group-hover:rotate-180
            group-hover:scale-125
            group-hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]
          "
        >
          ✦
        </span>

        {/* Text */}
        <span
          className="
            text-lg
            transition-all duration-300

            group-hover:tracking-widest
            group-hover:text-white
          "
        >
          {item}
        </span>
      </span>

      {/* Bottom glow line */}
      <span
        className="
          absolute bottom-0 left-0
          h-[2px] w-0

          bg-gradient-to-r
          from-red-500
          to-pink-400

          transition-all duration-700
          group-hover:w-full
        "
      />
    </button>
  ))}

  {/* Floating animation */}
  <style>
    {`
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-6px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    `}
  </style>
</div>
        </div>

      </section>

      {/* FEATURES */}
<section className="features-section py-20 bg-slate-50">
  <div className="container max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <div className="section-title text-center mb-12">
      <span className="text-[#bb0303] font-semibold tracking-[0.3em] text-sm">
        WHY CHOOSE US
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-3">
        Modern Dormitory Living
      </h2>
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
<section className="rooms-section" id="rooms">

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

            <button className="btn-primary full-btn">
              Reserve Room
            </button>

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
            Register today and experience comfortable dormitory living.
          </p>

          <Link to="/register" className="btn-primary">
            Register Now
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">

        <div className="container footer-grid">

          <div>

            <h3>Dormitory.</h3>

            <p>
              Comfortable and affordable accommodations
              for students and professionals.
            </p>

          </div>

          <div>

            <h4>Quick Links</h4>

            <ul>
              <li>Home</li>
              <li>Rooms</li>
              <li>Services</li>
              <li>About</li>
            </ul>

          </div>

          <div>

            <h4>Contact</h4>

            <p>Email: dormitory@email.com</p>
            <p>Phone: +63 912 345 6789</p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Dormitory Management System
        </div>

      </footer>

    </div>
  );
}