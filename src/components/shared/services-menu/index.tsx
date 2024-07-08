import { useState } from "react";
import { SERVICESMENU } from "../../../constants";
import ServiceMenuItem from "./ServiceMenuItem";

const ServicesMenu = () => {
  const [selectedService, setSelectedService] = useState("all");
  return (
    <section className="px-11 pb-7 flex items-center gap-[18px]">
      {SERVICESMENU?.map((service) => (
        <ServiceMenuItem
          service={service}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      ))}
    </section>
  );
};

export default ServicesMenu;
