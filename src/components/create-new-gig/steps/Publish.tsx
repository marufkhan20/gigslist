import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const Publish = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto">
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Payment"
              description={
                <>
                  Enter your billing info.{" "}
                  <span className="font-semibold">
                    Your posting will expire in 30 days.{" "}
                  </span>
                </>
              }
            />
            <div className="sm:col-span-2 flex flex-col gap-4">
              <h3 className="text-[15px]">Total amount charged: $10.00 USD</h3>
              <Input type="text" placeholder="Cardholder Name" />
              <Input type="number" placeholder="Card Number" />
              <div className="grid sm:grid-cols-2 gap-9">
                <Input type="text" placeholder="MM/YY" />
                <Input type="text" placeholder="CVC" />
                <Input type="text" placeholder="ZIP Code" />
                <Input type="text" placeholder="Country" />
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
          Pay & Publish
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

export default Publish;
