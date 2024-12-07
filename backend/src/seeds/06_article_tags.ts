import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("article_tags").del();

  // Inserts seed entries
  await knex("article_tags").insert([
    { article_id: 1, tag_id: 1 },
    { article_id: 1, tag_id: 4 },
    { article_id: 2, tag_id: 1 },
    { article_id: 2, tag_id: 16 },
    { article_id: 3, tag_id: 2 },
    { article_id: 3, tag_id: 16 },
    { article_id: 4, tag_id: 2 },
    { article_id: 4, tag_id: 15 },
    { article_id: 5, tag_id: 9 },
    { article_id: 5, tag_id: 17 },
    { article_id: 6, tag_id: 9 },
    { article_id: 6, tag_id: 18 },
    { article_id: 7, tag_id: 8 },
    { article_id: 7, tag_id: 19 },
    { article_id: 8, tag_id: 8 },
    { article_id: 8, tag_id: 15 },
    { article_id: 9, tag_id: 7 },
    { article_id: 9, tag_id: 20 },
    { article_id: 10, tag_id: 7 },
    { article_id: 10, tag_id: 15 },
  ]);
  
}
