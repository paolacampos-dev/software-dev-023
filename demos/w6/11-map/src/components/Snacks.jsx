import Snack from "./Snack";
import { data } from "../lib/data";

function Snacks() {
  return (
    <>
      <h1>Map - Showing lists in react</h1>
      <p>Showing items from an array defined elsewhere (like a database)</p>
      {data.map((item) => {
        return <Snack key={item.id} item={item} />;
      })}
    </>
  );
}

export default Snacks;
