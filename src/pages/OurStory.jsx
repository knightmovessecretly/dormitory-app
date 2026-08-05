// src/pages/OurStory.jsx
import React from "react";
import "./OurStory.css";
import "./Themes.css";
import logo from "../assets/logo.svg";

const OurStory = () => {
  return (
    <div className="pinkfloral min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-10">
        <h1 className="dormtitle text-4xl font-bold text-center text-600 mb-6">
          Our Story
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          SMRC Dormitoryana is our father, <strong>Ar. Marcos C. de Guzman’s</strong>, lasting mark in Loyola Heights’ student housing landscape. Together with our mother, Gloria, both addressed the practical need for affordable student dwelling as they personally provided the warmth, care and love of Family to all our residents who were missing their own.
        </p>

      <div className="image-grid">
        <img src="/images/momdad.jpeg" alt="" />
      </div>


        <p className="text-gray-700 leading-relaxed mb-4">
          For over four decades, Dormitoryana has been Home Away from Home to many academes and students enrolled in Miriam College, Ateneo de Manila University, and the University of the Philippines Diliman. Our residents are generational.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The structure rose from a 2-storey/24 room housing for UP International Students in the late 70’s to now a 5-storey/230 bed structure, catering exclusively to female students and young professionals.
        </p>
        <img src="/images/os4.png" alt="" />
      <div className="image-grid">
        <img src="/images/os2.png" alt="" />
        <img src="/images/os5.png" alt="" />
      </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Just like many business endeavors to which families become committed to, what has evolved into SMRC Dormitoryana today is what we: Priscila, Jonelle, Cristina, Ramon, Marcos Jr., and Emmanuel, aim to sustain. It is our beloved parents’ gift to us, their legacy for future generations to come.
        </p>
      <div className="image-grid">
        <img src="/images/familypainting96-L.jpeg" alt="" />
      </div>

        <h2 className="dormtitle text-2xl font-semibold text-center text-500 mt-8">
          We WELCOME you to 
        </h2>
      <div className="flex justify-center place-items-center ">
          <img 
            src={logo}
            alt="Dormitoryana Logo"
            className="w-[500px] translate-x-20  image-grid"
          />
      </div>
        <h2 className="text-2xl font-semibold text-center text-pink-500 mt-8">   </h2>

      </div>
    </div>
  );
};

export default OurStory;
