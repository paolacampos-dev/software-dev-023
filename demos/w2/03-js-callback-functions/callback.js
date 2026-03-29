//callback functions
//a callback function is a function that works as the argument of another function

//examples

//events
//event listener
//event handler --> callback function (the event handler is an argument of the event listener)

//the callback function we declared in here is not reusable (anonymous function)
// button.addEventListener("click", function () {
//action
// });

//alternative syntax for event listener and handler
// function handleClick() {
//action
// }

// function addEventListener(type, handler) {
//action
// }

// button.addEventListener("click", handleClick); //handleClick runs when the user clicks --> this is the preferred behaviour
// button.addEventListener("click", handleClick()); //handleClick() runs when the browser reads line 19

//example

//TODO: I want to say the user's name and greet the user in the console
// - Say the user's name
// - Greet the user

function sayUsername(username) {
  console.log(`Your username is: ${username}`);
}

function greetUser(greeting) {
  console.log(`${greeting}`);
}

function welcomeMessage(
  greetUserParameter,
  sayUsernameParameter,
  usernameParameter,
  greetingParameter
) {
  //TODO: I want to control the greetUser and sayUsername functions
  greetUserParameter(greetingParameter);
  sayUsernameParameter(usernameParameter);
}

welcomeMessage(greetUser, sayUsername, "Manny", "good afternoon");
