import React from 'react';
import Search from "./components/Search";
import LikeBox from "./components/LikeBox";
import Menu from "./components/Menu";
import Hello from "./components/Hello";
import AddNumbers from "./components/AddNumbers";
import logo from './logo.svg';
import './App.css';
import menu from "./date/menu";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
    return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu menu={menu} />
          <Search />
          <LikeBox likes={5000} />
          <Hello
              name="Grzegorz"
              surname="Kowalski"
          />
          <AddNumbers numberA={12} numberB={12} />
          <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
      </header>
    </div>
  );
}

export default App;
