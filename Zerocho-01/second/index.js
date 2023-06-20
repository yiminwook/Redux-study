const { createStore } = require("redux");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");
const reducer = require("./reducers");

const initialState = {
  user: {
    data: null,
    isLoggin: false,
  },
  posts: [],
  comments: [],
  favarites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState);
console.log(store.getState());

store.dispatch(logIn({ id: 1, name: "userName", admin: true }));
store.dispatch(addPost({ id: 1, userId: 1, title: "hello" }));
store.dispatch(addPost({ id: 2, userId: 1, title: "world" }));
console.log(store.getState());
store.dispatch(logOut());
console.log(store.getState());
