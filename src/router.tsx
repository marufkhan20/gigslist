import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreateNewGig from "./pages/CreateNewGig";
import Home from "./pages/Home";
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
        path: "/create-new-gig",
        element: <CreateNewGig />,
      },
    ],
  },
]);
