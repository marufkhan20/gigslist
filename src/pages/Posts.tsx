import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";

const Posts = () => {
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

      <div className="overflow-x-auto mt-10">
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
                Auto-Renew
              </th>
              <th className="text-[15px] text-heading font-semibold pb-4 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
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
                  I will help you move locally, or within a 40 mile radius of
                  your home
                </p>
              </td>
              <td>
                <button className="p-[7px] bg-success-light rounded text-success text-xs font-semibold cursor-default">
                  Active
                </button>
              </td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="enabled"
                    className="hidden"
                    // checked={enabled}
                  />
                  <label htmlFor="enabled" className="toggle-switch-label">
                    <div className="toggle-switch-dot"></div>
                  </label>
                </div>
              </td>
              <td>
                <select
                  className="px-[10px] py-[7px] bg-[#F6F6F7] rounded text-sm font-medium text-[#7E8299] outline-none"
                  name=""
                  id=""
                >
                  <option value="">Actions</option>
                  <option value="">View</option>
                  <option value="">Edit</option>
                  <option value="">Dublicate</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
    </div>
  );
};

export default Posts;
