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
    { id: 5, name: "Sports" },
    { id: 6, name: "Health" },
    { id: 7, name: "Toys" },
    { id: 8, name: "Home" },
    { id: 9, name: "Books" },
    { id: 10, name: "Beauty" },
    { id: 11, name: "Automotive" },
    { id: 12, name: "Garden" },
    { id: 13, name: "Gaming" },
    { id: 14, name: "Stationery" },
    { id: 15, name: "Premium" },
    { id: 16, name: "Affordable" },
    { id: 17, name: "Lifestyle" },
    { id: 18, name: "Essentials" },
    { id: 19, name: "Durable" },
    { id: 20, name: "Eco-friendly" },
  ]);
  
}
