import { ReactNode } from "react";
import { ImSpinner9 } from "react-icons/im";

interface IProps {
  children: ReactNode;
  isLoading?: boolean;
}

const CreateNewGigLayout = ({ children, isLoading }: IProps) => {
  return (
    <div className={`w-full relative md:w-[835px] md:mx-auto`}>
      {children}

      {isLoading && (
        <div className="w-full absolute  z-50 inset-0 bottom-[69px] bg-white/55 border rounded flex items-center justify-center">
          <ImSpinner9 className="transition-all text-3xl animate-spin" />
        </div>
      )}
    </div>
  );
};

export default CreateNewGigLayout;
