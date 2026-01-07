import { useState } from "react";
import EmptyMug from "./components/EmptyMug";
import DataFromAPI from "./components/DataFromAPI";
export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle visible</button>
      {isVisible && <p>I am visible</p>}

      <EmptyMug />
      <DataFromAPI />
    </div>
  );
}
