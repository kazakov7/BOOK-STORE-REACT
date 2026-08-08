import type { CartItem } from "../../libs/types/search";
import ProfileWishlist from "../myPage/wishlist";
import Header from "./header";

interface WishlistPageProps {
  onAdd: (item: CartItem) => void;
}
export default function Wishlist(props: WishlistPageProps) {
  const { onAdd } = props;
  return (
    <>
      <Header />
      <ProfileWishlist onAdd={onAdd} />
    </>
  );
}
