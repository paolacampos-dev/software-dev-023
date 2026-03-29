console.log("hello world");

//events
//structure --> event handler / event listener

//event listener
//select the DOM element we want to set our event listener in
//querySelector() OR getElementById()

const clickBtn = document.querySelector(".click-btn");
console.log(clickBtn); //check we are selecting the right button

//addEventListener() --> give a DOM element a listener
//addEventListener needs two arguments: type of event (string), event handler
clickBtn.addEventListener("click", function () {
  //action
  console.log("the user clicked!");
});

//example
//TODO: I want to implement an event, so when the user clicks on an image, the title of the image appears on the screen
//- STEP 1: image ✅
//- STEP 2: event listener --> click ✅
//- STEP 3: event handler --> DOM manipulation

const heroImage = document.getElementById("hero-image");

heroImage.addEventListener("click", function () {
  //create the title of the image
  const imageTitle = document.createElement("h2");
  console.log(imageTitle);
  //update its text content
  imageTitle.textContent = "Cold person in the snow";
  //append to the DOM
  document.body.appendChild(imageTitle);
});
