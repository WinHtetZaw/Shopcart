// * react
import { useEffect, useState } from "react";

// * react router dom
import { Link, useNavigate } from "react-router-dom";

// * mantine ui library
import { Rating } from "@mantine/core";

// * icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

// * rtk
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import { toast } from "react-hot-toast";
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/features/favoriteSlice";

const ProductCard = (props) => {
  const { id, title, thumbnail, description, category, rating, price } = props;

  // * hooks
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // * get cart lists info from local storage
  const currentProduct = JSON.parse(
    localStorage.getItem("storedCart")
  )?.currentProduct;

  let storedFavorite;
  if (localStorage.getItem("stored-favorite")) {
    storedFavorite = JSON.parse(localStorage.getItem("stored-favorite"));
  }

  const isCurrentProduct = currentProduct?.find(
    (el) => el.currentProductId == id
  );
  // isCurrentProduct && console.log(isCurrentProduct);

  const currentFavoriteProduct = storedFavorite?.find((el) => el.id == id);

  // const current = storedFavorite?.find((el) => el.id === id);
  // console.log(current);

  // currentFavoriteProduct && console.log(currentFavoriteProduct);

  useEffect(() => {
    if (isCurrentProduct) {
      setIsAdded(true);
    }
    if (currentFavoriteProduct) {
      setIsFavorite(true);
    }
  }, []);

  // * handles
  const handleAddToCartClick = (product) => {
    setIsAdded(true);
    dispatch(addToCart(product));
    toast.success("Successfully added");
  };

  const handleRemoveFromCartClick = (product) => {
    setIsAdded(false);
    dispatch(removeFromCart(product));
    toast.success("Successfully remove");
  };

  const handleAddFavoriteClick = (e, product) => {
    e.stopPropagation();
    setIsFavorite(true);
    dispatch(addToFavorite(product));
  };

  const handleRemoveFavoriteClick = (e, product) => {
    e.stopPropagation();
    setIsFavorite(false);
    dispatch(removeFromFavorite(product));
    console.log("remove");
  };

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className=" relative bg-white"
    >
      {/* favorite icon  */}
      <div className=" absolute top-2 right-2 bg-white p-1 rounded-full">
        {currentFavoriteProduct ? (
          <AiFillHeart
            onClick={(e) => handleRemoveFavoriteClick(e, props)}
            className="text-red-500"
          />
        ) : (
          <AiOutlineHeart onClick={(e) => handleAddFavoriteClick(e, props)} />
        )}
      </div>

      {/* img  */}
      {/* <Link to={`/products/detail/${id}`}> */}
      <div className=" rounded-lg w-full aspect-square bg-gray-100">
        <img className=" object-contain w-full h-full" src={thumbnail} alt="" />
      </div>
      {/* </Link> */}

      <section className=" flex gap-2 mt-2 flex-col">
        <span className=" font-semibold flex flex-col sm:flex-row justify-between sm:items-center">
          <h3 className=" font-2 w-full truncate">{title}</h3>
          <p className="">${price}</p>
        </span>
        <p className=" text-sm opacity-70 w-full truncate">{description}</p>

        <div className=" flex flex-col gap-3">
          <Rating
            color="rgb(17 94 89)"
            fractions={3}
            defaultValue={Math.round(rating)}
            readOnly
          />
          {!isCurrentProduct ? (
            <button
              onClick={() => handleAddToCartClick(props)}
              className="active:scale-95 transition duration-200 text-xl"
            >
              <BsCartPlus />
            </button>
          ) : (
            <button
              onClick={() => handleRemoveFromCartClick(props)}
              className="active:scale-95 transition duration-200 text-xl text-orange-500"
            >
              <BsCartDash />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
