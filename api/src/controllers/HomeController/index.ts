import express, { Request, Response } from 'express'
import { Routes } from 'src/types'

export const router = express.Router()

const get = (req: Request, res: Response) => {
  return res.send('Hello express!')
}

router.get(Routes.HOME, get)
