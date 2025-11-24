console.log("hello world");

//functions
//organise complex tasks
//reusable

//examples

//TODO: say welcome in the console

function sayWelcome() {
  console.log("Welcome");
}

//TODO: say the name of the user in the console
//a parameter is placeholder in out function that we can replace later with the actual value. This makes our function more reusable!
//parameters behave like variables --> we store one value per parameter and we can use the parameter name to represent the actual value
function sayName(username) {
  console.log(`Your name is ${username}`);
}

//for a function to execute we need to invoke it (call it)
//we  can call the same function as many times as we need
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();

//argument -->  a value assigned to a parameter. We add the argument(s) in the function call
sayName("Manny");
sayName("Bertie");
sayName("Tim");
sayName("Jez");
//=============================================
//scope --> area where my code is available
// global scope --> a value is available anywhere in my code
// block scope --> a value is available only within its code block
// console.log(username); //username has block scope, I can only use it inside its own function

let username = "Manny"; //this variable has global scope --> I can use anywhere!

//TODO: say the user's location

function sayLocation(myLocation) {
  let username = "Bertie"; //only available inside this function
  username = "Tim";
  let username2 = "Jez";
  console.log(`${username}, ${username2} your location is ${myLocation}`);
}

sayLocation("Norwich");

//TODO: say username and location in console

function sayUsernameLocation(username, userLocation) {
  console.log(`Your location is ${userLocation}, ${username}. Welcome!`);
}

sayUsernameLocation("Bertie", "Leicester");
sayUsernameLocation("Manny", "Norwich");

//what if we have a block-scoped value that we want to use outside its scope?
// return

//TODO: add two numbers and log them

// function add(a, b) {
//   console.log(a + b);
// }

// add(2, 5);

function add(a, b) {
  return a + b;
}

console.log(add(4, 6)); // my console can log the addition a + b because with the keyword return, I made that operation available outside its block scope
