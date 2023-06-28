import { all, call } from "redux-saga/effects";
import userSaga from "@/redux/middlewares/sagas/user";
import postSaga from "@/redux/middlewares/sagas/post";

export default function* rootSaga() {
  yield all([call(userSaga), call(postSaga)]);
}
