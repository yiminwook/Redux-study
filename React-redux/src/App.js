import React from 'react';
import Header from './components/Header.jsx';
import Nav from './redux/NavContainer.jsx';
import Article from './redux/ArticleContainer.jsx';
import Control from './redux/ControlContainer.jsx';
import './App.css';

function App() {
  const appData = {"component": "App"};

  return (
    <div className="App">
      <Header appData={appData} />
      <Nav />
      <Control />
      <Article />
    </div>
  );
}

export default App;
