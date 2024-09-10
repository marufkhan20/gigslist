import { State } from "country-state-city";
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { METRO_AREAS } from "../../constants";
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
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState<City[]>();
  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();
  const stateQuery = searchParams.get("state");
  const cityQuery = searchParams.get("city");
  const titleQuery = searchParams.get("title");

  useEffect(() => {
    setState(stateQuery || "");
    setSearch(titleQuery || "");
    setCity(cityQuery || "");
  }, [stateQuery, cityQuery, titleQuery]);

  // set cities
  useEffect(() => {
    if (state) {
      // Find the category item
      const stateItem = METRO_AREAS.find((item) => item.name === state);
      setCities(stateItem ? stateItem.cities : []);
    }
  }, [state]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (city || state || search) {
      navigate(`/?state=${state}&city=${city}&title=${search}`);
    }
  }, [state, city, navigate, search]);
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
          {(pathname === "/" ||
            pathname.includes("service-details") ||
            pathname.includes("service-preview")) && (
            <div className="hidden lg:flex items-center gap-4 flex-1">
              <Select onChange={(e) => setState(e.target.value)}>
                <option value="null">Select State</option>
                {METRO_AREAS.map((item) => (
                  <option
                    selected={item.name === state}
                    value={item.name}
                    key={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </Select>
              <Select onChange={(e) => setCity(e.target.value)}>
                <option value="null">Select City</option>
                {cities?.map((item) => (
                  <option
                    selected={item.name === city}
                    value={item.name}
                    key={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </Select>
              <Input
                placeholder="Search services"
                type="text"
                icon="search.png"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
