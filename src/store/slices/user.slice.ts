import { userState } from "@/types/user.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState: userState = {
  token: localStorage.getItem("token"),
};
export const loginUser = createAsyncThunk(
  "user/login",
  async (values: { email: string; password: string }) => {
    const { data } = await axios.post(
      "https://linked-posts.routemisr.com/users/signin",
      values
    );
    return data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(loginUser.fulfilled, (state,action) => {
      console.log("login success");
      console.log("state",state)
      console.log("payload",action)
     state.token= action.payload.token
     localStorage.setItem("token",action.payload.token )
     toast.success("welcome")
    });
    builder.addCase(loginUser.rejected, (state,action) => {
      console.log("error login",action.error.message);
      toast.error("Incorrect email or password")
    });
  },
});

export const userReducer = userSlice.reducer;
