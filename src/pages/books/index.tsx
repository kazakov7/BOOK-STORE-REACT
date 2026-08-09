import { useEffect } from "react";
import type { CartItem } from "../../libs/types/search";
import Header from "./header";
import Sidebar from "./sidebar";
import type { Book } from "../../libs/types/product";
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
    <>
      <Header />
      <Sidebar onAdd={onAdd} onToggle={onToggle} isInWishlist={isInWishlist} />
    </>
  );
}
