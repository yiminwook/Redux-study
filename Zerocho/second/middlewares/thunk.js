const thunkMiddeware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    //비동기

    return action(store.dispatch, store.getState);
  }

  const returnValue = dispatch(action);

  return returnValue;
};

module.exports = thunkMiddeware;
