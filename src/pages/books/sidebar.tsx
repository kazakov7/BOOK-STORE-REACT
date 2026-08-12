import { Heart, Search } from "lucide-react";
import Button from "../../components/common/univ-button";
import { FiSearch } from "react-icons/fi";

import { type Dispatch } from "@reduxjs/toolkit";
import type { Book, BookInquery } from "../../libs/types/product";
import { setBooks } from "./slice";
import { createSelector } from "reselect";
import { retrieveBooks } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductService from "../../service/product.service";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/books.css";
import {
  BookCategory,
  BookLanguage,
  RatingFilter,
} from "../../libs/enums/product.enum";
import { serverApi } from "../../libs/enums/config";
import Rating from "@mui/material/Rating";
import { Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import type { CartItem } from "../../libs/types/search";
import EmptyBooks from "../../components/common/empty-books";
import EmptyCart from "../../components/common/empty-cart";

const actionDispatch = (dispatch: Dispatch) => ({
  setBooks: (data: Book[]) => dispatch(setBooks(data)),
});
const booksRetriewer = createSelector(retrieveBooks, (allBooks) => ({
  allBooks,
}));

interface SidebarProps {
  onAdd: (item: CartItem) => void;
  onToggle: (item: Book) => void;
  isInWishlist: (id: string) => boolean;
}

export default function Sidebar(props: SidebarProps) {
  const { onAdd, onToggle, isInWishlist } = props;
  const { setBooks } = actionDispatch(useDispatch());
  const { allBooks } = useSelector(booksRetriewer);

  const [productSearch, setProductSearch] = useState<BookInquery>({
    page: 1,
    limit: 12,
    order: "createdAt",
    category: BookCategory.ALL,
    language: BookLanguage.ALL,
    rating: undefined,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");

  const history = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      searchCategoryHandler(category as BookCategory);
    }
  }, [category]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => {
        console.log("data passed here", data);
        setBooks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productSearch]);

  useEffect(() => {
    if (searchText == "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  // HANDLERS
  const searchCategoryHandler = (category: BookCategory) => {
    productSearch.page = 1;
    productSearch.category = category;
    setProductSearch({ ...productSearch });
  };
  const searchLanguageHandler = (language: BookLanguage) => {
    productSearch.page = 1;
    productSearch.language = language;
    setProductSearch({ ...productSearch });
  };
  const searchRatingHandler = (rating: number | undefined) => {
    productSearch.page = 1;
    productSearch.rating = rating;
    setProductSearch({ ...productSearch });
  };
  const clearFiltersHandler = () => {
    setProductSearch({
      ...productSearch,
      category: BookCategory.ALL,
      language: BookLanguage.ALL,
      rating: undefined,
      order: "createdAt",
    });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };
  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };
  const chosenBookHandler = (id: string) => {
    history(`/book/${id}`);
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };
  return (
    <>
      <div className="sidebar-frame">
        <div className="search-box">
          <strong className="title">SEARCH</strong>
          <input
            type="search"
            name=""
            id=""
            placeholder="Searching book..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") searchProductHandler();
            }}
          />
          <Search className="search-box-icon" width={"18px"}></Search>
        </div>
        <div className="category-frame">
          <h4 className="title">CATEGORY</h4>

          <div className="category-main">
            <button
              className={`category-btn ${
                productSearch.category === BookCategory.ALL ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.ALL)}
            >
              <span className="radio"></span>
              All
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.FICTION ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.FICTION)}
            >
              <span className="radio"></span>
              Fiction
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.TECHNOLOGY
                  ? "active"
                  : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.TECHNOLOGY)}
            >
              <span className="radio"></span>
              Technology
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.BUSINESS ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.BUSINESS)}
            >
              <span className="radio"></span>
              Business
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.HISTORY ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.HISTORY)}
            >
              <span className="radio"></span>
              History
            </button>
            <button
              className={`category-btn ${
                productSearch.category === BookCategory.ROMANCE ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.ROMANCE)}
            >
              <span className="radio"></span>
              Romace
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.SCIENCE ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.SCIENCE)}
            >
              <span className="radio"></span>
              Science
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.CHILDREN ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.CHILDREN)}
            >
              <span className="radio"></span>
              Children
            </button>

            <button
              className={`category-btn ${
                productSearch.category === BookCategory.OTHER ? "active" : ""
              }`}
              onClick={() => searchCategoryHandler(BookCategory.OTHER)}
            >
              <span className="radio"></span>
              Other
            </button>
          </div>
        </div>
        <div className="language-main">
          <h4 className="title">LANGUAGE</h4>
          <button
            className={`language-btn ${
              productSearch.language === BookLanguage.ALL ? "active" : ""
            }`}
            onClick={() => searchLanguageHandler(BookLanguage.ALL)}
          >
            All
          </button>

          <button
            className={`language-btn ${
              productSearch.language === BookLanguage.ENGLISH ? "active" : ""
            }`}
            onClick={() => searchLanguageHandler(BookLanguage.ENGLISH)}
          >
            English
          </button>

          <button
            className={`language-btn ${
              productSearch.language === BookLanguage.KOREAN ? "active" : ""
            }`}
            onClick={() => searchLanguageHandler(BookLanguage.KOREAN)}
          >
            Korean
          </button>

          <button
            className={`language-btn ${
              productSearch.language === BookLanguage.UZBEK ? "active" : ""
            }`}
            onClick={() => searchLanguageHandler(BookLanguage.UZBEK)}
          >
            Uzbek
          </button>
        </div>
        <div className="rating-main">
          <h4 className="title">RATING</h4>
          <button
            className={`rating-btn ${
              productSearch.rating === undefined ? "active" : ""
            }`}
            onClick={() => searchRatingHandler(undefined)}
          >
            Any
          </button>

          <button
            className={`rating-btn ${
              productSearch.rating === RatingFilter.THREE ? "active" : ""
            }`}
            onClick={() => searchRatingHandler(RatingFilter.THREE)}
          >
            ⭐ <span>3+</span>
          </button>

          <button
            className={`rating-btn ${
              productSearch.rating === RatingFilter.FOUR ? "active" : ""
            }`}
            onClick={() => searchRatingHandler(RatingFilter.FOUR)}
          >
            ⭐ <span>4+</span>
          </button>

          <button
            className={`rating-btn ${
              productSearch.rating === RatingFilter.FIVE ? "active" : ""
            }`}
            onClick={() => searchRatingHandler(RatingFilter.FIVE)}
          >
            ⭐ <span>5</span>
          </button>
        </div>

        <Button height="42px" onClick={clearFiltersHandler}>
          Clear filter
        </Button>
      </div>
      <div className="main-frame">
        <div className="search-filter-frame">
          <div className="search-box">
            <FiSearch className="search-icon" />

            <input
              type="search"
              placeholder="Type here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") searchProductHandler();
              }}
            />
          </div>

          <div className="sort-box">
            <select
              onChange={(e) => {
                searchOrderHandler(e.target.value);
              }}
            >
              <option value="createdAt">Newest</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="views"> Most Viewed</option>
            </select>
          </div>
        </div>
        <div className="book-card-frame">
          {allBooks.map((book) => (
            <div
              className="book-card"
              key={book._id}
              onClick={() => chosenBookHandler(book._id)}
            >
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

                <div className="book-card__meta">
                  <div className="book-card__rating">
                    <Rating
                      value={book.averageRating}
                      precision={0.1}
                      readOnly
                      style={{ fontSize: "20px" }}
                    />
                    <span className="book-card__rating-value">
                      {book.averageRating?.toFixed(1)}
                    </span>
                    <strong>({book.ratingsCount})</strong>
                  </div>
                </div>
                <div className="book-card__price">
                  ${book.price} <span>{book.price}</span>
                </div>
              </div>

              <Button
                height="35px"
                width="90%"
                className="add-btn"
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
                Add cart
              </Button>
            </div>
          ))}
        </div>
        {allBooks.length > 0 ? (
          <Pagination
            className="pagination"
            count={
              allBooks.length !== 0
                ? productSearch.page + 1
                : productSearch.page
            }
            page={productSearch.page}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                slots={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                sx={{
                  color: "#555",
                  "&.Mui-selected": {
                    backgroundColor: "#1d9bf0",
                    color: "#fff",
                  },
                  "&:hover": {
                    backgroundColor: "#0393f4",
                  },
                }}
              />
            )}
            onChange={paginationHandler}
          />
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
}
