import { combineReducers } from "redux";
import postReducer from "@/redux/reducers/post";
import userReducer from "@/redux/reducers/user";

const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

export default reducer;
