import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   favorite: false,
  favoriteProducts: [],
};

let storedFavorite;
if (JSON.parse(localStorage.getItem("stored-favorite"))?.length > 0) {
  storedFavorite = JSON.parse(localStorage.getItem("stored-favorite"));
  initialState.favoriteProducts = storedFavorite;
}

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      const sameProducts = state.favoriteProducts.filter(
        (el) => el.id == payload.id
      );
      if (sameProducts.length > 0) {
        return state;
      }

      state.favoriteProducts = [...state.favoriteProducts, payload];

      localStorage.setItem(
        "stored-favorite",
        JSON.stringify(state.favoriteProducts)
      );
    },
    removeFromFavorite: (state, { payload }) => {
      const lists = state.favoriteProducts.filter((el) => el.id != payload.id);
      state.favoriteProducts = lists;

      localStorage.setItem(
        "stored-favorite",
        JSON.stringify(state.favoriteProducts)
      );
    },
    removeAll: (state) => {
      state.favoriteProducts = [];
      localStorage.removeItem("stored-favorite");
    },
  },
});

export const { setFavorite, addToFavorite, removeFromFavorite, removeAll } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
