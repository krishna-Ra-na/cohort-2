import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const result = await client.query(
    `INSERT INTO users (username, password, name) 
         VALUES ($1, $2, $3) 
         RETURNING id, username, name`,
    [username, password, name]
  );
  return result.rows[0]; // Return the created user object
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  const result = await client.query(
    `SELECT id, username, name 
         FROM users 
         WHERE id = $1`,
    [userId]
  );
  return result.rows[0]; // Return the user object
}
