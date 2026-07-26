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

  // NEXT IMAGE
  const nextSlide = () => {
    if (room.images.length === 0) return;

    setCurrentImage((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS IMAGE
  const prevSlide = () => {
    if (room.images.length === 0) return;

    setCurrentImage((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  // KEYBOARD SUPPORT
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      }

      if (e.key === "ArrowLeft") {
        prevSlide();
      }

      if (e.key === "Escape") {
        setLightbox(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [room.images.length]);

  // SWIPE SUPPORT
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
          h-[720px]
          flex
          flex-col
          cursor-pointer
        "
      >
        {/* IMAGE */}
        <div
          className="relative h-[260px] flex-shrink-0 overflow-hidden"
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
              className="w-full h-full object-cover"
            />
          )}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* Favorite */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="
              absolute top-4 right-4
              w-10 h-10
              rounded-full
              bg-white/20
              backdrop-blur-md
              flex items-center justify-center
              hover:bg-white/30
              transition
            "
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>

          {/* Left Arrow */}
          {room.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                w-12 h-12
                rounded-full
                bg-black/40
                hover:bg-black/70
                text-white
                text-xl
                flex items-center justify-center
                transition
              "
            >
              ❮
            </button>
          )}

          {/* Right Arrow */}
          {room.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                w-12 h-12
                rounded-full
                bg-black/40
                hover:bg-black/70
                text-white
                text-xl
                flex items-center justify-center
                transition
              "
            >
              ❯
            </button>
          )}

          {/* Dots */}
          {room.images.length > 1 && (
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              {room.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    currentImage === index
                      ? "bg-white w-8"
                      : "bg-white/50 w-2.5"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* THUMBNAILS */}
        {room.images.length > 1 && (
          <div
            className="flex gap-3 p-4 justify-center overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${room.name} ${index + 1}`}
                onClick={() => setCurrentImage(index)}
                className={`w-16 h-14 rounded-xl object-cover cursor-pointer transition ${
                  currentImage === index
                    ? "ring-4 ring-red-500 scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[#FF00FF] leading-tight">
                {room.name}
              </h3>
            </div>

            <div
              className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md border ${
                room.availableBeds > 3
                  ? "bg-green-100/70 text-green-700 border-green-200"
                  : room.availableBeds > 0
                  ? "bg-yellow-100/70 text-yellow-700 border-yellow-200"
                  : "bg-red-100/70 text-red-700 border-red-200"
              }`}
            >
              {room.availableBeds > 0
                ? `${room.availableBeds} Bed${
                    room.availableBeds > 1 ? "s" : ""
                  } Available`
                : "Fully Occupied"}
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-3">
            {room.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {room.amenities.map((item, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* LIGHTBOX */}
      {lightbox && room.images.length > 0 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl backdrop-blur-md flex items-center justify-center"
          >
            ✕
          </button>

          {/* Previous */}
          {room.images.length > 1 && (
            <button
              onClick={prevSlide}
              className="absolute left-6 text-white text-5xl hover:scale-110 transition"
            >
              ❮
            </button>
          )}

          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={room.images[currentImage]}
            alt={room.name}
            className="max-w-[90%] max-h-[85vh] rounded-2xl shadow-2xl"
          />

          {/* Next */}
          {room.images.length > 1 && (
            <button onClick={nextSlide}
              className="absolute right-6 text-white text-5xl hover:scale-110 transition"
            >
              ❯
            </button>
          )}
        </div>
      )}
    </>
  );
}
