import { Rating } from "@mantine/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import { useEffect, useState } from "react";

const ProductCard = (props) => {
  const { id, title, thumbnail, description, category, rating, price } = props;

  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  // * get cart lists info from local storage
  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.currentProduct;

  // currentProduct && console.log(currentProduct);

  const isCurrentProduct = currentProduct?.find(
    (el) => el.currentProductId == id
  );
  // isCurrentProduct && console.log(isCurrentProduct);

  useEffect(() => {
    if(isCurrentProduct) {
      setIsAdded(true)
    }
  }, []);

  // * handles
  const handleAddToCartClick = (product) => {
    setIsAdded(true);
    dispatch(addToCart(product));
  };

  const handleRemoveFromCartClick = (product) => {
    setIsAdded(false);
    dispatch(removeFromCart(product));
  };
  return (
    <div className=" relative bg-white">
      {/* favorite icon  */}
      <div className=" absolute top-2 right-2 bg-white p-1 rounded-full">
        {true ? <AiOutlineHeart /> : <AiFillHeart />}
      </div>

      {/* img  */}
      <Link to={`/products/detail/${id}`}>
        <div className=" rounded-lg w-full aspect-square bg-gray-100">
          <img
            className=" object-contain w-full h-full"
            src={thumbnail}
            alt=""
          />
        </div>
      </Link>

      {/* button  */}
      <div className=" flex gap-2 mt-2 flex-col">
        <span className=" font-semibold flex flex-col sm:flex-row justify-between sm:items-center">
          <h3 className=" font-2 w-full truncate">{title}</h3>
          <p className="">${price}</p>
        </span>
        <p className=" text-sm opacity-70 w-full truncate">{description}</p>
        <Rating
          color="rgb(17 94 89)"
          fractions={3}
          defaultValue={Math.round(rating)}
          readOnly
        />
        {!isCurrentProduct ? (
          <button
            onClick={() => handleAddToCartClick(props)}
            className="px-3 py-1 active:scale-95 rounded-full w-fit select-none cursor-pointer text-sm border-[1.5px] border-black border-opacity-70"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => handleRemoveFromCartClick(props)}
            className="px-3 py-1 active:scale-95 rounded-full w-fit select-none cursor-pointer text-sm border-[1.5px] border-black border-opacity-70"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
