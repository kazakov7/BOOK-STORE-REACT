import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AuthLayout({ children }: any) {
  return (
    <div className="auth-page">
      <div className="auth-brand">
        <NavLink to={"/"}>
          <div className="brand-row">
            <img src="/icons/logo2.png" alt="" />
          </div>
        </NavLink>

        <div className="quote-block">
          <BookOpen color="#3b82f6" />
          <span className="quote-text">
            "A reader lives a thousand lives before he dies."
          </span>
          <p className="quote-author">— George R.R. Martin</p>
        </div>

        <p className="copyright">© 2026 Literary Canvas</p>
      </div>

      <div className="auth-form-panel">{children}</div>
    </div>
  );
}
