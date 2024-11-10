import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("sellers").del();

  // Inserts seed entries
  await knex("sellers").insert([
    { id: 1, name: "Shop A", email: "shopA@example.com", password: "shopApass", billing_info: "1234-5678-9012-3456" },
    { id: 2, name: "Shop B", email: "shopB@example.com", password: "shopBpass", billing_info: "2345-6789-0123-4567" },
  ]);
}
