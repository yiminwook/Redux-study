import { produce } from "immer";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

const initialState: { data: null | any; isLoggingIn: boolean } = {
  data: null,
  isLoggingIn: false,
};

const userReducer = (
  prevState = initialState,
  action: { type: string; data: any; isLoggingIn: boolean }
): typeof initialState => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = action.data;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
