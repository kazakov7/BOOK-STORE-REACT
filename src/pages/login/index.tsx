import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/auth-layout";
import "../../css/auth.css";
import { Eye, LockKeyhole, UserIcon } from "lucide-react";
import { useState } from "react";
import type { T } from "../../libs/types/common";
import { messages } from "../../libs/config";
import type { MemberLoginInput } from "../../libs/types/member";
import MemberService from "../../service/MemberService";
import { useGlobals } from "../../hooks/useGlobal";
import { toast } from "react-toastify";
export default function Login() {
  const [identifier, setMemberNick] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setAuthMember } = useGlobals();
  const [showPassword, setShowPassword] = useState(false);

  /** HANDLERS **/
  const handleUsername = (e: T) => {
    setMemberNick(e.target.value);
  };
  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handleLoginRequest = async () => {
    try {
      console.log("inputs", identifier, memberPassword);
      const fullFil = identifier == "" && memberPassword == "";
      if (fullFil) throw new Error(messages.error3);
      const loginInput: MemberLoginInput = {
        identifier: identifier,
        memberPassword: memberPassword,
      };
      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(
        // @ts-ignore
        err.response?.data?.message || err.message || "Something went wrong",
      );
    }
  };

  return (
    <AuthLayout>
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to continue your reading journey.</p>

        <form>
          <div className="field">
            <label>Email or Username</label>
            <div className="input-with-icon">
              <UserIcon color="#3b82f6" />
              <input
                type="text"
                placeholder="Email or username"
                onChange={handleUsername}
              />
            </div>
          </div>

          <div className="field">
            <div className="label-row">
              <label>Password</label>
            </div>
            <div className="input-with-icon">
              <LockKeyhole color="#3b82f6" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                onChange={handlePassword}
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span>
                  <Eye color="#3b82f6" />
                </span>
              </button>
            </div>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" />
            Remember me
          </label>

          <button
            type="button"
            className="primary-btn"
            onClick={handleLoginRequest}
          >
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
