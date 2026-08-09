import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/auth-layout";
import "../../css/auth.css";
import { LockKeyhole, Mail, Phone, PhoneCallIcon, User } from "lucide-react";
import { useGlobals } from "../../hooks/useGlobal";
import { useState } from "react";
import type { T } from "../../libs/types/common";
import type { MemberInput } from "../../libs/types/member";
import { messages } from "../../libs/config";
import MemberService from "../../service/MemberService";

export default function SignUp() {
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const { setAuthMember } = useGlobals();

  const navigate = useNavigate();
  /** HANDLERS **/
  const handleUsername = (e: T) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };
  const handleEmail = (e: T) => {
    setMemberEmail(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handleSignupRequest = async () => {
    try {
      console.log(
        "inputs",
        memberNick,
        memberPassword,
        memberPhone,
        memberPhone,
      );
      const fullFil =
        memberNick == "" && memberPassword == "" && memberPhone == "";
      if (fullFil) throw new Error(messages.error3);
      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
        memberEmail: memberEmail,
      };
      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <h1>Create your account</h1>
        <p className="subtitle">Join a curated community of modern readers.</p>

        <form>
          <div className="field">
            <label>Username</label>
            <div className="input-with-icon">
              <User color="#3b82f6" />
              <input
                type="text"
                placeholder="Jane Reader"
                onChange={handleUsername}
                required
              />
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <div className="input-with-icon">
              <Mail color="#3b82f6" />
              <input
                type="email"
                placeholder="you@email.com"
                onChange={handleEmail}
                required
              />
            </div>
          </div>
          <div className="field">
            <label>Phone number</label>
            <div className="input-with-icon">
              <Phone color="#3b82f6" />
              <input
                type="number"
                placeholder="+82 010 1234-5678"
                onChange={handlePhone}
                required
              />
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <div className="input-with-icon">
              <LockKeyhole color="#3b82f6" />
              <input
                type="password"
                placeholder="Create a password"
                onChange={handlePassword}
                required
              />
            </div>

            <p className="hint-text">
              Use 4+ characters with a mix of letters &amp; numbers.
            </p>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" />I agree to the <a href="#">Terms</a> &amp;{" "}
            <a href="#">Privacy Policy</a>
          </label>

          <button
            type="button"
            className="primary-btn"
            onClick={handleSignupRequest}
          >
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
