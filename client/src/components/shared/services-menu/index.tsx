import { useState } from "react";
import { SERVICESMENU } from "../../../constants";
import ServiceMenuItem from "./ServiceMenuItem";

const ServicesMenu = () => {
  const [selectedService, setSelectedService] = useState("all");
  return (
    <section className="px-5 sm:px-11 pb-7 flex items-center flex-wrap gap-5">
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
