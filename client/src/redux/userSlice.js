import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  cartData: [],
  total: 0,
};

// const state = store.getState();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userName: (state, action) => {
      state.userName = action.payload;
    },
    cartData: (state, action) => {
      state.cartData = action.payload;
    },
    total: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { userName, cartData, total } = userSlice.actions;

export default userSlice.reducer;
