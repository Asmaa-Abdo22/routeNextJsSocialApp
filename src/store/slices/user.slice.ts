import { userState } from "@/types/user.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: userState = {
  token: null,
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
      console.log();
    });
    builder.addCase(loginUser.rejected, () => {
      console.log("error login");
    });
  },
});

export const userReducer = userSlice.reducer;
