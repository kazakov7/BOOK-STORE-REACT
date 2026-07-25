import { useState } from "react";
import "../../css/cart.css";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";

// Vaqtinchalik hardcoded ma'lumot — keyinchalik backend/MongoDB'dan keladi
const INITIAL_BOOKS = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "BUSINESS",
    unitPrice: 18.4,
    quantity: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpfVU1HEJBbLg4OGn4r2pbpfVt_cTGVqO6-gjVXzo7Q&s=10",
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "ROMANCE",
    unitPrice: 23.5,
    quantity: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3aXyehuxKSwvn2y2xp4gNH9TjER8_Kn5LUZmTSWs7Q&s=10",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "REAILTY",
    unitPrice: 16.8,
    quantity: 1,
    image:
      "data:image/jpeg;base64,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",
  },
];

function CartItemRow({ book, onIncrease, onDecrease, onRemove }: any) {
  return (
    <div className="cart-row">
      <div className="col-book">
        <img className="cover" src={book.image} />
        {book.coverLabel}
        <div>
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>
          <p className="book-format">{book.category}</p>
        </div>
      </div>

      <div className="col-quantity">
        <div className="qty-control">
          <button className="qty-btn" onClick={() => onDecrease(book.id)}>
            <Plus size={18} />
          </button>
          <span className="qty-value">{book.quantity}</span>
          <button className="qty-btn" onClick={() => onIncrease(book.id)}>
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="col-price">
        <span className="price-current">
          ${(book.unitPrice * book.quantity).toFixed(2)}
        </span>
        <button
          className="delete-btn"
          onClick={() => onRemove(book.id)}
          aria-label="O'chirish"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

function OrderSummary({ subtotal, tax, total }: any) {
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
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="summary-line">
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="summary-divider" />

      <div className="summary-line total-line">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="checkout-btn">
        Proceed to checkout
        <span className="icon-slot" />
      </button>

      <div className="secure-note">
        <span className="icon-slot" />
        <span>Secure, encrypted checkout</span>
      </div>
    </div>
  );
}

export default function CartPage() {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  const increaseQty = (id: any) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, quantity: b.quantity + 1 } : b)),
    );
  };

  const decreaseQty = (id: any) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, quantity: Math.max(1, b.quantity - 1) } : b,
      ),
    );
  };

  const removeBook = (id: any) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const subtotal = books.reduce((sum, b) => sum + b.unitPrice * b.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <NavLink to={"/books"} className="continue-link">
        <ArrowLeft size={22} />
        Continue shopping
      </NavLink>

      <strong>Your cart</strong>
      <span className="items-count">{books.length} items in your bag</span>

      <div className="cart-layout">
        <div className="cart-table">
          <div className="cart-header-row">
            <span>BOOK</span>
            <span>QUANTITY</span>
            <span>PRICE</span>
          </div>

          {books.map((book) => (
            <CartItemRow
              key={book.id}
              book={book}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onRemove={removeBook}
            />
          ))}
        </div>

        <OrderSummary subtotal={subtotal} tax={tax} total={total} />
      </div>
    </div>
  );
}
