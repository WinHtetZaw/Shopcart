import { Outlet } from "react-router-dom";
import Aside from "../account/Aside";
import { useState } from "react";

const AccountLayout = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="flex gap-7 w-full min-h-[85vh] bg-gray-100">
      <div className={`${isOpened ? "w-[100px]" : "w-[200px]"} min-h-[85vh]`}>
        <Aside isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>
      <div className={`${isOpened ? " w-full" : " w-full"} h-full`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;
