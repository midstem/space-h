import { Request, Response } from 'express'

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to see the home page
 *    responses:
 *      '200':
 *        description: A successful response
 */
const get = (req: Request, res: Response) => {
  res.send('Hello express 00:48')
}

export default { get }
