import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('users', table => {
        table.string('role', 20);
      })
}


export async function down(knex: Knex): Promise<void> {
}

