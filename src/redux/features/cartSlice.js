import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  currentItemInfo: [],
  totalPrice: 0,
};

let storedCart;
if (JSON.parse(localStorage.getItem("storedCart"))?.products.length > 0) {
  storedCart = JSON.parse(localStorage.getItem("storedCart"));
  initialState.cartProducts = storedCart.products;
  initialState.currentItemInfo = storedCart?.currentProduct;
  initialState.totalPrice = storedCart?.totalPrice;
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    removeAll: (state) => {
      // * condition for add to cart or remove from cart method
      state.cartProducts = [];
      state.currentItemInfo = [];
      state.totalPrice = 0;

      localStorage.removeItem("storedCart");
    },

    // * add to cart click method
    addToCart: (state, { payload }) => {
      // * check a product is already add or not
      const sameProducts = state.cartProducts.filter(
        (el) => el.id == payload.id
      );
      if (sameProducts.length > 0) {
        return state;
      }

      // * create an object to calculate current price and quantity
      state.currentItemInfo = [
        ...state.currentItemInfo,
        {
          currentProductId: payload.id,
          quantity: 1,
          singleItemPrice: payload.price,
        },
      ];

      state.cartProducts = [...state.cartProducts, payload];
      state.totalPrice += payload.price;
      // state.isAdded = true;

      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        // isAddedInCart: state.isAdded,
        totalPrice: state.totalPrice,
      };
      localStorage.setItem("storedCart", JSON.stringify(storedCart));
    },
    removeFromCart: (state, { payload }) => {
      // remove from cart click method

      // * filter cart products
      const lists = state.cartProducts.filter((el) => el.id != payload.id);

      // * find current in currentItemInfo array to calculate current price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.currentProductId == payload.id
      );
      // filter.singleItemPrice = payload.price;

      state.cartProducts = lists;
      state.totalPrice = state.totalPrice - filter.singleItemPrice;
      // state.totalPrice - filter.quantity * filter.singleItemPrice;

      const currentItemInfoLists = state.currentItemInfo.filter(
        (el) => el.currentProductId != payload.id
      );

      state.currentItemInfo = currentItemInfoLists;

      // prepare array to store in local storage
      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        // isAddedInCart: state.isAdded,
        totalPrice: state.totalPrice,
      };
      localStorage.setItem("storedCart", JSON.stringify(storedCart));
    },

    // * when click + btn increase quantity and price method
    addQuantityPriceCalc: (state, { payload }) => {
      // * find current in currentItemInfo array to calculate current price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.currentProductId == payload.id
      );
      filter.quantity += 1;
      filter.singleItemPrice += payload.price;
      state.totalPrice += payload.price;

      // prepare array to store in local storage
      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        // isAddedInCart: state.isAdded,
        totalPrice: state.totalPrice,
      };
      localStorage.setItem("storedCart", JSON.stringify(storedCart));
    },

    // when click - btn reduce quantity and price
    reduceQuantityPriceCalc: (state, { payload }) => {
      // * find current in currentItemInfo array to calculate current price and quantity
      const filter = state.currentItemInfo.find(
        (el) => el.currentProductId == payload.id
      );
      if (filter.quantity == 1) {
        return state;
      }
      filter.singleItemPrice -= payload.price;
      filter.quantity -= 1;
      state.totalPrice -= payload.price;

      // prepare array to store in local storage
      const storedCart = {
        products: state.cartProducts,
        currentProduct: state.currentItemInfo,
        // isAddedInCart: state.isAdded,
        totalPrice: state.totalPrice,
      };
      localStorage.setItem("storedCart", JSON.stringify(storedCart));
    },
  },
});

export const {
  removeAll,
  addToCart,
  removeFromCart,
  addQuantityPriceCalc,
  reduceQuantityPriceCalc,
} = cartSlice.actions;
export default cartSlice.reducer;
