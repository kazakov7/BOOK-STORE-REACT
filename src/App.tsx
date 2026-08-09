import { useLocation } from "react-router-dom";
import AppRoutes from "./app/routes";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import useBasket from "./hooks/useBasket";

function App() {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar cartItems={cartItems} />}

      <AppRoutes
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
      />

      {!hideLayout && <Footer />}
    </>
  );
}
export default App;
