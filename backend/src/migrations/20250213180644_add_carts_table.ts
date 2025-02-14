import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("carts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE");
    table.integer("article_id").unsigned().notNullable().references("id").inTable("articles").onDelete("CASCADE");
    table.integer("amount").notNullable().defaultTo(1);
    table.timestamps(true, true);

    table.unique(["user_id", "article_id"]); // Уникальная пара user_id + article_id
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("carts");
}
