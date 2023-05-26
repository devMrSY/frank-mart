import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticate: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.authenticate = action.payload;
    },

    logout: (state, {}) => {
      state.authenticate = false;
    },
  },
});

export const { loggedIn, logout } = authSlice.actions;

export default authSlice.reducer;
