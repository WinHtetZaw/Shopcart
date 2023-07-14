import { GiShoppingCart } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GoSearch, GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import Category from "./Category";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartProducts } = useSelector((state) => state.cartSlice);

  // let storedCart;
  // if (JSON.parse(localStorage.getItem("storedCart"))?.products.length > 0) {
  //   storedCart = JSON.parse(localStorage.getItem("storedCart"));
  // }

  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.products;
  // console.log("storedCart ----", storedCart);

  // storedCart = JSON.parse(localStorage.getItem("storedCart"))

  return (
    <div className=" bg-white flex items-center sm:justify-around w-full h-20 border-b border-black border-opacity-20">
      {/* burger menu  */}
      <div className="sm:hidden ml-3">
        <HiOutlineMenuAlt2 className=" text-2xl" />
      </div>

      {/* logo  */}
      <h1 className=" hidden sm:flex items-center gap-1">
        <GiShoppingCart className=" text-xl md:text-3xl" />
        <span className=" heading-1">Shopcart</span>
      </h1>

      {/* categories  */}
      <div className=" ml-auto sm:m-0 mr-5">
        <Category />
      </div>

      {/* search  */}
      <div className="p-3 md:py-2 md:px-4 rounded-full hidden sm:flex items-center bg-gray-100">
        <input
          className=" outline-none bg-transparent hidden md:block"
          type="text"
          placeholder="Search . . . "
        />
        <GoSearch className=" text-xl opacity-70" />
      </div>

      {/* account  */}
      <div className="hidden sm:flex items-center icon-heading-1">
        <GoPerson className=" text-xl" />
        <h3 className=" heading-2">Account</h3>
      </div>

      {/* cart  */}
      <Link to={"/cart"} className="mr-5 sm:mr-0">
        <div className="icon-heading-1 relative">
          <FiShoppingCart className="text-xl" />
          {currentProduct?.length > 0 && (
            <span className="absolute top-1 left-4 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
          <h3 className=" heading-2">Cart</h3>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
