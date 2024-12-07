import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("article_tags", (table) => {
    table.dropColumn("value");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("article_tags", (table) => {
    table.string("value");
  });
}
