import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../redux/connect";

const Header = (props) => {
  return (
    <>
      <header>
        <h1><a href="#welcome" onClick={() => props.changeMode("WELCOME")}>WEB</a></h1>
        World Wide WEB
      </header>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);