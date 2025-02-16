import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tags', (table) => {
    table.increments('id').primary(); 
    table.string('name').notNullable().unique(); 
    table.timestamps(true, true); 
  });

  await knex.schema.createTable('article_tags', (table) => {
    table.increments('id').primary(); 
    table
      .integer('article_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('articles')
      .onDelete('CASCADE'); 
    table
      .integer('tag_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tags')
      .onDelete('CASCADE'); 
    table.string('value').nullable(); 
    table.timestamps(true, true); 
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('article_tags');
  await knex.schema.dropTableIfExists('tags');
}
