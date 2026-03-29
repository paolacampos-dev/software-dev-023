// TODO: I want to log a message to the console
console.log("Hello World!");

//variables
//we use variables to store data --> one piece of data at a time
//structure --> let OR const variableName = value
//examples

//variable declarations
//you cannot declare a variable with the same name twice
// const myName = "Manny"; // this value cannot be updated
let myName = "Manny";
let boolLight = true; //boolean
let myAge = 65;

//TODO: I want to log a variable value to the console
//the variable name represents the value
console.log(myName);

//TODO: I want to log my name and my age to the console as part of a message
//concatenation --> chaining more than one value together
// console.log("My name is Manny and I am 65 years old.");
console.log(`My name is ` + myName + " and I am " + myAge + " years old.");

//we can update variable values if they are declared with the keyword let
myName = "Bertie";
myAge = 90;
//extra: template literals
console.log(`My name is ${myName} and I am ${myAge} years old.`);
