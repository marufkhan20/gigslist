import { useState } from "react";
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
    <Link to={`/service-details/${_id}`} className="group">
      <div className="overflow-hidden rounded">
        {isImageLoading && (
          <div className="overflow-hidden rounded">
            <div className="w-full h-48 bg-gray-200 animate-pulse rounded"></div>
          </div>
        )}

        <img
          className={`w-full transition-all hover:scale-110 rounded ${
            isImageLoading ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          src={images[0]}
          alt={businessName}
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <img className="w-6 h-6 rounded-full" src={logo} alt="" />
          <h3 className="text-sm font-semibold text-dark leading-[18px]">
            {businessName}
          </h3>
        </div>
        <div className="mt-[10px]">
          <span className="inline-block px-2 py-[1px] rounded-full font-semibold text-xs text-dark bg-[#F6F6F7]">
            {streetState}, {streetCity}
          </span>

          <h2 className="mt-3 transition-all group-hover:text-primary font-normal text-base leading-[25px]">
            I will {title}
          </h2>

          <p className="mt-3 text-base font-semibold leading-[21px] text-dark">
            {packages ? `From $${packages[0]?.price}` : "Contact for pricing"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Service;
