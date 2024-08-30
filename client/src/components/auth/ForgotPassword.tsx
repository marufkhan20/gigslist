import Button from "../ui/Button";
import Input from "../ui/Input";

interface IProps {
  setShowAuth: (arg0: boolean) => void;
  setActiveScreen: (arg0: number) => void;
}

const ForgotPassword = ({ setShowAuth, setActiveScreen }: IProps) => {
  return (
    <div
      className="bg-white relative w-[90%] sm:w-[400px] px-[30px] py-9 rounded shadow"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute top-3 right-3">
        <img
          onClick={() => setShowAuth(false)}
          src="/images/icons/close.png"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <h2 className="text-[28px] leading-[32px] text-center">
        Forgot password?
      </h2>
      <p className="text-center mt-2">
        Enter the email address associated with your Gigslist account and we’ll
        email you a link to reset your password.
      </p>

      <form action="" className="mt-7 flex flex-col gap-4">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Send Reset Link</Button>
      </form>

      <button
        className="mt-6 text-center text-primary font-medium w-full"
        onClick={() => setActiveScreen(3)}
      >
        Forgot Password?
      </button>

      <div className="mt-6">
        <p className="text-center">
          Don’t have an account?{" "}
          <button
            className="text-primary transition-all hover:text-primary-active cursor-pointer"
            onClick={() => setActiveScreen(1)}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
