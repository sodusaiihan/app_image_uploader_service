import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const Repository = new Pool({
  user: process.env.SERVICE_USERNAME,
  host: process.env.SERVICE_HOST,
  database: process.env.SERVICE_DATABASE,
  password: process.env.SERVICE_PASSWORD,
  port: parseInt(process.env.SERVICE_PORT || '5432'),
})

export default Repository
