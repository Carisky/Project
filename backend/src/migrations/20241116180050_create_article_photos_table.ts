import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('article_photos', (table) => {
    table.increments('id').primary();
    table.integer('article_id').notNullable().index();
    table.integer('seller_id').notNullable().index();
    table.string('url').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('article_photos');
}
