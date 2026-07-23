import { FaStar } from "react-icons/fa";
import "../../css/books.css";
import { useState } from "react";

function RatingFilter() {
  const [rating, setRating] = useState("Any");

  const ratings = [
    { id: "Any", label: "Any" },
    { id: "3", label: "3+" },
    { id: "4", label: "4+" },
    { id: "4.5", label: "4.5+" },
  ];

  return (
    <div className="rating-frame">
      <h4 className="title">RATING</h4>

      <div className="rating-list">
        {ratings.map((item) => (
          <button
            key={item.id}
            className={rating === item.id ? "rating-btn active" : "rating-btn"}
            onClick={() => setRating(item.id)}
          >
            {item.id !== "Any" && <FaStar className="rating-star" />}

            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RatingFilter;
