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
