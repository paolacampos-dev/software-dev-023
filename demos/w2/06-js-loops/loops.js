console.log("hello world");

//loops

//we use loops to make repetitive tasks more efficient
//We need to consider the amount of times we want a task to be executed

//if we know the amount of times we want to execute a task --> for loop
// task example: I want to create 5 paragraphs in my DOM
// task example: I want to log in the console all the items in an array

//structure
// keyword (set-up){
// actions
// }

// for (initialisation; condition; afterthought ){
//task
// }

//FOR LOOPS --> examples

//TODO: log a message in the console 4 times
//the increment operator adds 1 to a value
for (let i = 1; i <= 4; i++) {
  console.log(
    `This is a task repeated multiple times. Check how many! --> ${i}`
  );
}

//TODO: I want to create 5 paragraphs in my DOM

for (let i = 1; i <= 5; i++) {
  //create element
  const paragraph = document.createElement("p");
  //update the text content
  paragraph.textContent = `Paragraph ${i}: Lorem ipsum sic...`;
  //append the element to the DOM
  const container = document.getElementById("p-container");
  container.appendChild(paragraph);
}

//for loops and arrays

const colours = ["blue", "purple", "yellow", "green", "pink"];

//TODO: I want to log all the colours in the console
//initial value at zero 0 to match with the index value in the array
//we use the length property as our condition
for (let i = 0; i < colours.length; i++) {
  console.log(`Item: ${colours[i]}`);
}

//array methods
//forEach()
colours.forEach(function (colour) {
  console.log(colour); //this parameter represents each item in the array
});

//for ... of --> alternative syntax
for (let colour of colours) {
  console.log(colour);
}

//======================================================
//while loops
//a loop to use when we don't know how many times we want to run a task
//task example: while the user is not logged in, ask for login info

//structure
// while (condition) {
//task
// }

//if the condition is never met, the loop runs forever
// while (!user) {
//   console.log("Please, log in");
// }
