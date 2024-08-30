import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createGig } from "../../../http/api";
import CreateNewGigLayout from "../../../layouts/CreateNewGigLayout";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  gigId?: string;
  gig?: Gig;
  dataLoading?: boolean;
}

const DescriptionStep = ({
  activeTab,
  setActiveTab,
  gigId,
  gig,
  dataLoading,
}: IProps) => {
  const [description, setDescription] = useState("");

  // set existing gig data
  useEffect(() => {
    if (gig?._id && gig?.description) {
      setDescription(gig?.description);
    }
  }, [gig]);

  // create new gig -> description
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
    mutate({
      _id: gigId,
      description,
      completedStep: 3,
    });
  };
  return (
    <CreateNewGigLayout isLoading={isPending || dataLoading}>
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Description"
              description={
                <>
                  Add a detailed description of your gig that{" "}
                  <span className="font-semibold">
                    makes people want to buy your service.
                  </span>{" "}
                  Do not include any URLs or web addresses.
                </>
              }
            />
            <div className="sm:col-span-2">
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-[500px] sm:h-[650px]"
              />
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

export default DescriptionStep;
