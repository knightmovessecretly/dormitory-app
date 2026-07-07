import { useState } from "react";

export default function OfferingCard({
    title,
    icon: Icon,
    images,
    onOpen,
}) {
    const [hovered, setHovered] = useState(false);

    const previewImage =
        images && images.length > 0 ? images[0] : null;

    return (
        <div
            onClick={onOpen}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
                relative cursor-pointer
                bg-white
                rounded-3xl
                shadow-lg
                border border-pink-100
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
            "
        >
            {/* Background preview image */}
            {previewImage && (
                <img
                    src={previewImage}
                    alt={title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        hovered ? "opacity-20" : "opacity-10"
                    }`}
                />
            )}

            {/* Content */}
            <div className="relative z-10 p-8 text-center">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 flex items-center justify-center shadow-inner">
                    <Icon className="w-10 h-10 text-pink-600" />
                </div>

                {/* Title */}
                <h2 className="mt-6 text-xl font-semibold text-gray-800">
                    {title}
                </h2>

                {/* Image count */}
                <p className="mt-2 text-sm text-gray-500">
                    {images?.length || 0} Photos
                </p>

                {/* Hint */}
                <p className="mt-3 text-xs text-pink-400">
                    Click to view gallery
                </p>
            </div>
        </div>
    );
}