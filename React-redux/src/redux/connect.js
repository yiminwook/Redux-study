const mapStateToProps = (state, ownProps) => {
  //store에 저장된 state
  //ownProps 상위 컴포넌트로부터 받는 props
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  //dispatch store.dispatch()와 동일
  //ownProps 상위 컴포넌트로부터 받는 props
  return {
    changeMode: (mode) => dispatch({type:'CHANGE_MODE', mode})
  };
}

export { mapStateToProps, mapDispatchToProps }