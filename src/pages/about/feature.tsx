import { motion } from "framer-motion";
import Container from "../../components/common/container";
import "../../css/about.css";

export default function FeaturedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <Container className="feature-section">
        <div className="feature-card">
          <div className="feature-card-icon">
            <img src="/icons/about-curated.svg" alt="" />
          </div>
          <strong>Curated, not crowded</strong>
          <span>
            Every title is chosen by editors who read first. No infinite scroll
            — only books worth your evening.
          </span>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">
            <img src="/icons/about-design.svg" alt="" />
          </div>
          <strong>Calm by design</strong>
          <span>
            We strip away the noise. Generous space, clear type, and a reading
            experience that feels like a library.
          </span>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">
            <img src="/icons/about-featured3.svg" alt="" />
          </div>
          <strong>Built for readers</strong>
          <span>
            Reader-first features: smart wishlists, quiet recommendations, and a
            checkout that respects your time.
          </span>
        </div>
      </Container>
    </motion.div>
  );
}
