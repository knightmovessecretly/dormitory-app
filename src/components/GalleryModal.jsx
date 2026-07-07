import { useEffect } from "react";
import {
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function GalleryModal({
    images,
    currentIndex,
    setCurrentIndex,
    onClose,
    title,
}) {
    if (!images || images.length === 0) return null;

    const previousImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    previousImage();
                    break;

                case "ArrowRight":
                    nextImage();
                    break;

                case "Escape":
                    onClose();
                    break;

                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
    });

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}

                <button
                    onClick={onClose}
                    className="absolute right-0 -top-14 text-white hover:text-pink-300 transition"
                >
                    <X size={36} />
                </button>

                {/* Title */}

                <h2 className="text-white text-center text-3xl font-bold mb-6">
                    {title}
                </h2>

                {/* Main Image */}

                <div className="relative">

                    <img
                        src={images[currentIndex]}
                        alt=""
                        className="w-full max-h-[70vh] object-contain rounded-3xl bg-white shadow-2xl transition-all duration-300"
                    />

                    {/* Previous */}

                    {images.length > 1 && (
                        <button
                            onClick={previousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2
                            bg-white/80 hover:bg-pink-200
                            rounded-full p-3 transition"
                        >
                            <ChevronLeft size={32} />
                        </button>
                    )}

                    {/* Next */}

                    {images.length > 1 && (
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2
                            bg-white/80 hover:bg-pink-200
                            rounded-full p-3 transition"
                        >
                            <ChevronRight size={32} />
                        </button>
                    )}
                </div>

                {/* Counter */}

                <div className="text-center text-white mt-4 text-lg">

                    {currentIndex + 1} / {images.length}

                </div>

                {/* Dots */}

                <div className="flex justify-center gap-2 mt-3">

                    {images.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition
                            ${
                                index === currentIndex
                                    ? "bg-pink-400 scale-125"
                                    : "bg-white/40"
                            }`}
                        />

                    ))}

                </div>

                {/* Thumbnail Strip */}

                {images.length > 1 && (

                    <div className="mt-6 flex justify-center gap-3 overflow-x-auto pb-2">

                        {images.map((image, index) => (

                            <img
                                key={index}
                                src={image}
                                alt=""
                                onClick={() =>
                                    setCurrentIndex(index)
                                }
                                className={`cursor-pointer
                                w-28
                                h-20
                                object-cover
                                rounded-xl
                                border-4
                                transition
                                hover:scale-105
                                ${
                                    currentIndex === index
                                        ? "border-pink-400"
                                        : "border-transparent opacity-70"
                                }`}
                            />

                        ))}

                    </div>

                )}

                {/* Instructions */}

                <div className="text-center text-white/70 mt-6 text-sm">

                    ← Previous &nbsp;&nbsp; →
                    Next &nbsp;&nbsp; Esc Close

                </div>

            </div>
        </div>
    );
}