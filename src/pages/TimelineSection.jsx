import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";

export default function TimelineSection({
  year,
  title,
  content,
  images,
  index
}) {
  return (
    <motion.div
      className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="timeline-marker">
        <span>{year}</span>
      </div>

      <div className="timeline-content">
        <h2>{title}</h2>

        {content.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <ImageGallery images={images} />
      </div>
    </motion.div>
  );
}