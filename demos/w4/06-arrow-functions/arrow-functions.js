//examples of arrow functions

//traditional function

function add(a, b) {
  return a + b;
}

//arrow function
//we can imply the keyword return

const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;

//======================================

//traditional function
function greet(username) {
  console.log(`Welcome ${username}`);
}

//arrow function
//when there is one parameter only, you can omit the regular brackets

// const greet = username => console.log(`Welcome ${username}`);

//=========================================

const array = [1, 2, 3];

//traditonal function
array.forEach(function (item) {
  console.log(item);
});

//arrow function
//we can also use the same principles to rewrite callback functions with the arrow function syntax

// array.forEach(item => console.log(item));

//===================Manny's preference=================
//I use arrow functions mainly for callback functions and anonymous functions
