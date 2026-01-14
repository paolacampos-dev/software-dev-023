//imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//init express
const app = express();

//use JSON in our server
app.use(express.json());

//config cors
app.use(cors());

//port
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API is running on port ${PORT}`);
});

//routing system

//root route
//route --> http method GET
// READ data
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server API. GET comfy!" });
});

//READ biscuits data
//route --> http method GET
//static route
app.get("/biscuits", async (req, res) => {
  try {
    //query db
    const query = await db.query(
      `SELECT biscuit_name AS "biscuit name", src AS "image link", description, crunchiness FROM biscuits`
    );
    console.log(query.rows);
    res.json(query.rows);
    // throw new Error(); //to test catch block
  } catch (error) {
    console.error(error, "Response failed. Turn off and on");
    res.status(500).json({ response: "fail" });
  }
});

//READ biscuits and customers data
app.get("/biscuits-customers", async (req, res) => {
  try {
    const query = await db.query(
      `SELECT biscuits.*, customers.* FROM biscuits JOIN customers ON customers.id = biscuits.customer_id`
    );
    console.log(query.rows);
    res.json(query.rows);
  } catch (error) {
    console.error(error, "Response failed. Turn off and on");
    res.status(500).json({ response: "fail" });
  }
});

//CREATE new entries in the biscuits table
//route --> http method POST

app.post("/new-biscuit", (req, res) => {
  try {
    //collect the data to insert
    const data = req.body;
    //query the database to insert new data
    const query = db.query(
      `INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        data.biscuitName,
        data.src,
        data.description,
        data.crunchiness,
        data.customerId,
      ]
    );
    res.status(200).json({ request: "success" });
  } catch (error) {
    console.error(error, "Request failed. Turn off and on");
    res.status(500).json({ request: "fail" });
  }
});
