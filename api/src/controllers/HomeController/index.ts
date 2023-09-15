import { Request, Response, Router } from 'express'

const router = Router()

const get = (req: Request, res: Response) => {
  res.send('Hello express!')
}

router.get('/', get)

export default router
