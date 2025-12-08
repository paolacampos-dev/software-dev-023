// import express from my node_modules
import express from "express";

// instantiate our express app
const app = express();

// pretend we have a data base (but actually we are just going to write sme birds in an array)
const data = [
  { name: "Robin", type: "garden", size: "small", cuteFactor: 900 },
  { name: "Puffin", type: "sea", size: "medium", cuteFactor: 1000 },
  { name: "Peacock", type: "farm", size: "medium", cuteFactor: 10 },
  { name: "Toucan", type: "jungle", size: "medium", cuteFactor: 8 },
  { name: "Crow", type: "corvid", size: "medium", cuteFactor: "800" },
  { name: "condor", type: "mountain", size: "larg", cuteFactor: 3 },
  { name: "blackbird", type: "garden", size: "small", cuteFactor: 75 },
  { name: "Magpie", type: "crow-family", size: "small-medium", cuteFactor: 0 },
  { name: "Golden Eagle", type: " mountain", size: "large", cuteFactor: 500 },
  { name: "Penguin", type: "flightless", size: "medium", cuteFactor: 80 },
  { name: "Porg", type: "sci-fi", size: "small", cuteFactor: 5000 },
  { name: "hawk", type: "prey", size: "medium", cuteFactor: "999" },
  { name: "Vulture", type: "desert", size: "large", cuteFactor: -90 },
];

// create a root endpoint http://localhost:8080/
app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude!");
});

// /birds route
app.get("/birds", function (request, response) {
  response.json(data);
});

// start our server
app.listen(8080, function () {
  console.log("App running on port 8080");
});
