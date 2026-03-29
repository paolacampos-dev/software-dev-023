//client component
"use client";

//TODO: an event to click on the button to count the number of people that read that particular section
//event: onClick

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>People that read the article: {count}</p>
    </>
  );
}
