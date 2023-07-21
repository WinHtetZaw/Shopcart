import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";
import generalSlice from "./features/generalSlice";
import cartSlice from "./features/cartSlice";
import favoriteSlice from "./features/favoriteSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    generalSlice: generalSlice,
    cartSlice: cartSlice,
    favoriteSlice: favoriteSlice,
    // paginateSlice: paginateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
