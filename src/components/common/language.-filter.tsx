import "../../css/books.css";
import { useState } from "react";

function LanguageFilter() {
  const [language, setLanguage] = useState("All");

  const languages = ["All", "English", "Spanish", "French"];

  return (
    <div className="language-frame">
      <h4 className="title">LANGUAGE</h4>

      <div className="language-list">
        {languages.map((item) => (
          <button
            key={item}
            className={
              language === item ? "language-btn active" : "language-btn"
            }
            onClick={() => setLanguage(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageFilter;
