//TODO: render a list of users' data
//TODO: sort users in alphabetical order
//sort data: sorting logic / query string
// "/users?sort=asc" // "/users?sort=desc"
//in searchParams, we can have access to the query string key and value

import Link from "next/link";

export default async function UsersPage({ searchParams }) {
  //searchParams is async
  const queryString = await searchParams;

  //no use of effect or state, as we are in the server
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  //wrangle the data
  //   const users = data.users;
  const { users } = data;

  //sorting logic --> this logic sorts our users in alphabetical order
  if (queryString.sort === "desc") {
    users.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  } else if (queryString.sort === "asc") {
    users.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  }

  return (
    <>
      <h1>Users Page</h1>
      <Link href={"/users?sort=asc"}>ASC</Link>
      <Link href={"/users?sort=desc"}>DESC</Link>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`} className="text-emerald-600">
              {user.firstName} {user.lastName}
            </Link>
          </div>
        );
      })}
    </>
  );
}
