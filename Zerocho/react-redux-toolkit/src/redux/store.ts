import firstMiddlware from "@/redux/middlewares/first";
import thunkMiddeware from "@/redux/middlewares/thunk";
import reducer from "@/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState: Record<string, any> = {
  user: {
    data: null,
    isLoggingIn: false, //loading
  },
  posts: [],
  comments: [],
  favarites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([firstMiddlware, thunkMiddeware]),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
