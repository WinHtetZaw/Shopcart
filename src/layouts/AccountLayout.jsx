import { Outlet } from "react-router-dom";
import Aside from "../account/Aside";

const AccountLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-7 w-full min-h-[85vh] bg-gray-100">
      <div className=" col-span-2">
        <Aside />
      </div>
      <div className=" col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
