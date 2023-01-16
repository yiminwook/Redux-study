import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header.jsx';
import Nav from './redux/NavContainer.jsx';
import Control from './redux/ControlContainer.jsx';
import Read from './redux/ReadContainer.jsx';
import Create from './redux/CreateContainer.jsx';
import Update from './redux/UpdateContainer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      appData: {"component": "App"}
    }
  }
  render() {
    const Article = () => {
      const { mode } = this.props;
    
      if (mode === "CREATE") return <Create appData={this.state.appData} />;
      if (mode === "UPDATE") return <Update appData={this.state.appData} />;
      else return <Read />;
    } 

    return (
      <div className="App">
        <Header appData={this.state.appData} />
        <Nav appData={this.state.appData} />
        <Control appData={this.state.appData} />
        <Article appData={this.state.appData} />
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state, ownProps) {
    return state;
  }
)(App);
