import { useEffect } from "react";
import type { CartItem } from "../../libs/types/search";
import Header from "./header";
import Sidebar from "./sidebar";
import type { Book } from "../../libs/types/product";
import { motion } from "framer-motion";

interface BooksPageProps {
  onAdd: (item: CartItem) => void;
  onToggle: (item: Book) => void;
  isInWishlist: (id: string) => boolean;
}
export default function Books(props: BooksPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { onAdd, onToggle, isInWishlist } = props;
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
      <Header />
      <Sidebar onAdd={onAdd} onToggle={onToggle} isInWishlist={isInWishlist} />
    </motion.div>
  );
}
