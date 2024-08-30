import { State } from "country-state-city";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuthStore } from "../../store";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

const Header = () => {
  console.log("states", State.getStateByCodeAndCountry("+1", ""));
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const { auth } = useAuthStore();
  const { user } = auth || {};

  const { pathname } = useLocation();
  return (
    <>
      <Link
        to="/"
        className="pt-6 flex sm:hidden w-full items-center justify-center"
      >
        <img className="w-[130px]" src="/images/logo.png" alt="logo" />
      </Link>
      <header className="px-5 sm:px-11 py-6 flex items-center gap-2 sm:gap-5 justify-between relative">
        <div className="hidden sm:flex items-center gap-12 w-[80%]">
          <Link to="/">
            <img className="w-[130px]" src="/images/logo.png" alt="logo" />
          </Link>
          {pathname === "/" && (
            <div className="hidden lg:flex items-center gap-4 flex-1">
              <Select>
                <option value="">Select State</option>
              </Select>
              <Select>
                <option value="">Select City</option>
              </Select>
              <Input
                placeholder="Search services"
                type="text"
                icon="search.png"
              />
            </div>
          )}
        </div>
        <div className="flex justify-between sm:justify-end items-center gap-4 w-full lg:w-auto">
          {pathname === "/" && (
            <button
              className="block lg:hidden"
              onClick={() => setShowSearchBar((prev) => !prev)}
            >
              <img
                src="/images/icons/search-lg.png"
                className="w-5 h-5"
                alt=""
              />
            </button>
          )}
          {user?._id ? (
            <div className="flex items-center gap-4">
              <Button to="/create-new-gig" className="!w-fit">
                Post a gig
              </Button>
              <Link to="/dashboard">
                <img
                  src="/images/icons/user.png"
                  className="w-7 cursor-pointer"
                  alt=""
                />
              </Link>
            </div>
          ) : (
            <Button onClick={() => setShowAuth(true)} variant="secondary">
              Login
            </Button>
          )}
        </div>

        {/* mobile search bar */}
        {pathname === "/" && (
          <div
            className={`absolute transition-all duration-300 ${
              showSearchBar ? "opacity-100 visible" : "opacity-0 invisible"
            } top-[100%] left-0 right-0 w-full z-[999] bg-white border-b shadow px-11 flex pb-6 lg:hidden items-center gap-4 flex-1 flex-col sm:flex-row`}
          >
            <Select>
              <option value="">Select State</option>
            </Select>
            <Select>
              <option value="">Select City</option>
            </Select>
            <Input
              placeholder="Search services"
              type="text"
              icon="search.png"
            />
          </div>
        )}
      </header>

      <AuthLayout showAuth={showAuth} setShowAuth={setShowAuth} />
    </>
  );
};

export default Header;
