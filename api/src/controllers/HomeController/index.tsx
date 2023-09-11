import { Context } from 'hono'
import HomePage from '../../views/HomeView'

// curl http://localhost:3000
export const get = async (c: Context) => {
  const home = <HomePage />
  return c.html(home)
}

