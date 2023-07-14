import React from "react";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
    <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/399159/pexels-photo-399159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
        className=" md:py-10 py-5 px-8 md:px-16 w-full h-[150px] md:h-[300px] bg-cover bg-bottom bg-no-repeat rounded-lg mt-10"
      >
        <h2 className=" tracking-wider  text-teal-800 text-[1.125rem] md:text-[1.875rem] md:lh-3 lh-1 font-2 font-bold capitalize w-full md:w-1/2 lg:w-1/3">
          Grab upto 50% off on selected headphone
        </h2>
        <button className="md:mt-10 mt-5 btn-1 capitalize text-white bg-teal-800">
          buy now
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default ProductLayout;
