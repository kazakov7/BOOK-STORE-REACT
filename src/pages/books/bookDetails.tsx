import { useEffect, useState } from "react";
import "../../css/book-details.css";
import { Breadcrumbs, Rating } from "@mui/material";
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
import type { Dispatch } from "@reduxjs/toolkit";
import type { Book } from "../../libs/types/product";
import { setChosenProduct } from "./slice";
import { createSelector } from "reselect";
import { retrieveChosenProduct } from "./selector";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../service/product.service";
import { serverApi } from "../../libs/enums/config";
import Container from "../../components/common/container";
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Book) => dispatch(setChosenProduct(data)),
});

const cosenProductRetriewer = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  }),
);

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const { setChosenProduct } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(cosenProductRetriewer);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));

  useEffect(() => {
    const product = new ProductService();
    product
      .getProduct(id)
      .then((data) => setChosenProduct(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!chosenProduct) return null;

  return (
    <Container>
      <Breadcrumbs className="breadCrumbs">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to={`/books?category=${chosenProduct.category}`}>
          {chosenProduct.category.toLocaleLowerCase()}
        </Link>
        <span>{chosenProduct.title}</span>
      </Breadcrumbs>
      <div className="product-page">
        <div className="gallery">
          <div className="main-image">
            <img
              src={`${serverApi}/${chosenProduct.images[selectedImage]}`}
              alt={chosenProduct.title}
            />
          </div>

          <div className="thumbnails">
            {chosenProduct.images.map((img, index) => (
              <button
                key={img}
                className={`thumb ${index === selectedImage ? "active" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={`${serverApi}/${img}`}
                  alt={`${chosenProduct.title} ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="details">
          <span className="category-badge">
            {chosenProduct.category.toUpperCase()}
          </span>

          <strong>{chosenProduct.title}</strong>
          <p className="authors">
            by <span>{chosenProduct.author}</span>
          </p>

          <div className="rating-row">
            <span className="stars">
              <Rating
                value={chosenProduct.averageRating}
                precision={0.1}
                readOnly
                style={{ fontSize: "20px" }}
              />
            </span>
            <span className="rating-value">{chosenProduct.averageRating}</span>
            <span className="reviews-count">
              ({chosenProduct.ratingsCount})
            </span>
          </div>

          <div className="price-row">
            <span className="price-current">
              ${chosenProduct.price.toFixed(2)}
            </span>
          </div>

          <div className="info-grid">
            <div className="info-cell">
              <p className="info-label">ISBN</p>
              <p className="info-value">{chosenProduct.isbn}</p>
            </div>
            <div className="info-cell">
              <p className="info-label">Language</p>
              <p className="info-value">{chosenProduct.language}</p>
            </div>

            <div className="info-cell">
              <p className="info-label">Published</p>
              <p className="info-value">{chosenProduct.publishedYear}</p>
            </div>
            <div className="info-cell">
              <p className="info-label">Pages</p>
              <p className="info-value">{chosenProduct.pages}</p>
            </div>
            <div className="info-cell">
              <p className="info-label">Views</p>
              <p className="info-value">{chosenProduct.views}</p>
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
            <p>
              {chosenProduct.description
                ? chosenProduct.description
                : "no descrption"}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
