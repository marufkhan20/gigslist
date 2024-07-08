import { Link } from "react-router-dom";

interface IProps {
  service: Service;
}

const Service = ({ service }: IProps) => {
  const {
    _id,
    companyImg,
    companyName,
    location,
    thumbnail,
    title,
    fromPrice,
  } = service || {};
  return (
    <Link to={`/service-details/${_id}`} className="group">
      <div className="overflow-hidden rounded">
        <img
          className="w-full transition-all hover:scale-110 rounded"
          src={`/images/services/${thumbnail}`}
          alt=""
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6 rounded-full"
            src={`/images/services/${companyImg}`}
            alt=""
          />
          <h3 className="text-sm font-semibold text-dark leading-[18px]">
            {companyName}
          </h3>
        </div>
        <div className="mt-[10px]">
          <span className="inline-block px-2 py-[1px] rounded-full font-semibold text-xs text-dark bg-[#F6F6F7]">
            {location}
          </span>

          <h2 className="mt-3 transition-all group-hover:text-primary font-normal text-base leading-[25px]">
            {title}
          </h2>

          <p className="mt-3 text-base font-semibold leading-[21px] text-dark">
            {fromPrice ? `From $${fromPrice}` : "Contact for pricing"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Service;
