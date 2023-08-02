import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "",
  scrollable: true,
  isLogin: false,
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    searchByCategory: (state, { payload }) => {
      if (!payload) {
        return state;
      }
      state.categoryName = payload;
    },
    setScrollable: (state, { payload }) => {
      if (payload) {
        state.scrollable = payload;
      } else {
        state.scrollable = !state.scrollable;
      }
    },
    setIsLogin: (state, { payload }) => {
      if (payload) {
        state.isLogin = payload;
      } else {
        state.isLogin = !state.isLogin;
      }
    },
  },
});

export const { searchByCategory, setScrollable, setIsLogin } =
  generalSlice.actions;
export default generalSlice.reducer;
