import { useRef } from "react";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineHeart,
} from "react-icons/ai";

import { GoTrash } from "react-icons/go";
import { RiMenu2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  // * hooks
  const location = useLocation();
  const currentRouteRef = useRef();

  switch (location.pathname) {
    case "/account": {
      currentRouteRef.current = "account";
      break;
    }
    case "/account/favorite": {
      currentRouteRef.current = "favorite";

      break;
    }
    case "/account/setting": {
      currentRouteRef.current = "setting";
      break;
    }
  }

  console.log(location.pathname);
  return (
    <div className=" w-2/12 h-full">
      <div className=" mt-3">
        <RiMenu2Line className=" text-2xl ml-auto mr-5" />
      </div>

      <section className="flex flex-col gap-5 px-5 mt-10">
        <Link to={"/account"}>
          <div
            className={`sidebar-item ${
              currentRouteRef.current == "account" && "active"
            }`}
          >
            <AiOutlineHome className="text-lg" />
            <span>DashBoard</span>
          </div>
        </Link>

        <Link to={"/account/favorite"}>
        <div
            className={`sidebar-item ${
              currentRouteRef.current == "favorite" && "active"
            }`}
          >
            <AiOutlineHeart className="text-lg" />
            <span className=" whitespace-nowrap">Favorite</span>
          </div>
        </Link>

        <Link to={"/account/setting"}>
        <div
            className={`sidebar-item ${
              currentRouteRef.current == "setting" && "active"
            }`}
          >
            <AiOutlineSetting className="text-lg" />
            <span>Setting</span>
          </div>
        </Link>

        {/* <div className="sidebar-item text-red-500">
          <GoTrash className="text-lg" />
          <span className=" whitespace-nowrap">Delete Account</span>
        </div> */}
      </section>
    </div>
  );
};

export default Aside;
