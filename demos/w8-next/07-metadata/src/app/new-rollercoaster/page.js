//TODO: implement a form to collect new rollercoasters data
//static metadata --> metadata is a keyword
export const metadata = {
  title: "Rollercoasters Form",
  description:
    "Add your favourite rollercoaster. Amazing! Thrilling! Entertaining!",
};

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewRollercoasterPage() {
  //forms in React client --> event (onSubmit), state and useState (store and control form values), track changes (onChange event)
  //All the tools we used in the client to handle form submissions are not available in the server

  //in the server
  //to handle the form submission --> a server function
  //a server function is an async function that executes in the server specifically
  async function handleSubmit(rawFormData) {
    "use server";
    //the formData parameter will be a placeholder for the user's input
    //storing form values --> object
    console.log(rawFormData);
    const formValues = {
      rollercoasterName: rawFormData.get("rollercoasterName"),
      height: rawFormData.get("height"),
      country: rawFormData.get("country"),
      url: rawFormData.get("url"),
    };

    //refactor our formValues

    // const { rollercoasterName, height, country, url } = {
    //   rollercoasterName: rawFormData.get("rollercoasterName"),
    //   height: rawFormData.get("height"),
    //   country: rawFormData.get("country"),
    //   url: rawFormData.get("url"),
    // };
    console.log(formValues);

    // const formValues = Object.fromEntries(rawFormData);
    // const { rollercoasterName, height, country, url } = Object.fromEntries(rawFormData);

    //insert formValues in the database
    db.query(
      `INSERT INTO rollercoasters (name, height, country, url) VALUES ($1, $2, $3, $4)`,
      [
        formValues.rollercoasterName,
        formValues.height,
        formValues.country,
        formValues.url,
      ],
    );
    //revalidate the data in rollercoasters
    revalidatePath("/rollercoasters");
    //extra UX touch: redirect the user to the rollercoasters page
    redirect("/rollercoasters");
  }

  return (
    <>
      <h1>New Rollercoaster Form</h1>
      <form action={handleSubmit}>
        <label htmlFor="rollercoasterName">Rollercoaster Name: </label>
        <input type="text" name="rollercoasterName" maxLength={255} required />
        <label htmlFor="height">Height (m): </label>
        <input type="number" name="height" min={0} required />
        <label htmlFor="country">Country: </label>
        <input type="text" name="country" maxLength={255} required />
        <label htmlFor="url">Image link: </label>
        <input
          type="text"
          name="url"
          required
          placeholder="copy and paste a url"
        />
        <button className="bg-amber-600">Submit</button>
      </form>
    </>
  );
}
