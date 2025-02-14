import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("articles").del();

  // Inserts seed entries
  await knex("articles").insert([
    { id: 1, seller_id: 1, name: "Laptop", amount: 10, price: 999.99, rating: 4.5, category_id: 1, description: "Мощный ноутбук с последним процессором и большим экраном." },
    { id: 2, seller_id: 1, name: "Smartphone", amount: 15, price: 699.99, rating: 4.7, category_id: 1, description: "Современный смартфон с OLED-экраном и 128 ГБ памяти." },
    { id: 3, seller_id: 1, name: "Smartphone", amount: 15, price: 699.99, rating: 4.7, category_id: 2, description: "Тот же смартфон, но в другой категории." },
    { id: 4, seller_id: 2, name: "T-shirt", amount: 50, price: 19.99, rating: 4.3, category_id: 2, description: "Стильная футболка из 100% хлопка." },
    { id: 5, seller_id: 2, name: "Jeans", amount: 30, price: 49.99, rating: 4.1, category_id: 2, description: "Классические джинсы с удобной посадкой." },
    { id: 6, seller_id: 3, name: "Novel Book", amount: 100, price: 9.99, rating: 4.8, category_id: 3, description: "Захватывающий роман от известного писателя." },
    { id: 7, seller_id: 3, name: "Textbook", amount: 70, price: 29.99, rating: 4.4, category_id: 3, description: "Учебник для студентов и профессионалов." },
    { id: 8, seller_id: 4, name: "Blender", amount: 25, price: 89.99, rating: 4.6, category_id: 4, description: "Кухонный блендер с мощным мотором." },
    { id: 9, seller_id: 4, name: "Microwave", amount: 10, price: 149.99, rating: 4.5, category_id: 4, description: "Микроволновая печь с функцией гриля." },
    { id: 10, seller_id: 5, name: "Action Figure", amount: 40, price: 14.99, rating: 4.9, category_id: 5, description: "Фигурка супергероя для коллекции или игры." },
    { id: 11, seller_id: 5, name: "Board Game", amount: 20, price: 39.99, rating: 4.8, category_id: 5, description: "Настольная игра для всей семьи." },
    { id: 12, seller_id: 6, name: "Lipstick", amount: 60, price: 12.99, rating: 4.7, category_id: 6, description: "Стойкая помада с увлажняющим эффектом." },
    { id: 13, seller_id: 6, name: "Perfume", amount: 25, price: 49.99, rating: 4.6, category_id: 6, description: "Ароматный парфюм с нотами жасмина и ванили." },
    { id: 14, seller_id: 7, name: "Vitamins", amount: 100, price: 19.99, rating: 4.8, category_id: 7, description: "Комплекс витаминов для поддержания здоровья." },
    { id: 15, seller_id: 7, name: "Protein Powder", amount: 50, price: 29.99, rating: 4.7, category_id: 7, description: "Протеиновый порошок для спортсменов." },
    { id: 16, seller_id: 8, name: "Car Battery", amount: 15, price: 99.99, rating: 4.3, category_id: 8, description: "Аккумулятор для автомобиля с длительным сроком службы." },
    { id: 17, seller_id: 8, name: "Car Tires", amount: 30, price: 199.99, rating: 4.4, category_id: 8, description: "Комплект автомобильных шин для любых погодных условий." },
    { id: 18, seller_id: 9, name: "Garden Hose", amount: 40, price: 24.99, rating: 4.5, category_id: 9, description: "Гибкий садовый шланг длиной 15 метров." },
    { id: 19, seller_id: 9, name: "Lawn Mower", amount: 10, price: 299.99, rating: 4.6, category_id: 9, description: "Газонокосилка с мощным двигателем." },
    { id: 20, seller_id: 10, name: "Basketball", amount: 30, price: 19.99, rating: 4.8, category_id: 10, description: "Баскетбольный мяч для игры в зале и на улице." },
    { id: 21, seller_id: 10, name: "Tennis Racket", amount: 20, price: 49.99, rating: 4.7, category_id: 10, description: "Теннисная ракетка для профессионалов и любителей." },
  ]);
}
