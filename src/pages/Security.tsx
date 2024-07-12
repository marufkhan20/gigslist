import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Security = () => {
  return (
    <div className="w-full lg:w-[777px] flex flex-col gap-16">
      <div className="flex gap-5 flex-col md:flex-row lg:gap-0">
        <div className="lg:w-[240px]">
          <label
            className="text-[#3F4254] font-semibold text-[15px]"
            htmlFor=""
          >
            Update Password
          </label>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Input type="password" placeholder="New Password" />
          <Input type="password" placeholder="Confirm Password" />
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
            Deactivate Account
          </label>
        </div>
        <div className="flex-1">
          <h4 className="text-[#3F4254] font-semibold text-[15px]">
            What happens when you deactivate your account?
          </h4>
          <ul className="mt-[10px] list-disc ml-5 text-[#5E6278] text-sm">
            <li>Your profile and posts won’t be shown on Gigslist anymore.</li>
            <li>Subscriptions will be canceled.</li>
            <li>You won’t be able to re-activate your posts.</li>
          </ul>
          <div className="flex justify-end mt-6">
            <Button variant="border">Deactivate Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
