import { useState } from "react";

const Packages = () => {
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
          Basic
        </button>
        <button
          className={`flex-1 py-[18px] px-6 text-[15px] font-semibold border-b-[3px] border-x border-x-[#D8D8E5] ${
            active === "advance"
              ? "bg-white cursor-default border-primary text-primary"
              : "cursor-pointer bg-[#F6F6F7] border-b border-[#D8D8E5] text-[#5E6278]"
          }`}
          onClick={() => setActive("advance")}
        >
          Advance
        </button>
        <button
          className={`flex-1 py-[18px] px-6 text-[15px] font-semibold border-b-[3px] ${
            active === "premium"
              ? "bg-white cursor-default border-primary text-primary"
              : "cursor-pointer bg-[#F6F6F7] border-b border-[#D8D8E5] text-[#5E6278]"
          }`}
          onClick={() => setActive("premium")}
        >
          Premium
        </button>
      </div>

      <div className="mt-8 px-6 pb-11">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2>
            {(active === "basic" && "BASIC SERVICE") ||
              (active === "advance" && "ADVANCE SERVICE") ||
              (active === "premium" && "PREMIUM SERVICE")}
          </h2>

          <h2 className="font-medium text-xl">
            {(active === "basic" && "$650") ||
              (active === "advance" && "$1000") ||
              (active === "premium" && "$1500")}
          </h2>
        </div>

        <p className="mt-11">
          {(active === "basic" &&
            "Basic Package Only Laptop-scenes Includes, Background Music,Logo, and 720HD Video") ||
            (active === "advance" &&
              "Advance Package Only Laptop-scenes Includes, Background Music,Logo, and 720HD Video") ||
            (active === "premium" &&
              "Premium Package Only Laptop-scenes Includes, Background Music,Logo, and 720HD Video")}
        </p>

        <button className="mt-12 font-medium text-base leading-4 border border-dark rounded transition-all outline-none hover:border-primary hover:bg-primary hover:text-white block w-full py-4 px-5">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default Packages;
