import { Todo } from "./schema"

// Database
const todos = [{ id: '1', title: 'Todo 1'}, { id: '2', title: 'Todo 2'}]

export const get = async (): Promise<Todo[]> => {
  return todos
}

export const post = async ({ body: context }) => {
  try {
  todos.push(context)
} catch (error) { 
  console.log(error)
}

  return {
    message: 'Todo created',
    context: context,
  }
}

