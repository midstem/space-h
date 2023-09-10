import { Context } from 'hono'

// curl http://localhost:3000
export const get = async (c: Context) => {
  return c.text('Hello get request!')
}

// curl -X POST http://localhost:3000
export const post = async (c: Context) => {
  return c.json({ message: 'Hello post request!' })
}

