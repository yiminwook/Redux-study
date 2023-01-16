import { createStore } from "redux";

var initState = {
  mode: 'WELCOME',
  welcome_content:{
    title:'WEB',
    desc:'Hello, WEB'
  },
  max_content_id: 3,
  selected_content_id: null,
  contents: [
    {id: 1, title: 'HTML', desc: 'HTML is ...'},
    {id: 2, title: 'CSS', desc: 'CSS is ...'},
    {id: 3, title: 'JS', desc: 'JS is ...'},
  ]
};

const reducer = (state=initState, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return Object.assign({}, state, {mode: action.mode});
    case 'SELECT':
      return {...state, selected_content_id: action.id, mode: "READ"};
    case 'CREATE':
      const newContentId = state.max_content_id + 1;
      const newContent = {
        id: state.max_content_id + 1,
        title: action.title,
        desc: action.desc
      };
      return Object.assign({}, state, {
        mode: "READ",
        selected_content_id: newContentId,
        max_content_id: newContentId,
        contents: [...state.contents, newContent]
      });
      case 'UPDATE':
        const {id, title, desc} = action;
        const updatedContents = state.contents.map(el => {
          if (el.id === +id) return { id: +id, title, desc };
          else return el;
        });
        return Object.assign({}, state, {mode: "READ", contents: updatedContents});
      case 'DELETE':  
      const filteredContents = state.contents.filter(el => el.id !== action.id);
        return Object.assign({}, state, {mode:"WELCOME", selected_content_id: null, contents: filteredContents});  
    default:
      return state;
  }
}

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
  );
