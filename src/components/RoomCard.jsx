import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RoomCard({ room }) {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleNavigate = () => {
    navigate("/explore");
  };

  const nextSlide = () => {
    if (!room.images || room.images.length === 0) return;

    setCurrentImage((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!room.images || room.images.length === 0) return;

    setCurrentImage((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setLightbox(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [room.images]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        onClick={handleNavigate}
        className="
          bg-white/70
          backdrop-blur-lg
          rounded-3xl
          overflow-hidden
          shadow-lg
          border
          border-white/20
          max-w-md
          mx-auto
          sm:max-w-lg
          h-[600px]
          flex
          flex-col
          cursor-pointer
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            mt-6
            mx-4
            h-[260px]
            flex
            items-center
            justify-center
            bg-gray-100
            rounded-2xl
            overflow-hidden
          "
          {...handlers}
          onClick={(e) => e.stopPropagation()}
        >

          {room.images.length > 0 && (
            <motion.img
              key={currentImage}
              src={room.images[currentImage]}
              alt={room.name}
              onClick={() => setLightbox(true)}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="
                max-w-[90%]
                max-h-[90%]
                object-contain
                mx-auto
              "
            />
          )}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Favorite */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="
              absolute
              top-4
              right-4
              w-10
              h-10
              rounded-full
              bg-white/20
              backdrop-blur-md
              flex
              items-center
              justify-center
              hover:bg-white/30
              transition
            "
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>

          {/* Previous */}
          {room.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-black/40
                hover:bg-black/70
                text-white
                flex
                items-center
                justify-center
                transition
              "
            >
              ❮
            </button>
          )}

          {/* Next */}
          {room.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-black/40
                hover:bg-black/70
                text-white
                flex
                items-center
                justify-center
                transition
              "
            >
              ❯
            </button>
          )}

          {/* Dots */}
          {room.images.length > 1 && (
            <div className="absolute bottom-3 w-full flex justify-center gap-2">
              {room.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    ${
                      currentImage === index
                        ? "bg-white w-8"
                        : "bg-white/50 w-2"
                    }
                  `}
                />
              ))}
            </div>
          )}

        </div>
        {/* THUMBNAILS */}
        {room.images.length > 1 && (
          <div
            className="
              flex
              justify-center
              gap-2
              p-3
              overflow-x-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${room.name} ${index + 1}`}
                onClick={() => setCurrentImage(index)}
                className={`
                  w-14
                  h-12
                  rounded-lg
                  object-cover
                  cursor-pointer
                  transition
                  ${
                    currentImage === index
                      ? "ring-2 ring-red-500 scale-105"
                      : "opacity-60 hover:opacity-100"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* CONTENT */}
        <div
          className="
            flex-1
            flex
            flex-col
            justify-center
            items-center
            px-6
            pb-6
            text-center
          "
        >
          {/* Room Name */}
          <h3
            className="
              text-4xl
              font-extrabold
              text-[#FF00FF]
              leading-tight
            "
          >
            {room.name}
          </h3>

          {/* Room Description */}
          {room.description && (
            <p
              className="
                mt-4
                text-gray-600
                text-sm
                leading-relaxed
                max-w-sm
              "
            >
              {room.description}
            </p>
          )}

          {/* Amenities Centered Below Description */}
          {room.amenities?.length > 0 && (
            <div className="mt-5 w-full flex justify-center">
              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  items-center
                  gap-2
                  max-w-sm
                "
              >
                {room.amenities.map((item, index) => (
                  <span
                    key={index}
                    className="
                      bg-slate-100
                      text-slate-700
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      font-medium
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </motion.div>


      {/* LIGHTBOX */}
      {lightbox && room.images.length > 0 && (
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

          {/* Close */}
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
              backdrop-blur-md
              flex
              items-center
              justify-center
            "
          >
            ✕
          </button>


          {/* Previous */}
          {room.images.length > 1 && (
            <button
              onClick={prevSlide}
              className="
                absolute
                left-6
                text-white
                text-5xl
                hover:scale-110
                transition
              "
            >
              ❮
            </button>
          )}


          {/* Image */}
          <motion.img
            key={currentImage}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            src={room.images[currentImage]}
            alt={room.name}
            className="
              max-w-[90%]
              max-h-[85vh]
              object-contain
              rounded-2xl
              shadow-2xl
            "
          />


          {/* Next */}
          {room.images.length > 1 && (
            <button
              onClick={nextSlide}
              className="
                absolute
                right-6
                text-white
                text-5xl
                hover:scale-110
                transition
              "
            >
              ❯
            </button>
          )}

        </div>
      )}

    </>
  );
}
