import { produce } from "immer";

const initialState: any[] = [];

const postReducer = (
  prevState = initialState,
  action: { type: string; data: any[] }
) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        break;
    }
  });
};

export default postReducer;
