import { useState, useEffect } from "react";

function App() {
  const [otters, setOtters] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(import.meta.env.VITE_OTTER_API_URL);
      const data = await response.json();
      setOtters(data);
    }

    getData();
  }, []);

  return (
    <>
      <h1>Show Our Otter Data here</h1>
    </>
  );
}

export default App;

/*

This is our FAKE API for this demo

https://otters.com/api <-- returns an error

e7f5ac3e1 is my secret key because I pay BIG bucks for this Otter API

https://otters.com/api/e7f5ac3e1 <-- returns our data

 */
