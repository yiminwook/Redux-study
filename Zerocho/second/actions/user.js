// const logIn = (data) => {
//   return {
//     type: "LOG_IN",
//     data,
//   };
// };

const logOut = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

//비동기
const logIn = (data) => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            id: 1,
            name: "userName",
            admin: true,
          })
        );
      }, 2000);
    } catch (error) {
      dispatch(logInFailure(error));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

module.exports = {
  logIn,
  logOut,
};
