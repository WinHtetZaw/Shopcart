// * icons
import { GiShoppingCart } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GoSearch, GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

// * react router dom
import { Link } from "react-router-dom";

// * react redux
import { useSelector } from "react-redux";

// * components
import Category from "./Category";
import Search from "./Search";
import Profile from "./Profile";
import Breadcrumb from "./Breadcrumb";

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
    <>
      <div className="bg-white  flex items-center sm:justify-around w-full h-20  border-b border-gray-300">
        {/* burger menu  */}
        <div className="sm:hidden ml-3">
          <HiOutlineMenuAlt2 className=" text-2xl" />
        </div>

        {/* logo  */}
        <Link to={"/"}>
          <h1 className=" hidden sm:flex items-center gap-1">
            <GiShoppingCart className=" text-xl md:text-3xl" />
            <span className=" heading-1">Shopcart</span>
          </h1>
        </Link>

        {/* categories  */}
        <div className=" ml-auto sm:m-0 mr-5">
          <Category />
        </div>

        {/* search  */}
        <Search />

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

        {/* account  */}
        <Profile />
      </div>
      <Breadcrumb />
    </>
  );
};

export default Navbar;
