import { NavLink } from "react-router-dom";
import "../../css/homeCss/header.css";
export default function Home() {
  return (
    <>
      <div className="header-frame">
        <div className="header-left">
          <div className="content-badge">
            ✨<span>Curated by editors, loved by readers</span>
          </div>

          <h1 className="content-title">
            Discover your <br /> next favorite <span>book.</span>
          </h1>

          <p className="content-description">
            Explore thousands of carefully selected books across every genre.
            Find bestsellers, new releases, and timeless classics in one place.
          </p>

          <div className="content-buttons">
            <NavLink to={"/books"}>
              <button className="btn-primary">
                Explore Books
                <span>→</span>
              </button>
            </NavLink>
            <NavLink to={"/books"}>
              <button className="btn-secondary">Best Sellers</button>
            </NavLink>
          </div>

          <div className="content-stats">
            <div className="stat">
              <h3>12k+</h3>
              <p>Curated titles</p>
            </div>

            <div className="stat">
              <h3>98%</h3>
              <p>Reader love</p>
            </div>

            <div className="stat">
              <h3>24h</h3>
              <p>Fast delivery</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <img src="/img/header-image.svg" alt="" />
          <div className="header-right-content">
            <img src="/icons/Overlay.svg" alt="" />
            <div>
              <strong>#1this week</strong>
              <span>Atomic habits</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
