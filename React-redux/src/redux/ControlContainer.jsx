import Control from "../components/Control.jsx";
import { connect } from "react-redux";

export default connect(
  function mapStatesToProps(state, ownProps) {
    return state;
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      changeMode: (mode) => dispatch({type:'CHANGE_MODE', mode})
    };
  }
)(Control);
