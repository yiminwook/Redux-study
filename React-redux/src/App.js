import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header.jsx';
import Nav from './redux/NavContainer.jsx';
import Control from './redux/ControlContainer.jsx';
import Read from './redux/ReadContainer.jsx';
import Create from './redux/CreateContainer.jsx';

import './App.css';
import { mapStateToProps } from './redux/connect.js';

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
    
      if (mode === "CREATE") return <Create />; 
      else return <Read />;
    } 

    return (
      <div className="App">
        <Header appData={this.state.appData} />
        <Nav />
        <Control />
        <Article />
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state, ownProps) {
    return state;
  }
)(App);
