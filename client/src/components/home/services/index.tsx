import Service from "./Service";
import ServiceSkeleton from "./ServiceSkeleton";

interface IProps {
  loading: boolean;
  gigs: Gig[];
}

const Services = ({ loading, gigs }: IProps) => {
  return (
    <section className="px-5 sm:px-11 grid sm:grid-cols-2 pb-10 md:grid-cols-3 lg:grid-cols-4 gap-14">
      {loading && (
        <>
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
          <ServiceSkeleton />
        </>
      )}
      {!loading &&
        gigs?.map((gig: Gig) => <Service key={gig?._id} gig={gig} />)}
    </section>
  );
};

export default Services;
