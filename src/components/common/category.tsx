import { useState } from "react";
import "../../css/books.css";

function CategoryFilter() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Fiction",
    "Programming",
    "Business",
    "History",
    "Science",
    "Biography",
    "Self Development",
    "Children",
  ];

  return (
    <div className="category-frame">
      <h4 className="title">CATEGORY</h4>

      <div className="category-list">
        {categories.map((item) => (
          <label key={item} className="category-item">
            <input
              type="radio"
              name="category"
              value={item}
              checked={category === item}
              onChange={(e) => setCategory(e.target.value)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
