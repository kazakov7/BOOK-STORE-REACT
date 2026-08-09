import { HeartOff } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../css/cart.css";

export default function EmptyWishlist() {
  return (
    <div className=" wishlist empty-cart">
      <div className="empty-cart-icon">
        <HeartOff size={40} strokeWidth={1.5} />
      </div>
      <p className="empty-cart-title">Your wishlist is empty</p>
      <p className="empty-cart-subtitle">
        Save your favorite books here and find them anytime.
      </p>
      <NavLink to={"/books"} className="empty-cart-btn">
        Browse books
      </NavLink>
    </div>
  );
}
