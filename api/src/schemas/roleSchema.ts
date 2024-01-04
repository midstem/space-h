import { z } from 'zod'

export const RoleRequestSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
})

export type RoleRequestSchemaType = z.infer<typeof RoleRequestSchema>

export const RoleResponseSchema = z.object({
  body: z.object({
    id: z.string(),
    name: z.string(),
  }),
})

export type RoleResponseSchemaType = z.infer<typeof RoleResponseSchema>
