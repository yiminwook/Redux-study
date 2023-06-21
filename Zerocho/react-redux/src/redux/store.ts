import { createStore, compose, applyMiddleware } from "redux";
import firstMiddlware from "@/redux/middlewares/first";
import thunkMiddeware from "@/redux/middlewares/thunk";
import reducer from "@/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

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

const useStoreDispatch = () =>
  useDispatch<ThunkDispatch<typeof initialState, unknown, AnyAction>>();

const useStoreSelector: TypedUseSelectorHook<typeof initialState> = useSelector;

export default store;
export { useStoreDispatch as useDispatch, useStoreSelector as useSelector };
