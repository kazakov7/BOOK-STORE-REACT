import { useLocation } from "react-router-dom";
import AppRoutes from "./app/routes";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import useBasket from "./hooks/useBasket";
import useWishlist from "./hooks/useWishlist";

function App() {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const { wishlistItems, onToggle, isInWishlist } = useWishlist();
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && (
        <Navbar cartItems={cartItems} wishlistItems={wishlistItems} />
      )}

      <AppRoutes
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
        wishlistItems={wishlistItems}
        onToggle={onToggle}
        isInWishlist={isInWishlist}
      />

      {!hideLayout && <Footer />}
    </>
  );
}
export default App;
