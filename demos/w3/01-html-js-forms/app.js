console.log("hello world");

//forms
//TODO: in our JS, we are going to collect the data from our form
//- event
//- FormData object

//event --> submit
//event listener --> attached to the form
const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", handleSubmit);
//event handler --> collect the form's data
function handleSubmit(submitEvent) {
  //prevent the form's default behaviour
  //the submitEvent parameter uses the type of event as its argument
  submitEvent.preventDefault();
  //create a template object to store our user's data
  const formData = new FormData(userForm);
  console.log(formData);
  //   {
  //     username: "",
  //     email: "",
  //     password: "",
  //     jobRole: "",
  //     contractType:""
  //   }
  //convert (parse) our FormData into an object shape
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  //   {
  //     username: "manny",
  //     email: "jfhf@bfbfb.com",
  //     password: "nsjfbksbfsf",
  //     jobRole: "instructor",
  //     contractType:"S346454T"
  //   }

  //uses
  //store the formValues
  //- database
  //- local storage
  // render (display) the values on the screen
  // login
}
