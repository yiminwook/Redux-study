import { Middleware } from "redux";

const firstMiddlware: Middleware =
  (store) =>
  (dispatch) =>
  (action: { type: string; isLoggin: boolean; data: any }) => {
    console.log("beforeDispatch", action);
    // dispatch 전
    if (action.type === "LOG_IN" || action.type === "LOG_OUT") {
      action.isLoggin = !!action.data?.id;
    }

    const returnValue = dispatch(action); //subscribe 실행
    // dispatch 후

    console.log("afterDispatch ", returnValue);
    return returnValue;
  };

export default firstMiddlware;
