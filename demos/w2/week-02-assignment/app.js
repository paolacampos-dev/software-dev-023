//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

//STEP 1: store image data

const imageData = [
  {
    imageName: "value",
    imageSrc: "external url OR local relative path",
    imageAlt: "value",
  },
  {
    imageName: "value",
    imageSrc: "external url OR local relative path",
    imageAlt: "value",
  },
  {
    imageName: "value",
    imageSrc: "external url OR local relative path",
    imageAlt: "value",
  },
];

//STEP 2: create thumbnail images
// function createThumbnails() {
//select the DOM element (thumbnail-container) to contain our thumbnails
//this is a repetitive task --> for loop (for, forEach() ...)
//Loop task:
// - create img element
// - update the src and alt attributes (properties) of the img element to match those in the array (parameters)
// - give each img a className (img.className)
// - add an event listener to each image --> the event handler of this event is the function you write to create the fullscreen images
// - append the created images to the thumbnail-container
// }

//STEP 3: create fullscreen images
// function createFullscreenImages() {
//this the event handler
//select the fullscreen-container
//delete the current fullscreen image
// fullscreenContainer.innerHTML = "" OR null
//create image
//update its values (properties)
//add className for styling (making the image full screen)
//append the image to the container
// }

//add the createFullscreenImages function as the event handler of the event above
//call the createThumbnails function
