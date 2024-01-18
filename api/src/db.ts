import mysql from 'mysql2'
import { drizzle } from 'drizzle-orm/mysql2'

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export const db = drizzle(pool)
