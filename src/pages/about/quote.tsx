import { motion } from "framer-motion";
import Container from "../../components/common/container";
import "../../css/about.css";
export default function QuoteSection() {
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
      <Container className="quote-section">
        <img src="/icons/quote.svg" alt="" />
        <strong>
          “We don't sell books. We deliver quiet hours, new ideas, and the rare
          feeling of a sentence that stays with you for days.”
        </strong>
        <span>— The Literary Canvas Editors</span>
      </Container>
    </motion.div>
  );
}
