import { z } from 'zod'

export const TodoSchema = z.object({
  body: z.object({
    id: z.string(),
    title: z.string(),
  }),
})

export type TodoSchemaType = z.infer<typeof TodoSchema>
