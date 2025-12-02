console.log("hello world");

//local storage
//to store non-sensitive data that we want to keep between user sessions (data persistance)

//localStorage is an object
//in this object we have methods to store, read, delete data from local storage

//we can only store STRINGS in local storage

const userPreferences = {
  theme: "dark",
  font: "large",
  contrast: "high",
  colourblindMode: true,
};

//TODO: store new data in local storage

//STEP 1: stringify the data
const stringifiedPreferences = JSON.stringify(userPreferences);

//STEP 2: add our stringified data to local storage

localStorage.setItem("user preferences", stringifiedPreferences);

//==================================================================

//TODO: read data from local storage

//STEP 1: get the data from local storage

const storedPreferences = localStorage.getItem("user preferences");

//STEP 2: parse the stringified data to its original shape
const parsedPreferences = JSON.parse(storedPreferences);
console.log(parsedPreferences);
const theme = parsedPreferences.theme;

//=======================================================================

//TODO: I want to remove an item from local storage
localStorage.removeItem("user preferences");

//remove all items from local storage
localStorage.clear();
