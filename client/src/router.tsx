import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Account from "./pages/Account";
import Billing from "./pages/Billing";
import CreateNewGig from "./pages/CreateNewGig";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Security from "./pages/Security";
import ServiceDetails from "./pages/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/service-preview/:id",
        element: <ServiceDetails />,
      },
      {
        path: "",
        element: <PrivateLayout />,
        children: [
          {
            path: "/create-new-gig",
            element: <CreateNewGig />,
          },
          {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
              {
                path: "",
                element: <Account />,
              },
              {
                path: "posts",
                element: <Posts />,
              },
              {
                path: "security",
                element: <Security />,
              },
              {
                path: "billing",
                element: <Billing />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
