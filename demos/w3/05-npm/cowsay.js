//this is just to show you that I can use the cowsay package code
// const cowsay = require("cowsay"); //commonjs

import cowsay from "cowsay"; //ES6 --> import takes the code from the cowsay folder for us to use in this file

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);

//=======================================================
//commonjs and ES6 --> JS dialects (syntactic versions of JS)

//declare a variable
//let --> ES6
//const --> ES6

//var --> commonjs

//async / await --> ES6

//.then() --> commonjs
