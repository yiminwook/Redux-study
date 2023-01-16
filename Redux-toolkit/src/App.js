import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice , configureStore } from '@reduxjs/toolkit';

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

const counterSlice = createSlice({
  name: 'counter', //이름
  initialState: {value: 0}, //초기값
  reducers: {
    INCREMENT: (state, action) => {
      state.value += action.payload.step; //toolkit을 쓰면 불변성을 지키지 않아도 됌
      return state;
    } 
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer //복수형 쓰면 안된다.
  }
});

function Counter(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counterSlice.actions)
  return (
    <div>
      {/* <button onClick={() => dispatch({type:'counter/INCREMENT', step: 2})}>+</button> {count} */}
      <button onClick={() => dispatch(counterSlice.actions.INCREMENT({step: 2}))}>+</button> {count}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
