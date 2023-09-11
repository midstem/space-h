import { Hono } from 'hono'
import { Routes } from './types'
import * as Controllers from './controllers'
import { prettyJSON } from 'hono/pretty-json'
import { schema as todoSchema } from './controllers/HomeController/schema'
import { addAuth } from './middlewares'
import { zValidator } from '@hono/zod-validator'
import { cors } from 'hono/cors'

const app = new Hono()

// addAuth(app)

app.use('*', cors())

app.get(Routes.HOME, Controllers.HomeController.get)

app.get(Routes.TODO, Controllers.TodoController.get)

app.post(
  Routes.TODO,
  zValidator('form', todoSchema),
  Controllers.TodoController.post
)

export type AppType = typeof app

export default app