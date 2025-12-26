import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";
import { postReducer } from "./slices/posts.slice";

export const myStore = configureStore({
  reducer: {
    userReducer,
    postReducer
  },
});

type appStore = typeof myStore;
export type rootState = ReturnType<appStore["getState"]>;
export type appDispatch = appStore["dispatch"];
