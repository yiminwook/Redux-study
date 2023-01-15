import Create from "../components/Create";
import { connect } from "react-redux";

export default connect(
  function mapStateToProps(state, ownProps) {
    return state;
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      create: (title, desc) => dispatch({type: "CREATE", title, desc}) 
    };
  }
)(Create);