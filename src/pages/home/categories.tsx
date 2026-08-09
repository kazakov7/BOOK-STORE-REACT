import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import "../../css/home.css";
import CategoriesCard from "../../components/common/home-categories-card";
import { motion } from "framer-motion";
export default function Categories() {
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
        <div className="section-frame">
          <div className="section-top">
            <span>BROWSE</span>
            <strong>Find your next chapter</strong>
            <div>
              <span>
                Eight thoughtfully organised worlds — from quiet fiction to the
                craft of code.
              </span>
              <NavLink to={"/books"}>All categories→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <CategoriesCard />
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
