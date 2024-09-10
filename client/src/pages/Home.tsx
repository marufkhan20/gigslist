import { useQuery } from "@tanstack/react-query";
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
  });

  useEffect(() => {
    refetch();
  }, [city, state, title, refetch]);

  console.log("gigs", gigs);

  useEffect(() => {
    if (inView) {
      setLimit((prevLimit) => prevLimit + 12); // Update limit based on previous value
    }
  }, [inView]);
  return (
    <main>
      <ServicesMenu />
      <Services loading={isLoading} gigs={gigs || []} />
      <div ref={ref} style={{ height: "1px" }} />
    </main>
  );
};

export default Home;
