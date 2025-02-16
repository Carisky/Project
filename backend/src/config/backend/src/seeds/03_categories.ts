import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("categories").del();

  // Inserts seed entries
  await knex("categories").insert([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
    { id: 4, name: "Home Appliances" },
    { id: 5, name: "Toys" },
    { id: 6, name: "Beauty" },
    { id: 7, name: "Health" },
    { id: 8, name: "Automotive" },
    { id: 9, name: "Garden" },
    { id: 10, name: "Sports" },
    { id: 11, name: "Furniture" },
    { id: 12, name: "Groceries" },
    { id: 13, name: "Pet Supplies" },
    { id: 14, name: "Music" },
    { id: 15, name: "Movies" },
    { id: 16, name: "Tools" },
    { id: 17, name: "Stationery" },
    { id: 18, name: "Luggage" },
    { id: 19, name: "Gaming" },
    { id: 20, name: "Art" },
  ]);
  
}
