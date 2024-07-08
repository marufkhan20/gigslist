import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "primary" | "secondary" | "danger";
  to?: string;
}

const Button = ({
  children,
  className,
  onClick,
  type = "primary",
  to,
}: ButtonProps) => {
  const styles = `py-[14px] px-4 rounded text-base leading-[14px] font-medium transition-all ${
    type === "primary"
      ? "bg-primary text-white hover:bg-primary-active"
      : "text-[#5E6278]"
  }`;

  return to ? (
    <Link className={cn(styles, className)} to={to}>
      {children}
    </Link>
  ) : (
    <button className={cn(styles, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
