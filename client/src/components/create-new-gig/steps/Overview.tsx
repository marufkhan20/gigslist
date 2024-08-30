import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import { CATEGORIES } from "../../../constants";
import { createGig } from "../../../http/api";
import CreateNewGigLayout from "../../../layouts/CreateNewGigLayout";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  gigId?: string;
  gig?: Gig;
  dataLoading?: boolean;
}

const Overview = ({
  activeTab,
  setActiveTab,
  gigId,
  gig,
  dataLoading,
}: IProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>();

  const router = useNavigate();

  // set sub categories
  useEffect(() => {
    if (category) {
      // Find the category item
      const categoryItem = CATEGORIES.find((item) => item.name === category);

      // Update subCategories with the found subCategories or an empty array if not found
      setSubCategories(categoryItem ? categoryItem.subCategories : []);
    }
  }, [category]);

  // set existing gig data
  useEffect(() => {
    if (gig?._id) {
      setTitle(gig?.title || "");
      setCategory(gig?.category || "");
      setSubCategory(gig?.category || "");
      setBusinessName(gig?.businessName || "");
      setBusinessEmail(gig?.businessEmail || "");
      setTags(gig?.tags);
    }
  }, [gig]);

  // set tags handler
  const setTagsHandler = (e: string[]) => {
    if (tags.length !== 5) {
      setTags(e);
    }
  };

  // create new gig -> overview
  const { mutate, isPending } = useMutation({
    mutationKey: ["createGig"],
    mutationFn: async (gig: Gig) => {
      const { data } = await createGig(gig);
      return data;
    },
    onSuccess: (data: Gig) => {
      router(`/create-new-gig?gigId=${data?._id}`);
      if (!dataLoading) {
        setActiveTab(activeTab + 1);
      }
    },
    onError: (error) => {
      console.log("error", error);
      toast.error("Error");
    },
  });

  // submit handler
  const submitHandler = () => {
    if (
      title !== gig?.title ||
      category !== gig?.category ||
      subCategory !== gig?.subCategory ||
      businessName !== gig?.businessName ||
      businessEmail !== gig?.businessEmail ||
      tags !== gig?.tags
    ) {
      mutate({
        _id: gigId,
        title,
        category,
        subCategory,
        businessName,
        businessEmail,
        tags,
        price: tags?.length * 2,
        completedStep: 1,
        status: "draft",
      });
    } else {
      setActiveTab(activeTab + 1);
    }
  };
  return (
    <CreateNewGigLayout isLoading={isPending || dataLoading}>
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Gig title"
              description={
                <>
                  As a seller, your{" "}
                  <span className="font-semibold">
                    title is the most important place
                  </span>{" "}
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </>
              }
            />
            <div className="sm:col-span-2">
              <div className="flex gap-2 py-3 px-[18px] border border-[##E1E3EA] rounded text-base font-semibold">
                <h3>I will</h3>
                <textarea
                  className="flex-1 inline-block transition-all outline-none relative text-[#7E8299]"
                  name=""
                  value={title}
                  onChange={(e) =>
                    e.target.value?.length <= 80 && setTitle(e.target.value)
                  }
                  id=""
                  placeholder="do something I'm really good at or that my business does"
                />
              </div>
              <div className="text-right">
                <span className="text-xs !text-[#7E8299]">
                  {title?.length} / 80 max
                </span>
              </div>
            </div>
          </Section>

          <Section>
            <Description
              title="Category"
              description="Choose the category and subcategory most suitable for your Gig."
            />
            <div className="sm:col-span-2">
              <div className="grid sm:grid-cols-2 gap-9">
                <Select onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select Category</option>
                  {CATEGORIES?.map((category) => (
                    <option value={category?.name} key={category.id}>
                      {category?.name}
                    </option>
                  ))}
                </Select>
                <Select onChange={(e) => setSubCategory(e.target.value)}>
                  <option value="">Select Subcategory</option>
                  {subCategories?.map((subCategory) => (
                    <option value={subCategory.name} key={subCategory.id}>
                      {subCategory.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </Section>

          <Section>
            <Description
              title="Business Info"
              description="Add your name or business name and the best email address for customers to contact you."
            />
            <div className="sm:col-span-2">
              <div className="flex flex-col gap-4">
                <Input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  type="text"
                  placeholder="Your Name / Business Name"
                />
                <Input
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  type="email"
                  placeholder="Contact Email"
                />
              </div>
            </div>
          </Section>

          <Section>
            <Description
              title="Search tags ($2 per tag)"
              description={
                <>
                  Tag your Gig with buzz words that are relevant to the services
                  you offer.{" "}
                  <span className="font-semibold">
                    Use all 5 tags to boost your post’s visibility.
                  </span>
                </>
              }
            />
            <div className="sm:col-span-2">
              <Description
                title="Relevant keywords"
                description="Enter search terms you feel your buyers will use when looking for your service."
              />
              <br />
              <TagsInput
                value={tags}
                onChange={(e: string[]) => setTagsHandler(e)}
                name="tags"
                placeHolder="enter tag"
                classNames={{
                  input: `w-full transition-all focus:ring-1 border inline-block border-[##E1E3EA] rounded py-3 px-[18px] outline-none relative text-base text-[#7E8299]`,
                }}
              />
              <span className="text-xs inline-block mt-2 !text-[#7E8299]">
                Must have a minimum of 1 tag. 5 tags maximum. Use letters and
                numbers only.
              </span>
            </div>
          </Section>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="py-3 px-4 text-[13px] font-medium"
          // onClick={() => setActiveTab(activeTab + 1)}
          onClick={submitHandler}
          loading={isPending}
        >
          Save & Continue
        </Button>
      </div>
    </CreateNewGigLayout>
  );
};

export default Overview;
