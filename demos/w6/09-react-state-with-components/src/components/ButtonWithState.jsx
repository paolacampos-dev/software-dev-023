import { useState } from "react";

function ButtonWithState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Click me! {count}</button>;
}

export default ButtonWithState;
