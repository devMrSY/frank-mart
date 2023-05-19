import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice";
import userSlice from "../redux/userSlice";

const loadState = () => {
  try {
    const loadedState = localStorage.getItem("state");
    if (loadedState === null) return undefined;
    return JSON.parse(loadedState);
  } catch (error) {
    return undefined;
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: { auth: authSlice, user: userSlice },
  preloadedState: persistedState,
});

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

store.subscribe(() => {
  saveState(store.getState());
});
