import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./index.css";
import { Auth, useAuthStore } from "./store";

const queryClient = new QueryClient();

const data = localStorage.getItem("auth");
const auth: Auth = data && JSON.parse(data);

useAuthStore.setState({
  auth,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster containerStyle={{ zIndex: "999999" }} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
