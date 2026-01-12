//TODO: I want to add user navigation with links
//Link component from react router
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
    </>
  );
}
