import { ArrowRight } from "lucide-react";
import Container from "../../components/common/container";
import Button from "../../components/common/univ-button";
import "../../css/about.css";
import { motion } from "framer-motion";
export default function ContactSection() {
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
      <Container className="contact-section">
        <img src="/icons/contact.svg" alt="" />
        <strong>Start Your Library</strong>
        <span>
          Explore a collection chosen with care, and find your next favorite
          read today.
        </span>
        <Button width="300px">
          Browse the collection
          <ArrowRight width={20} />
        </Button>
      </Container>
    </motion.div>
  );
}
