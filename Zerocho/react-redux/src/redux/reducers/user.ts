export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

const initialState: { data: null | any; isLoggin: boolean } = {
  data: null,
  isLoggin: false,
};

const userReducer = (
  prevState = initialState,
  action: { type: string; data: any; isLoggin: boolean }
) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...prevState, data: action.data, isLoggin: action.isLoggin };
    case LOG_IN_SUCCESS:
      return { ...prevState, data: action.data, isLoggin: action.isLoggin };
    case LOG_IN_FAILURE:
      return { ...prevState, data: null, isLoggin: action.isLoggin };
    case LOG_OUT:
      return { ...prevState, data: null, isLoggin: action.isLoggin };
    default:
      return prevState;
  }
};

export default userReducer;
