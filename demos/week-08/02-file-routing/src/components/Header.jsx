//TODO: create a navigation system
//we are going to use Next Link component
import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/staff"}>Staff</Link>
        <Link href={"/profile/manny"}>Profile</Link>
      </nav>
    </>
  );
}
