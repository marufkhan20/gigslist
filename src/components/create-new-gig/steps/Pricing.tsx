import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const Pricing = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto">
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Packages"
              description={
                <>
                  Earn customer’s trust by providing{" "}
                  <span className="font-semibold">
                    pricing of your services.
                  </span>{" "}
                  This won’t be the final price, but will help people hire based
                  on their budget.
                </>
              }
            />
            <div className="sm:col-span-2">
              <div className="flex flex-col gap-16">
                {/* basic package */}
                <div className="flex-1">
                  <button className="w-[180px] py-[18px] border-t border-x border-[#D8D8E5] bg-[#F6F6F7] text-dark text-[15px] font-semibold cursor-default">
                    Basic
                  </button>
                  <Textarea placeholder="Describe the details of this package" />
                  <div className="text-right">
                    <span className="text-xs !text-[#7E8299]">0 / 100 max</span>
                  </div>

                  <div className="mt-2">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <label
                        className="text-[15px] font-semibold"
                        htmlFor="basic-price"
                      >
                        Price
                      </label>
                      <Input
                        id="basic-price"
                        // className="w-auto"
                        placeholder="$"
                        type="number"
                      />
                    </div>
                    <p className="mt-2 text-sm text-[#7E8299]">
                      Leave this blank if you want customers to contact you for
                      initial pricing info
                    </p>
                  </div>
                </div>

                {/* advance package */}
                <div className="flex-1">
                  <button className="w-[180px] py-[18px] border-t border-x border-[#D8D8E5] bg-[#F6F6F7] text-dark text-[15px] font-semibold cursor-default">
                    Advance
                  </button>
                  <Textarea placeholder="Describe the details of this package" />
                  <div className="text-right">
                    <span className="text-xs !text-[#7E8299]">0 / 100 max</span>
                  </div>

                  <div className="mt-2">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <label
                        className="text-[15px] font-semibold"
                        htmlFor="advance-price"
                      >
                        Price
                      </label>
                      <Input
                        id="advance-price"
                        className="w-auto"
                        placeholder="$"
                        type="number"
                      />
                    </div>
                    <p className="mt-2 text-sm text-[#7E8299]">
                      Leave this blank if you want customers to contact you for
                      initial pricing info
                    </p>
                  </div>
                </div>

                {/* premium package */}
                <div className="flex-1">
                  <button className="w-[180px] py-[18px] border-t border-x border-[#D8D8E5] bg-[#F6F6F7] text-dark text-[15px] font-semibold cursor-default">
                    Premium
                  </button>
                  <Textarea placeholder="Describe the details of this package" />
                  <div className="text-right">
                    <span className="text-xs !text-[#7E8299]">0 / 100 max</span>
                  </div>

                  <div className="mt-2">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <label
                        className="text-[15px] font-semibold"
                        htmlFor="premium-price"
                      >
                        Price
                      </label>
                      <Input
                        id="premium-price"
                        className="w-auto"
                        placeholder="$"
                        type="number"
                      />
                    </div>
                    <p className="mt-2 text-sm text-[#7E8299]">
                      Leave this blank if you want customers to contact you for
                      initial pricing info
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
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

export default Pricing;
