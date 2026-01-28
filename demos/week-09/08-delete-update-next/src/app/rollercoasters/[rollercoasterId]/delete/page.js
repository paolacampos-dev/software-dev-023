//TODO: delete a specific rollercoaster
//Tools:
//- SQL query to delete
//- server function --> trigger delete
//- form --> button
//- params

//server component by default
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  //we have access to params because this route is nested in the dynamic route
  const { rollercoasterId } = await params;

  async function handleDelete() {
    //delete logic
    "use server";
    db.query(`DELETE FROM rollercoasters WHERE id =$1`, [rollercoasterId]);

    //UX extra
    revalidatePath("/rollercoasters");
    redirect("/rollercoasters");
  }

  return (
    <>
      <h1>Delete this rollercoaster!</h1>
      <form action={handleDelete}>
        <button className="bg-red-600 text-amber-100">Delete</button>
      </form>
    </>
  );
}
