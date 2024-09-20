import { Client } from "pg";
// import { DB_URL } from "./config";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL;

export const client = new Client({
  connectionString: DB_URL,
});
