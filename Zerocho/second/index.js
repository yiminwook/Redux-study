const { createStore, compose, applyMiddleware } = require("redux");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");
const firstMiddlware = require("./middlewares/first");
const thunkMiddeware = require("./middlewares/thunk");
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

const enhancer = compose(applyMiddleware(firstMiddlware, thunkMiddeware));

const store = createStore(reducer, initialState, enhancer);
console.log(store.getState());
console.log(store.subscribe(() => console.log("subscribe")));

store.dispatch(logIn({ id: 1, name: "userName", admin: true }));
store.dispatch(addPost({ id: 1, userId: 1, title: "hello" }));
store.dispatch(addPost({ id: 2, userId: 1, title: "world" }));
console.log(store.getState());
store.dispatch(logOut());
console.log(store.getState());
