import { SERVICES } from "../../../constants";
import Service from "./Service";

const Services = () => {
  return (
    <section className="px-5 sm:px-11 grid sm:grid-cols-2 pb-10 md:grid-cols-3 lg:grid-cols-4 gap-14">
      {SERVICES?.map((service) => (
        <Service key={service?._id} service={service} />
      ))}
    </section>
  );
};

export default Services;
