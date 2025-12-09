//TODO: I want to set up a pool to send requests from the server to the database

//import pg --> postgres management package
import pg from "pg";

//config .env file --> dotenv is package to manage our .env file
import dotenv from "dotenv";
dotenv.config();

//set up a connection pool
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
