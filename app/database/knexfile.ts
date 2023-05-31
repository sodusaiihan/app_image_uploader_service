import type { Knex } from 'knex'
import path from 'path'
import dotenv from 'dotenv'

interface IKnexConfig {
  [key: string]: Knex.Config
}

dotenv.config()

const configs: IKnexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.SERVICE_HOST,
      database: process.env.SERVICE_DATABASE,
      port: parseInt(process.env.SERVICE_PORT || '5432'),
      user: process.env.SERVICE_USERNAME,
      password: process.env.SERVICE_PASSWORD,
      filename: path.resolve(__dirname, 'app', 'database', 'connection.ts'),
    },
    debug: true,
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export default configs
