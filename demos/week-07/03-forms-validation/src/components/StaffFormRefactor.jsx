//We will use onSubmit to submit our form
//To handle the form data, we need to store it in state! --> React needs to know if that data is going to have any changes
import { useState } from "react";

export default function StaffForm() {
  //store form data in state
  //one state for our form values
  //note: the properties in your state object should match the name attributes in the inputs
  const [formValues, setFormValues] = useState({
    staffName: "",
    email: "",
    password: "",
  });
  // {
  //   staffName: "Manny",
  //     email: "",
  //     password: "",
  // }

  // +
  // {
  // staffName: "",
  //     email: "manny@gmail.com",
  //     password: "",

  // }

  // +
  // {
  // staffName: "",
  //     email: "",
  //     password: "hsbfsbfsf",

  // }

  //handle the input changes --> we need to tell React when the changes in the data are happening as they happen
  //event --> onChange

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    //here, we will send the form data to the server
    //fetch the server POST route
    //declare the headers (body) --> the body value is your state
  }

  return (
    <>
      <h1>Staff Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="staffName">Staff Name: </label>
        <input
          type="text"
          name="staffName"
          value={formValues.staffName}
          required
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          required
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          required
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {formValues.staffName}</p>
      <p>Email: {formValues.email}</p>
      <p>Password: {formValues.password}</p>
    </>
  );
}
