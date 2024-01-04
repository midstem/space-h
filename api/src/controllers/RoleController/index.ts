import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { logger } from '../../helpers'

/**
 * @swagger
 * /roles:
 *   get:
 *     tags:
 *       - Role
 *     description: Use to get user roles
 *     produces:
 *       - application/json
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
 *               name:
 *                 type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const prisma = new PrismaClient()
const get = async (req: Request, res: Response) => {
  const roles = await prisma.roles.findMany()
  res.json(roles)
}

/**
 * @swagger
 * /roles:
 *   post:
 *     tags:
 *       - Role
 *     description: Creates a new role
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: role
 *         description: Role object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       200:
 *         description: Role created successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 */
const post = async (req: Request, res: Response) => {
  try {
    const role = await prisma.roles.create({
      data: req.body,
    })
    res.json({
      message: 'Role created',
      data: role,
    })
  } catch (error) {
    logger.error(error)
  }
}

export default { get, post }
