import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import "./Themes.css";
import logo from "../assets/logo.svg";

import Navbar from "../components/Navbar";

export default function Landing() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/images/landing0.jpg",
      alt: "Rooftop Garden",
    },
    {
      src: "/images/landing1.jpg",
      alt: "Interior View",
    },
    {
      src: "/images/enhancedCourtyard.jpg",
      alt: "Exterior View",
    },
  ];

  return (
    <div className="pinkfloral min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <header className="navbar">
        {/* If you want to use your Navbar component, put it here */}
        {/* <Navbar /> */}
      </header>

      {/* HERO */}
      <section className="pinkfloral min-h-screen py-6 sm:py-10 md:py-16 lg:py-20 bg-slate-50">
        <div className="w-full flex justify-center px-3 sm:px-4 md:px-6">
          <div
            className="
              w-full
              max-w-4xl
              bg-white
              shadow-lg
              rounded-lg
              border
              border-pink-200
              overflow-hidden
            "
          >
            {/* =========================
                TOP IMAGE
            ========================== */}
            <div className="p-2 sm:p-3 bg-white border-b border-pink-100">
              <img
                src="/images/landingAdjusted.png"
                alt="Dormitoryana Building"
                className="
                  block
                  w-full
                  h-auto
                  max-h-[70vh]
                  rounded-lg
                  border-2
                  sm:border-4
                  border-pink-200
                  shadow-2xl
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-[1.01]
                  hover:brightness-105
                  hover:shadow-pink-300/50
                  vignette
                "
              />
            </div>

            {/* =========================
                LOGO
            ========================== */}
            <div
              className="
                flex
                justify-center
                items-center
                px-4
                pt-3
                pb-1
                sm:pt-4
                sm:pb-2
                overflow-hidden
              "
            >
              <img
                src={logo}
                alt="Dormitoryana Logo"
                className="
                  block
                  w-full
                  max-w-[280px]
                  sm:max-w-[380px]
                  md:max-w-[500px]
                  h-auto
                  object-contain
                "
              />
            </div>

            {/* =========================
                GALLERY
            ========================== */}

            {/* Desktop / Tablet Gallery */}
            <div
              className="
                hidden
                sm:grid
                grid-cols-[1fr_2fr]
                grid-rows-2
                gap-2
                sm:gap-3
                md:gap-4
                px-3
                sm:px-4
                md:px-6
                pt-1
                pb-4
                sm:pb-6
                bg-white
                h-[380px]
                md:h-[500px]
                lg:h-[600px]
              "
            >
              {/* Rooftop */}
              <img
                src={images[0].src}
                alt={images[0].alt}
                onClick={() => setSelectedImage(images[0])}
                className="
                  w-full
                  h-full
                  min-w-0
                  min-h-0
                  rounded-lg
                  shadow-md
                  object-cover
                  vignette
                  cursor-pointer
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              />

              {/* Exterior */}
              <img
                src={images[2].src}
                alt={images[2].alt}
                onClick={() => setSelectedImage(images[2])}
                className="
                  row-span-2
                  w-full
                  h-full
                  min-w-0
                  min-h-0
                  rounded-lg
                  shadow-md
                  object-cover
                  vignette
                  cursor-pointer
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              />

              {/* Interior */}
              <img
                src={images[1].src}
                alt={images[1].alt}
                onClick={() => setSelectedImage(images[1])}
                className="
                  w-full
                  h-full
                  min-w-0
                  min-h-0
                  rounded-lg
                  shadow-md
                  object-cover
                  vignette
                  cursor-pointer
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              />
            </div>

            {/* =========================
                MOBILE GALLERY
            ========================== */}
            <div
              className="
                sm:hidden
                grid
                grid-cols-2
                gap-2
                px-3
                pt-1
                pb-4
                bg-white
              "
            >
              {/* Rooftop */}
              <img
                src={images[0].src}
                alt={images[0].alt}
                onClick={() => setSelectedImage(images[0])}
                className="
                  w-full
                  aspect-square
                  rounded-lg
                  shadow-md
                  object-cover
                  vignette
                  cursor-pointer
                  transition-transform
                  duration-300
                  active:scale-95
                "
              />

              {/* Exterior */}
              <img
                src={images[2].src}
                alt={images[2].alt}
                onClick={() => setSelectedImage(images[2])}
                className="
                  w-full
                  aspect-square
                  rounded-lg
                  shadow-md
                  object-cover
                  vignette
                  cursor-pointer
                  transition-transform
                  duration-300
                  active:scale-95
                "
              />

              {/* Interior */}
              <img
                src={images[1].src}
                alt={images[1].alt}
                onClick={() => setSelectedImage(images[1])}
                className="
                  col-span-2
                  w-full
                  aspect-[2/1]
                  rounded-lg
                  shadow-md
                  object-cover
                  vignette
                  cursor-pointer
                  transition-transform
                  duration-300
                  active:scale-[0.98]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE MODAL
      ========================== */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            p-3
            sm:p-4
          "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-full
              h-full
              max-w-7xl
              max-h-screen
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="
                absolute
                top-2
                right-2
                sm:top-0
                sm:right-0
                z-10
                w-10
                h-10
                sm:w-12
                sm:h-12
                flex
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white
                text-3xl
                sm:text-4xl
                font-bold
                hover:bg-black/70
                hover:text-gray-300
                transition-colors
              "
            >
              &times;
            </button>

            {/* Selected Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="
                max-w-full
                max-h-[85vh]
                sm:max-h-[90vh]
                w-auto
                h-auto
                rounded-lg
                object-contain
                shadow-2xl
              "
            />
          </div>
        </div>
      )}
    </div>
  );
}
