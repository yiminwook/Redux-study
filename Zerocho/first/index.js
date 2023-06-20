const { createStore } = require("redux");
const { changeCompA } = require("./actions");
const reducer = require("./reducers");

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log(1, store.getState());

store.subscribe(() => {
  console.log("changed");
});

store.dispatch(changeCompA("b"));

console.log(2, store.getState());
