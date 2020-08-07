import React, { useState } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
  const sum = x * x;
  const getSquare = () => {
    setX(x+1);      
  };
  return (
    <div className="App">
      <p>{sum}</p>
      <button onClick={getSquare}>Нажми меня</button>
    </div>
  );
}

export default App;
