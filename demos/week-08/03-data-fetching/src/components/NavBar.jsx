import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link className="text-emerald-600" href={"/"}>
          Home
        </Link>
        <Link className="text-emerald-600" href={"/users"}>
          Staff
        </Link>
      </nav>
    </>
  );
}
