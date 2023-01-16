import Control from "../components/Control.jsx";
import { connect } from "react-redux";

export default connect(
  function mapStateToProps(state, ownProps) {
    return state;
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      changeMode: (mode) => dispatch({type:'CHANGE_MODE', mode}),
      delete: (id) => {
        console.log(id)
        if (!id) return alert("선택된 항목이 없습니다.");
        if (window.confirm("정말로 삭제하시겠습니까?")) {
          return dispatch({type: "DELETE", id});
        }
      }
    };
  }
)(Control);
