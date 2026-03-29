//static route

//TODO: I want the user to filter/change the order of the staff list
import { staff } from "../lib/staffData";
import { Outlet, Link } from "react-router";

//this hook gives us the value of the query string
import { useSearchParams } from "react-router";

export default function Staff() {
  //destructure the query string value
  let [searchParams] = useSearchParams();

  //query string has two values --> ?key=value
  //the name of the key and the name of the values is your choice
  //define the key in our query string
  const sort = searchParams.get("sort");

  //logic to sort our list of items
  //if sort is equal to asc, order the items in ascending order
  //if sort is equal to desc, order the items in descending order

  if (sort === "asc") {
    //logic
    staff.sort();
  } else if (sort === "desc") {
    //logic
    staff.sort().reverse();
  }

  return (
    <>
      <h1>Staff list</h1>
      {/* we use Outlet whenever we are rendering a component in a nested route */}
      {/* here Outlet is StaffMember, but it will only show when we navigate to "/staff/":staffMember */}
      <Outlet />
      {/* we are going to add Link components for the user to sort the list */}
      <Link to={"/staff"}>Reset</Link>
      <Link to={"/staff?sort=asc"}>Sort: ascending</Link>
      <Link to={"/staff?sort=desc"}>Sort: descending</Link>

      {staff.map((member, index) => {
        return <h2 key={index}>{member}</h2>; //map allows us to return a value
      })}
    </>
  );
}
