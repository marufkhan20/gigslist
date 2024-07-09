import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Textarea from "../../ui/Textarea";
import Description from "../Description";
import Section from "../Section";

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const Overview = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className="w-full md:w-[835px] md:mx-auto">
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
              <Textarea
                placeholder="I will do something I'm really good at or that my business does"
                className="font-semibold text-dark"
              />
              <div className="text-right">
                <span className="text-xs !text-[#7E8299]">0 / 80 max</span>
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
                <Select>
                  <option value="">Select Category</option>
                  <option value="">Technology</option>
                </Select>
                <Select>
                  <option value="">Select Subcategory</option>
                  <option value="">Technology</option>
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
                <Input type="text" placeholder="Your Name / Business Name" />
                <Input type="email" placeholder="Contact Email" />
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
              <Input type="text" className="mt-4 mb-2" />
              <span className="text-xs !text-[#7E8299]">
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
          onClick={() => setActiveTab(activeTab + 1)}
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default Overview;
