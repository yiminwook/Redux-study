const { createStore } = require("redux");

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const store = createStore(reducer, initialState);

console.log(1, store.getState());

store.subscribe(() => {
  console.log("changed");
});

//action
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));

console.log(2, store.getState());
