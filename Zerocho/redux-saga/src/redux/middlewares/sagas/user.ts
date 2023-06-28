import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from "@/redux/reducers/user";
import {
  all,
  call,
  fork,
  take,
  takeEvery,
  takeLatest,
  delay,
  put,
} from "redux-saga/effects";

/**
 *  call 동기적 함수호출
 *  fork 비동기적 함수호출
 *  put Action dispatch
 */

function loginAPI() {}

function* logIn() {
  try {
    /**
     * call로 실행할시 call이 끝나고 아래 코드를 실행
     * fork로 실행할시 순서에 상관없이 비동기적으로 실행됌
     */
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchHello() {
  console.log("before  saga");

  /**
   * takeEvery action이 종료때마다 매번 실행, while true로 감싸준것과 같다.
   * takeLatest action이 모두 종료되고 한번 실행, 디바운싱
   */
  yield takeEvery("HELLO_SAGA", function* () {
    //HELLO_SAGA action이 실행될때 아래 코드를 실행
    console.log("HELLO_SAGA");
    yield delay(1000);
    yield put({
      type: "BYE_SAGA",
    });
  });
}

// function* watchHello() {
//   console.log("before  saga");
//   while (true) {
//     yield take("HELLO_SAGA"); //HELLO_SAGA action이 실행될때
//     console.log("HELLO_SAGA");
//   }
// }

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchHello)]);
}
