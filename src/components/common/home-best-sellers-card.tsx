import { Heart } from "lucide-react";
import "../../css/commonCss/best-sellerss-card.css";
import "../../css/home.css";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
const books = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTep58Q4ePztYPXqMReHPkHlFWxXKMoHn4q_Lty-t7l7A&s=10",
    title: "Sapiens",
    author: "Yuval Noah",
    price: "22",
    rating: 4.3,
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5O3_c4l-ASFVdasKXQYsMNsfwlNhAiOZvPSI-VgeW9Q&s=10",
    title: "Atomic Habits",
    author: "James Clear",
    price: "45.5",
    rating: 3.5,
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5U7_4lfQsHDBrtRLdNu-I6GARqk96K2bWMVroS-N_A&s=10",
    title: "Dune",
    author: "Frank Herbert",
    price: "67",
    rating: 4.5,
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbH53XDMIRSXpC3BryVk7D9K5p6srniw2P6wcENeesrw&s=10",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "76",
    rating: 5,
  },
  {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8A11fWQ6XXoA2F0cd5LHEE6s3g3jEDLxc26IrRfS5g&s=10",
    title: "Rich dad & poor dad",
    author: "Robert Kiosaki",
    price: "230",
    rating: 4.5,
  },
];
export default function BestSellersCard() {
  return (
    <NavLink to={"/books"} className={"best-card-frame"}>
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <div className="book-card__cover">
            <div
              className="book-card__cover-inner"
              style={{ backgroundImage: `url(${book.image})` }}
            ></div>
            <div className="book-card__overlay" />

            <button
              aria-label="Sevimlilarga qo'shish"
              className="book-card__like-btn"
            >
              <Heart size={20} strokeWidth={1.75} />
            </button>
          </div>

          <div className="book-card__info">
            <div className="book-card__info-title">{book.title}</div>
            <div className="book-card__info-author">{book.author}</div>

            <div className="book-card__meta">
              <div className="book-card__price">${book.price}</div>
              <div className="book-card__rating">
                <Rating
                  value={book.rating}
                  precision={0.1}
                  readOnly
                  style={{ fontSize: "20px" }}
                />
                <span className="book-card__rating-value">{book.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </NavLink>
  );
}
