import { Hono } from 'hono'
import { Routes } from './types'
import * as Controllers from './controllers'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()

app.use('*', prettyJSON())

app.get(Routes.HOME, Controllers.HomeController.get)
app.post(Routes.HOME, Controllers.HomeController.post)

export default app