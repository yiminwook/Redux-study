import { createStore, compose, applyMiddleware } from "redux";
import firstMiddlware from "@/redux/middlewares/first";
import thunkMiddeware from "@/redux/middlewares/thunk";
import reducer from "@/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
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

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(firstMiddlware, thunkMiddeware))
    : compose(applyMiddleware(firstMiddlware, thunkMiddeware));

const store = createStore(reducer, initialState, enhancer);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { useAppDispatch as useDispatch, useAppSelector as useSelector };
