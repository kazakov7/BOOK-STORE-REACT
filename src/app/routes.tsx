import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Login from "../pages/login";

import Wishlist from "../pages/wishlist";
import Books from "../pages/books";

import MyPage from "../pages/myPage";
import About from "../pages/about";
import Orders from "../pages/myPage/orders";
import ProfileWishlist from "../pages/myPage/wishlist";
import Account from "../pages/myPage/profile";
import SignUp from "../pages/signup";
import BookDetails from "../pages/books/bookDetails";
import type { CartItem } from "../libs/types/search";
import type { Book } from "../libs/types/product";

interface AppProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  wishlistItems: Book[];
  onToggle: (item: Book) => void;
  isInWishlist: (id: string) => boolean;
}

function AppRoutes(props: AppProps) {
  const {
    cartItems,
    onAdd,
    onDelete,
    onDeleteAll,
    onRemove,
    wishlistItems,
    onToggle,
    isInWishlist,
  } = props;
  return (
    <>
      <Routes>
        <Route
          path="/books"
          element={
            <Books
              onAdd={onAdd}
              onToggle={onToggle}
              isInWishlist={isInWishlist}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/book/:id"
          element={
            <BookDetails
              onAdd={onAdd}
              onToggle={onToggle}
              isInWishlist={isInWishlist}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              onAdd={onAdd}
              wishlistItems={wishlistItems}
              onToggle={onToggle}
              isInWishlist={isInWishlist}
            />
          }
        />

        <Route
          path="/"
          element={
            <Home
              onAdd={onAdd}
              onToggle={onToggle}
              isInWishlist={isInWishlist}
            />
          }
        />
        <Route path="/profile" element={<MyPage />}>
          <Route index element={<Navigate to="account" replace />} />
          <Route path="account" element={<Account />} />
          <Route
            path="wishlist"
            element={
              <ProfileWishlist
                onAdd={onAdd}
                wishlistItems={wishlistItems}
                onToggle={onToggle}
                isInWishlist={isInWishlist}
              />
            }
          />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
