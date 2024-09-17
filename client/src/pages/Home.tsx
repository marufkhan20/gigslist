import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import Services from "../components/home/services";
import ServicesMenu from "../components/shared/services-menu";
import { getAllGigs } from "../http/api";

const Home = () => {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const city = searchParams.get("city");
  const title = searchParams.get("title");
  const [limit, setLimit] = useState(12);

  const { ref, inView } = useInView({
    threshold: 1.0, // 100% visibility
  });

  // get all gigs
  const {
    data: gigs,
    isLoading,
    refetch,
  } = useQuery<Gig[]>({
    queryKey: ["getGigs", limit, state, city, title],
    queryFn: async () => {
      const { data } = await getAllGigs(
        `?limit=${limit}&state=${state}&city=${city}&title=${title}`
      );
      return data;
    },
    placeholderData: keepPreviousData,
  });

  console.log("isLoading", isLoading);

  useEffect(() => {
    refetch();
  }, [city, state, title, refetch]);

  useEffect(() => {
    if (inView) {
      setLimit((prevLimit) => prevLimit + 12); // Update limit based on previous value
    }
  }, [inView]);
  return (
    <main>
      <ServicesMenu />
      <Services loading={isLoading} gigs={gigs || []} />
      {/* {isRefetching && (
        <div className="flex items-center justify-center">
          <ImSpinner9 className="transition-all text-3xl animate-spin" />
        </div>
      )} */}
      <div ref={ref} style={{ height: "1px" }} />
    </main>
  );
};

export default Home;
