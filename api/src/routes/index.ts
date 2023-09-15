import express from 'express'
import { router as TodoController } from 'src/controllers/TodoController'
import { router as HomeController } from 'src/controllers/HomeController'

export const router = express.Router()

router.use(TodoController)
router.use(HomeController)
