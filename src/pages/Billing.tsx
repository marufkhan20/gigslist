import BillingCard from "../components/dashboard/BillingCard";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Billing = () => {
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
        <div className="flex flex-col gap-6 flex-1">
          <BillingCard />
          <div className="flex justify-end">
            <Button variant="border">Delete Card</Button>
          </div>
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
        <div className="flex flex-col gap-4 flex-1">
          <Input type="text" placeholder="Cardholder Name" />
          <Input type="number" placeholder="Card Number" />
          <div className="grid sm:grid-cols-2 gap-9">
            <Input type="text" placeholder="MM/YY" />
            <Input type="text" placeholder="CVC" />
            <Input type="text" placeholder="ZIP Code" />
            <Input type="text" placeholder="United States" />
          </div>
          <div className="flex justify-end">
            <Button variant="border">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
