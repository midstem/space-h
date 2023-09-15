import { Request, Response, Router } from 'express'
import { Routes } from 'src/types'
import * as Schemas from 'src/schemas'
import { logger, validate } from '../../helpers'

const router = Router()

const todos = [
  { id: '1', title: 'Todo 1' },
  { id: '2', title: 'Todo 2' },
]

const get = async (req: Request, res: Response) => {
  res.send(todos)
}

const post = async (req: Request, res: Response) => {
  try {
    todos.push(req.body)
  } catch (error) {
    logger.error(error)
  }

  res.send({
    message: 'Todo created',
    res: req.body,
  })
}

router.get('/todos', get)
router.post('/todos', validate(Schemas.TodoSchema), post)

export default router
