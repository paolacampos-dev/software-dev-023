import { useState } from "react";

export default function DataFromAPI() {
  const [data, setData] = useState([]);
  return (
    <div>
      <h2>Data in an array</h2>
      {data.length ? ( //* You could also validate your data array by checking whether the first item exists e.g. data[0]
        //
        <p>There is data in the array</p> //* This is where you would .map(...) through your data
      ) : (
        //
        <p>Something went wrong</p> //* This is where you can inform the user that something went wrong you could get them too try again or just show a useful error message
      )}
    </div>
  );
}
