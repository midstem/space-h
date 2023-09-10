import { Context } from 'hono'
// import HomePage from '../../views/HomeView'

// curl http://localhost:3000
export const get = async (c: Context) => {
  return c.text('This is a home page written in JSX')
}

