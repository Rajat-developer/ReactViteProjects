import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  //let counter=10;
  const addValue = () => {
    setCounter(counter + 1);
    // console.log('value added');
  };
  const removeValue = () => {
    setCounter(counter - 1);
    // console.log('value removed');
  };
  return (
    <>
      <h1>hey!</h1>
      <h2>counterValur={counter}</h2>
      <button onClick={addValue}>AddValue</button>
      <br /> <br />
      <button onClick={removeValue}>RemoveValue</button>
    </>
  );
}

export default App;
