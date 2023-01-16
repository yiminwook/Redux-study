import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', //이름
  initialState: {value: 0}, //초기값
  reducers: {
    increment: (state, action) => {
      state.value += action.payload.step; //toolkit을 쓰면 불변성을 지키지 않아도 됌
      return state;
    } 
  }
});

export const { increment } = counterSlice.actions;

export default counterSlice;

/*
function reducer(state, action) {
  const newState = {...state};
  switch(action.type) {
    case "INCREMENT":
      newState.value += action.step;
      return newState;
    default: 
      return newState;
  }
}

const store = createStore(reducer, {value: 0});
*/