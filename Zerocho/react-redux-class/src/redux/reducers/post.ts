const initialState: any[] = [];

const postReducer = (
  prevState = initialState,
  action: { type: string; data: any[] }
) => {
  switch (action.type) {
    case "ADD_POST":
      // prevState.posts.push(action.data);
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

export default postReducer;
