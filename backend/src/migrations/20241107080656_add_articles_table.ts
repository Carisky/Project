import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("articles", (table) => {
    table.increments("id").primary();
    table
      .integer("seller_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("sellers")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.integer("amount").notNullable();
    table.double("price");
    table.timestamps(true, true);
    table
      .float("rating") // Используем float с точностью до двух знаков после запятой
      .defaultTo(0) // Значение по умолчанию 0
      .notNullable() // Убедиться, что поле не может быть null
      .checkBetween([0, 5]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("articles");
}
