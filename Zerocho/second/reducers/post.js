const initialState = [];

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      // prevState.posts.push(action.data);
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

module.exports = postReducer;
