import { Outlet } from "react-router-dom";
import Aside from "../account/Aside";

const AccountLayout = () => {
  return (
    <div className="flex min-h-[85vh]">
      <Aside/>
      <Outlet />
    </div>
  );
};

export default AccountLayout;
