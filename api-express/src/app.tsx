import express from 'express'
import * as Controllers from './controllers'
import { Routes } from './types'

const app = express()

app.use(express.json())
app.get(Routes.HOME, Controllers.HomeController.get)
app.get(Routes.TODO, Controllers.TodoController.get)
app.post(Routes.TODO, Controllers.TodoController.post)

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log(`Express 🥟 Server Listening on port ${port}`),
)
