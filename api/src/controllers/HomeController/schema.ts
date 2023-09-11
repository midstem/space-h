import { z } from "zod";

export const schema = z.object({
  id: z.string(),
  title: z.string(),
})

export type Todo = z.infer<typeof schema>