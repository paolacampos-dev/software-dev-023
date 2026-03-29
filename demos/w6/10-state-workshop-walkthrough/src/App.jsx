import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <p onClick={handleReset}>Count: {count}</p>
      <Button handler={handleIncrement} text="+1" />
      <Button handler={handleDecrement} text="-1" />
      <Button handler={handleReset} text="Reset" />
    </div>
  );
}
