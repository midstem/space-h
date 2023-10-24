import { z } from 'zod'

export const todoSchema = z.object({
  body: z.object({
    title: z.string(),
    completed: z.boolean(),
  }),
})

export type TodoSchemaType = z.infer<typeof todoSchema>
