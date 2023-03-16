import React from 'react';
import Quiz from "./components/Quiz";
import { add, Person, Grzegorz } from "./ts/tsTasks";
import artist from "./date/artist";
import fruits from "./date/fruits";
import logo from './logo.svg';
import './App.css';
import ColorQuiz from "./components/ColorQuiz";

function App() {
    // console.log(add(2,3), Person, Grzegorz);
  // const numberA : number = parseInt(prompt("Podaj liczbę A?") ?? "");
  // const numberB : number = parseInt(prompt("Podaj liczbę B?") ?? "");
  // const birthDate : number = parseInt(prompt("Podaj swój rok urodzenia?") ?? "");
  // const operator : string = prompt("Wybierz operator (+,-,*,/)?") ?? "";
  // let element : JSX.Element = <h5>Błędne dane</h5>;
  //
  // switch (operator) {
  //     case "+":
  //         element = <h1>{numberA + numberB}</h1>;
  //         break;
  //     case "-":
  //         element = <h2>{numberA - numberB}</h2>;
  //         break;
  //     case "*":
  //         element = <h1>{numberA * numberB}</h1>;
  //         break;
  //     case "/":
  //         element = <h1>{numberA / numberB}</h1>;
  //         break;
  //     default:
  //         break;
  // }
    const imageUrl : string = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
    const redDiv =  <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: "red"
    }} />
    const blueDiv =  <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: "blue"
    }} />
    const greenDiv =  <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: "green"
    }} />

    return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Quiz />
          <ColorQuiz />
          {/*<h1>{numberA + numberB}</h1>*/}
        {/*<h2>Mam: {new Date().getFullYear() - birthDate}</h2>*/}
        {/*<ul>*/}
        {/*    <li>{artist.nickname}</li>*/}
        {/*    <li>{artist.firstName}</li>*/}
        {/*    <li>{artist.lastName}</li>*/}
        {/*    <li>{artist.age}</li>*/}
        {/*</ul>*/}
        {/*{element}*/}
        {/*<p>{fruits.length}</p>*/}
        {/*<p>{fruits.join("-")}</p>*/}
        {/*  {*/}
        {/*      [redDiv, blueDiv, greenDiv]*/}
        {/*  }*/}
      </header>
    </div>
  );
}

export default App;
