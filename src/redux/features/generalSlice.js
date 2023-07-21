import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "",
  scrollable: true,
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
  },
});

export const { searchByCategory, setScrollable } =
  generalSlice.actions;
export default generalSlice.reducer;
