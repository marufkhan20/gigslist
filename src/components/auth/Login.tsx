import Button from "../ui/Button";
import Input from "../ui/Input";

interface IProps {
  setShowAuth: (arg0: boolean) => void;
  setActiveScreen: (arg0: number) => void;
}

const Login = ({ setShowAuth, setActiveScreen }: IProps) => {
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
        Welcome Back 👋
      </h2>
      <p className="text-center mt-2">
        Showcase your services to our audience!
      </p>

      <form action="" className="mt-7 flex flex-col gap-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Create Account</Button>
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

export default Login;
