import { NavLink } from "react-router-dom";
import AuthLayout from "../../components/layout/auth-layout";
import "../../css/auth.css";
import { LockKeyhole, Mail } from "lucide-react";
export default function Login() {
  return (
    <AuthLayout>
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to continue your reading journey.</p>

        <form>
          <div className="field">
            <label>Email</label>
            <div className="input-with-icon">
              <Mail color="#3b82f6" />
              <input type="email" placeholder="you@email.com" />
            </div>
          </div>

          <div className="field">
            <div className="label-row">
              <label>Password</label>
            </div>
            <div className="input-with-icon">
              <LockKeyhole color="#3b82f6" />
              <input type="password" placeholder="••••••••" />
              <button type="button" className="eye-btn">
                <span className="icon-slot" />
              </button>
            </div>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" />
            Remember me
          </label>

          <button type="submit" className="primary-btn">
            Sign in <span className="icon-slot" />
          </button>
        </form>

        <p className="switch-note">
          Don't have an account? <NavLink to={"/signup"}>Sign up</NavLink>
        </p>
      </div>
    </AuthLayout>
  );
}
