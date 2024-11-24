import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("article_tags").del();

  // Inserts seed entries
  await knex("article_tags").insert([
    // Связи для Laptop
    { article_id: 1, tag_id: 1, value: "Electronics" },
    { article_id: 1, tag_id: 4, value: "Premium" },

    // Связи для Smartphone
    { article_id: 2, tag_id: 1, value: "Electronics" },
    { article_id: 2, tag_id: 3, value: "Affordable" },

    // Связи для T-shirt
    { article_id: 3, tag_id: 2, value: "Clothing" },
    { article_id: 3, tag_id: 3, value: "Casual" },
  ]);
}
