import { useState } from "react";
import "../../css/book-details.css";
import { Rating } from "@mui/material";
import {
  Heart,
  LockKeyholeIcon,
  Minus,
  Plus,
  Share2,
  ShoppingCartIcon,
  Truck,
  Undo2Icon,
} from "lucide-react";

// Vaqtincha hardcoded — keyinchalik backend/MongoDB'dan keladi
const book = {
  id: 1,
  category: "Programming",
  title: "The Pragmatic Programmer",
  authors: "David Thomas & Andrew Hunt",
  rating: 3.5,
  reviewsCount: 6430,
  price: 39.99,
  oldPrice: 52.0,
  isbn: "978-0135957059",
  language: "English",
  publisher: "Addison-Wesley",
  publishedYear: 2019,
  pages: 352,
  format: "Hardcover",
  description:
    "Dave Thomas and Andy Hunt wrote the first edition of this influential book to help their clients write better software and rediscover the joy of coding. Now refreshed for a new generation of programmers.",
  images: [
    "https://covers.openlibrary.org/b/isbn/0135957052-L.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02PGHYtgD0F4xqrGuC19oks5rfyjs4_1zaSYZ9b6Q2Q&s=10",
    "https://covers.openlibrary.org/b/isbn/0132350882-L.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBOYyJOeAyxL7QW2pSJJmAYQaNd-MKb74suMoTaL0ZA&s=10",
  ],
};

export default function BookDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));

  const currentTotal = book.price * quantity;
  const oldTotal = book.oldPrice * quantity;
  const savings = oldTotal - currentTotal;

  return (
    <div className="product-page">
      <div className="gallery">
        <div className="main-image">
          <img src={book.images[selectedImage]} alt={book.title} />
        </div>

        <div className="thumbnails">
          {book.images.map((img, index) => (
            <button
              key={img}
              className={`thumb ${index === selectedImage ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={img} alt={`${book.title} ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="details">
        <span className="category-badge">{book.category.toUpperCase()}</span>

        <strong>{book.title}</strong>
        <p className="authors">
          by <span>{book.authors}</span>
        </p>

        <div className="rating-row">
          <span className="stars">
            <Rating
              value={book.rating}
              precision={0.1}
              readOnly
              style={{ fontSize: "20px" }}
            />
          </span>
          <span className="rating-value">{book.rating}</span>
          <span className="reviews-count">
            ({book.reviewsCount.toLocaleString()})
          </span>
        </div>

        <div className="price-row">
          <span className="price-current">${currentTotal.toFixed(2)}</span>
          <span className="price-old">${oldTotal.toFixed(2)}</span>
          <span className="save-badge">Save ${savings.toFixed(2)}</span>
        </div>

        <div className="info-grid">
          <div className="info-cell">
            <p className="info-label">ISBN</p>
            <p className="info-value">{book.isbn}</p>
          </div>
          <div className="info-cell">
            <p className="info-label">Language</p>
            <p className="info-value">{book.language}</p>
          </div>
          <div className="info-cell">
            <p className="info-label">Publisher</p>
            <p className="info-value">{book.publisher}</p>
          </div>
          <div className="info-cell">
            <p className="info-label">Published</p>
            <p className="info-value">{book.publishedYear}</p>
          </div>
          <div className="info-cell">
            <p className="info-label">Pages</p>
            <p className="info-value">{book.pages}</p>
          </div>
          <div className="info-cell">
            <p className="info-label">Format</p>
            <p className="info-value">{book.format}</p>
          </div>
        </div>

        <div className="action-row">
          <div className="qty-control">
            <button className="qty-btn" onClick={decreaseQty}>
              <Minus width={18} />
            </button>
            <span className="qty-value">{quantity}</span>
            <button className="qty-btn" onClick={increaseQty}>
              <Plus width={18} />
            </button>
          </div>

          <button className="add-to-cart-btn">
            <ShoppingCartIcon />
            Add to cart
          </button>

          <button className="icon-btn heart">
            <Heart />
          </button>
          <button className="icon-btn">
            <Share2 />
          </button>
        </div>

        <div className="perks-row">
          <div className="perk">
            <Truck className="icon-slot" />
            <p className="perk-title">Free shipping</p>
            <p className="perk-sub">Orders over $25</p>
          </div>
          <div className="perk">
            <Undo2Icon className="icon-slot" />
            <p className="perk-title">30-day returns</p>
            <p className="perk-sub">No questions</p>
          </div>
          <div className="perk">
            <LockKeyholeIcon className="icon-slot" />
            <p className="perk-title">Secure checkout</p>
            <p className="perk-sub">Encrypted</p>
          </div>
        </div>

        <div className="about-section">
          <h2>About this book</h2>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}
