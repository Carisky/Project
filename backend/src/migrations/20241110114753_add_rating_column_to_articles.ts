import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("articles", (table) => {
    table
      .float("rating")
      .notNullable()
      .checkBetween([1, 5]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("articles", (table) => {
    table.dropColumn("rating");
  });
}
