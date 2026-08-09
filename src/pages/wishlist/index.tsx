import { useEffect } from "react";
import type { CartItem } from "../../libs/types/search";
import ProfileWishlist from "../myPage/wishlist";
import Header from "./header";
import type { Book } from "../../libs/types/product";

interface WishlistPageProps {
  onAdd: (item: CartItem) => void;
  onToggle: (item: Book) => void;
  wishlistItems: Book[];
  isInWishlist: (id: string) => boolean;
}
export default function Wishlist(props: WishlistPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { onAdd, onToggle, wishlistItems, isInWishlist } = props;
  return (
    <>
      <Header />
      <ProfileWishlist
        onAdd={onAdd}
        onToggle={onToggle}
        wishlistItems={wishlistItems}
        isInWishlist={isInWishlist}
      />
    </>
  );
}
