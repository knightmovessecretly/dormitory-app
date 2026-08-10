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
import { GiKitchenTap } from "react-icons/gi";
const offeringsData = [
    [
        {
            title: "24/7 Security",
            icon: ShieldCheck,
            subtitle : "",
            images: [
                "/images/security.jpg",
            ],
        },
        {
            title: "Reception Hall with Wifi",
            icon: Wifi,
            subtitle : "",
            images: [
                "/images/commonStudyArea.png",
                "/images/roofdeck.png",
                "/images/studyareaLounge.png",
            ],
        },
        {
            title: "Common Kitchen Dining ",
            subtitle : "Aquadorm Water Filtration",
            icon: GiKitchenTap,
            images: [
                "/images/commonKitchen.jpg",
            ],
        },
    ],
    [
        {
            title: "Study Decks with Wifi",
            icon: BookOpen,
            subtitle : "",
            images: [
                "/images/supportiveEnvironment.png",
                "/images/studyareaLounge.png",
            ],
        },
        {
            title: "Gym with Wifi",
            icon: Dumbbell,
            subtitle : "",
            images: [
                "/images/gym4.jpg",
                "/images/gym5.jpg",
            ],
        },
    ],
    [
        {
            title: "Courtyard with Fruit Trees",
            icon: Trees,
            subtitle : "",
            images: [
                "/images/enhancedCourtyard.jpg",
                "/images/landing0.jpg",
                "/images/communityLiving.png",
            ],
        },
        {
            title: "Prayer Room",
            icon: HandHeart,
            subtitle : "",
            images: [
                "/images/prayerRoom.png",
            ],
        },
    ],
    [
        {
            title: "Library with Wifi",
            icon: Library,
            subtitle : "",
            images: [
                "/images/library2.png",
                "/images/library7.png",
                "/images/library9.png",
            ],
        },
        {
            title: "Edible Micro Gardens",
            icon: Sprout,
            subtitle : "",
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
            subtitle : "",
            icon: UtensilsCrossed,
            images: [
                "/images/foodcourt.jpg",
                "/images/foodcourt3.jpg",
            ],
        },
        {
            title: "Women-Centric",
            icon: Sparkles,
            subtitle : "",
            images: [
            ],
        },
        {
            title: "Banks and Money-Changer",
            subtitle : "",
            icon: Landmark,
            images: [
                "/images/bank1.jpg",
            ],
        },
    ],
];

export default offeringsData;
