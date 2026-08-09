import { Outlet } from "react-router-dom";
import Tabs from "./tabs";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function MyPage() {
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
      <Tabs />
      <Outlet />
    </motion.div>
  );
}
