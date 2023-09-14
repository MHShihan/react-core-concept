import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Players from "./team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const addFive = (number) => {
    alert(number + 10);
  };
  return (
    <>
      <h1>React Core Concept Part-2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addFive(5)}>Click Me 2</button>

      <Users></Users>

      <Players></Players>

      <Counter></Counter>
    </>
  );
}

export default App;
