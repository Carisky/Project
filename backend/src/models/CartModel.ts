import { Model } from "objection";
import ArticleModel from "./ArticleModel";

class CartModel extends Model {
  id!: number;
  user_id!: number;
  article_id!: number;
  amount!: number;
  article?: ArticleModel; // Связь с товаром

  static get tableName() {
    return "carts";
  }

  static get relationMappings() {
    return {
      article: {
        relation: Model.BelongsToOneRelation,
        modelClass: ArticleModel,
        join: {
          from: "carts.article_id",
          to: "articles.id",
        },
      },
    };
  }
}

export default CartModel;
