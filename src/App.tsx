import { useLocation } from "react-router-dom";
import AppRoutes from "./app/routes";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}

      <AppRoutes />

      {!hideLayout && <Footer />}
    </>
  );
}
export default App;
