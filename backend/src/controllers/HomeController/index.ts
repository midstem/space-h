import { Context } from 'hono'

// curl http://localhost:3000
export const get = async (c: Context) => {
  return c.text('Hello get request!')
}

// curl -X POST -d "id=1&title=title" http://localhost:3000
export const post = async (c: Context) => {
  const todo = c.req.valid('form' as never)

  return c.jsonT({
    message: 'todo created',
    todo,
  })
}

