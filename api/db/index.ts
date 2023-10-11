import mysql from 'mysql2'

export const pool = mysql.createPool({
  host: 'mysqldb',
  user: 'space',
  password: 'secret',
  database: 'spaceh_db',
})
