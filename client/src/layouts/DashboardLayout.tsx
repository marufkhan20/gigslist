import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <main className="px-5 sm:px-11 min-h-[68vh] flex justify-between gap-5 md:gap-14 flex-col sm:flex-row pb-28 relative">
      <div className="block sm:hidden">
        <img
          src="/images/icons/Menu.png"
          className="cursor-pointer"
          alt="menu icon"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
      <Sidebar showSidebar={showSidebar} />
      <div className="flex-1 border border-[#D8D8E5] rounded-t-[5px] p-7 pb-14 h-fit overflow-x-hidden">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
