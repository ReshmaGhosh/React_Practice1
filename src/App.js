import { dividerClasses } from "@mui/material";
import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  //let counter = 0;

  const addValue = () => {
    if (counter < 10) {
      counter = counter + 1;
      setCounter(counter);
      console.log("value added", counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("value removed", counter);
    }
  };
  return (
    <div>
      <h1>Counter Value :{counter}</h1>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </div>
  );
}

export default App;
