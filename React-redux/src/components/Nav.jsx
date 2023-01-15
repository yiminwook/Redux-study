import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    const { contents } = this.props;

    return (
      <>
        <nav>
          <ol>
            {contents.map(el => {
              return (
                <li key={el.id}>
                  <Link 
                    onClick={function(){this.props.select(el.id)}.bind(this)} 
                    to={`#${el.title}`}
                  >
                    {el.title}
                  </Link>
                </li>
              )
            })}
          </ol>
        </nav>
      </>
    )
  }
}

export default Nav;