// * react
import { useState } from "react";

// * icons
import { GoPerson } from "react-icons/go";

// * react router dom
import { Link } from "react-router-dom";

const Profile = () => {
  // * hooks
  const [isOpen, setIsOpen] = useState(false);

  // * local storage
  let shopcartUai;
  if (localStorage.getItem("shopcart-UAI")) {
    shopcartUai = JSON.parse(localStorage.getItem("shopcart-UAI"));
  }
  // shopcartUai && console.log(shopcartUai);

  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden relative h-14 cursor-pointer sm:flex items-center icon-heading-1"
    >
      <div className="p-3 border-black border-opacity-70 rounded-full border-[1.5px]">
        <GoPerson className=" text-xl " />
      </div>

      {isOpen && (
        <ul className="dropdown-area-1 top-12 font-1 right-0">
          <Link to={"/account"}>
            <li className=" dropdown-item">Account</li>
          </Link>
          {shopcartUai?.token ? (
            <li className=" dropdown-item">Log out</li>
          ) : (
            <Link to={"/log-in"}>
              <li className=" dropdown-item">Log in</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default Profile;
