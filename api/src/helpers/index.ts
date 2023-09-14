import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })

      next()
    } catch (err) {
      return res.status(400).send(err)
    }
  }

export const logger = console
