import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

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

function Counter(props) {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({type: "INCREMENT", step: 2})}>+</button> {count}
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
