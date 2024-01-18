import { migrate } from 'drizzle-orm/mysql2/migrator'
import { db } from './db'

async function main() {
  await migrate(db, { migrationsFolder: 'drizzle' })
}

main().catch(console.error)
