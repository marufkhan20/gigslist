import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="grid sm:grid-cols-3 gap-[34px]">{children}</div>;
};

export default Section;
