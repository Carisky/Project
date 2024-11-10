import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { id: 1, name: "Alice", email: "alice@example.com", password: "password123", role: "user" },
    { id: 2, name: "Bob", email: "bob@example.com", password: "password123", role: "user" },
    { id: 3, name: "Charlie", email: "charlie@example.com", password: "password123", role: "user" },
  ]);
}
