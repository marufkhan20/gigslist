import { ChangeEvent } from "react";
import { cn } from "../../lib/utils";

interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  icon?: string;
  className?: string;
}

const Textarea = ({
  placeholder,
  value,
  onChange,
  icon,
  className,
}: IProps) => {
  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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

export default Textarea;
