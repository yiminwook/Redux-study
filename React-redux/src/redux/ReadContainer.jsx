import Read from "../components/Read.jsx";
import { connect } from "react-redux";

export default connect(
  function mapStateToProps(state, ownProps) {
    if (state.mode === "WELCOME" || !state.selected_content_id) {
      const { title, desc } = state.welcome_content;
      return {...state, contents: {id: 0, title, desc}};
    } else {
      const { selected_content_id, contents } = state;
      
      const filteredContent = contents.filter(el => el.id === selected_content_id)[0];
      const { id, title, desc } = filteredContent;
      return {...state, contents: { id, title, desc}}
    }
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {};
  }
)(Read);