import { postsState } from "@/types/posts.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const postsInitial: postsState = {
  posts: null,
};

export const getAllPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await axios.get(
      "https://linked-posts.routemisr.com/posts?limit=50",
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return data.posts;
  } catch (error) {
    console.log("error");
  }
});
const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitial,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
        console.log("posts ok",action)
        state.posts= action.payload
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {});
  },
});
export const postReducer = postsSlice.reducer;
