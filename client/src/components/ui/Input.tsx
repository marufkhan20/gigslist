import { ChangeEvent } from "react";
import { cn } from "../../lib/utils";

interface IProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  className,
  id,
  disabled,
}: IProps) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        className={cn(
          `w-full inline-block transition-all focus:ring-1 border border-[##E1E3EA] rounded py-3 px-[18px] ${
            icon ? "pl-14" : "pl-[18px]"
          } outline-none relative text-base text-[#7E8299]`,
          className
        )}
      />
      {icon && (
        <img
          src={`/images/icons/${icon}`}
          className="absolute top-[50%] left-5 translate-y-[-50%]"
          alt=""
        />
      )}
    </div>
  );
};

export default Input;
