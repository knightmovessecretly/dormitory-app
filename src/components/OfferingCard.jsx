export default function OfferingCard({
    title,
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
            {/* Preview Image */}
            <div className="aspect-[4/3] overflow-hidden">
                {previewImage ? (
                    <img
                        src={previewImage}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-pink-50 flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    {title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    {images?.length || 0} Photos
                </p>

                <p className="mt-3 text-sm text-pink-500 font-medium">
                    View Gallery
                </p>
            </div>
        </div>
    );
}
