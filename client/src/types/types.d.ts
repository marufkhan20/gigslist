interface ServiceMenuItem {
  name: string;
  slug: string;
}

interface ServiceMenu {
  id: number;
  name: string;
  slug: string;
  items?: ServiceItem[];
}

interface Service {
  _id: number;
  thumbnail: string;
  companyImg: string;
  companyName: string;
  title: string;
  location: string;
  fromPrice?: number;
}

interface SidebarMenu {
  name: string;
  link: string;
}

interface Register {
  name: string;
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

interface ErrorResponse {
  error: object;
}

interface RegisterUserResponse {
  error: object;
}

interface LoginUserResponse {
  error: object;
}

interface VerifyAccountResponse {
  error: string;
}

interface VerificationUser {
  _id: string;
  email: string;
  verified: boolean;
  verificationMode: boolean;
}

interface User {
  _id: string;
  name: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  businessEmail: string;
  phone: string;
  profilePic: string;
  role: string;
}

interface UserRequest {
  name?: string;
  email?: string;
  businessName?: string;
  websiteUrl?: string;
  businessEmail?: string;
  phone?: string;
}

interface Billing {
  _id?: string;
  cardName: string;
  cardNumber: number;
  expiryDates: string;
  cvc: number;
  zipCode: number;
  country: string;
}

interface Package {
  name: string;
  price: string;
  description: string;
}

interface Gig {
  _id?: string;
  user?: string;
  status?: string;
  completedStep?: number;
  autoRenew?: boolean;
  title?: string;
  category?: string;
  subCategory?: string;
  businessName?: string;
  businessEmail?: string;
  tags?: Array;
  price?: number;
  packages?: Package[];
  description?: string;
  state?: string;
  city?: string;
  streetAddress?: string;
  streetState?: string;
  streetCity?: string;
  offeredRemotely?: boolean;
  logo?: string;
  video?: string;
  images?: Array;
  createdAt?: string;
}

interface SubCategory {
  name: string;
  id: number;
}

interface Category {
  name: string;
  id: number;
  subCategories: SubCategory[];
}

interface City {
  name: string;
  id: number;
}

interface State {
  name: string;
  id: number;
  cities: City[];
}
