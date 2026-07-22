import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Signup from "../pages/signup";
import Wishlist from "../pages/wishlist";
import Books from "../pages/books";
import BookDetails from "../pages/bookDetails";
import MyPage from "../pages/myPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/profile" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
