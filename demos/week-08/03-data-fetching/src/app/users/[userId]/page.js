//TODO: render data of one specific user
//params is only available in the dynamic route!
import Link from "next/link";

export default async function UserIdPage({ params }) {
  // const userIdParams = await params.userId
  const { userId } = await params;
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();
  console.log(data); //object

  return (
    <>
      <h1>User Id Page</h1>
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <h3>{data.email}</h3>
      <img
        src={data.image}
        alt={`Image of ${data.firstName} ${data.lastName}`}
      />
      <Link className="text-emerald-600" href={"/users"}>
        Go back
      </Link>
    </>
  );
}
