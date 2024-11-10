import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    { id: 1, seller_id: 1, name: "Laptop", amount: 10, price: 999.99, rating: 4.5, category_id: 1 },
    { id: 2, seller_id: 1, name: "Smartphone", amount: 15, price: 699.99, rating: 4.7, category_id: 1 },
    { id: 3, seller_id: 2, name: "T-shirt", amount: 50, price: 19.99, rating: 4.3, category_id: 2 },
  ]);
}
