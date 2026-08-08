import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../components/common/container";
import { Box, Rating } from "@mui/material";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import Button from "../../components/common/univ-button";
import "../../css/home.css";
import { createSelector } from "reselect";
import { retrieveNewArriwals } from "./selector";
import { useSelector } from "react-redux";
import { serverApi } from "../../libs/enums/config";
import type { Book } from "../../libs/types/product";
const mostViewedRetriewer = createSelector(
  retrieveNewArriwals,
  (newArriwals) => ({ newArriwals }),
);
export default function NewArriwals() {
  const history = useNavigate();
  const chosenBookHandler = (id: string) => {
    history(`/book/${id}`);
  };
  const { newArriwals } = useSelector(mostViewedRetriewer);
  return (
    <>
      <Container>
        <div className="section-frame" style={{ marginTop: "100px" }}>
          <div className="section-top">
            <span>JUST IN</span>
            <strong>New Arriwals</strong>
            <div>
              <span>
                Fresh on the shelf — recently stocked and ready to read.
              </span>
              <NavLink to={"/books"}>View All→</NavLink>
            </div>
          </div>
          <div className="section-bottom">
            <div className={"new-arrriwals-card-frame"}>
              {newArriwals.length !== 0 ? (
                newArriwals.map((book: Book) => {
                  const imagePath = `${serverApi}/${book.images[0]}`;
                  return (
                    <div
                      className="book-card"
                      key={book._id}
                      onClick={() => chosenBookHandler(book._id)}
                    >
                      <div className="book-card__cover">
                        <div
                          className="book-card__cover-inner"
                          style={{ backgroundImage: `url(${imagePath})` }}
                        ></div>
                        <div className="book-card__overlay" />

                        <div className="book-badge badge-new">
                          <Sparkles size={13} />
                          New Arrival
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
                          {book.title}
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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
