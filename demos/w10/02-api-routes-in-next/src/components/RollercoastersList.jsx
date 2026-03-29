//TODO: render a list of rollercoasters
// - an animation on hover
// - READ the data from rollercoasters (database, lib, external API...)

"use client";

import { useEffect, useState } from "react";

export default function RollercoastersList() {
  //I cannot use SQL directly here to GET database data --> this a server-side function
  //We can send a request to the server to GET rollercoasters data

  const [rollercoasters, setRollercoasters] = useState([]);

  useEffect(() => {
    async function getRollercoasters() {
      const response = await fetch("http://localhost:3000/api/rollercoasters");
      const data = await response.json();
      setRollercoasters(data);
    }
    getRollercoasters();
  }, []);

  console.log(rollercoasters);

  return (
    <>
      <h1>List of rollercoasters</h1>
      {rollercoasters.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>Country: {item.country}</h2>
            <h2>Height: {item.height}</h2>
          </div>
        );
      })}
    </>
  );
}
