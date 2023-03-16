import React from 'react';
import { add, Person, Grzegorz } from "./ts/tsTasks";
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(add(2,3), Person, Grzegorz);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
