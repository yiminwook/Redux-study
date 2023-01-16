import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './countSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer //복수형 쓰면 안된다.
  }
});

export default store;