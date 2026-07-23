import { NavLink } from "react-router-dom";
import "../../css/main.css";
import Container from "../common/container";

export default function Footer() {
  return (
    <Container>
      <footer className="footer">
        <div className="footer-top">
          <div className="brand-col">
            <div className="navbar-left">
              <NavLink to={"/"}>
                <img src="/icons/logo.png" alt="" />
              </NavLink>
            </div>
            <p className="brand-desc">
              A curated digital atheneum for the modern reader. Thoughtful
              books, frictionless discovery, delivered with care.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.1-1.7-5.7-.2-.8.8-1.2 1.9-1.1 3-3.2-.2-6.1-1.7-8.1-4.2-1 1.8-.5 4 1.1 5.2-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.6 3.1 4-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.2 11.7-11.6v-.5c.8-.6 1.5-1.3 2-2.1z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="FaceBook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </a>
              <a href="#" aria-label="You Tube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="link-cols">
            <div className="link-col">
              <h4>Company</h4>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/books"}>Books</NavLink>
              <NavLink to={"/profile"}>About</NavLink>
            </div>
            <div className="link-col">
              <h4>Help</h4>
              <a href="#">Contact</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">FAQ</a>
            </div>
            <div className="link-col">
              <h4>Categories</h4>
              <a href="#">Fiction</a>
              <a href="#">Programming</a>
              <a href="#">Business</a>
              <a href="#">Science</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Literary Canvas. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
