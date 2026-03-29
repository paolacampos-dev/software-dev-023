//dynamic route

import { useParams } from "react-router";

export default function StaffMember() {
  let { staffMember } = useParams();
  return (
    <>
      <h1>Staff member</h1>
      <p>Name: {staffMember}</p>
    </>
  );
}
