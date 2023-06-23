const { observable, autorun, runInAction, reaction, action } = require("mobx");

const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});

autorun(() => {
  console.log("changed", state.compA);
});

reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compA);
  }
);

runInAction(() => {
  state.compA = "b";
  state.compC = "c";
});

runInAction(() => {
  state.compA = "c";
  state.compC = "a";
});

const comAction = action(() => {
  state.compA = "action";
});

comAction();
