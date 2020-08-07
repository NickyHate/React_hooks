import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
  const sum = x * x;
  const getSquare = () => {
    setX(x+1);      
  };
  const checkValue = useEffect(() => {
  
  },[x])
  return (
    <div className="App">
      <div className="title">{x}</div>
      <p>{sum}</p>
      <button onClick={getSquare}>Нажми меня</button>
    </div>
  );
}

export default App;
