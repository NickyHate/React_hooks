import React, { useState } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
 
  const getSquare = () => {
    setX(x+1);
    const sum = x * x;
    console.log(sum);
  };
  return (
    <div className="App">
      <button onClick={getSquare}>Нажми меня</button>
    </div>
  );
}

export default App;
