import { mysqlTable, int, varchar, boolean } from 'drizzle-orm/mysql-core'

export const todos = mysqlTable('todos', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }),
  completed: boolean('completed').default(false),
})
