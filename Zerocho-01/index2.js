const { createStore } = require("redux");

const initialState = {
  user: null,
  posts: [],
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...prevState, user: action.data };
    case "LOG_OUT":
      return { ...prevState, user: null };
    case "ADD_POST":
      // prevState.posts.push(action.data);
      // return { ...prevState };
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const store = createStore(reducer, initialState);
console.log(store.getState());

const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(logIn({ id: 1, name: "userName", admin: true }));
store.dispatch(addPost({ id: 1, userId: 1, title: "hello" }));
store.dispatch(addPost({ id: 2, userId: 1, title: "world" }));
console.log(store.getState());
store.dispatch(logOut());
console.log(store.getState());
