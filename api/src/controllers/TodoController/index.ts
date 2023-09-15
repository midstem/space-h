import express, { Request, Response } from 'express'
import { Routes } from 'src/types'
import * as Schemas from 'src/schemas'
import { logger, validate } from '../../helpers'

export const router = express.Router()

const todos = [
  { id: '1', title: 'Todo 1' },
  { id: '2', title: 'Todo 2' },
]

const get = async (req: Request, res: Response) => {
  return res.send(todos)
}

const post = async (req: Request, res: Response) => {
  try {
    todos.push(req.body)
  } catch (error) {
    logger.error(error)
  }

  return res.send({
    message: 'Todo created',
    res: req.body,
  })
}

router.get(Routes.TODO, get)
router.post(Routes.TODO, validate(Schemas.TodoSchema), post)
