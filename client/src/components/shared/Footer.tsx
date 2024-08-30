import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7]">
      <div className="container">
        <div className="text-center flex flex-col items-center justify-center pt-[22px]">
          <img className="w-[130px]" src="/images/logo.png" alt="logo" />
          <p className="text-sm font-medium text-dark leading-6 mt-2">
            © 2024-2034 Gigslist. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-5 py-8 px-5 sm:px-0">
          <p className="text-sm font-medium text-dark leading-6">
            Questions? Contact us at{" "}
            <span className="text-primary">support@gigslist.io</span>
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="font-semibold text-sm leading-6 text-dark transition-all hover:text-primary"
                to="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-sm leading-6 text-dark transition-all hover:text-primary"
                to="#"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-sm leading-6 text-dark transition-all hover:text-primary"
                to="#"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
