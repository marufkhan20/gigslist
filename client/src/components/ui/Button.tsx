import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "border";
  type?: "submit" | "button" | "reset" | undefined;
  to?: string;
  loading?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
  type = "button",
  to,
  loading,
}: ButtonProps) => {
  const styles = `py-[14px] px-4 rounded text-base leading-[14px] font-medium border border-transparent transition-all ${
    variant === "primary"
      ? loading
        ? "bg-primary/60 text-white cursor-not-allowed"
        : "bg-primary text-white hover:bg-primary-active"
      : variant === "border"
      ? loading
        ? "border-primary/60 cursor-not-allowed text-primary/60 opacity-60"
        : "border-primary text-primary hover:bg-primary hover:text-white"
      : "text-[#5E6278]"
  }`;

  return to ? (
    <Link className={cn(styles, className)} to={to}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={cn(styles, className)}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <div className="flex gap-2 items-center justify-center">
          <ImSpinner9 className="transition-all animate-spin" /> {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
