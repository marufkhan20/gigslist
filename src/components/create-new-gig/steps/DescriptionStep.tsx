import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const DescriptionStep = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto">
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Description"
              description={
                <>
                  Add a detailed description of your gig that{" "}
                  <span className="font-semibold">
                    makes people want to buy your service.
                  </span>{" "}
                  Do not include any URLs or web addresses.
                </>
              }
            />
            <div className="sm:col-span-2">
              <Textarea className="h-[500px] sm:h-[650px]" />
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

export default DescriptionStep;
