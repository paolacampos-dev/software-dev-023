//TODO: read rollercoasters data
// import {db} from "";
import { rows } from "@/lib/data"; //we are assuming we will get this data form the database

export async function GET() {
  //logic to READ data from the database
  //db.query
  return Response.json(rows);
}

//I cannot render data directly on the screen
//I can help client components accessing server actions
