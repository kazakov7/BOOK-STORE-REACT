import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Signup from "../pages/signup";
import Wishlist from "../pages/wishlist";
import Books from "../pages/books";
import BookDetails from "../pages/bookDetails";
import MyPage from "../pages/myPage";
import About from "../pages/about";
import Orders from "../pages/myPage/orders";
import ProfileWishlist from "../pages/myPage/wishlist";
import Account from "../pages/myPage/profile";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<MyPage />}>
          <Route index element={<Navigate to="account" replace />} />
          <Route path="account" element={<Account />} />
          <Route path="wishlist" element={<ProfileWishlist />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
