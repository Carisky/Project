import CartModel from "../models/CartModel";

export const getCartService = async (user_id: number) => {
  return await CartModel.query()
    .where("user_id", user_id)
    .withGraphFetched("article")
    .modifyGraph("article", (builder) => {
      builder.select("id", "name", "price", "description");
    });
};

export const addToCartService = async (user_id: number, article_id: number, amount: number) => {
  // Проверяем, есть ли уже этот товар в корзине
  const existingItem = await CartModel.query()
    .where({ user_id, article_id })
    .first();

  if (existingItem) {
    // Если товар уже есть, увеличиваем количество
    return await CartModel.query()
      .patchAndFetchById(existingItem.id, { amount: existingItem.amount + amount });
  }

  // Если товара нет, добавляем новый
  return await CartModel.query().insertAndFetch({ user_id, article_id, amount });
};

export const deleteFromCartService = async (user_id: number, article_id: number) => {
  return await CartModel.query().where({ user_id, article_id }).delete();
};
