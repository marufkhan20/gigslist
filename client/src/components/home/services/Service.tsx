import { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface IProps {
  gig: Gig;
}

const Service = ({ gig }: IProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const {
    _id,
    images,
    logo,
    businessName,
    streetState,
    streetCity,
    title,
    packages,
  } = gig || {};
  return (
    <Link
      to={`/service-details/${_id}`}
      className="group overflow-hidden rounded-2xl shadow"
    >
      <div className="overflow-hidden relative">
        {isImageLoading && (
          <div className="overflow-hidden">
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
          </div>
        )}

        <img
          className={`w-full transition-all hover:scale-110 ${
            isImageLoading ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          src={images[0]}
          alt={businessName}
          loading="lazy"
          onLoad={handleImageLoad}
        />

        {!isImageLoading && (
          <div className="absolute bottom-3 right-4 px-[12px] py-[5px] bg-black/50 text-white rounded-full flex items-center gap-2">
            <BsFillCameraFill /> {images?.length}
          </div>
        )}
      </div>
      <div className="py-4 px-4">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6 rounded-full" src={logo} alt="" />
          <h3 className="text-sm font-semibold text-dark leading-[18px]">
            {businessName}
          </h3>
        </div>
        <div className="mt-[10px]">
          <div className="flex items-center flex-wrap gap-2 justify-between">
            <span className="rounded-full font-semibold text-xs text-[#7E8299] flex gap-1 items-center">
              <CiLocationOn className="text-sm" /> {streetState}, {streetCity}
            </span>
            <div className="flex items-center gap-1 text-sm">
              <FaStar className="text-[#FBBC05]" />
              <span className="text-[#FBBC05] font-medium">5.0</span>
              <span>(10)</span>
            </div>
          </div>

          <h2 className="mt-3 transition-all group-hover:text-primary font-normal text-base leading-[25px]">
            I will {title}
          </h2>

          <p className="mt-3 text-base font-semibold leading-[21px] text-dark">
            {packages ? (
              <div>
                From <span className="text-primary">${packages[0]?.price}</span>
              </div>
            ) : (
              "Contact for pricing"
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Service;
