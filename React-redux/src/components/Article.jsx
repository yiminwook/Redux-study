import React, { Component } from "react";

class Article extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    // console.log(this.props)
    const { contents } = this.props;
    
    return (
      <article>
        <h2>{contents.title}</h2>
        {contents.desc}
      </article>  
    )
  }
}

export default Article;