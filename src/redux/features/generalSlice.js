import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryName: "",
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
  },
});

export const { searchByCategory } = generalSlice.actions;
export default generalSlice.reducer;
