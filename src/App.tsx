import { useLocation } from "react-router-dom";
import AppRoutes from "./app/routes";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import useBasket from "./hooks/useBasket";
import useWishlist from "./hooks/useWishlist";
import { useGlobals } from "./hooks/useGlobal";

import MemberService from "./service/MemberService";

function App() {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const { wishlistItems, onToggle, isInWishlist } = useWishlist();
  const location = useLocation();
  const { setAuthMember } = useGlobals();

  // HANDLERS

  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();

      setAuthMember(null);
    } catch (err) {
      console.log(err);
    }
  };

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
        handleLogoutRequest={handleLogoutRequest}
      />

      {!hideLayout && <Footer />}
    </>
  );
}
export default App;
