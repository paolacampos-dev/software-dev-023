//TODO: render each individual rollercoaster
import { db } from "@/utils/dbConnection";

export default async function RollercoasterId({ params }) {
  const { rollercoasterId } = await params;

  //query our database
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]);
  console.log(query);

  const data = query.rows[0];

  return (
    <>
      <h1>Rollercoaster Id</h1>
      <h2>{data.name}</h2>
      <img src={data.url} alt={data.name} />
      <p>{data.height}</p>
      <p>{data.country}</p>
    </>
  );
}
