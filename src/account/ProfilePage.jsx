import { BsPencilFill } from "react-icons/bs";

const ProfilePage = () => {
  return (
    <>
      <div className=" p-5 rounded-2xl overflow-hidden w-full bg-gray-100">
        <h1 className=" text-lg md:text-2xl mb-5 font-bold font-2">
          Account Settings
        </h1>

        <article className=" flex py-5 h-full bg-white rounded-2xl text-slate-700">
          {/* left  */}
          {/* <div className=" hidden md:flex flex-col px-3 items-center w-1/5 border-r-2 border-black border-opacity-10">
            <h2 className="sidebar-item active">
              My Profile
            </h2>
          </div> */}

          {/* right  */}
          <div className=" flex flex-col gap-5 px-5 w-full">
            <h3 className=" font-bold text-xl">My Profile</h3>

            {/* user profile card  */}
            <section className="pb-16  relative flex gap-5 shadow-2 p-3 sm:p-5 rounded-2xl overflow-hidden">
              <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bdr-1">
                <img
                  className="w-[60px]"
                  src="/userProfile/pngwing.com.png"
                  alt=""
                />
              </div>
              <div className=" text-sm">
                <h3 className=" text-base font-semibold font-serif">John Doe</h3>
                <p className=" opacity-50 font-semibold">Team Mangager</p>
                <p className=" opacity-50 font-semibold">
                  Leeds, United Kingdom
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
                    <h4 className=" font-semibold opacity-40">First Name</h4>
                    <h4>John</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">Last Name</h4>
                    <h4>Doe</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">Email address</h4>
                    <h4>johndoe123@gamil.com</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">Phone Number</h4>
                    <h4>+09 345 346 46</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">Bio</h4>
                    <h4>Team Manager</h4>
                  </span>
                </div>
              </div>
              <div className=" absolute opacity-90 bottom-2 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40">
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
                    <h4>United Kingdom</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">City / State</h4>
                    <h4>Leeds, East London</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">Postal Code</h4>
                    <h4>ERT 2354</h4>
                  </span>
                  <span className=" my-2">
                    <h4 className=" font-semibold opacity-40">Tax ID</h4>
                    <h4>AS45645756</h4>
                  </span>
                </div>
              </div>
              <div className=" absolute opacity-90 bottom-2 sm:bottom-auto right-2 sm:top-5 sm:right-5 flex items-center gap-2 btn-2 border-opacity-40">
                <span className="">Edit</span>
                <BsPencilFill />
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProfilePage;
