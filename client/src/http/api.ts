import { api } from "./client";

// authentication
export const register = (credentials: Register) =>
  api.post("/api/auth/register", credentials);
export const login = (credentials: Login) =>
  api.post("/api/auth/login", credentials);
export const resendVerifyCode = (user: VerificationUser) =>
  api.put("/api/auth/resend-verify-code", user);
export const verifyAccount = (id: string, verifyCode: number) =>
  api.put(`/api/auth/verify-account/${id}`, { verifyCode });
export const updatePassword = (oldPassword: string, password: string) =>
  api.put(`/api/auth/update-password`, { oldPassword, password });

// user
export const getUserDetails = () => api.get(`/api/users/details`);
export const updateUserInfo = (data: UserRequest) =>
  api.put("/api/users/update-info", data);

// billing
export const getBillings = () => api.get("/api/billings");
export const createBilling = (billing: Billing) =>
  api.post("/api/billings", billing);
export const deleteBilling = (id: string) => api.delete(`/api/billings/${id}`);

// gig
export const createGig = (gig: Gig) => api.post("/api/gigs", gig);
export const getGig = (id: string) => api.get(`/api/gigs/${id}`);
export const getGigs = () => api.get(`/api/gigs`);
export const getAllGigs = (query?: string) =>
  api.get(query ? `/api/gigs/all-gigs${query || "?"}` : `/api/gigs/all-gigs`);

// upload files
export const uploadFile = (formData: FormData, id: string) =>
  api.put(`/api/gigs/upload/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
