import { State } from "country-state-city";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

const Header = () => {
  console.log("states", State.getStateByCodeAndCountry("+1", ""));
  const [showAuth, setShowAuth] = useState<boolean>(false);
  return (
    <>
      <header className="px-11 py-6 flex items-center gap-5 justify-between">
        <div className="flex items-center gap-12 w-[80%]">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <div className="flex items-center gap-4 flex-1">
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
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={() => setShowAuth(true)} variant="secondary">
            Login
          </Button>
          <Button to="/login">Post a gig</Button>
        </div>
      </header>

      <AuthLayout showAuth={showAuth} setShowAuth={setShowAuth} />
    </>
  );
};

export default Header;
