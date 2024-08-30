import { useMutation, useQuery } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { getUserDetails, updateUserInfo } from "../http/api";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [submitType, setSubmitType] = useState("");

  // get user details
  const { data: user } = useQuery<User>({
    queryKey: ["getUserDetails"],
    queryFn: async () => {
      const { data } = await getUserDetails();
      return data;
    },
  });

  useEffect(() => {
    if (user?._id) {
      setName(user?.name);
      setEmail(user?.email);
      setBusinessName(user?.businessName);
      setBusinessEmail(user?.businessEmail);
      setWebsiteUrl(user?.websiteUrl);
      setPhone(user?.phone);
    }
  }, [user]);

  // update user info
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateUserInfo"],
    mutationFn: async (user: UserRequest) => {
      const { data } = await updateUserInfo(user);
      return data;
    },
    onSuccess: () => {
      toast.success("User information updated successfully.");
    },
    onError: async (error) => {
      console.log(error);
      toast.error("Something went wrong!!");
    },
  });

  // submit handler
  const submitHandler = (e: FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault();

    setSubmitType(type);

    if (type === "personal") {
      mutate({
        name,
        email,
      });
    } else if (type === "business") {
      mutate({
        businessEmail,
        businessName,
        phone,
        websiteUrl,
      });
    }
  };
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
        <form className="flex-1" onSubmit={(e) => submitHandler(e, "personal")}>
          <div className="flex flex-col gap-4 flex-1">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input type="email" placeholder="Email" disabled value={email} />
            <div className="flex justify-end">
              <Button
                loading={isPending && submitType === "personal"}
                type="submit"
                variant="border"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
      <form className="flex-1" onSubmit={(e) => submitHandler(e, "business")}>
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
            <Input
              type="text"
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <Input
              type="url"
              placeholder="Business Website URL"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex justify-end">
              <Button
                loading={isPending && submitType === "business"}
                type="submit"
                variant="border"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
