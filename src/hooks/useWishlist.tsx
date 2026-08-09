import { useState } from "react";
import type { CartItem } from "../libs/types/search";
import type { Book } from "../libs/types/product";

const useWishlist = () => {
  const cartJson: string | null = localStorage.getItem("wishlistData");
  const currentWishlist = cartJson ? JSON.parse(cartJson) : [];
  const [wishlistItems, setWishlistItems] = useState<Book[]>(currentWishlist);
  // HANDLERS
  const onAdd = (input: Book) => {
    const exist: any = wishlistItems.find(
      (item: Book) => item._id === input._id,
    );
    if (!exist) {
      const cartUpdate = [...wishlistItems, { ...input }];
      setWishlistItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onRemove = (input: Book) => {
    const exist: any = wishlistItems.find(
      (item: Book) => item._id === input._id,
    );
    if (exist.quantity === 1) {
      const cartUpdate = wishlistItems.filter(
        (item: Book) => item._id !== input._id,
      );
      setWishlistItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = wishlistItems.map((item: Book) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item,
      );
      setWishlistItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onDelete = (input: Book) => {
    const cartUpdate = wishlistItems.filter(
      (item: Book) => item._id !== input._id,
    );
    setWishlistItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setWishlistItems([]);
    localStorage.removeItem("cartData");
  };
  return {
    wishlistItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};
export default useWishlist;
