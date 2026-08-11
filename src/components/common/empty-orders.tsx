import { NavLink } from "react-router-dom";
import "../../css/cart.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function EmptyOrders() {
  return (
    <div className=" wishlist empty-cart">
      <div className="empty-cart-icon">
        <ShoppingCartOutlinedIcon />
      </div>
      <p className="empty-cart-title"> No orders yet</p>
      <p className="empty-cart-subtitle">You haven't placed any orders yet.</p>
      <NavLink to={"/books"} className="empty-cart-btn">
        Start Shopping
      </NavLink>
    </div>
  );
}
