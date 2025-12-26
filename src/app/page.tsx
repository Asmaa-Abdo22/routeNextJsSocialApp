"use client";
import Loading from "@/components/Loading/Loading";
import PostCard from "@/components/PostCard/PostCard";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hook";
import { getAllPosts } from "@/store/slices/posts.slice";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
// import Loading from "./loading";
export default function Home() {
  const dispatch = useAppDispatch();
  let { posts } = useAppSelector((store) => store.postReducer);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  if (!posts) {
    return <Loading />;
  }
  return (
    <>
      <Grid container>
        <Grid size={3}></Grid>
        <Grid size={6} sx={{ p: 2 }}>
          {posts?.map((item, index) => (
            <PostCard key={item._id} postInfo={item}/>
          ))}
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </>
  );
}
