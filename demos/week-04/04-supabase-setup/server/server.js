//import express
import express from "express";

//initialise express
const app = express();

//tell express that we want to use JSON to manipulate data
app.use(express.json());

//set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`Server is running in localhost:${PORT}`);
});

//TODO: set up a root route to READ a welcome message
// route --> "/"

app.get("/", function (request, response) {
  response.json({ message: "Welcome to the root route. GET comfy!" });
});
