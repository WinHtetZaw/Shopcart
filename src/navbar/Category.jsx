import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useGetAllCategoriesQuery } from "../redux/services/productApi";
import { useDispatch } from "react-redux";
import { searchByCategory } from "../redux/features/generalSlice";
import { Link, useNavigate } from "react-router-dom";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isSuccess } = useGetAllCategoriesQuery();

  return (
    <>
      <div
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="icon-heading-1 dropdown-base-1"
      >
        <span className="flex gap-1 items-center select-none cursor-pointer">
          <h3 className="heading-2">Categories</h3>
          <IoIosArrowDown
            className={`${isOpen && "-rotate-180"} transition duration-150`}
          />
        </span>

        {/* drop area  */}
        {isOpen && (
          <ul className="dropdown-area-1 top-10 font-1 right-0 h-[50vh] overflow-y-scroll">
            <li className=" text-sm opacity-50 text-center font-bold">
              Category List
            </li>
            <Link to={"/products"}>
              <li className=" mt-3 px-3 py-2 rounded-sm select-none cursor-pointer hover:bg-gray-100">
                Show All
              </li>
            </Link>
            {data?.map((el, index) => (
              <Link key={index} to={`/products/category/${el}`}>
                <li className="dropdown-item">
                  {el}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Category;
