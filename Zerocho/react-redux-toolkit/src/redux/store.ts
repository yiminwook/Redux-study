import firstMiddlware from "@/redux/middlewares/first";
import thunkMiddeware from "@/redux/middlewares/thunk";
import reducer from "@/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([firstMiddlware, thunkMiddeware]),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { useAppDispatch as useDispatch, useAppSelector as useSelector };
