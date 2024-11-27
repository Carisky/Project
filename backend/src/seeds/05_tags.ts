import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tags").del();

  // Inserts seed entries
  await knex("tags").insert([
    { id: 1, name: "Technology" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Budget" },
    { id: 4, name: "High-End" },
  ]);
}
