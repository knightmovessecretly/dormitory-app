import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";
import "./Themes.css";
import { useState } from "react";
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
    <div className="pinkfloral">
      {/* NAVBAR */}
      <header className="navbar"></header>

      {/* HERO */}
      <section className="pinkfloral py-20 bg-slate-50">
        <div className="min-h-screen flex flex-col items-center font-sans">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg border border-pink-200 overflow-hidden">



            {/* Top Image */}
            <div className="p-3 bg-white border-b border-pink-100">
              <img
                src="/images/landingAdjusted.png"
                alt="Dormitoryana Building"
                className="
                  w-full
                  rounded-lg
                  border-4
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

            {/* Logo */}
            <div className="flex justify-center pt-6">
              <img
                src={logo}
                alt="Dormitoryana Logo"
                className="w-[500px] translate-x-20"
              />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-[1fr_2fr] grid-rows-2 gap-4 p-6 bg-white h-[600px]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                onClick={() => setSelectedImage(images[0])}
                className="w-full h-full rounded-lg shadow-md object-cover vignette cursor-pointer transition-transform duration-300 hover:scale-105"
              />

              <img
                src={images[2].src}
                alt={images[2].alt}
                onClick={() => setSelectedImage(images[2])}
                className="row-span-2 w-full h-full rounded-lg shadow-md object-cover vignette cursor-pointer transition-transform duration-300 hover:scale-105"
              />

              <img
                src={images[1].src}
                alt={images[1].alt}
                onClick={() => setSelectedImage(images[1])}
                className="w-full h-full rounded-lg shadow-md object-cover vignette cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Image Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  className="relative max-w-6xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300"
                  >
                    &times;
                  </button>

                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[90vh] rounded-lg object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
