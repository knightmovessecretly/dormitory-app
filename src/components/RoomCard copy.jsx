import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { Link,useNavigate } from "react-router-dom";

export default function RoomCard({ room }) {

  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const handleExplore = () => {
    navigate("/explore");
  };

  // NEXT
  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS
  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);

  }, [currentImage]);

  // SWIPE
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className="
          bg-white/70
          backdrop-blur-lg
          rounded-3xl
          overflow-hidden
          shadow-lg
          border
          border-white/20
        "
      >

        {/* CAROUSEL */}
        <div
          className="
            relative
            h-[260px]
            overflow-hidden
          "
          {...handlers}
        >

          <motion.img
            key={currentImage}
            src={room.images[currentImage]}
            alt={room.name}
            onClick={() => setLightbox(true)}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
              w-full
              h-full
              object-cover
              cursor-pointer
            "
          />

          {/* BUTTONS */}
          <button
            onClick={prevSlide}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              bg-black/40
              hover:bg-black/70
              text-white
              w-10
              h-10
              rounded-full
              transition
            "
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              bg-black/40
              hover:bg-black/70
              text-white
              w-10
              h-10
              rounded-full
              transition
            "
          >
            ❯
          </button>

          {/* DOTS */}
          <div
            className="
              absolute
              bottom-4
              w-full
              flex
              justify-center
              gap-2
            "
          >

            {room.images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`
                  h-2.5
                  rounded-full
                  cursor-pointer
                  transition-all
                  ${
                    currentImage === index
                      ? "bg-white w-8"
                      : "bg-white/50 w-2.5"
                  }
                `}
              ></div>
            ))}

          </div>

        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 p-4 justify-center">

          {room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => setCurrentImage(index)}
              className={`
                w-16
                h-14
                rounded-xl
                object-cover
                cursor-pointer
                transition
                ${
                  currentImage === index
                    ? "ring-4 ring-red-500 scale-105"
                    : "opacity-60 hover:opacity-100"
                }
              `}
            />
          ))}

        </div>

        {/* CONTENT */}
        <div className="p-6">

          <div className="flex justify-between items-start">

            <div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-slate-800
                "
              >
                {room.name}
              </h3>

              <p className="text-gray-500 mt-1">
                {room.capacity}
              </p>

            </div>


          </div>

          <p
            className="
              text-gray-600
              mt-4
              leading-relaxed
            "
          >
            {room.description}
          </p>

          {/* AMENITIES */}
          <div className="flex flex-wrap gap-3 mt-6">

            {room.amenities.map((item, index) => (
              <span
                key={index}
                className="
                  bg-slate-100
                  text-slate-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                {item}
              </span>
            ))}

          </div>
<span className={`
  px-4
  py-2
  rounded-full
  text-sm
  font-semibold
  ${room.availableBeds > 3
    ? "bg-green-100 text-green-700"
    : room.availableBeds > 0
    ? "bg-yellow-100 text-yellow-700"
    : "bg-red-100 text-red-700"}
`}>
  {room.availableBeds > 0
    ? `${room.availableBeds} beds available`
    : "Fully booked"}
</span>

        </div>

      </motion.div>

      
{/* LIGHTBOX */}
{lightbox && (
  <div
    className="
      fixed
      inset-0
      bg-black/90
      flex
      items-center
      justify-center
      z-50
      p-4
    "
  >

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setLightbox(false)}
      className="
        absolute
        top-6
        right-6
        w-12
        h-12
        rounded-full
        bg-white/10
        hover:bg-white/20
        text-white
        text-2xl
        font-bold
        backdrop-blur-md
        transition
        flex
        items-center
        justify-center
      "
    >
      ✕
    </button>

    {/* IMAGE */}
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      src={room.images[currentImage]}
      alt=""
      className="
        max-w-[90%]
        max-h-[85vh]
        rounded-2xl
        shadow-2xl
      "
    />

  </div>
)}
    </>
  );
}