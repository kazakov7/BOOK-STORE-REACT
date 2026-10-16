import "../../css/cart.css";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
export default function EmptyCart() {
  return (
    <div className="empty-cart catalog-empty">
      <div className="empty-cart-icon">
        <MenuBookOutlinedIcon />
      </div>
      <p className="empty-cart-title">No books found</p>
      <p className="empty-cart-subtitle">
        There are no books in this category yet. Try exploring another category.
      </p>
    </div>
  );
}
