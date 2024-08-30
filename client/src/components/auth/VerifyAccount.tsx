import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { resendVerifyCode, verifyAccount } from "../../http/api";
import Button from "../ui/Button";

interface IProps {
  setShowAuth: (arg0: boolean) => void;
  setActiveScreen: (arg0: number) => void;
}

const VerifyAccount = ({ setShowAuth, setActiveScreen }: IProps) => {
  const [user, setUser] = useState<VerificationUser>({
    _id: "",
    email: "",
    verificationMode: false,
    verified: false,
  });
  const [time, setTime] = useState(120);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState("");

  useEffect(() => {
    // get verification user information from local storage
    let user = localStorage.getItem("verificationUser");

    if (user) {
      user = JSON.parse(user);
      if (user && typeof user === "object") {
        const actualUser: VerificationUser = user;
        setUser(actualUser);
      }
    } else {
      setActiveScreen(1);
      toast.error("Please create a new account.");
    }
  }, [setActiveScreen]);

  useEffect(() => {
    // Only start the timer if there is time left
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval when the component unmounts or time changes
      return () => clearInterval(timerId);
    }
  }, [time]);

  // Format the time to mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // resend verify code
  const { mutate: resend, isPending } = useMutation({
    mutationKey: ["resendVerifyCode"],
    mutationFn: async (user: VerificationUser) => {
      await resendVerifyCode(user);
    },
    onSuccess: () => {
      toast.success(
        "Resend verification code sent successfully. Please check yout email"
      );
      setTime(120);
      setError("");
    },
  });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only the last digit is captured
    setOtp(newOtp);

    // Automatically focus the next input field
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle backspace to focus the previous input field
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  // verify account
  const { mutate: verifyAccountMutate, isPending: isVerifyPending } =
    useMutation({
      mutationKey: ["verifyAccount"],
      mutationFn: async ({
        id,
        verifyCode,
      }: {
        id: string;
        verifyCode: number;
      }) => {
        await verifyAccount(id, verifyCode);
      },
      onSuccess: () => {
        toast.success("Account verification successfully. Please login.");
        localStorage.removeItem("verificationUser");
        setError("");
        setOtp(new Array(6).fill(""));
        setActiveScreen(2);
      },
      onError: async (error: AxiosError<VerifyAccountResponse>) => {
        console.log("error", error);
        if (error.response?.data?.error) {
          setError(error.response?.data?.error);
        }
      },
    });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted OTP:", otp.join(""));

    verifyAccountMutate({
      id: user?._id,
      verifyCode: Number(otp.join("")),
    });
  };

  // remove user information from local storage
  const removeUserInfo = () => {
    localStorage.removeItem("verificationUser");
    setShowAuth(false);
    setUser({
      _id: "",
      email: "",
      verificationMode: false,
      verified: false,
    });
  };
  return (
    <div
      className="bg-white relative w-[90%] sm:w-[400px] px-[30px] py-9 rounded shadow"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute top-3 right-3">
        <img
          onClick={removeUserInfo}
          src="/images/icons/close.png"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <h2 className="text-[28px] leading-[32px] text-center">
        Verify Your Account
      </h2>
      <p className="text-center mt-2">
        Enter the 6-digit verify code sent to the email here.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="w-10 h-10 text-center inline-block transition-all focus:ring-1 border border-[##E1E3EA] rounded py-3 px-xl outline-none relative text-base text-[#7E8299]"
            />
          ))}
        </div>
        {error && (
          <span className="mt-2 text-sm text-red-500 font-medium">{error}</span>
        )}
        <Button loading={isVerifyPending} type="submit">
          Verify Account
        </Button>
      </form>

      {time ? (
        <p className="mt-3 text-center">
          Resend verify code in{" "}
          <span className="font-semibold">{formatTime(time)}</span>
        </p>
      ) : (
        <button
          className="mt-6 text-center text-primary font-medium w-full"
          onClick={() => resend(user)}
        >
          {isPending ? "Sending..." : "Resend Verify Code"}
        </button>
      )}
    </div>
  );
};

export default VerifyAccount;
