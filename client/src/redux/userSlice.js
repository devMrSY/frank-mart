import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  cartData: [],
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
  },
});

export const { userName, cartData } = userSlice.actions;

export default userSlice.reducer;
