import { z } from 'zod'

export const todoSchema = z.object({
  body: z.object({
    id: z.string(),
    title: z.string(),
  }),
})

export type TodoSchemaType = z.infer<typeof todoSchema>
