import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Удаляем все существующие записи в таблице categories
  await knex("categories").del();

  // Вставляем уникальные категории, извлечённые из данных:
  await knex("categories").insert([
    { id: 1, name: "Одяг" },
    { id: 2, name: "Спортивне взуття" },
    { id: 3, name: "Кухонна техніка" },
    { id: 4, name: "Техніка для кухні" },
    { id: 5, name: "Дитячі іграшки" },
    { id: 6, name: "Аудіотехніка" },
  ]);
}
