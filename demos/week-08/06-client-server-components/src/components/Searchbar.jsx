//client component
"use client";

//TODO: have a search bar a search that updates based on user input
//events: onChange, onSubmit
//state: store input with some persistance

import { useState } from "react";
export default function Searchbar() {
  const [search, setSearch] = useState("");

  function handleSubmit() {
    //logic
  }

  function handleChange() {
    //logic
  }
  return (
    <>
      <h2>Searchbar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" required name="search" onChange={handleChange} />
      </form>
    </>
  );
}
