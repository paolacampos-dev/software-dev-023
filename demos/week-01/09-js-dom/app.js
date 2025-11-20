console.log("hello world");

console.log(document);
// console.table(document);
console.dir(document);
// console.error("There is an error!");

console.log(console); //console is an object!

//TODO: I want to replicate my HTML elements using the DOM in JS
//Create element --> createElement("tag")

//we are naming our new HTML elements here using variable names

const mainContainer = document.createElement("div");

console.log(document.createElement("div")); // <div></div>

const heroImage = document.createElement("img");

const imgTitle = document.createElement("h2");

console.log(heroImage); // <img>

//Use properties to add content to our new HTML elements
//for text-based elements --> textContent
//for img --> src, alt

heroImage.src =
  "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6a8e/live/1fb63e10-c52e-11f0-ba4c-a176bf1fb76f.jpg";

heroImage.alt = "park covered with snow";

console.log(heroImage);

imgTitle.textContent = "Snowy day!";
console.log(imgTitle);

//add the elements to our website --> append them
//appendChild() --> we use this method to add our JS created elements to the DOM

mainContainer.appendChild(heroImage);
mainContainer.appendChild(imgTitle);

document.body.appendChild(mainContainer);

//extras
//what if we wanted to style our new HTML elements?
heroImage.className = "hero-image";

//what if I want to append a new element to an existing HTML element?
// we can select the existing element to be able to interact with it in JS
//getElementById() ---> your existing element needs an Id
//querySelector() ---> your existing element can be selected using the tag, class, or id

const myFooter = document.getElementById("my-footer");
// const footer = document.querySelector("#my-footer");
myFooter.appendChild(imgTitle);

//remove elements from the DOM
heroImage.remove(); //this element is not in the DOM anymore
