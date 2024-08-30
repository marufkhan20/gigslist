import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../../http/api";
import { Auth, useAuthStore } from "../../store";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface IProps {
  setShowAuth: (arg0: boolean) => void;
  setActiveScreen: (arg0: number) => void;
}

interface Error {
  name?: string;
  email?: string;
  password?: string;
}

const Login = ({ setShowAuth, setActiveScreen }: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Error>({});
  const { setAuth } = useAuthStore();

  const router = useNavigate();

  // login user
  const loginUser = async (userData: Login) => {
    const { data } = await login(userData);
    return data;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async (data: Auth) => {
      toast.success("Login successfully.");
      setEmail("");
      setPassword("");
      setErrors({});

      // store auth data in local storage
      localStorage.setItem("auth", JSON.stringify(data));

      router("/dashboard");

      setAuth(data);
    },
    onError: async (error: AxiosError<LoginUserResponse>) => {
      if (error.response?.data?.error) {
        setErrors(error.response?.data?.error);
      }
    },
  });

  // submitHandler
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check validation
    const validationErrors: Error = {};

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      email,
      password,
    });
  };
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

      <form onSubmit={submitHandler} className="mt-7 flex flex-col gap-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors?.email && (
            <span className="mt-2 text-sm text-red-500 font-medium">
              {errors?.email}
            </span>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors?.password && (
            <span className="mt-2 text-sm text-red-500 font-medium">
              {errors?.password}
            </span>
          )}
        </div>
        <Button loading={isPending} type="submit">
          Login
        </Button>
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
