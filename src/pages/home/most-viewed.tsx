import { NavLink } from "react-router-dom";
import Container from "../../components/common/container";
import { BookOpen, Eye, Heart } from "lucide-react";
import { Box, Rating } from "@mui/material";
import Button from "../../components/common/univ-button";
import "../../css/home.css";
import { createSelector } from "reselect";
import { retrieveMostViewed } from "./selector";
import { useSelector } from "react-redux";
import type { Book } from "../../libs/types/product";
import { serverApi } from "../../libs/enums/config";

const mostViewedRetriewer = createSelector(
  retrieveMostViewed,
  (mostViewed) => ({ mostViewed }),
);
export default function MostViewed() {
  const { mostViewed } = useSelector(mostViewedRetriewer);
  return (
    <>
      <Container>
        <div className="section-frame" style={{ marginTop: "100px" }}>
          <div className="section-top">
            <span>POPULAR</span>
            <strong>Most Viewed Books</strong>
            <div>
              <span>Discover the books readers are viewing the most.</span>
              <NavLink to={"/books"}>View All→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <NavLink to={"/books"} className={"most-viewed-card-frame"}>
              {mostViewed.length !== 0 ? (
                mostViewed.map((book: Book) => {
                  const imagePath = `${serverApi}/${book.images[0]}`;
                  return (
                    <div className="book-card" key={book._id}>
                      <div className="book-card__cover">
                        <div
                          className="book-card__cover-inner"
                          style={{ backgroundImage: `url(${imagePath})` }}
                        ></div>
                        <div className="book-card__overlay" />
                        <div className="book-badge badge-trending">
                          <Eye size={13} />
                          {book.views} views
                        </div>

                        <button
                          aria-label="Sevimlilarga qo'shish"
                          className="book-card__like-btn"
                        >
                          <Heart size={20} strokeWidth={1.75} />
                        </button>
                      </div>

                      <div className="book-card__info">
                        <div className="book-card__info-title">
                          {book.title}{" "}
                        </div>
                        <div className="book-card__info-author">
                          {book.author}
                        </div>

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
                          >
                            <svg
                              width="15"
                              height="105"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9"
                                cy="21"
                                r="1"
                                fill="currentColor"
                              />
                              <circle
                                cx="19"
                                cy="21"
                                r="1"
                                fill="currentColor"
                              />
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
                  );
                })
              ) : (
                <Box className="no-data">
                  <BookOpen size={56} strokeWidth={1.5} />
                  Most Viwed books are not available!
                </Box>
              )}
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
}
