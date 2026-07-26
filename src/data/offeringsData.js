import {
    ShieldCheck,
    Wifi,
    CookingPot,
    BookOpen,
    Dumbbell,
    Trees,
    HandHeart,
    Library,
    Sprout,
    UtensilsCrossed,
    Sparkles,
    Landmark,
} from "lucide-react";

const offeringsData = [
    [
        {
            title: "24/7 Security",
            icon: ShieldCheck,
            images: [
                "/images/security.jpg",
            ],
        },

        {
            title: "Reception Hall with Wifi",
            icon: Wifi,
            images: [
                "/images/commonStudyArea.png",
                "/images/roofdeck.png",
                "/images/studyareaLounge.png",
            ],
        },
        {
            title: "Common Kitchen Dining with Wifi",
            icon: CookingPot,
            images: [
                "/images/offerings/kitchen/kitchen1.jpg",
                "/images/offerings/kitchen/kitchen2.jpg",
                "/images/offerings/kitchen/kitchen3.jpg",
            ],
        },
    ],
    [
        {
            title: "Study Decks with Wifi",
            icon: BookOpen,
            images: [
                "/images/supportiveEnvironment.png",
                "/images/studyareaLounge.png",
            ],
        },
        {
            title: "Gym with Wifi",
            icon: Dumbbell,
            images: [
                "/images/gym3.png",
                "/images/gym4.jpg",
                "/images/gym5.jpg",
            ],
        },
    ],
    [
        {
            title: "Courtyard with Fruit Trees",
            icon: Trees,
            images: [
                "/images/enhancedCourtyard.jpg",
                "/images/landing0.jpg",
                "/images/communityLiving.png",
            ],
        },
        {
            title: "Prayer Room",
            icon: HandHeart,
            images: [
                "/images/prayerRoom.png",
            ],
        },
    ],

    [
        {
            title: "Library with Wifi",
            icon: Library,
            images: [
                "/images/library2.png",
                "/images/library7.png",
                "/images/library9.png",
            ],
        },

        {
            title: "Edible Micro Gardens",
            icon: Sprout,
            images: [
                "/images/landing1.jpg",
                "/images/lobbyl.jpg",
                "/images/land.jpg",
            ],
        },
    ],
    [
        {
            title: "Food Court",
            icon: UtensilsCrossed,
            images: [
            ],
        },

        {
            title: "Aesthetics",
            icon: Sparkles,
            images: [
            ],
        },

        {
            title: "Bank",
            icon: Landmark,
            images: [
            ],
        },
    ],
];

export default offeringsData;
