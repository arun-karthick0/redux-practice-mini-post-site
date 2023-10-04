import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Arun",
    message: "Redux learning",
  },
];

const postSlice = new createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectedPost = (state) => state.post;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
