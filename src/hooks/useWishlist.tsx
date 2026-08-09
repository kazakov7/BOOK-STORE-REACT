import { useState } from "react";

import type { Book } from "../libs/types/product";

const useWishlist = () => {
  const cartJson: string | null = localStorage.getItem("wishlistData");
  const currentWishlist = cartJson ? JSON.parse(cartJson) : [];
  const [wishlistItems, setWishlistItems] = useState<Book[]>(currentWishlist);
  // HANDLERS
  const onToggle = (input: Book) => {
    setWishlistItems((wishlist) => {
      const exist = wishlist.find((item) => item._id === input._id);
      if (exist) {
        return wishlist.filter((item) => item._id !== input._id);
      }
      return [...wishlist, input];
    });
  };

  const isInWishlist = (id: string) => {
    return wishlistItems.some((item) => item._id === id);
  };

  return {
    wishlistItems,
    onToggle,
    isInWishlist,
  };
};
export default useWishlist;
