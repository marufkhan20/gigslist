import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const Location = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto">
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Location"
              description={
                <>
                  Attract customers who live near you. If you offer this service
                  remotely, select any location you wish.
                </>
              }
            />
            <div className="sm:col-span-2">
              <div className="flex flex-col sm:flex-row items-center gap-7">
                <Select>
                  <option value="">Select State</option>
                </Select>
                <Select>
                  <option value="">Select City</option>
                </Select>
              </div>
            </div>
          </Section>

          <Section>
            <Description
              title="Street Address"
              description={
                <>
                  Enter your home or business address, and the radius you are
                  willing to go to provide your service.
                </>
              }
            />
            <div className="sm:col-span-2 flex flex-col gap-4">
              <Input type="text" placeholder="Street Address" />
              <div className="flex flex-col sm:flex-row items-center gap-7">
                <Select>
                  <option value="">Select State</option>
                </Select>
                <Select>
                  <option value="">Select City</option>
                </Select>
              </div>
              <label className="flex items-center gap-[10px]">
                <input type="checkbox" name="" id="" />
                <span className="text-sm">Offered Remotely</span>
              </label>
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

export default Location;
