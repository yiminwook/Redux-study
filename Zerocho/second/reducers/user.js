const initialState = { data: null, isLoggin: false };

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...prevState, data: action.data, isLoggin: action.isLoggin };
    case "LOG_OUT":
      return { ...prevState, data: null, isLoggin: action.isLoggin };
    default:
      return prevState;
  }
};

module.exports = userReducer;
