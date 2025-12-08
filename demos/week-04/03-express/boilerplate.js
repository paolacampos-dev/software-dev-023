import express from "express";
const app = express();

app.get("/", function (request, response) {
  response.json("IT'S WORKING!!!");
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});
