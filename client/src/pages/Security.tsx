import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { updatePassword } from "../http/api";

interface Error {
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const Security = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Error>({});

  // update password
  const { mutate, isPending } = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: async ({
      oldPassword,
      password,
    }: {
      oldPassword: string;
      password: string;
    }) => {
      const data = await updatePassword(oldPassword, password);
      return data;
    },
    onSuccess: () => {
      setErrors({});
      toast.success("Password updated successfully.");
    },
    onError: async (error: AxiosError<ErrorResponse>) => {
      if (error.response?.data?.error) {
        setErrors(error.response?.data?.error);
      }
    },
  });

  // submit handler
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check validation
    const validationErrors: Error = {};

    if (!oldPassword) {
      validationErrors.oldPassword = "Current Password is required!!";
    }

    if (!password) {
      validationErrors.password = "New Password is required!!";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "New Confirm Password is required!!";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword =
        "Password and Confirm Password Is not match!!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate({
      oldPassword,
      password,
    });
  };
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
        <form className="flex-1" onSubmit={submitHandler}>
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <Input
                type="password"
                placeholder="Current Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              {errors?.oldPassword && (
                <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                  {errors?.oldPassword}
                </span>
              )}
            </div>
            <div>
              <Input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors?.password && (
                <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                  {errors?.password}
                </span>
              )}
            </div>
            <div>
              <Input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors?.confirmPassword && (
                <span className="mt-2 text-sm text-red-500 font-medium inline-block">
                  {errors?.confirmPassword}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <Button type="submit" loading={isPending} variant="border">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
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
