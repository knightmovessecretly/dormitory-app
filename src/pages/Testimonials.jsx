import testimonialsData from "../data/testimonialsData";
import TestimonialCarousel from "../components/TestimonialCarousel";

import { HeartHandshake, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100">

            {/* Hero Section */}

            <section className="relative overflow-hidden py-20">

                {/* Decorative Background */}

                <div className="absolute inset-0 opacity-10">

                    <div className="absolute -top-16 -left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>

                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl"></div>

                </div>

                <div className="relative max-w-6xl mx-auto px-6 text-center">

                    <Quote
                        size={60}
                        className="mx-auto text-pink-400 mb-4"
                    />

                    <h1 className="text-5xl font-extrabold text-pink-600">

                        Testimonials

                    </h1>

                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">

                        Every resident has a story to tell.
                        Discover heartfelt experiences from students and
                        professionals who have made
                        <span className="font-semibold text-pink-500">
                            {" "}
                            SMRC Dormitoryana{" "}
                        </span>
                        their second home.

                    </p>

                </div>

            </section>

            {/* Carousel */}

            <section className="pb-16 px-6">

                <TestimonialCarousel
                    testimonials={testimonialsData}
                />

            </section>

            {/* CTA */}

            <section className="pb-20 px-6">

                <div
                    className="
                    max-w-5xl
                    mx-auto
                    rounded-3xl
                    bg-gradient-to-r
                    from-pink-500
                    to-pink-400
                    text-white
                    p-10
                    shadow-xl
                    text-center
                "
                >

                    <HeartHandshake
                        size={55}
                        className="mx-auto mb-4"
                    />

                    <h2 className="text-3xl font-bold">

                        Join Our Dormitory Family

                    </h2>

                    <p className="mt-4 text-pink-100 leading-8 max-w-2xl mx-auto">

                        Experience a safe, peaceful, and welcoming
                        environment where you can study, grow,
                        build lifelong friendships, and truly feel
                        at home.

                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                        <a
                            href="/rooms"
                            className="
                            bg-white
                            text-pink-500
                            font-semibold
                            px-8
                            py-3
                            rounded-full
                            hover:scale-105
                            transition
                            shadow-lg
                        "
                        >
                            Explore Rooms
                        </a>

                        <a
                            href="/contact"
                            className="
                            border-2
                            border-white
                            px-8
                            py-3
                            rounded-full
                            hover:bg-white
                            hover:text-pink-500
                            transition
                            font-semibold
                        "
                        >
                            Contact Us
                        </a>

                    </div>

                </div>

            </section>

        </div>
    );
}