import { useState } from "react";
import ButtonWithState from "./components/ButtonWithState";
import ButtonWithProps from "./components/ButtonWithProps";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>State with Components</h1>
      <h2>Buttons with their own state</h2>
      <ButtonWithState />
      <ButtonWithState />

      <h2>State passed as props</h2>
      <ButtonWithProps num={num} setNum={setNum} />
      <ButtonWithProps num={num} setNum={setNum} />
    </>
  );
}

export default App;
