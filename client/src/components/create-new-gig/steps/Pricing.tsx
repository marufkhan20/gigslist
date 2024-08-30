import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createGig } from "../../../http/api";
import CreateNewGigLayout from "../../../layouts/CreateNewGigLayout";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
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

const Pricing = ({
  activeTab,
  setActiveTab,
  gigId,
  gig,
  dataLoading,
}: IProps) => {
  const [packages, setPackages] = useState<Package[]>([
    {
      name: "Basic",
      price: "",
      description: "",
    },
    {
      name: "Advance",
      price: "",
      description: "",
    },
    {
      name: "Premium",
      price: "",
      description: "",
    },
  ]);

  // change package details handler
  const changePackageDetails = (
    packageName: string,
    name: string,
    value: string
  ) => {
    const updatedPackages = packages?.map((item: Package) => {
      if (item?.name === packageName) {
        return {
          ...item,
          [name]: value,
        };
      } else {
        return item;
      }
    });

    setPackages(updatedPackages);
  };

  // set existing gig data
  useEffect(() => {
    if (gig?._id && gig?.packages && Object.keys(gig?.packages).length > 0) {
      setPackages(gig?.packages);
    }
  }, [gig]);

  // create new gig -> pricing
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
      packages,
      completedStep: 2,
    });
  };
  return (
    <CreateNewGigLayout isLoading={dataLoading || isPending}>
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Packages"
              description={
                <>
                  Earn customer’s trust by providing{" "}
                  <span className="font-semibold">
                    pricing of your services.
                  </span>{" "}
                  This won’t be the final price, but will help people hire based
                  on their budget.
                </>
              }
            />
            <div className="sm:col-span-2">
              <div className="flex flex-col gap-16">
                {packages?.map((packageItem) => (
                  <div key={packageItem?.name} className="flex-1">
                    <button className="w-[180px] py-[18px] border-t border-x border-[#D8D8E5] bg-[#F6F6F7] text-dark text-[15px] font-semibold cursor-default">
                      {packageItem?.name}
                    </button>
                    <Textarea
                      value={packageItem?.description}
                      placeholder="Describe the details of this package"
                      onChange={(e) =>
                        changePackageDetails(
                          packageItem?.name,
                          "description",
                          e.target.value
                        )
                      }
                    />
                    <div className="text-right">
                      <span className="text-xs !text-[#7E8299]">
                        {packageItem?.description?.length} / 100 max
                      </span>
                    </div>

                    <div className="mt-2">
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <label
                          className="text-[15px] font-semibold"
                          htmlFor="basic-price"
                        >
                          Price
                        </label>
                        <Input
                          id="basic-price"
                          // className="w-auto"
                          placeholder="$"
                          type="number"
                          value={packageItem?.price}
                          onChange={(e) =>
                            changePackageDetails(
                              packageItem?.name,
                              "price",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <p className="mt-2 text-sm text-[#7E8299]">
                        Leave this blank if you want customers to contact you
                        for initial pricing info
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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

export default Pricing;
