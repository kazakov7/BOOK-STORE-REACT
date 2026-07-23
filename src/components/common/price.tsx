import "../../css/books.css";
import { useState } from "react";

function PriceFilter() {
  const [price, setPrice] = useState("");

  const prices = ["Under $15", "$15 - $25", "$25 - $40", "Over $40"];

  return (
    <div className="price-frame">
      <h4 className="title">PRICE RANGE</h4>

      <div className="price-list">
        {prices.map((item) => (
          <label key={item} className="price-item">
            <input
              type="checkbox"
              checked={price === item}
              onChange={() => setPrice(item)}
            />

            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default PriceFilter;
