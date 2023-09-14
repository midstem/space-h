import { z } from 'zod'

export const TodoSchema = z.object({
  body: z.object({
    id: z.string(),
    title: z.string(),
  }),
})
