//TODO: update an existing rollercoaster entry
//correct data
//to tell the user to complete ALL inputs, not just the ones they want to change

//Tools:
//- form --> user UI
//- server function --> trigger the update
//- SQL query to update
//- params

//Extra: pre-fill form for better UX
//- get db data first
//- pre-fill the form with the current data from the db --> defaultValue

import formStyles from "@/app/new-rollercoaster/newRollercoaster.module.css";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";

export default async function EditPage({ params }) {
  const { rollercoasterId } = await params;

  //get current rollercoaster data
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]);

  const data = query.rows[0]; //wrangle data to reach the object in the array
  console.log(data);

  async function handleUpdate(formData) {
    //update logic
    "use server";

    //input values

    const formValues = {
      name: formData.get("rollercoasterName"),
      height: formData.get("height"),
      country: formData.get("country"),
      url: formData.get("url"),
    };

    db.query(
      `UPDATE rollercoasters SET name = $1, height = $2, country = $3, url = $4 WHERE id = $5`,
      [
        formValues.name,
        formValues.height,
        formValues.country,
        formValues.url,
        rollercoasterId,
      ],
    );

    //UX
    revalidatePath("/rollercoasters"); //list of rollercoasters
    revalidatePath(`/rollercoasters/${rollercoasterId}`); //individual rollercoaster
    redirect(`/rollercoasters/${rollercoasterId}`);
  }

  return (
    <>
      <h1>Edit this rollercoaster!</h1>
      <form action={handleUpdate} className={formStyles.rollercoasterForm}>
        <label htmlFor="rollercoasterName">Rollercoaster Name: </label>
        <input
          type="text"
          name="rollercoasterName"
          maxLength={255}
          required
          defaultValue={data.name}
        />
        <label htmlFor="height">Height (m): </label>
        <input
          type="number"
          name="height"
          min={0}
          required
          defaultValue={data.height}
        />
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          maxLength={255}
          required
          defaultValue={data.country}
        />
        <label htmlFor="url">Image link: </label>
        <input
          type="text"
          name="url"
          required
          placeholder="copy and paste a url"
          defaultValue={data.url}
        />
        <button className="bg-amber-600">Edit</button>
      </form>
    </>
  );
}
