import { useState } from "react";
import ForgotPassword from "../components/auth/ForgotPassword";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
import Signup from "../components/auth/Signup";

interface IProps {
  setShowAuth: (arg0: boolean) => void;
  showAuth: boolean;
}

const screens: { [key: number]: React.ComponentType<any> } = {
  1: Signup,
  2: Login,
  3: ForgotPassword,
  4: ResetPassword,
};

const AuthLayout: React.FC<IProps> = ({ setShowAuth, showAuth }) => {
  const [activeScreen, setActiveScreen] = useState<number>(2);
  const Screen = screens[activeScreen];
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
