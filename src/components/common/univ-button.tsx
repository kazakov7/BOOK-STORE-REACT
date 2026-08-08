import type { ReactNode } from "react";
import "../../css/commonCss/univ-btn.css";

interface ButtonProps {
  children?: ReactNode;
  width?: string;
  height?: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  width = "100%",
  height = "60px",
  onClick,
  disabled,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
      style={{ width, height }}
    >
      {children}
    </button>
  );
}
