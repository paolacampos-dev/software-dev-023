//static route --> "/rollercoasters"

//static metadata --> metadata is a keyword
export const metadata = {
  title: "List of Rollercoasters",
  description:
    "A list of all the rollercoasters available in our website. Amazing! Thrilling! Entertaining!",
};

//TODO: render a list of all rollercoasters from database
import { db } from "@/utils/dbConnection";

export default async function RollercoastersPage() {
  //query our database and wrangle data
  const { rows } = await db.query(`SELECT * FROM rollercoasters`);
  console.log(rows);

  //   const query = await db.query(`SELECT * FROM rollercoasters`);
  //   const data = query.rows;

  return (
    <>
      <h1>Rollercoasters List</h1>
      {rows.map((rollercoaster) => {
        return (
          <ol key={rollercoaster.id}>
            <li>{rollercoaster.name}</li>
          </ol>
        );
      })}
    </>
  );
}
