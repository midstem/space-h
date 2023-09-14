import { Request, Response } from 'express'
import { logger } from '../../helpers'

const todos = [
  { id: '1', title: 'Todo 1' },
  { id: '2', title: 'Todo 2' },
]

export const get = async (req: Request, res: Response) => {
  return res.send(todos)
}

export const post = async (req: Request, res: Response) => {
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
