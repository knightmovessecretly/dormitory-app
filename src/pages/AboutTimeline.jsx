import ParallaxHero from "./ParallaxHero";
import TimelineSection from "./TimelineSection";
import "./AboutTimeline.css";

const historyData = [
  {
    year: "1970s",
    title: "THE INCEPTION",
    images: ["/about/about1.png"],
    content: [
      "Four decades ago, Arch. Marcos C. de Guzman Sr. was encouraged to invest in real estate across Maryknoll College.",
      "The vision was to create a home away from home for students."
    ]
  },
  {
    year: "1980s",
    title: "THE PROTOTYPE",
    images: [
      "/about/about1.png",
      "/about/about2.png",
      "/about/about3.png"
    ],
    content: [
      "SMRC started as a board and lodging facility.",
      "Dormitoryana evolved into the first all-women dormitory in the area."
    ]
  },
  {
    year: "2000s",
    title: "THE LEGACY",
    images: [
      "/about/about4.png",
      "/about/about5.png",
      "/about/about6.png"
    ],
    content: [
      "The structure rose to five storeys as the business grew.",
      "Today the legacy continues through future generations."
    ]
  }
];

export default function AboutPage() {
  return (
    <>
      <ParallaxHero />

      <section className="timeline-container">
        {historyData.map((item, index) => (
          <TimelineSection
            key={index}
            index={index}
            {...item}
          />
        ))}
      </section>
    </>
  );
}