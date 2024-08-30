import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Packages from "../components/service-details/Packages";
import SellerLocation from "../components/service-details/SellerLocation";
import ServicesMenu from "../components/shared/services-menu";
import { SERVICES } from "../constants";

const ServiceDetails = () => {
  const { id } = useParams();
  // get service details
  const service = SERVICES?.find((item) => item._id === Number(id));
  const { title, companyImg, companyName, location } = service || {};

  // slider settings
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img className="w-[100px]!" src={`/images/services/${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    navigate: true,
  };
  return (
    <main className="pb-[100px]">
      <ServicesMenu />

      <section className="px-5 sm:px-11 lg:px-[100px] mt-6">
        {/* navigation */}
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <ul className="flex items-center gap-3">
            <li>
              <Link to="#">
                <img src="/images/icons/Home.png" alt="" />
              </Link>
            </li>
            <li className="w-[1px] h-3 bg-[#A1A5B7]" />
            <li>
              <Link className="font-medium text-primary" to="#">
                Labor & Moving
              </Link>
            </li>
            <li className="w-[1px] h-3 bg-[#A1A5B7]" />
            <li>
              <Link className="font-medium text-primary" to="#">
                Movers
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-3">
            <li>
              <Link
                className="font-medium text-primary flex items-center gap-3"
                to="#"
              >
                <img src="/images/icons/left.png" alt="" />
                Prev
              </Link>
            </li>
            <li className="w-[1px] h-3 bg-[#A1A5B7]" />
            <li>
              <Link
                className="font-medium flex items-center gap-3 text-primary"
                to="#"
              >
                Next
                <img src="/images/icons/right.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>

        {/* details */}
        <div className="grid lg:grid-cols-5 gap-[100px] mt-[38px]">
          <div className="lg:col-span-3">
            <h2 className="text-dark text-[28px] leading-9 font-semibold">
              {title}
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={`/images/services/${companyImg}`}
                alt=""
              />
              <div>
                <h4 className="font-semibold text-sm leading-[21px]">
                  {companyName}
                </h4>
                <span className="text-dark text-sm leading-[21px]">
                  {location}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="hidden lg:block slider-container w-full">
                <Slider {...settings}>
                  <div>
                    <img className="w-full" src="/images/services/1.png" />
                  </div>
                  <div>
                    <img className="w-full" src="/images/services/2.png" />
                  </div>
                  <div>
                    <img className="w-full" src="/images/services/3.png" />
                  </div>
                  <div>
                    <img className="w-full" src="/images/services/4.png" />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="font-semibold text-lg leading-7 mb-6">
                About This Gig
              </h3>
              <p>
                Available now for your last-minute moves. We provide the best
                service man with the van. 1 man or 2 men with a van or truck. We
                do any type of moving services!
                <br />
                <br />
                For inquiries ☎️
                <br />
                <br />
                Please send me pictures via text of the things you are moving 📸
                📱
                <br />
                <br />
                Include a description, for example:
                <br />
                -If there are stairs or elevator 🛗
                <br />
                -How many flights?
                <br />
                -Old location to new location 🏠 To 🏡
                <br />
                -If you need one helper or more 🧍🧍🧍🧍‍️(We provide up to 4
                depending on the size of the job)
                <br />
                -Provide date and time 🗓️ ⏰
                <br />
                <br />
                NOTE: PLEASE SEND PHOTOS OF YOUR ITEMS AND A DESCRIPTION OF WHAT
                EXACTLY YOU NEED US TO HELP YOU WITH. 📷
                <br />
                <br />
                Contact Owner & Operator Dave (929-231-2100)
              </p>
            </div>

            <div className="mt-5 pt-14 border-t">
              <h2 className="text-lg leading-7">About This Post</h2>
              <div className="mt-7 border rounded p-6 grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-[18px]">
                  <div>
                    <span className="text-[#5E6278]">Post ID</span>
                    <h3 className="font-medium text-[15px]">7748846438</h3>
                  </div>
                  <div>
                    <span className="text-[#5E6278]">Offered Remotely</span>
                    <h3 className="font-medium text-[15px]">No</h3>
                  </div>
                </div>

                <div className="flex flex-col gap-[18px]">
                  <div>
                    <span className="text-[#5E6278]">Posted</span>
                    <h3 className="font-medium text-[15px]">20 minutes ago</h3>
                  </div>
                  <div>
                    <span className="text-[#5E6278]">Share This Post</span>
                    <div className="flex mt-2 items-center gap-[6px]">
                      <Link to="#">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/images/icons/facebook.png"
                          alt=""
                        />
                      </Link>
                      <Link to="#">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/images/icons/twitter.png"
                          alt=""
                        />
                      </Link>
                      <Link to="#">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/images/icons/linkedin.png"
                          alt=""
                        />
                      </Link>
                      <Link to="#">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="/images/icons/google.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Packages />
            <SellerLocation />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;
