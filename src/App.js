import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = [
    { car: "bmv", model: "x5", isNew: true },
    { car: "bmv", model: "x6", isNew: false },
    { car: "audi", model: "q7", isNew: true },
    { car: "ford", model: "focus", isNew: false },
  ];
  const [x, setX] = useState(0);
  const [cars, setCars] = useState(initialValues);

  const getCars = () => {
    setCars((prevState) => [
      ...prevState,
      { car: "lada", model: "priora", isNew: false },
    ]);
    console.log(cars);
  };

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
      <div onClick={getCars}>Законсолить машинки</div>
      <div>
        {cars.map((car) => {
          return (
            <>
              <div>{car.car}</div>
              <div>{car.model}</div>
              <div>{car.isNew}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
