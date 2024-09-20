import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        done: false, // Default value for new todos
        user: { connect: { id: userId } }, // Associate the todo with the user
      },
    });
    return newTodo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Todo creation failed");
  }
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
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: todoId },
      data: { done: true },
    });
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Todo update failed");
  }
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
  try {
    const todos = await prisma.todo.findMany({
      where: { userId }, // Filter todos by userId
    });
    return todos; // Ensure this returns the array of todos
  } catch (error) {
    console.error("Error retrieving todos:", error);
    throw new Error("Todos retrieval failed");
  }
}
