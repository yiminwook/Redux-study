import Nav from "../components/Nav";
import { connect } from "react-redux";

export default connect(
  function mapStateToProps(state, ownProps){
    return state;
  },
  function mapDispatchToProps(dispatch, ownProps){
    return {
      select: (id) => dispatch({type: 'SELECT', id})
    };
  }
)(Nav);