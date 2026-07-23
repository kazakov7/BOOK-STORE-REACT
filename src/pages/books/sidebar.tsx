import { Search } from "lucide-react";
import CategoryFilter from "../../components/common/category";
import LanguageFilter from "../../components/common/language.-filter";
import RatingFilter from "../../components/common/rating";
import PriceFilter from "../../components/common/price";
import Button from "../../components/common/univ-button";
import { FiSearch } from "react-icons/fi";
import BookCardUniv from "../../components/common/books-page-card";
import "../../css/books.css";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar-frame">
        <div className="search-box">
          <strong className="title">SEARCH</strong>
          <input type="search" name="" id="" placeholder="Title or Author" />
          <Search className="search-box-icon" width={"18px"}></Search>
        </div>
        <CategoryFilter />
        <LanguageFilter />
        <RatingFilter />
        <PriceFilter />
        <Button height="42px">Clear filter</Button>
      </div>
      <div className="main-frame">
        <div className="search-filter-frame">
          <div className="search-box">
            <FiSearch className="search-icon" />

            <input type="text" placeholder="Search by title or author..." />
          </div>

          <div className="sort-box">
            <select name="" id="">
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="books-frame">
          <BookCardUniv />
        </div>
      </div>
    </>
  );
}
