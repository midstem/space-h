import { eq } from 'drizzle-orm'
import { Request, Response } from 'express'
import { db } from 'src/db'
import { todos } from 'src/db/schema/todo'
import { ROUTES } from 'src/types'

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
 *               completed:
 *                 type: boolean
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const get = async (req: Request, res: Response) => {
  try {
    const rows = await db.select().from(todos)
    res.send(rows)
  } catch (err) {
    res.status(500).send(err)
  }
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
 *             title:
 *               type: string
 *             completed:
 *               type: boolean
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
 *                 title:
 *                   type: string
 *                 completed:
 *                   type: boolean
 */
const post = async (req: Request, res: Response) => {
  const { title, completed = false } = req.body
  try {
    await db.insert(todos).values([{ title, completed }])
    res.redirect(ROUTES.todos)
  } catch (error) {
    res.status(500).send(error)
  }
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
 *       - name: todo
 *         description: Updated todo object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             completed:
 *               type: boolean
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
 *                 completed:
 *                   type: boolean
 */
const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, completed } = req.body
  try {
    await db
      .update(todos)
      .set({ title, completed })
      .where(eq(todos.id, Number(id)))

    res.status(200).json({
      message: 'Todo updated successfully test-1',
      todo: { id, title, completed },
    })
  } catch (error) {
    res.status(500).send(error)
  }
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
  try {
    await db.delete(todos).where(eq(todos.id, Number(id)))
    res.status(200).json({ message: `Todo with id ${id} deleted successfully` })
  } catch (error) {
    res.status(500).send(error)
  }
}

export default { get, post, update, remove }
