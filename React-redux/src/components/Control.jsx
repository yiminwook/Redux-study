import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <ul>
        <li><Link to="#create" onClick={() => this.props.changeMode("CREATE")}>Create</Link></li>
        <li><Link to="#update" onClick={() => this.props.changeMode("UPDATE")}>Update</Link></li>
        {/* 삭제와 관련된 기능은 button으로 구현한다. */}
        <li><input type="button" value="delete"></input></li> 
      </ul>
    )
  }
}

export default Control;