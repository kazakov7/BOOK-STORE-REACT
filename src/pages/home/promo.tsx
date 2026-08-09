import { ArrowRight } from "lucide-react";
import "../../css/home.css";
import Container from "../../components/common/container";
import Button from "../../components/common/univ-button";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <Container>
        <div className="promo-banner">
          <div className="promo-banner__glow" />

          <div className="promo-banner__content">
            <span className="promo-banner__badge">
              Limited time · Mid-season
            </span>

            <span className="promo-banner__title">
              <strong>Up to 40% off</strong>
              <strong>this season's finest.</strong>
            </span>

            <span className="promo-banner__desc">
              A curated selection of editor favorites, marked down for a short
              while. Treat your shelf — and your mind.
            </span>
          </div>

          <Button width="174px" height="48px">
            <span>Shop the sale</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}
