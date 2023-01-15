import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props)
    this.state ={};
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.create(e.target.title.value, e.target.desc.value);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p> 
        <p><textarea type="text" name="desc" placeholder="description" /></p>
        <p><input type="submit" /></p>
      </form>
    );
  }
}

export default Create;