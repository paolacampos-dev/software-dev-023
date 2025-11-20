console.log("hello world");

//conditionals

//we will check a condition: we will perform a task only if the condition is applicable

//structure

// if (condition) {
//action
// }

//example: if the weather is rainy, I will carry my umbrella
// let weather = "rainy";
// if (weather == "rainy") {
//the condition is true, my action executes
//   console.log(`I will carry my umbrella because it's ${weather}`);
// }

// if (username) {
//   console.log("Welcome " + username);
// } else {
// console.log("Error: no user found.")
// }

let weather = "foggy";
if (weather == "rainy") {
  //the condition is true, my action executes
  console.log(`I will carry my umbrella because it's ${weather}`);
} else if (weather == "sunny") {
  console.log("Enjoy the sun!");
} else if (weather == "foggy") {
  console.log("Careful on the road. Low visibility");
} else {
  console.log("Check the forecast");
}

//Once the browser finds a condition that is true, it will stop executing the rest of conditions
//If a condition is false, the browser will skip the action and try the next condition

//example

let apples = 6;
let pears = 8;
let cherries = 6;

//TODO: I want to compare the quantities of the fruits in my fruit bowl
//if the number of apples is less than 1, send a message to buy more apples
if (apples < 1) {
  console.log("Buy more apples!");
} else if (apples > pears) {
  console.log("Buy more pears! Your have too many apples!");
} else if (apples === cherries) {
  console.log("Apples and cherries are truly balanced");
} else if (apples >= pears) {
  console.log("Apples and pears are fighting!");
} else if (apples === pears && pears === cherries) {
  //this action will only execute if both conditions are true
  console.log("True balance");
} else {
  console.log("Your fruit bowl needs some TLC");
}
// the double equals == compares values only
// the triple equals === compares values AND data types
