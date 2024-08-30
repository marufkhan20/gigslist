import { ReactNode } from "react";

interface IProps {
  title: string;
  description: string | ReactNode;
}

const Description = ({ title, description }: IProps) => {
  return (
    <div>
      <h3 className="text-base">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default Description;
