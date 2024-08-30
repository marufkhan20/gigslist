import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";

const PrivateLayout = () => {
  const { auth } = useAuthStore();

  if (!auth?.token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
