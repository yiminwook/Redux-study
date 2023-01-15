import { createStore } from "redux";

var initState = {
  mode: 'WELCOME',
  welcome_content:{
    title:'WEB',
    desc:'Hello, WEB'
  },
  selected_content_id: 1,
  contents: [
    {id: 1, title: 'HTML', desc: 'HTML is ...'},
    {id: 2, title: 'CSS', desc: 'CSS is ...'},
    {id: 3, title: 'JS', desc: 'JS is ...'},
  ]
};

const reducer = (state=initState, action) => {
  if (action.type === 'CHANGE_MODE') {
    return Object.assign({}, state, {mode: action.mode});
  }
  if (action.type === 'SELECT') {
    console.log(action)
    return {...state, selected_content_id: action.id, mode: "READ"};
  }
  return state;
}

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
  );
