import { Heart } from "lucide-react";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "../../components/common/univ-button";
import Container from "../../components/common/container";
import "../../css/home.css";
import type { CartItem } from "../../libs/types/search";
import type { Book } from "../../libs/types/product";
import { serverApi } from "../../libs/enums/config";

interface WishlistPageProps {
  onAdd: (item: CartItem) => void;
  onToggle: (item: Book) => void;
  wishlistItems: Book[];
  isInWishlist: (id: string) => boolean;
}
export default function ProfileWishlist(props: WishlistPageProps) {
  const { onAdd, onToggle, wishlistItems, isInWishlist } = props;
  return (
    <Container>
      <div className={"new-arrriwals-card-frame"}>
        {wishlistItems.map((book) => (
          <div className="book-card" key={book._id}>
            <div className="book-card__cover">
              <div
                className="book-card__cover-inner"
                style={{
                  backgroundImage: `url(${serverApi}/${book.images[0]})`,
                }}
              ></div>
              <div className="book-card__overlay" />

              <button
                aria-label="Sevimlilarga qo'shish"
                className={`book-card__like-btn ${isInWishlist(book._id) ? "liked" : ""}`}
                onClick={(e) => {
                  onToggle(book);
                  e.stopPropagation();
                }}
              >
                <Heart
                  size={20}
                  strokeWidth={1.75}
                  color={isInWishlist(book._id) ? "#fff" : "black"}
                  fill={isInWishlist(book._id) ? "#fff" : "none"}
                />
              </button>
            </div>

            <div className="book-card__info">
              <div className="book-card__info-title">{book.title}</div>
              <div className="book-card__info-author">{book.author}</div>

              <div className="book-card__rating">
                <Rating
                  value={book.averageRating}
                  precision={0.1}
                  readOnly
                  style={{ fontSize: "20px" }}
                />
                <span className="book-card__rating-value">
                  {book.averageRating}
                </span>
              </div>
              <div className="book-card__meta">
                <div className="book-card__price">${book.price}</div>
                <Button
                  className="book-card-btn"
                  width="50%"
                  height="35px"
                  onClick={(e) => {
                    onAdd({
                      _id: book._id,
                      name: book.title,
                      author: book.author,
                      language: book.language,
                      price: book.price,
                      quantity: 1,
                      image: book.images[0],
                    });

                    e.stopPropagation();
                  }}
                >
                  <svg
                    width="15"
                    height="105"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="21" r="1" fill="currentColor" />
                    <circle cx="19" cy="21" r="1" fill="currentColor" />
                    <path
                      d="M1 1h3l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  ADD CART
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
