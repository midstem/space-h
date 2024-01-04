import express from 'express'
import HomeController from 'src/controllers/HomeController'
import TodoController from 'src/controllers/TodoController'
import { RoleController, UserController } from 'src/controllers'
import { validate } from 'src/helpers'
import * as Schemas from 'src/schemas/todoSchema'
import { ROUTES } from 'src/types'
import * as RoleSchemas from 'src/schemas/roleSchema'
import * as UserSchemas from 'src/schemas/userSchema'

const router = express.Router()

router.get(ROUTES.home, HomeController.get)

router.get(ROUTES.todo, TodoController.get)
router.post(ROUTES.todo, validate(Schemas.todoSchema), TodoController.post)
router.delete(`${ROUTES.todo}/:id`, TodoController.remove)
router.put(`${ROUTES.todo}/:id`, TodoController.update)

// role
router.get(ROUTES.roles, RoleController.get)
router.post(
  ROUTES.roles,
  validate(RoleSchemas.RoleRequestSchema),
  RoleController.post,
)

// user
router.get(ROUTES.users, UserController.get)
router.get(`${ROUTES.users}/:id`, UserController.getUser)
router.delete(`${ROUTES.users}/:id`, UserController.remove)
router.post(
  ROUTES.users,
  validate(UserSchemas.UserRequestSchema),
  UserController.post,
)

export default router
