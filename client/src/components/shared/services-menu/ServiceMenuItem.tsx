interface IProps {
  service: ServiceMenu;
  selectedService: string;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
}

const ServiceMenuItem = ({
  service,
  selectedService,
  setSelectedService,
}: IProps) => {
  return (
    <div className="relative">
      <h3
        className={`py-3 px-[14px]  rounded font-medium text-base leading-4 transition-all ${
          selectedService === service?.slug
            ? "bg-[#F6F6F7] text-primary"
            : "hover:bg-[#F6F6F7] hover:text-primary text-[#5E6278]"
        } cursor-pointer`}
        onClick={() =>
          setSelectedService((prev) =>
            prev === service?.slug ? "all" : service?.slug
          )
        }
      >
        {service?.name}
      </h3>

      {selectedService === service?.slug && service?.items && (
        <div className="absolute top-[120%] left-0 min-w-[400px] bg-white rounded border border-[#F1F1F2] shadow-service-items z-50 py-5">
          {service?.items?.map((item) => (
            <p className="px-4 py-3 font-medium text-base leading-[16px] cursor-pointer transition-all hover:bg-primary-light hover:text-primary">
              {item?.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceMenuItem;
