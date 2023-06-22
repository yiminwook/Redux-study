import userSlice from "@/redux/reducers/user";
import postSlice from "@/redux/reducers/post";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});

export default reducer;
