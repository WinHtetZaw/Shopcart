import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to={"/register"}>
            <li className=" dropdown-item">Sign up</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Profile;
