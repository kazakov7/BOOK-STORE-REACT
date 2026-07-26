import { NavLink } from "react-router-dom";
import AuthLayout from "../../components/layout/auth-layout";
import "../../css/auth.css";
import { LockKeyhole, Mail, User } from "lucide-react";
export default function SignUp() {
  return (
    <AuthLayout>
      <div className="auth-card">
        <h1>Create your account</h1>
        <p className="subtitle">Join a curated community of modern readers.</p>

        <form>
          <div className="field">
            <label>Nickname</label>
            <div className="input-with-icon">
              <User color="#3b82f6" />
              <input type="text" placeholder="Jane Reader" />
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <div className="input-with-icon">
              <Mail color="#3b82f6" />
              <input type="email" placeholder="you@email.com" />
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <div className="input-with-icon">
              <LockKeyhole color="#3b82f6" />
              <input type="password" placeholder="Create a password" />
            </div>

            <p className="hint-text">
              Use 4+ characters with a mix of letters &amp; numbers.
            </p>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" />I agree to the <a href="#">Terms</a> &amp;{" "}
            <a href="#">Privacy Policy</a>
          </label>

          <button type="submit" className="primary-btn">
            Create account
          </button>
        </form>

        <p className="switch-note">
          Already have an account? <NavLink to={"/login"}>Sign in</NavLink>
        </p>
      </div>
    </AuthLayout>
  );
}
