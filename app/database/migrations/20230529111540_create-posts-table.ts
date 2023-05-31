import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(
    'posts',
    (table: Knex.CreateTableBuilder) => {
      table.uuid('id').primary().notNullable().unique()
      table.string('postid').notNullable()
      table.string('title', 25).notNullable()
      table.string('description', 120).notNullable()
      table.string('imageurl').notNullable()
    }
  )
}

export async function down(knex: Knex): Promise<void> {}
