import { z } from 'zod'

export const UserRequestSchema = z.object({
  body: z.object({
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    password: z.string(),
    role: z.string(),
  }),
})

export type UserRequestSchemaType = z.infer<typeof UserRequestSchema>

export const UserResponseSchema = z.object({
  body: z.object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.string(),
    create_at: z.string().optional(),
    update_at: z.string().optional(),
  }),
})

export type UserResponseSchemaType = z.infer<typeof UserResponseSchema>
