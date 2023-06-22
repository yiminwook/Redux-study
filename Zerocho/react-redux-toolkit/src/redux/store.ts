import firstMiddlware from "@/redux/middlewares/first";
import thunkMiddeware from "@/redux/middlewares/thunk";
import reducer from "@/redux/reducers";
import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

const useStoreDispatch = () =>
  useDispatch<ThunkDispatch<typeof initialState, unknown, AnyAction>>();

const useStoreSelector: TypedUseSelectorHook<typeof initialState> = useSelector;

export default store;
export { useStoreDispatch as useDispatch, useStoreSelector as useSelector };
