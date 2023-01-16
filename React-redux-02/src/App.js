import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root: {number}</h1>
      <div id='grid'>
        <Left1 number={number}></Left1> 
        <Right1 
          number={number} 
          onIncrease={(n) => setNumber(number+n)}
        ></Right1>
      </div>
    </div>
  );
}

function Left1({ number }) {
  return (
    <div>
      <h1>Left1: {number}</h1>
      <Left2 number={number}></Left2>
    </div>
  );
}

function Left2({ number }) {
  return (
    <div>
      <h1>Left2: {number}</h1>
      <Left3 number={number}></Left3>
    </div>
  );
}

function Left3({ number }) {
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

function Right1({ number, onIncrease }) {
  return (
    <div>
      <h1>Right1: {number}</h1>
      <Right2 number={number} onIncrease={onIncrease}></Right2>
    </div>
  );
}

function Right2({ number, onIncrease }) {
  return (
    <div>
      <h1>Right2: {number}</h1>
      <Right3 number={number} onIncrease={onIncrease}></Right3>
    </div>
  );
}

function Right3({ number, onIncrease }) {
  return (
    <div>
      <h1>Right3: {number}</h1>
      <input 
        type="button" 
        onClick={() => {
          onIncrease(1);
        }} 
        value="+"
      ></input>
    </div>
  );
}