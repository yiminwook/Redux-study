const firstMiddlware = (store) => (dispatch) => (action) => {
  console.log("beforeDispatch", action);
  // dispatch 전
  if ((action.type === "LOG_IN") | (action.type === "LOG_OUT")) {
    action.isLoggin = !!action.data?.id;
  }

  const returnValue = dispatch(action); //subscribe 실행
  // dispatch 후

  console.log("afterDispatch ", returnValue);
  return returnValue;
};

module.exports = firstMiddlware;
