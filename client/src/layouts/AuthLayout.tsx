import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
import Signup from "../components/auth/Signup";
import VerifyAccount from "../components/auth/VerifyAccount";

interface IProps {
  setShowAuth: (arg0: boolean) => void;
  showAuth: boolean;
}

const screens: { [key: number]: React.ComponentType<any> } = {
  1: Signup,
  2: Login,
  3: VerifyAccount,
  4: ForgotPassword,
  5: ResetPassword,
};

const AuthLayout: React.FC<IProps> = ({ setShowAuth, showAuth }) => {
  const [activeScreen, setActiveScreen] = useState<number>(2);
  const Screen = screens[activeScreen];

  const { pathname } = useLocation();

  useEffect(() => {
    // get verification user information from local storage
    let user = localStorage.getItem("verificationUser");

    if (user) {
      user = JSON.parse(user);
      if (user && typeof user === "object") {
        setActiveScreen(3);
      }
    }
  }, [setActiveScreen]);

  useEffect(() => {
    setShowAuth(false);
  }, [pathname, setShowAuth]);
  return (
    <div
      className={`fixed transition-all duration-300 ${
        showAuth ? "opacity-100 visible" : "opacity-0 invisible"
      } inset-0 w-full h-full bg-black/90 z-[9999] flex items-center justify-center`}
      onClick={() => setShowAuth(false)}
    >
      <Screen setActiveScreen={setActiveScreen} setShowAuth={setShowAuth} />
    </div>
  );
};

export default AuthLayout;
