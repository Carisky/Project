import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("articles", (table) => {
    table.text("description"); // Добавляем поле description
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("articles", (table) => {
    table.dropColumn("description"); // Удаляем поле при откате миграции
  });
}
