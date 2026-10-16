import { useEffect, useState } from "react";
import "../../css/cart.css";
import {
  ArrowLeft,
  LocateIcon,
  Minus,
  PhoneIcon,
  Plus,
  Trash2,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import type { CartItem } from "../../libs/types/search";
import { serverApi } from "../../libs/enums/config";
import EmptyCart from "../../components/common/empty-books";
import { motion } from "framer-motion";
import { useGlobals } from "../../hooks/useGlobal";
import { messages } from "../../libs/config";
import { toast } from "react-toastify";

function CartItemRow({ book, onAdd, onDelete, onRemove }: any) {
  return (
    <div className="cart-row" key={book._id}>
      <div className="col-book">
        <img className="cover" src={`${serverApi}/${book.image}`} />

        <div>
          <p className="book-title">{book.name}</p>
          <p className="book-author">{book.author}</p>

          <p className="book-format">{book.language}</p>
          <p
            className="book-format"
            style={{ color: "black", fontSize: "15px" }}
          >
            ${book.price}
          </p>
        </div>
      </div>

      <div className="col-quantity">
        <div className="qty-control">
          <button className="qty-btn" onClick={() => onRemove(book)}>
            <Minus size={18} />
          </button>
          <span className="qty-value">{book.quantity}</span>
          <button className="qty-btn" onClick={() => onAdd(book)}>
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="col-price">
        <span className="price-current">
          ${(book.price * book.quantity).toFixed(2)}
        </span>
        <button
          className="delete-btn"
          onClick={() => onDelete(book)}
          aria-label="O'chirish"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

function OrderSummary({
  subtotal,
  deliveryFee,
  total,
  address,
  phoneNumber,
  cartItems,
}: any) {
  const navigate = useNavigate();
  const { authMember } = useGlobals();

  const handleCheckout = async () => {
    try {
      if (cartItems.length === 0)
        throw new Error("Cart is empty. Please add a product.");
      if (!authMember) throw new Error(messages.error2);
      if (!address.trim()) throw new Error("Please enter your address");

      navigate("/payment", {
        state: {
          subtotal,
          deliveryFee,
          total,
          address,
          phoneNumber,
          cartItems,
        },
      });
    } catch (err) {
      console.log(err);
      toast.error(
        // @ts-ignore
        err.response?.data?.message || err.message || "Something went wrong",
      );
    }
  };
  return (
    <div className="summary-card">
      <h2>Order summary</h2>

      <div className="promo-row">
        <span className="icon-slot" />
        <input type="text" placeholder="Promo code" />
        <button className="apply-btn">Apply</button>
      </div>

      <div className="summary-line">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-line">
        <span>DeliveryFee</span>
        <span>${deliveryFee}</span>
      </div>

      <div className="summary-divider" />

      <div className="summary-line total-line">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button onClick={handleCheckout} className="checkout-btn">
        Proceed to Payment
        <span className="icon-slot" />
      </button>

      <div className="secure-note">
        <span className="icon-slot" />
        <span>Secure, encrypted checkout</span>
      </div>
    </div>
  );
}
interface CartProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function CartPage(props: CartProps) {
  const { authMember } = useGlobals();

  const { cartItems, onAdd, onDelete, onRemove } = props;
  const [deliveryAddress, setDeliveryAddress] = useState(
    authMember?.memberAddres || "",
  );
  const [phoneNumber, setPhoneNumber] = useState(authMember?.memberPhone || "");

  const itemPrice = cartItems.reduce((sum, b) => sum + b.price * b.quantity, 0);
  const deliveryFee = itemPrice < 100 ? 5 : 0;
  const totalPrice = itemPrice + deliveryFee;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleSubmit() {
    if (!deliveryAddress) {
      toast.error(
        // @ts-ignore
        err.response?.data?.message || err.message || "Something went wrong",
      );
      return;
    }
  }

  return (
    <motion.div
      className="cart-page"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <NavLink to={"/books"} className="continue-link">
        <ArrowLeft size={22} />
        Continue shopping
      </NavLink>

      <strong>Your cart</strong>
      <span className="items-count">{cartItems.length} items in your bag</span>

      <div className="cart-layout">
        <div className="cart-table">
          <div className="cart-header-row">
            <span>BOOK</span>
            <span>QUANTITY</span>
            <span>PRICE</span>
          </div>

          {cartItems.length != 0 ? (
            cartItems.map((book) => (
              <CartItemRow
                key={book._id}
                book={book}
                onAdd={onAdd}
                onDelete={onDelete}
                onRemove={onRemove}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>

        <div className="cart-page-rigth">
          <section className="delivery-info-card">
            <label className="card-label" htmlFor="deliveryAddress">
              <LocateIcon width={18} />
              Delivery address{" "}
              <span
                style={{ color: "red", fontSize: "18px", marginTop: "2px" }}
              >
                *
              </span>
            </label>
            <input
              id="deliveryAddress"
              type="text"
              placeholder="Tashkent, Chilonzor district, house 12"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="oc-input"
            />
            <label className="card-label number" htmlFor="phoneNumber">
              <PhoneIcon width={18} />
              Phone number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="oc-input"
            />
          </section>

          <OrderSummary
            subtotal={itemPrice}
            deliveryFee={deliveryFee}
            total={totalPrice}
            address={deliveryAddress}
            phoneNumber={phoneNumber ? phoneNumber : authMember?.memberPhone}
            onClick={handleSubmit}
            cartItems={cartItems}
          />
        </div>
      </div>
    </motion.div>
  );
}
