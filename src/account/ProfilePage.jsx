// * react
import { useState } from "react";

// * icons
import { BsPencilFill } from "react-icons/bs";
import UpdateUserInfoForm from "./UpdateUserInfoForm";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import UpdateAddressForm from "./UpdateAddressForm";

const ProfilePage = () => {
  // * hooks
  const { personalInfo, addressInfo } = useSelector(
    (state) => state.updateInfoSlice
  );
  const [isOpened, setIsOpened] = useState({
    userForm: false,
    addressForm: false,
  });

  // * handles
  const handleCloseUserForm = () => {
    setIsOpened({ ...isOpened, userForm: !isOpened.userForm });
  };

  const handleCloseAddressForm = () => {
    setIsOpened({ ...isOpened, addressForm: !isOpened.addressForm });
  };

  return (
    <>
      <article className=" flex pt-5 pb-16 h-full bg-white">
        <div className=" flex flex-col gap-10 px-16 w-full">
          <h3 className=" font-bold text-xl">My Profile</h3>

          {/* user profile card  */}
          <section className="pb-16 relative flex gap-5 shadow-2 p-3 sm:p-5 rounded-2xl overflow-hidden">
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bdr-1">
              <img
                className="w-[60px]"
                src="/userProfile/pngwing.com.png"
                alt=""
              />
            </div>
            <div className=" text-sm">
              <h3 className=" text-base font-semibold capitalize font-serif">
                {personalInfo ? personalInfo.first_name : "John"} &nbsp;
                {personalInfo ? personalInfo.last_name : "Doe"}
              </h3>
              <p className=" opacity-50 font-semibold">Team Mangager</p>
              <p className=" opacity-50 font-semibold">
                {addressInfo ? addressInfo.city : "Leeds"},
                {addressInfo ? addressInfo.country : " United Kingdom"}
              </p>
            </div>
            <div className=" absolute opacity-90 bottom-2 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40">
              <span className="">Edit</span>
              <BsPencilFill />
            </div>
          </section>

          {/* personal information  */}
          <section className="pb-10 p-3 relative shadow-2 w-full sm:p-5 rounded-2xl overflow-hidden">
            <div className=" w-9/12">
              <h3 className=" mb-5 font-bold">Personal information</h3>

              <div className=" grid grid-cols-1 sm:grid-cols-2">
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40 ">First Name</h4>
                  <h4 className="capitalize">
                    {personalInfo ? personalInfo.first_name : "John"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Last Name</h4>
                  <h4 className="capitalize">
                    {personalInfo ? personalInfo.last_name : "Doe"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Email address</h4>
                  <h4>
                    {personalInfo ? personalInfo.email : "johndoe@gamil.com"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Phone Number</h4>
                  <h4>
                    {personalInfo ? personalInfo.phone : "+09 345 346 46"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Bio</h4>
                  <h4>{personalInfo ? personalInfo.bio : "Team Manager"}</h4>
                </span>
              </div>
            </div>
            <div
              onClick={handleCloseUserForm}
              className=" absolute text-opacity-90 bottom-2 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40"
            >
              <span className="">Edit</span>
              <BsPencilFill />
            </div>
          </section>

          {/* address  */}
          <section className="pb-10 p-3 relative shadow-2 w-full sm:p-5 rounded-2xl overflow-hidden">
            <div className=" w-9/12">
              <h3 className=" mb-5">Address</h3>

              <div className=" grid grid-cols-1 sm:grid-cols-2">
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Country</h4>
                  <h4>
                    {addressInfo ? addressInfo.country : "United Kingdom"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">City / State</h4>
                  <h4>
                    {addressInfo ? addressInfo.city : "Leeds"},
                    {addressInfo ? addressInfo.state : " East London"}
                  </h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Postal Code</h4>
                  <h4>{addressInfo ? addressInfo.postal_code : "ERT 2354"}</h4>
                </span>
                <span className=" my-2">
                  <h4 className=" font-semibold opacity-40">Tax ID</h4>
                  <h4>
                    {addressInfo ? addressInfo.postal_code : "AS45645756"}
                  </h4>
                </span>
              </div>
            </div>
            <div
              onClick={handleCloseAddressForm}
              className=" absolute opacity-90 bottom-2 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40"
            >
              <span className="">Edit</span>
              <BsPencilFill />
            </div>
          </section>
        </div>
      </article>

      <AnimatePresence>
        {isOpened.userForm && (
          <UpdateUserInfoForm handleCloseUserForm={handleCloseUserForm} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened.addressForm && (
          <UpdateAddressForm handleCloseAddressForm={handleCloseAddressForm} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePage;
