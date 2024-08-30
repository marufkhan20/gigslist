import { useMutation, useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import BillingCard from "../components/dashboard/BillingCard";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { createBilling, deleteBilling, getBillings } from "../http/api";

interface Error {
  cardName?: string;
  cardNumber?: string;
  expiryDates?: string;
  cvc?: string;
  zipCode?: string;
  country?: string;
}

const Billing = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDates, setExpiryDates] = useState("");
  const [cvc, setCvc] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState<Error>({});

  // get all billings
  const {
    data: billings,
    isLoading,
    refetch,
  } = useQuery<Billing[]>({
    queryKey: ["getBillings"],
    queryFn: async () => {
      const { data } = await getBillings();
      return data;
    },
  });

  // create new billing
  const { mutate, isPending } = useMutation({
    mutationKey: ["createBilling"],
    mutationFn: async (billing: Billing) => {
      const { data } = await createBilling(billing);
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("Create New Billing Successfully.");
      setCardName("");
      setCardNumber("");
      setExpiryDates("");
      setCountry("");
      setCvc("");
      setZipCode("");
      setErrors({});
    },
    onError: async (error) => {
      console.log("error", error);
      toast.error("Something went wrong!!");
    },
  });

  // submit handler
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check validations
    const validationErrors: Error = {};

    if (!cardName) {
      validationErrors.cardName = "Card Holder Name is required!!";
    }

    if (!cardNumber) {
      validationErrors.cardNumber = "Card Number is required!!";
    }

    if (!country) {
      validationErrors.country = "Country is required!!";
    }

    if (!cvc) {
      validationErrors.cvc = "CVC Number is required!!";
    }

    if (!expiryDates) {
      validationErrors.expiryDates = "Card Expiry Dates is required!!";
    }

    if (!zipCode) {
      validationErrors.zipCode = "Zip Code is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      cardName,
      cardNumber: Number(cardNumber),
      country,
      cvc: Number(cvc),
      expiryDates,
      zipCode: Number(zipCode),
    });
  };

  // delete billing
  const { mutate: deleteHandler, isPending: isDeletePending } = useMutation({
    mutationKey: ["deleteBilling"],
    mutationFn: async (id: string) => {
      const { data } = await deleteBilling(id);
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("Billing Deleted Successfully.");
    },
    onError: async (error) => {
      console.log("error", error);
      toast.error("Something went wrong!!");
    },
  });
  return (
    <div className="w-full lg:w-[777px] flex flex-col gap-16">
      <div className="flex gap-5 flex-col md:flex-row lg:gap-0">
        <div className="lg:w-[240px]">
          <label
            className="text-[#3F4254] font-semibold text-[15px]"
            htmlFor=""
          >
            Current Payment Method
          </label>
        </div>
        <div className="flex flex-col gap-7">
          {billings?.map((billing) => (
            <div key={billing?._id} className="flex flex-col gap-6 flex-1">
              <BillingCard billing={billing} />
              <div className="flex justify-end">
                <Button
                  variant="border"
                  loading={isDeletePending}
                  onClick={() => deleteHandler(billing?._id || "")}
                >
                  Delete Card
                </Button>
              </div>
            </div>
          ))}
          {!isLoading && billings?.length === 0 && (
            <span className="text-base font-medium">
              No card found! Please add new card.
            </span>
          )}

          {isLoading && (
            <ImSpinner9 className="transition-all animate-spin text-xl" />
          )}
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row lg:gap-0">
        <div className="lg:w-[240px]">
          <label
            className="text-[#3F4254] font-semibold text-[15px]"
            htmlFor=""
          >
            Add New Card
          </label>
        </div>
        <form className="flex-1" onSubmit={submitHandler}>
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <Input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Cardholder Name"
              />
              {errors?.cardName && (
                <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                  {errors?.cardName}
                </span>
              )}
            </div>
            <div>
              <Input
                type="number"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              {errors?.cardNumber && (
                <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                  {errors?.cardNumber}
                </span>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-9">
              <div>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDates}
                  onChange={(e) => setExpiryDates(e.target.value)}
                />
                {errors?.expiryDates && (
                  <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                    {errors?.expiryDates}
                  </span>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
                {errors?.cvc && (
                  <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                    {errors?.cvc}
                  </span>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="ZIP Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                {errors?.zipCode && (
                  <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                    {errors?.zipCode}
                  </span>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="United States"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                {errors?.country && (
                  <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                    {errors?.country}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" loading={isPending} variant="border">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Billing;
