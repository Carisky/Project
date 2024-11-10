import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("sellers", (table) => {
    table
      .string("role")
      .notNullable()
  });
}


export async function down(knex: Knex): Promise<void> {
}

