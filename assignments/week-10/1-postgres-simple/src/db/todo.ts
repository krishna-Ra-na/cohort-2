import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const result = await client.query(
    `INSERT INTO todos (user_id, title, description) 
         VALUES ($1, $2, $3) 
         RETURNING id, title, description, done`,
    [userId, title, description]
  );
  return result.rows[0]; // Return the created todo object
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const result = await client.query(
    `UPDATE todos 
         SET done = true 
         WHERE id = $1 
         RETURNING id, title, description, done`,
    [todoId]
  );
  return result.rows[0]; // Return the updated todo object
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const result = await client.query(
    `SELECT id, title, description, done, user_id
         FROM todos 
         WHERE user_id = $1`,
    [userId]
  );
  return result.rows; // Return the array of todos
}
