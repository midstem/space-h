import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'
import { logger } from '../../helpers'

const prisma = new PrismaClient()

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - User
 *     description: Use to get users
 *     responses:
 *       200:
 *         description: A successful response
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *               create_at:
 *                 type: string
 *               updated_at:
 *                 type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const get = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      role: true,
    },
  })

  res.json(users)
}

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - User
 *     description: Use to get users
 *     responses:
 *       200:
 *         description: A successful response
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             first_name:
 *               type: string
 *             last_name:
 *               type: string
 *             email:
 *               type: string
 *             role:
 *               type: string
 *             create_at:
 *               type: string
 *             updated_at:
 *               type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const getUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      role: true,
      create_at: true,
      updated_at: true,
    },
  })
  if (!user) {
    return res.status(404).send({ message: 'User not found' })
  }

  res.json(user)
}

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - User
 *     description: Deletes a user
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
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
const remove = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deletedUser = await prisma.user.delete({ where: { id } })
    return res.json({ message: 'User deleted', data: deletedUser })
  } catch (error) {
    logger.error(error)
    return res.status(500).json(error)
  }
}

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - User
 *     description: Creates a new todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             password:
 *                type: string
 *             email:
 *               type: string
 *             first_name:
 *               type: string
 *             last_name:
 *               type: string
 *             role:
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
 *                 email:
 *                   type: string
 *                 first_name:
 *                   type: string
 *                 last_name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 create_at:
 *                   type: string
 *                 update_at:
 *                   type: string
 */
const post = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line camelcase
    const { email, first_name, last_name, role, password } = req.body

    const salt = crypto.randomBytes(16).toString('hex')
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
      .toString(`hex`)

    const createdUser = await prisma.user.create({
      data: {
        email,
        // eslint-disable-next-line camelcase
        first_name,
        // eslint-disable-next-line camelcase
        last_name,
        password: hashedPassword,
        role: { connect: { name: role } },
      },
    })
    return res.json({ message: 'User created successfully', data: createdUser })
  } catch (error) {
    logger.error(error)
    return res.status(500).json(error)
  }
}

export default { get, getUser, remove, post }
