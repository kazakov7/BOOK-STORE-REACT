import "../../css/main.css";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { useGlobals } from "../../hooks/useGlobal";
import { serverApi } from "../../libs/enums/config";

export default function Navbar(props: any) {
  const { cartItems, wishlistItems } = props;
  const { authMember } = useGlobals();

  return (
    <>
      <div className="navbar-frame">
        <div className="navbar-left">
          <NavLink to={"/"}>
            <img src="/icons/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Books
          </NavLink>

          {authMember && (
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Page
            </NavLink>
          )}

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
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
            <NavLink to={"/login"}>
              <button className="login-btn">Login</button>
            </NavLink>
          ) : (
            <NavLink to={"/profile"}>
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
      </div>
    </>
  );
}
