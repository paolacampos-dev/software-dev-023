//TODO: I want to add a message to the console
console.log("Hello world!");

//variables
//we use variables to store data --> one piece of data at a time
let myName = "Manny";

console.log(myName); // Manny

myName = "Bertie";

console.log(myName); // Bertie

//string --> text
// "Manny"
// 'Manny'
// `Manny`

let myAge = 48; //number

console.log(myAge); // 48

let isInstructor = true; //boolean --> true / false

//operators

let apples = 5;
let pears = 6;
let cherries = 3;

//TODO: I want to know the total of apples and pears
let total = apples + pears;
console.log("The total is " + total); //string
console.log(`The total is ${total}`); // template literals require backticks `` --> string
console.log(`The total is `, total); //here I am logging two items --> string, number
// -
// *
// /

//TODO: I want to know the total of apples, pears, cherries
let myNewTotal = apples + pears + cherries;
console.log(total + cherries);

//extra --> data coercion
//when in doubt, JS will change any data type into a string
console.log("The total is " + total); // in this case, JS is turning the data type of total from a number to a string

let myNumber = 5;
let myOtherNumber = "5";
//typeof operator --> this operator will tell us the data type stored in a variable

//TODO: I want to log in the console the data type of myNumber and MyOtherNumber
console.log(typeof myNumber); //number
console.log(typeof myOtherNumber); //string

//undefined, null
let myRole; //this variable is undefined because we have not assigned a value yet

console.log(typeof myRole); //undefined

myRole = "instructor"; //string

let myLocation = null; //null is value: the value of nothing, empty
console.log(typeof myLocation); //object
