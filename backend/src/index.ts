import { Hono } from 'hono'
import { Routes } from './routes'

const app = new Hono()

app.get(Routes.HOME, (c) => c.json({ message: 'Hello World!' }))

export default app