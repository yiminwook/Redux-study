import Update from '../components/Update';
import { connect } from 'react-redux';

export default connect(
  function mapStateToProps(state, ownProps) {
    const filtered = state.contents.filter(el => el.id === state.selected_content_id)[0];
    
    return {...state, contents: filtered};
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      update: (id, title, desc) => dispatch({type: "UPDATE", id, title, desc})
    };
  }
)(Update);