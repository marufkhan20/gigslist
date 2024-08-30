import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const Success = () => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto rounded-md border border-dashed border-primary p-4 mt-14 bg-[#F6F6F7] flex items-center justify-between gap-4 flex-wrap">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="/images/icons/Calendar.png" alt="" />
        <div className="text-center sm:text-left">
          <h3 className="text-[15px]">Success! Your post is now live 🎉</h3>
          <p className="text-sm text-[#5E6278]">
            Click subscribe if you would like to have this post auto-renew every
            month.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full sm:w-auto items-center flex-col gap-4">
        <Button className="font-medium text-[13px] px-4 py-3">Subscribe</Button>
        <Link className="text-primary text-sm font-medium" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
