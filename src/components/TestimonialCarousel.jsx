import { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Quote,
    Star,
    MessageCircleHeart,
} from "lucide-react";

export default function TestimonialCarousel({ testimonials }) {
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const total = testimonials.length;

    const nextSlide = () => {
        setExpanded(false);
        setCurrent((prev) => (prev + 1) % total);
    };

    const prevSlide = () => {
        setExpanded(false);
        setCurrent((prev) => (prev - 1 + total) % total);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(timer);
    }, [current]);

    const item = testimonials[current];

    const shorten = (text, max = 280) => {
        if (text.length <= max) return text;
        return text.substring(0, max) + "...";
    };

    return (
        <section className="relative">

            {/* Previous */}

            <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                bg-pink-100 hover:bg-pink-200
                rounded-full p-3 shadow-lg transition"
            >
                <ChevronLeft />
            </button>

            {/* Next */}

            <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                bg-pink-100 hover:bg-pink-200
                rounded-full p-3 shadow-lg transition"
            >
                <ChevronRight />
            </button>

            {/* Main Card */}

            <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">

                {/* Header */}

                <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-8 text-white">

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            onError={(e) => {
                                e.target.src =
                                    "https://ui-avatars.com/api/?background=F9A8D4&color=fff&name=" +
                                    encodeURIComponent(item.name);
                            }}
                        />

                        <div>

                            <div className="flex mb-2">

                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-yellow-300 text-yellow-300"
                                    />
                                ))}

                            </div>

                            <h2 className="text-2xl font-bold">
                                {item.name}
                            </h2>

                            <p className="text-pink-100">
                                {item.subtitle}
                            </p>

                            <p className="text-sm mt-1">
                                {item.date}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Body */}

                <div className="p-8">

                    <Quote
                        size={50}
                        className="text-pink-200 mb-4"
                    />

                    <p className="text-gray-700 leading-8 italic text-lg whitespace-pre-line">

                        {expanded
                            ? item.testimonial
                            : shorten(item.testimonial)}

                    </p>

                    {item.testimonial.length > 280 && (

                        <button
                            onClick={() =>
                                setExpanded(!expanded)
                            }
                            className="mt-4 text-pink-600 font-semibold hover:underline"
                        >
                            {expanded
                                ? "Read Less"
                                : "Read More"}
                        </button>

                    )}

                    {/* Reply */}

                    <div className="mt-8 bg-pink-50 rounded-2xl border border-pink-100 p-6">

                        <div className="flex items-center gap-2 mb-4">

                            <MessageCircleHeart
                                className="text-pink-500"
                            />

                            <h3 className="font-bold text-pink-600">

                                Management Reply

                            </h3>

                        </div>

                        <p className="text-gray-700 whitespace-pre-line leading-7">

                            {item.reply}

                        </p>

                        {item.extraReply && (

                            <div className="mt-5 bg-white rounded-xl p-4 border border-pink-100">

                                <h4 className="font-semibold text-pink-500 mb-2">

                                    Resident's Response

                                </h4>

                                <p className="text-gray-700 whitespace-pre-line">

                                    {item.extraReply}

                                </p>

                            </div>

                        )}

                    </div>

                </div>

                {/* Dots */}

                <div className="pb-6 flex justify-center gap-3">

                    {testimonials.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => {
                                setExpanded(false);
                                setCurrent(index);
                            }}
                            className={`w-3 h-3 rounded-full transition
                            ${
                                current === index
                                    ? "bg-pink-500 scale-125"
                                    : "bg-pink-200"
                            }`}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}