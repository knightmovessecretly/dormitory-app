import { useState } from "react";
import offeringsData from "../data/offeringsData";
import OfferingCard from "../components/OfferingCard";
import GalleryModal from "../components/GalleryModal";
import "./Themes.css";

export default function Offerings() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const openGallery = (item) => {
        setSelectedImages(item.images);
        setSelectedTitle(item.title);
        setCurrentIndex(0);
        setIsOpen(true);
    };
    const closeGallery = () => {
        setIsOpen(false);
        setSelectedImages([]);
        setCurrentIndex(0);
        setSelectedTitle("");
    };
    return (
        <div className="pinkfloral  min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 py-16 px-6">
            {/* Header */}
            <div className="text-center mb-14">
                <h1 className="text-5xl font-bold text-pink-600">
                    Offerings
                </h1>
            </div>

            {/* Grid */}
            <div className="space-y-10 max-w-7xl mx-auto">
                {offeringsData.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`grid gap-8 ${
                            row.length === 3
                                ? "grid-cols-1 md:grid-cols-3"
                                : "grid-cols-1 md:grid-cols-2"
                        }`}
                    >
                        {row.map((item) => (
                            <OfferingCard
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                images={item.images}
                                onOpen={() => openGallery(item)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Gallery Modal */}
            {isOpen && (
                <GalleryModal
                    images={selectedImages}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    onClose={closeGallery}
                    title={selectedTitle}
                />
            )}
        </div>
    );
}