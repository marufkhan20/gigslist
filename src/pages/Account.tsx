import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Account = () => {
  return (
    <div className="w-full lg:w-[777px] flex flex-col gap-16">
      <div className="flex gap-5 flex-col md:flex-row lg:gap-0">
        <div className="lg:w-[240px]">
          <label
            className="text-[#3F4254] font-semibold text-[15px]"
            htmlFor=""
          >
            Personal Info
          </label>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <div className="flex justify-end">
            <Button variant="border">Save Changes</Button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row lg:gap-0">
        <div className="lg:w-[240px]">
          <label
            className="text-[#3F4254] font-semibold text-[15px]"
            htmlFor=""
          >
            Business Info
          </label>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Input type="text" placeholder="Business Name" />
          <Input type="url" placeholder="Business Website URL" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Phone" />
          <div className="flex justify-end">
            <Button variant="border">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
