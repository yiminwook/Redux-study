import { AnyAction, Dispatch } from "redux";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
} from "@/redux/reducers/user";
import { addPost } from "@/redux/actions/post";

// const logIn = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

const logOut = (): AnyAction => {
  return {
    type: LOG_OUT,
    // data,
  };
};

//비동기
const logIn = (data: any) => {
  return (dispatch: Dispatch<AnyAction>, getState: any) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess({ id: 1, name: "userName", admin: true }));

        //다른 state도 같이 변경하려면 비동기 action으로 만들어야 한다.
        dispatch(addPost({ id: 1, title: "title", desc: "desc" }));
      }, 2000);
    } catch (error) {
      dispatch(logInFailure(error));
    }
  };
};

// const ChangeBoth = () => {
//   return (dispatch, getState) => {
//     dispatch(changeUserStore());
//     dispatch(changePostStore());
//   };
// };

const logInRequest = (data: any): AnyAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data: any): AnyAction => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (error: unknown) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export { logIn, logOut };
