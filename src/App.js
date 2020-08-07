import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = {
    car: "bmw",
    model: "x5",
    color: "black",
  };
  const [x, setX] = useState(0);
  const [value, setValue] = useState(initialValues);

  const sum = x * x;
  const getSquare = () => {
    setX(x + 1);
  };
  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/Africa/Ceuta").then(
      (response) => {
        console.log(response.json());
      }
    );
  });
  return (
    <div className="App">
      <div className="title">{x}</div>
      <p>{sum}</p>
      <div onClick={getSquare}>Нажми меня</div>
      
    </div>
  );
}

export default App;
