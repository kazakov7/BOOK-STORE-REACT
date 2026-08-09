import { useEffect } from "react";
import ContactSection from "./contact";
import FeaturedSection from "./feature";
import HeaderSection from "./header";
import QuoteSection from "./quote";
import { motion } from "framer-motion";

export default function BookDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <HeaderSection />
      <FeaturedSection />
      <QuoteSection />
      <ContactSection />
    </motion.div>
  );
}
