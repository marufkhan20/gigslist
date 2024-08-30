import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store";

interface IProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: IProps) => {
  const { pathname } = useLocation();
  const { logout } = useAuthStore();

  let sideMenus: SidebarMenu[] = [];

  sideMenus = [
    {
      name: "Account",
      link: "/dashboard",
    },
    {
      name: "Posts",
      link: "/dashboard/posts",
    },
    {
      name: "Security",
      link: "/dashboard/security",
    },
    {
      name: "Billing",
      link: "/dashboard/billing",
    },
    {
      name: "Logout",
      link: "#",
    },
  ];

  const logoutHandler = () => {
    logout();
    toast.success("Logout Successfull.");
  };

  return (
    <nav
      className={`absolute shadow-md sm:shadow-none top-10 transition-all duration-200 bottom-10 ${
        showSidebar ? "left-0" : "-left-[120%]"
      } sm:left-0 bg-white border sm:border-transparent p-5 sm:p-0 z-50 sm:relative h-full w-[200px]`}
    >
      <ul className="flex flex-col gap-[14px]">
        {sideMenus?.map((menu) => (
          <li
            key={menu?.name}
            className={`font-semibold transition-all ${
              pathname === menu?.link
                ? "text-primary"
                : "text-[#A1A5B7] hover:text-primary"
            }`}
          >
            {menu?.name === "Logout" ? (
              <span
                className="w-full cursor-pointer block"
                onClick={logoutHandler}
              >
                {menu?.name}
              </span>
            ) : (
              <Link className="w-full block" to={menu?.link}>
                {menu?.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
