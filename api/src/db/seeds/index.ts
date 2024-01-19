import { db } from 'src/db'
import { todos } from '../schema/todo'

await db.insert(todos).values([
  {
    title: 'The Matrix',
    completed: true,
  },
])

console.log(`Seeding complete.`)
