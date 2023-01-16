import './App.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { increment } from './countSlice';

function Counter(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <button onClick={() => dispatch({type:'counter/INCREMENT', step: 2})}>+</button> {count} */}
      <button onClick={() => dispatch(increment({step: 2}))}>+</button> {count}
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
