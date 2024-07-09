import { useState } from "react";
import DescriptionStep from "../components/create-new-gig/steps/DescriptionStep";
import Gallery from "../components/create-new-gig/steps/Gallery";
import Location from "../components/create-new-gig/steps/Location";
import Overview from "../components/create-new-gig/steps/Overview";
import Pricing from "../components/create-new-gig/steps/Pricing";
import Publish from "../components/create-new-gig/steps/Publish";
import Success from "../components/create-new-gig/steps/Success";
import Tabs from "../components/create-new-gig/tabs";

const tabs: { [key: number]: React.ComponentType<any> } = {
  1: Overview,
  2: Pricing,
  3: DescriptionStep,
  4: Location,
  5: Gallery,
  6: Publish,
  7: Success,
};

const CreateNewGig = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const Tab = tabs[activeTab];
  return (
    <main className="pb-[127px]">
      <h2 className="mt-2 px-11">Submit a service</h2>
      <Tabs activeTab={activeTab} />
      <div className="px-11 md:px-0">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </main>
  );
};

export default CreateNewGig;
