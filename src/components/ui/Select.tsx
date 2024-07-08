import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Select = ({ children, className }: IProps) => {
  return (
    <select
      className={cn(
        "w-full inline-block transition-all focus:ring-1 border border-[##E1E3EA] rounded py-3 px-[18px] outline-none text-base text-[#7E8299] cursor-pointer",
        className
      )}
    >
      {children}
    </select>
  );
};

export default Select;
