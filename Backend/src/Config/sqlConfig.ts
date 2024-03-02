import mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env?.['DB_NAME']);

export const sqlConfig = {
  user: process.env?.['DB_USER'] as string,
  password: process.env?.['DB_PWD'] as string,
  database: process.env?.['DB_NAME'] as string,
  server: process.env?.['SERVER'] as string,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

console.log(sqlConfig);
