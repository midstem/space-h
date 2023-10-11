import { Request, Response } from 'express'
import { pool } from 'db'
import { logger } from '../../helpers'

const todos = [
  { id: '1', title: 'Todo 1' },
  { id: '2', title: 'Todo 2' },
]

/**
 * @swagger
 * /todos:
 *   get:
 *     tags:
 *       - Todos
 *     description: Fetches a list of todos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of todos
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const get = async (req: Request, res: Response) => {
  pool.query('SELECT * FROM todos', (err, rows) => {
    if (err) throw err
    console.log('Data received todos db:', rows)

    res.send(rows)
  })
}

/**
 * @swagger
 * /todos:
 *   post:
 *     tags:
 *       - Todos
 *     description: Creates a new todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: todo
 *         description: Todo object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             title:
 *               type: string
 *     responses:
 *       200:
 *         description: Todo created successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             res:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 */
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

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     tags:
 *       - Todos
 *     description: Updates a todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Todo ID
 *         in: path
 *         required: true
 *         type: string
 *       - name: title
 *         description: Updated title of the todo
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             todo:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal server error
 */
const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title } = req.body
  const todo = todos.find((t) => t.id === id)

  if (!todo) {
    return res.status(404).send({ message: 'Todo not found' })
  }

  todo.title = title
  res.send({ message: 'Todo updated', todo })
}

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     tags:
 *       - Todos
 *     description: Deletes a todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Todo ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Internal server error
 */
const remove = async (req: Request, res: Response) => {
  const { id } = req.params
  const index = todos.findIndex((todo) => todo.id === id)

  if (index === -1) {
    return res.status(404).send({ message: 'Todo not found' })
  }

  todos.splice(index, 1)
  res.send({ message: 'Todo deleted' })
}

export default { get, post, update, remove }
