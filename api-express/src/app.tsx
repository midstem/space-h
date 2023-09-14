import express from 'express'
import * as Controllers from './controllers'
import { Routes } from './types'
import { logger, validate } from './helpers'
import * as Schemas from './schemas'

const app = express()

app.use(express.json())

app.get(Routes.HOME, Controllers.HomeController.get)

app.get(Routes.TODO, Controllers.TodoController.get)

app.post(
  Routes.TODO,
  validate(Schemas.TodoSchema),
  Controllers.TodoController.post,
)

const port = process.env.PORT || 8080

app.listen(port, () =>
  logger.log(`Express 🥟 Server Listening on port ${port}`),
)
