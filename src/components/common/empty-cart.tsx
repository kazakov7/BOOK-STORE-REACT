import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../css/cart.css";

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart-icon">
        <ShoppingCart size={40} strokeWidth={1.5} />
      </div>
      <p className="empty-cart-title">Your cart is empty</p>
      <p className="empty-cart-subtitle">
        Looks like you haven't added any books yet.
      </p>
      <NavLink to={"/books"} className="empty-cart-btn">
        Browse books
      </NavLink>
    </div>
  );
}
