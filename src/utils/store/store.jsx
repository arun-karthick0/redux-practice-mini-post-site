import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../../features/PostSlice";

export const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
