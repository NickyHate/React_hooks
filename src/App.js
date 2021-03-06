import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const initialValues = [
    { car: "bmvv", model: "x5", isNew: true },
    { car: "bmv", model: "x6", isNew: false },
    { car: "audi", model: "q7", isNew: true },
    { car: "ford", model: "focus", isNew: false },
  ];
  const array = new Array(5).fill(null).map(( it, index) => index + 1);

  const p1 = Promise.all(array.map( it => {
      
  }))


  const [x, setX] = useState(0);
  const [cars, setCars] = useState(initialValues);

  const name = "ford";
  const model = "focus";
  const bool = true;

  const newCar = { car: name, model: model, isNew: bool };

  const getCars = () => {
    setCars((prevState) => [...prevState, newCar]);
    console.log(cars);
  };

  const sum = x * x;
  const getSquare = () => {
    setX(x + 1);
  };
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=PPxbIO1hHRG2vJGHFRAH6L36hoBHSRk52xOgpwt9"
    ).then((response) => {
        return response.json()
    }).then((view) => {
        return view;
    })
  });


  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done 1");
      console.log("1");
    }, 3000);
  })
    .then((result) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("done 1");
          console.log("2");
        }, 3000);
      });
    })
    .then((result) => {
      return console.log(result);
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
            <div key={uuid()}>
              <div>{car.car}</div>
              <div>{car.model}</div>
              <div>{car.isNew}</div>
            </div>
          );
        })}
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
