import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 5;

  const addValue = () => {
    // console.log("value", counter);
    // counter = counter + 1;
    if (counter < 20)
      // setCounter(20);
      setCounter(counter + 1);
  };

  const removeValue = () => {
    counter > 0 && setCounter(counter - 1); // setCounter((p) => p - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
