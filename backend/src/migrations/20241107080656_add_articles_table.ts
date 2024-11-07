import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("articles", (table) => {
    table.increments("id").primary();
    table.integer("seller_id").unsigned().notNullable().references("id").inTable("sellers").onDelete("CASCADE");
    table.string("name").notNullable();
    table.integer("amount").notNullable();
    table.double("price");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("articles");
}
