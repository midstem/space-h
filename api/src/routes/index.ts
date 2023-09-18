import express from 'express'
import HomeController from 'src/controllers/HomeController'
import TodoController from 'src/controllers/TodoController'
import { validate } from 'src/helpers'
import * as Schemas from 'src/schemas/todoSchema'
import { ROUTES } from 'src/types'

const router = express.Router()

router.get(ROUTES.home, HomeController.get)

router.get(ROUTES.todo, TodoController.get)
router.post(ROUTES.todo, validate(Schemas.todoSchema), TodoController.post)
router.delete(`${ROUTES.todo}/:id`, TodoController.remove)
router.put(`${ROUTES.todo}/:id`, TodoController.update)

export default router
