import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface User {
  _id: number;
  name: string;
  email: string;
  role: string;
}

export interface Auth {
  user: User;
  token: string;
}

interface AuthState {
  auth: null | Auth;
  setAuth: (auth: Auth) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    auth: null,
    setAuth: (auth: Auth) => set({ auth }),
    logout: () => {
      // remove auth information from local storage
      localStorage.removeItem("auth");
      set({ auth: null });
    },
  }))
);
