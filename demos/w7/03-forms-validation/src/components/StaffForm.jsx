//We will use onSubmit to submit our form
//To handle the form data, we need to store it in state! --> React needs to know if that data is going to have any changes
import { useState } from "react";

export default function StaffForm() {
  //store form data in state
  // state for name --> variable name (name), set function, initial value
  const [name, setName] = useState("");
  // state for email
  const [email, setEmail] = useState("");
  // state for password
  const [password, setPassword] = useState("");

  //handle the input changes --> we need to tell React when the changes in the data are happening as they happen
  //event --> onChange

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
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
          value={name}
          required
          onChange={handleNameChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </>
  );
}
