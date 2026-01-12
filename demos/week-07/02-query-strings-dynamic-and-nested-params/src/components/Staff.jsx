//static route

import { Outlet } from "react-router";

export default function Staff() {
  return (
    <>
      <h1>Staff list</h1>
      {/* we use Outlet whenever we are rendering a component in a nested route */}
      {/* here Outlet is StaffMember, but it will only show when we navigate to "/staff/":staffMember */}
      <Outlet />
    </>
  );
}
