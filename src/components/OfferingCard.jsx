export default function OfferingCard({
    title,
    subtitle,
    images,
    onOpen,
}) {
    const previewImage =
        images && images.length > 0 ? images[0] : null;

    return (
        <div
            onClick={() => onOpen(images)}
            className="
                cursor-pointer
                bg-white
                rounded-3xl
                shadow-lg
                border border-pink-100
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            {/* Preview Image / White Photo Frame */}
            <div className="p-4">
                <div
                    className="
                        bg-white
                        p-3
                        rounded-xl
                        shadow-md
                        border border-gray-100
                        overflow-hidden
                    "
                >
                    {previewImage ? (
                        <div className="aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src={previewImage}
                                alt={title}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    hover:scale-105
                                "
                            />
                        </div>
                    ) : (
                        <div className="aspect-[4/3] rounded-lg bg-pink-50 flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="px-5 pb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 uppercase">
                    {title}
                </h2>

                <h4 className="text-xl font-semibold text-gray-400 uppercase">
                    {subtitle}
                </h4>
            </div>
        </div>
    );
}
