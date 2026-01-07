import { useState } from "react";

export default function EmptyMug() {
  const [empty, setEmpty] = useState(true);
  return (
    <div>
      <p>Is the mug empty?</p>
      {empty ? <p>This mug is empty</p> : <p>this mug is full</p>}
      <button onClick={() => setEmpty(!empty)}>
        {empty ? "fill the mug" : "empty the mug"}
      </button>
    </div>
  );
}
