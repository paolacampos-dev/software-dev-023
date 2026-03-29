import { useState } from "react";

function App() {
  // const = [stateVariable, stateFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Increase count");
    setCount(count + 1);
  }

  return (
    <>
      <h1>React State</h1>
      <button onClick={handleClick}>Click me!</button>
      <p>{count}</p>
    </>
  );
}

export default App;

/*
dummy example, not real!
function timsExampleUseState(initalValue) {
  let state = initalValue;
  function stateFunction(newValue) {
    state = newValue
  }

  return [state, stateFunction]
}*/
