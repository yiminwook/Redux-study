import React from 'react';
import Header from './components/Header.jsx';
import Nav from './redux/NavContainer';
import Article from './components/Article.jsx';
import './App.css';

function App() {
  const appData = {"component": "App"};

  return (
    <div className="App">
      <Header appData={appData} />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
