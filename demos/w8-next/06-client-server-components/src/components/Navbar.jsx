//server component

import Link from "next/link";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <img src="#" alt="logo" />
      <nav>
        <Link href={"/"}>Home</Link>
      </nav>
      <Searchbar />
    </>
  );
}
