import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";

export const myStore = configureStore({
  reducer: {
    userReducer,
  },
});
