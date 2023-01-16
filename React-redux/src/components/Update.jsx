import { Component } from "react";

class Update extends Component{
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.contents.id,
      title: this.props.contents.title,
      desc: this.props.contents.desc,
    };
  }
  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    // console.log(this.props.contents)
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.update(
          e.target.id.value, 
          e.target.title.value, 
          e.target.desc.value
        );
      }}>
        <h5>NOW: {this.state.title}</h5>
        <input type="hidden" name="id" value={this.state.id}></input>
        <p><input type="text" name="title" onChange={this.onChangeHandler.bind(this)} value={this.state.title} /></p> 
        <p><textarea type="text" name="desc" onChange={this.onChangeHandler.bind(this)}  value={this.state.desc} /></p>
        <p><input type="submit" /></p>
      </form>
    );
  }
}

export default Update;