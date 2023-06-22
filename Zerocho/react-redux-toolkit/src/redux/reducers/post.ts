import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "@/redux/actions/post";

const initialState: { data: any[] } = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    //동기
  },
  extraReducers: (build) => {
    //비동기
    build.addCase(addPost.pending, (state, action) => {});
    build.addCase(addPost.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    build.addCase(addPost.rejected, (state, action) => {});
  },
});

export default postSlice;
