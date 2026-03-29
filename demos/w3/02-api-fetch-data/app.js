console.log("hello world");

//TODO: I want to request data from the Random Fox API

//the browser reads our code synchronously (top to bottom, no waiting time)
//some actions in our code are asynchronous --> they take more time than the browser takes to be executed
//when we have an async action, if the browser executes it synchronoulsy, we get a Promise --> the browser's way to let us know it executed that code (but it did not wait for the fetch response!)

//to signal an action is async, we use async/await --> this only works for functions

async function getFoxesData() {
  //fetch() will get data from a specific url
  const response = await fetch("https://randomfox.ca/floof/"); //the browser will wait until the response has been received
  console.log(response);
  //translate (parse) data into JSON
  const data = await response.json(); //this is async
  console.log(data);
  //   {image: 'https://randomfox.ca/images/11.jpg', link: 'https://randomfox.ca/?i=11'}
  return data; //now data is availble for other functions
}

//TODO: Use that data to render fox images on my website
const foxContainer = document.getElementById("fox-container");

function createFoxImage(foxUrl) {
  const image = document.createElement("img");
  image.src = foxUrl.image;
  image.alt = "Probably, a very happy fox in the wild";
  foxContainer.appendChild(image);
}

//if we run these functions like this, createFoxImage runs first, then getFoxesData, so the fox image url is not ready before the img is created and appended
// createFoxImage(getFoxesData());

//control function to run getFoxesData and createFoxImage in the order we want them too
async function renderFox() {
  const foxesData = await getFoxesData();
  createFoxImage(foxesData); //this function will not be called until the data is ready
}

renderFox();

//Extra: what if we had a very large API? How do we filter the data that we want?
//TODO: I want to get a list of dummy users

async function getUsersData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();
  console.log(usersData);
  //if the data here is large and you are not going to use all of it, you can wrangle the data --> filter the data to the properties you need
  const wrangledUser = usersData[0].name;
  console.log(wrangledUser);
  return wrangledUser;
  //? Why not using a loop to retrieve all the names in the array of objects?
}

getUsersData();
