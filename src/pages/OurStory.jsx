import React from "react";
import "./OurStory.css";
import "./Themes.css";
import logo from "../assets/logo.svg";

const OurStory = () => {
  return (
    <main className="pinkfloral min-h-screen bg-gradient-to-b from-pink-100 to-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10">
      <div
        className="
          mx-auto
          w-full
          max-w-4xl
          rounded-xl
          bg-white
          px-5 py-7
          shadow-lg
          sm:px-8 sm:py-9
          md:px-10 md:py-10
          lg:px-12 lg:py-12
        "
      >
        {/* Title */}
        <h1
          className="
            dormtitle
            mb-6
            text-center
            text-3xl
            font-bold
            leading-tight
            sm:text-4xl
            md:mb-8
            md:text-5xl
          "
        >
          Our Story
        </h1>

        {/* Introduction */}
        <p
          className="
            mb-5
            text-base
            leading-7
            text-gray-700
            sm:text-lg
            sm:leading-8
          "
        >
          SMRC Dormitoryana is our father,{" "}
          <strong>Ar. Marcos C. de Guzman’s</strong>, lasting mark in Loyola
          Heights’ student housing landscape. Together with our mother, Gloria,
          both addressed the practical need for affordable student dwelling as
          they personally provided the warmth, care and love of Family to all
          our residents who were missing their own.
        </p>

        {/* Mom & Dad */}
        <div className="my-7 overflow-hidden rounded-lg sm:my-9">
          <img
            src="/images/momdad.jpeg"
            alt="Marcos and Gloria de Guzman"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Paragraph */}
        <p
          className="
            mb-5
            text-base
            leading-7
            text-gray-700
            sm:text-lg
            sm:leading-8
          "
        >
          For over four decades, Dormitoryana has been Home Away from Home to
          many academes and students enrolled in Miriam College, Ateneo de
          Manila University, and the University of the Philippines Diliman. Our
          residents are generational.
        </p>

        {/* Paragraph */}
        <p
          className="
            mb-6
            text-base
            leading-7
            text-gray-700
            sm:text-lg
            sm:leading-8
          "
        >
          The structure rose from a 2-storey/24 room housing for UP
          International Students in the late 70’s to now a 5-storey/230 bed
          structure, catering exclusively to female students and young
          professionals.
        </p>

        {/* Main building image */}
        <div className="my-7 overflow-hidden rounded-lg sm:my-9">
          <img
            src="/images/os4.png"
            alt="Dormitoryana building"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Image Grid */}
        <div
          className="
            my-7
            grid
            grid-cols-1
            gap-4
            sm:my-9
            sm:grid-cols-2
            sm:gap-5
          "
        >
          <img
            src="/images/os2.png"
            alt="Dormitoryana"
            className="
              h-auto
              w-full
              rounded-lg
              object-cover
            "
          />

          <img
            src="/images/os5.png"
            alt="Dormitoryana"
            className="
              h-auto
              w-full
              rounded-lg
              object-cover
            "
          />
        </div>

        {/* Family paragraph */}
        <p
          className="
            mb-6
            text-base
            leading-7
            text-gray-700
            sm:text-lg
            sm:leading-8
          "
        >
          Just like many business endeavors to which families become committed
          to, what has evolved into SMRC Dormitoryana today is what we:
          Priscila, Jonelle, Cristina, Ramon, Marcos Jr., and Emmanuel, aim to
          sustain. It is our beloved parents’ gift to us, their legacy for
          future generations to come.
        </p>

        {/* Family Painting */}
        <div className="my-7 overflow-hidden rounded-lg sm:my-9">
          <img
            src="/images/familypainting96-L.jpeg"
            alt="The de Guzman family"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Welcome */}
        <div className="mt-8 text-center sm:mt-10">
          <h2
            className="
              dormtitle
              text-xl
              font-semibold
              sm:text-2xl
              md:text-3xl
            "
          >
            We WELCOME you to
          </h2>
        </div>

        {/* Logo */}
        <div className="mt-5 flex w-full justify-center sm:mt-7">
          <img
            src={logo}
            alt="Dormitoryana Logo"
            className="
              block
              h-auto
              w-[180px]
              max-w-[75%]
              object-contain
              sm:w-[260px]
              md:w-[340px]
              lg:w-[420px]
            "
          />
        </div>
      </div>
    </main>
  );
};

export default OurStory;