import "../../css/main.css";
import { NavLink } from "react-router-dom";
import { Menu, SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { useGlobals } from "../../hooks/useGlobal";
import { serverApi } from "../../libs/enums/config";

export default function Navbar(props: any) {
  const { cartItems, wishlistItems } = props;
  const { authMember } = useGlobals();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="navbar-frame">
        <div className="navbar-left">
          <NavLink to={"/"}>
            <img src="/icons/logo.png" alt="" />
          </NavLink>
        </div>
        <div className={`navbar-links ${isMenuOpen ? "is-open" : ""}`}>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/books"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Books
          </NavLink>

          {authMember && (
            <NavLink
              to="/profile"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Page
            </NavLink>
          )}

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          {!authMember && (
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="mobile-auth-link"
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="navbar-right">
          <div className="search-box">
            <SearchIcon
              style={{ width: "19px", height: "19px", color: "#075985" }}
            />
            <input type="search" name="" id="" placeholder="Search" />
          </div>

          <div className="icon-box">
            <NavLink to={"/wishlist"}>
              <img src="/icons/wishlist.svg" alt="" />
              <span className="badge">{wishlistItems.length}</span>
            </NavLink>
          </div>

          <div className="icon-box">
            <NavLink to={"/cart"}>
              <img src="/icons/cart.svg" alt="" />
              <span className="badge">{cartItems.length}</span>
            </NavLink>
          </div>

          {!authMember ? (
            <NavLink to={"/login"} className="desktop-auth-action">
              <button className="login-btn">Login</button>
            </NavLink>
          ) : (
            <NavLink to={"/profile"} className="desktop-auth-action">
              <img
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember.memberImage}`
                    : "/img/default.png"
                }
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "10px",
                }}
              />
            </NavLink>
          )}
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </>
  );
}
