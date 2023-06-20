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
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...prevState, data: action.data, isLoggingIn: true };
    case LOG_IN_SUCCESS:
      return { ...prevState, data: action.data, isLoggingIn: false };
    case LOG_IN_FAILURE:
      return { ...prevState, data: null, isLoggingIn: false };
    case LOG_OUT:
      return { ...prevState, data: null, isLoggingIn: false };
    default:
      return prevState;
  }
};

export default userReducer;
