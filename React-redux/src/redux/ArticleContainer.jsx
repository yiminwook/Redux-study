import Article from "../components/Article";
import { connect } from "react-redux";

export default connect(
  function mapStateToProps(state, ownProps) {
    if (state.mode === "WELCOME") {
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
)(Article);