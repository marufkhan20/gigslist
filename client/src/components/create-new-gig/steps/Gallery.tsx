import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createGig } from "../../../http/api";
import CreateNewGigLayout from "../../../layouts/CreateNewGigLayout";
import Button from "../../ui/Button";
import UploadComponent from "../../UploadComponent";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  gigId?: string;
  gig?: Gig;
  dataLoading?: boolean;
}

const Gallery = ({
  activeTab,
  setActiveTab,
  gigId,
  gig,
  dataLoading,
}: IProps) => {
  const [logo, setLogo] = useState("");
  const [video, setVideo] = useState("");
  const [images, setImages] = useState<string[]>(Array(5).fill(""));
  console.log("images", images);

  const changeFileHandler = (value: string, type: string, id = 0) => {
    if (type === "image") {
      console.log("images", images);
      const updatedImages = images.map((image, idx) => {
        console.log("idx", idx);
        console.log("id", id);
        if (idx === id - 1) {
          console.log("value", value);
          return value;
        } else {
          console.log("image", image);
          return image;
        }
      });
      console.log("updatedImages", updatedImages);
      setImages(updatedImages);
    }

    if (type === "logo") {
      setLogo(value);
    }

    if (type === "video") {
      setVideo(value);
    }
  };

  // set existing gig data
  useEffect(() => {
    if (gig?._id) {
      setLogo(gig?.logo || "");
      setVideo(gig?.video || "");
      setImages(gig?.images?.length > 0 ? gig?.images : Array(5).fill(""));
    }
  }, [gig]);

  // create new gig -> gallery
  const { mutate, isPending } = useMutation({
    mutationKey: ["createGig"],
    mutationFn: async (gig: Gig) => {
      const { data } = await createGig(gig);
      return data;
    },
    onSuccess: () => {
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
    if (logo !== gig?.logo || video !== gig?.video) {
      mutate({
        _id: gigId,
        logo,
        video,
        images,
        completedStep: 5,
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
              title="Logo"
              description={
                <>
                  Upload your profile pic or business logo.
                  <ul className="flex flex-col list-disc ml-7">
                    <li>Ideal aspect ratio is 1:1</li>
                    <li>Max size 10 MB</li>
                  </ul>
                </>
              }
            />
            <div className="sm:col-span-2">
              <UploadComponent
                url={logo}
                setState={changeFileHandler}
                type="logo"
              />
            </div>
          </Section>

          <Section>
            <Description
              title="Images & Video"
              description={
                <>
                  Attract buyers’ attention with attractive visual examples that
                  showcase your services.
                  <ul className="flex flex-col list-disc ml-7">
                    <li>Add up to 1 video and 5 images</li>
                    <li>Ideal aspect ratio is 16:9 Minimum 712 x 430 px</li>
                    <li>Video length less than 90 seconds</li>
                    <li>Max size 10 MB</li>
                  </ul>
                </>
              }
            />
            <div className="sm:col-span-2 grid sm:grid-cols-2 gap-9">
              <UploadComponent
                url={video}
                setState={changeFileHandler}
                type="video"
              />

              <UploadComponent
                url={images[0]}
                setState={changeFileHandler}
                id={1}
                type="image"
              />
              <UploadComponent
                url={images[1]}
                setState={changeFileHandler}
                id={2}
                type="image"
              />
              <UploadComponent
                url={images[2]}
                setState={changeFileHandler}
                id={3}
                type="image"
              />
              <UploadComponent
                url={images[3]}
                setState={changeFileHandler}
                id={4}
                type="image"
              />
              <UploadComponent
                url={images[4]}
                setState={changeFileHandler}
                id={5}
                type="image"
              />
            </div>
          </Section>
        </div>

        <label
          className="flex items-center gap-[10px] text-sm mt-12"
          htmlFor=""
        >
          <input type="checkbox" name="" id="" />
          <span>
            I declare that these materials were created by myself or by my team
            and do not infringe on any 3rd party rights. I understand that the
            illegal use of digital assets is against Gigslist’s Terms of Service
            and may result in the blocking of my account.{" "}
          </span>
        </label>
      </div>

      <div className="flex justify-end flex-col items-end gap-4">
        <Button
          className="py-3 px-4 text-[13px] font-medium"
          onClick={submitHandler}
        >
          Save & Continue
        </Button>
        <button
          className="text-[15px] font-medium text-primary transition-all hover:text-primary-active"
          onClick={() => setActiveTab(activeTab - 1)}
        >
          Back
        </button>
      </div>
    </CreateNewGigLayout>
  );
};

export default Gallery;
