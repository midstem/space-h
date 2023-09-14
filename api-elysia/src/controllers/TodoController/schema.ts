import { t } from 'elysia'

export type Todo = t.TypeOf<typeof TodoSchema.body>

export const TodoSchema = 
  {
    body: t.Object({
        id: t.String(),
        title: t.String(),
        name: t.Optional(t.String()),
    })
}

