import { useState } from "react";

interface IProps {
  packages: Package[];
  handleEmailClick: () => void;
}

const Packages = ({ packages, handleEmailClick }: IProps) => {
  const [active, setActive] = useState("basic");
  return (
    <div className="border border-[#D8D8E5] mb-[30px]">
      <div className="flex items-center box-border flex-wrap">
        <button
          className={`flex-1 py-[18px] px-6 text-[15px] font-semibold border-b-[3px] ${
            active === "basic"
              ? "bg-white cursor-default border-primary text-primary"
              : "cursor-pointer bg-[#F6F6F7] border-b border-[#D8D8E5] text-[#5E6278]"
          }`}
          onClick={() => setActive("basic")}
        >
          {packages[0]?.name || "Basic"}
        </button>
        <button
          className={`flex-1 py-[18px] px-6 text-[15px] font-semibold border-b-[3px] border-x border-x-[#D8D8E5] ${
            active === "advance"
              ? "bg-white cursor-default border-primary text-primary"
              : "cursor-pointer bg-[#F6F6F7] border-b border-[#D8D8E5] text-[#5E6278]"
          }`}
          onClick={() => setActive("advance")}
        >
          {packages[1]?.name || "Advance"}
        </button>
        <button
          className={`flex-1 py-[18px] px-6 text-[15px] font-semibold border-b-[3px] ${
            active === "premium"
              ? "bg-white cursor-default border-primary text-primary"
              : "cursor-pointer bg-[#F6F6F7] border-b border-[#D8D8E5] text-[#5E6278]"
          }`}
          onClick={() => setActive("premium")}
        >
          {packages[2]?.name || "Premium"}
        </button>
      </div>

      <div className="mt-8 px-6 pb-11">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="uppercase">
            {(active === "basic" && packages[0]?.name) ||
              (active === "advance" && packages[1]?.name) ||
              (active === "premium" && packages[2]?.name)}{" "}
            Service
          </h2>

          <h2 className="font-medium text-xl">
            {(active === "basic" && "$650") ||
              (active === "advance" && "$1000") ||
              (active === "premium" && "$1500")}
          </h2>
        </div>

        <p className="mt-11">
          {(active === "basic" && packages[0]?.description) ||
            (active === "advance" && packages[1]?.description) ||
            (active === "premium" && packages[2]?.description)}
        </p>

        <button
          className="mt-12 font-medium text-base leading-4 border border-dark rounded transition-all outline-none hover:border-primary hover:bg-primary hover:text-white block w-full py-4 px-5"
          onClick={handleEmailClick}
        >
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default Packages;
