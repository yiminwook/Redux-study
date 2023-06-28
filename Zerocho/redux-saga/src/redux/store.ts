import { createStore, compose, applyMiddleware } from "redux";
import firstMiddlware from "@/redux/middlewares/first";
import thunkMiddeware from "@/redux/middlewares/thunk";
import reducer from "@/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@/redux/middlewares/sagas/saga";

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
  sagaTask: "",
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [firstMiddlware, thunkMiddeware, sagaMiddleware];

  const enhancer =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares));

  const store = createStore(reducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga); //saga를 실행

  return store;
};

const appStore = configureStore();

export default appStore;
export type AppStore = typeof appStore;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { useAppDispatch as useDispatch, useAppSelector as useSelector };
