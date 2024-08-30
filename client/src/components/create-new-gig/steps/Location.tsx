import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { METRO_AREAS } from "../../../constants";
import { createGig } from "../../../http/api";
import CreateNewGigLayout from "../../../layouts/CreateNewGigLayout";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  gigId?: string;
  gig?: Gig;
  dataLoading?: boolean;
}

const Location = ({
  activeTab,
  setActiveTab,
  gig,
  gigId,
  dataLoading,
}: IProps) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetState, setStreetState] = useState("");
  const [streetCity, setStreetCity] = useState("");
  const [offeredRemotely, setOfferedRemotely] = useState(false);
  const [cities, setCities] = useState<City[]>();

  // set sub categories
  useEffect(() => {
    if (state) {
      // Find the category item
      const stateItem = METRO_AREAS.find((item) => item.name === state);

      // Update subCategories with the found subCategories or an empty array if not found
      setCities(stateItem ? stateItem.cities : []);
    }
  }, [state]);

  // set existing gig data
  useEffect(() => {
    if (gig?._id) {
      setState(gig?.state || "");
      setCity(gig?.city || "");
      setStreetAddress(gig?.streetAddress || "");
      setStreetState(gig?.streetState || "");
      setStreetCity(gig?.streetCity || "");
      setOfferedRemotely(gig?.offeredRemotely || false);
    }
  }, [gig]);

  // create new gig -> location
  const { mutate, isPending } = useMutation({
    mutationKey: ["createGig"],
    mutationFn: async (gig: Gig) => {
      const { data } = await createGig(gig);
      return data;
    },
    onSuccess: () => {
      if (!dataLoading) {
        setActiveTab(activeTab + 1);
      }
    },
    onError: (error) => {
      console.log("error", error);
      toast.error("Error");
    },
  });

  // submit handler
  const submitHandler = () => {
    if (
      city !== gig?.city ||
      state !== gig?.state ||
      streetAddress !== gig?.streetAddress ||
      streetState !== gig?.streetState ||
      streetCity !== gig?.streetCity ||
      offeredRemotely !== gig?.offeredRemotely
    ) {
      mutate({
        _id: gigId,
        city,
        state,
        streetAddress,
        streetCity,
        streetState,
        offeredRemotely,
        completedStep: 4,
      });
    } else {
      setActiveTab(activeTab + 1);
    }
  };
  return (
    <CreateNewGigLayout isLoading={isPending || dataLoading}>
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Location"
              description={
                <>
                  Attract customers who live near you. If you offer this service
                  remotely, select any location you wish.
                </>
              }
            />
            <div className="sm:col-span-2">
              <div className="flex flex-col sm:flex-row items-center gap-7">
                <Select onChange={(e) => setState(e.target.value)}>
                  <option value="">Select State</option>
                  {METRO_AREAS.map((state) => (
                    <option value={state.name} key={state.id}>
                      {state.name}
                    </option>
                  ))}
                </Select>
                <Select onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select City</option>
                  {cities?.map((city) => (
                    <option value={city.name} key={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </Section>

          <Section>
            <Description
              title="Street Address"
              description={
                <>
                  Enter your home or business address, and the radius you are
                  willing to go to provide your service.
                </>
              }
            />
            <div className="sm:col-span-2 flex flex-col gap-4">
              <Input
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                type="text"
                placeholder="Street Address"
              />
              <div className="flex flex-col sm:flex-row items-center gap-7">
                <Select onChange={(e) => setStreetState(e.target.value)}>
                  <option value="">Select State</option>
                  {METRO_AREAS.map((state) => (
                    <option value={state.name} key={state.id}>
                      {state.name}
                    </option>
                  ))}
                </Select>
                <Select onChange={(e) => setStreetCity(e.target.value)}>
                  <option value="">Select City</option>
                  {cities?.map((city) => (
                    <option value={city.name} key={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Select>
              </div>
              <label className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  checked={offeredRemotely}
                  onChange={(e) => setOfferedRemotely(e.target.checked)}
                  name=""
                  id=""
                />
                <span className="text-sm">Offered Remotely</span>
              </label>
            </div>
          </Section>
        </div>
      </div>

      <div className="flex justify-end flex-col items-end gap-4">
        <Button
          className="py-3 px-4 text-[13px] font-medium"
          onClick={submitHandler}
          loading={isPending}
        >
          Save & Continue
        </Button>
        <button
          className="text-[15px] font-medium text-primary transition-all hover:text-primary-active"
          onClick={() => setActiveTab(activeTab - 1)}
        >
          Back
        </button>
      </div>
    </CreateNewGigLayout>
  );
};

export default Location;
