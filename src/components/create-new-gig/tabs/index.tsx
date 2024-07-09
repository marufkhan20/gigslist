import { Link } from "react-router-dom";
import Tab from "./Tab";

const Tabs = ({ activeTab }: { activeTab: number }) => {
  return (
    <div className="mt-12 px-5 py-[18px] border-y flex items-center justify-center gap-4 flex-wrap">
      <Tab activeTab={activeTab} step={1} name="Overview" />
      <Tab activeTab={activeTab} step={2} name="Pricing" />
      <Tab activeTab={activeTab} step={3} name="Description" />
      <Tab activeTab={activeTab} step={4} name="Location" />
      <Tab activeTab={activeTab} step={5} name="Gallery" />
      <Tab activeTab={activeTab} step={6} name="Publish" />

      {activeTab === 6 && (
        <div className="ml-12">
          <Link
            to="#"
            className="flex items-center gap-1 px-[10px] py-2 text-primary text-xs font-medium rounded border transition-all hover:border-primary"
          >
            <img src="/images/icons/Show.png" alt="" />
            <span>Preview</span>
          </Link>
        </div>
      )}

      {activeTab === 7 && (
        <div className="ml-12">
          <Link
            to="#"
            className="flex items-center gap-1 px-[10px] py-2 text-primary text-xs font-medium rounded border transition-all hover:border-primary"
          >
            <img src="/images/icons/Show.png" alt="" />
            <span>Go to post</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Tabs;
