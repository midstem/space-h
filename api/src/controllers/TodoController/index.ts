import { Context } from 'hono'
import { Todo } from './schema'

// Database :)
const todos: Todo[] = [{ id: '1', title: 'Todo 1'}, { id: '2', title: 'Todo 1'}]

// curl http://localhost:3000/todo
export const get = async (c: Context) => {
  return c.jsonT({
    todos,
  })
}

// curl -X POST -d "id=1&title=title" http://localhost:3000/todo
export const post = async (c: Context) => {
  const todo = c.req.valid('form' as never)
  todos.push(todo)

  return c.jsonT({
    message: 'Todo created',
    todo,
  })
}

