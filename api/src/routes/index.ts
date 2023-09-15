import express from 'express'
import TodoController from 'src/controllers/TodoController'
import HomeController from 'src/controllers/HomeController'

const router = express.Router()

router.use(TodoController)
router.use(HomeController)

export default router
