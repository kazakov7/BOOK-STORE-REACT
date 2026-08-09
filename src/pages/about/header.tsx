import { motion } from "framer-motion";
import "../../css/about.css";

export default function HeaderSection() {
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
      <div className="header-section">
        <div className="content-icon">
          <img src="/icons/about-header.svg" alt="" />
          <span>Our Story</span>
        </div>
        <div className="content-title">
          Books,curated <br />
          with intention.
        </div>
        <div className="content-footer">
          Literary Canvas began with a simple belief: that the right book, found
          at the right moment, can quietly change a life. We're here to make
          that moment easier to find.
        </div>
      </div>
    </motion.div>
  );
}
