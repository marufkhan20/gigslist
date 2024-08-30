import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { register } from "../../http/api";
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

const Signup = ({ setShowAuth, setActiveScreen }: IProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Error>({});

  // register user
  const registerUser = async (userData: Register) => {
    const { data } = await register(userData);
    return data;
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
    onSuccess: async (data) => {
      toast.success("Account created successfully, please verify your email.");
      setActiveScreen(3);
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});

      // store user information in local storage
      localStorage.setItem("verificationUser", JSON.stringify(data));
    },
    onError: async (error: AxiosError<RegisterUserResponse>) => {
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

    if (!name) {
      validationErrors.name = "Name is required!!";
    }

    if (!email) {
      validationErrors.email = "Email is required!!";
    }

    if (!password) {
      validationErrors.password = "Password is required!!";
    } else if (password?.length < 8) {
      validationErrors.password = "Password must be 8 characters!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      name,
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
        Create your account
      </h2>
      <p className="text-center mt-2">
        Showcase your services to our audience!
      </p>

      <form onSubmit={submitHandler} className="mt-7 flex flex-col gap-4">
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          {errors?.name && (
            <span className="mt-2 text-sm text-red-500 font-medium">
              {errors?.name}
            </span>
          )}
        </div>
        <div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          {errors?.email && (
            <span className="mt-2 text-sm text-red-500 font-medium">
              {errors?.email}
            </span>
          )}
        </div>
        <div>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {errors?.password && (
            <span className="mt-2 text-sm text-red-500 font-medium">
              {errors?.password}
            </span>
          )}
        </div>
        <Button loading={isPending} type="submit">
          Create Account
        </Button>
      </form>

      <div className="mt-6">
        <p className="text-center">
          Already have an account?{" "}
          <button
            className="text-primary transition-all hover:text-primary-active cursor-pointer"
            onClick={() => setActiveScreen(2)}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
