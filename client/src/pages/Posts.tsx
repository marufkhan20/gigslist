import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import { getGigs } from "../http/api";

const Posts = () => {
  const [action, setAction] = useState("");
  const [selectedGig, setSelectedGig] = useState<Gig>();

  const router = useNavigate();

  // get all gigs
  const { data: gigs, isLoading } = useQuery<Gig[], Error>({
    queryKey: ["getGigs"],
    queryFn: async () => {
      const { data } = await getGigs();
      return data;
    },
  });

  useEffect(() => {
    if (action && action === "edit") {
      if (selectedGig?.status === "active") {
        router(`/edit-gig?gigId=${selectedGig?._id}`);
      } else {
        router(`/create-new-gig?gigId=${selectedGig?._id}`);
      }
    }

    if (action && action === "view") {
      if (selectedGig?.status === "active") {
        router(`/service-details/${selectedGig?._id}`);
      } else {
        router(`/service-preview/${selectedGig?._id}`);
      }
    }
  }, [action, router, selectedGig]);
  return (
    <div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div>
          <h4 className="text-[15px] font-semibold text-heading">
            Total Posts: <span className="text-primary">19</span>
          </h4>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <Input placeholder="Search posts" type="text" icon="search.png" />
          <Select>
            <option value="">Bulk Actions</option>
          </Select>
          <Button variant="border">Apply</Button>
        </div>
      </div>
      <div className="overflow-x-auto min-h-10 mt-10">
        {!isLoading && gigs?.length && (
          <table className="min-w-[1014px] w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-4 text-left">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="text-[15px] text-heading font-semibold pb-4 text-left">
                  Gig Name
                </th>
                <th className="text-[15px] text-heading font-semibold pb-4 text-left">
                  Status
                </th>
                <th className="text-[15px] text-heading font-semibold pb-4 text-left">
                  Sales
                </th>
                <th className="text-[15px] text-heading font-semibold pb-4 text-left">
                  Earnings
                </th>
                <th className="text-[15px] text-heading font-semibold pb-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {gigs?.map((gig) => (
                <tr className="border-b">
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src="/images/services/demo.png"
                      className="h-[70px]"
                      alt=""
                    />
                    <p className="text-heading text-[15px]">
                      {gig?.title || "Gig title is not set yet."}
                    </p>
                  </td>
                  <td>
                    {gig?.status === "draft" && (
                      <button className="p-[7px] bg-gray-100 rounded text-gray-500 text-xs font-semibold cursor-default">
                        Draft
                      </button>
                    )}

                    {gig?.status === "active" && (
                      <button className="p-[7px] bg-primary-light rounded text-primary text-xs font-semibold cursor-default">
                        Active
                      </button>
                    )}

                    {gig?.status === "deactive" && (
                      <button className="p-[7px] bg-[#FBD9D7] rounded text-[#EA4335] text-xs font-semibold cursor-default">
                        Deactive
                      </button>
                    )}
                  </td>
                  <td className="font-medium">
                    0
                    {/* <div className="toggle-switch">
                      <input
                        type="checkbox"
                        id="enabled"
                        className="hidden"
                        // checked={enabled}
                      />
                      <label htmlFor="enabled" className="toggle-switch-label">
                        <div className="toggle-switch-dot"></div>
                      </label>
                    </div> */}
                  </td>
                  <td className="font-medium">$0.00</td>
                  <td>
                    <select
                      className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                      name=""
                      id=""
                      onChange={(e) => {
                        setSelectedGig(gig);
                        setAction(e.target.value);
                      }}
                    >
                      <option value="">Actions</option>
                      <option value="view">View</option>
                      <option value="edit">Edit</option>
                      <option value="dublicate">Dublicate</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!isLoading && !gigs && (
          <div className="w-full flex text-center justify-center font-medium">
            <span>No Gigs Foun! Create a new gig.</span>
          </div>
        )}

        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <ImSpinner9 className="transition-all animate-spin text-2xl" />
          </div>
        )}
      </div>

      {gigs && (
        <div className="mt-9">
          <ul className="flex flex-wrap items-center justify-end text-sm font-semibold text-[#7E8299] gap-[2px]">
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              Previous
            </li>
            <li className="py-2 px-4 rounded-md bg-primary text-white transition-all cursor-pointer">
              1
            </li>
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              2
            </li>
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              3
            </li>
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              4
            </li>
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              5
            </li>
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              6
            </li>
            <li className="py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer">
              Next
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Posts;
