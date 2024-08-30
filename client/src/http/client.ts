import axios from "axios";
import { Auth } from "../store";

const data = localStorage.getItem("auth");
const auth: Auth = data && JSON.parse(data);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${auth?.token}`,
  },
});
