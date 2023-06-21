import { Middleware, AnyAction, Dispatch } from "redux";

const thunkMiddeware: Middleware =
  (store) =>
  (dispatch) =>
  (
    action: AnyAction | ((dispatch: Dispatch<any>, state: any) => AnyAction)
  ) => {
    if (typeof action === "function") {
      //비동기

      return action(store.dispatch, store.getState);
    }

    const returnValue = dispatch(action);

    return returnValue;
  };

export default thunkMiddeware;
