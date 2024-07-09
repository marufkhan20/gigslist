import Button from "../../ui/Button";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const Gallery = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto">
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
              <div className="h-[154px] w-[140px] relative">
                <div className="w-[140px] h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/image.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Image
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
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
              <div className="h-[154px] relative">
                <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/Play.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Video
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="h-[154px] relative">
                <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/image.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Image
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="h-[154px] relative">
                <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/image.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Image
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="h-[154px] relative">
                <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/image.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Image
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="h-[154px] relative">
                <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/image.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Image
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="h-[154px] relative">
                <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                  <img src="/images/icons/image.png" alt="" />
                  <span className="text-primary font-medium text-xs">
                    Upload Image
                  </span>
                </div>

                <div className="absolute right-2 bottom-0 flex items-center gap-2">
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/add.png" alt="" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
                    <img src="/images/icons/edit.png" alt="" />
                  </button>
                </div>
              </div>
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
          onClick={() => setActiveTab(activeTab + 1)}
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
    </div>
  );
};

export default Gallery;
