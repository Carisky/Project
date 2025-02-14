import { Model } from "objection";
import SellerModel from "./SellerModel";
import CategoryModel from "./CategoryModel";
import ArticlePhotoModel from "./ArticlePhotoModel";
import TagModel from "./TagModel";

class ArticleModel extends Model {
  id!: number;
  seller_id!: number;
  category_id!: number;
  name!: string;
  amount!: number;
  price!: number;
  rating!: number;
  created_at?: string;
  updated_at?: string;
  description?: string;
  photos?: ArticlePhotoModel[];
  seller?: SellerModel; 
  category?: CategoryModel; 
  tags?: TagModel[];

  static get tableName() {
    return "articles";
  }

  static get relationMappings() {
    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: SellerModel,
        join: {
          from: "articles.seller_id",
          to: "sellers.id",
        },
      },
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: CategoryModel,
        join: {
          from: "articles.category_id",
          to: "categories.id",
        },
      },
      photos: {
        relation: Model.HasManyRelation,
        modelClass: ArticlePhotoModel,
        join: {
          from: "articles.id",
          to: "article_photos.article_id",
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: TagModel,
        join: {
          from: "articles.id",
          through: {
            from: "article_tags.article_id",
            to: "article_tags.tag_id",
          },
          to: "tags.id",
        },
      },
    };
  }

  static async findById(id: number): Promise<ArticleModel | undefined> {
    return await ArticleModel.query().findById(id);
  }

  static async findByName(name: string): Promise<ArticleModel | undefined> {
    return await ArticleModel.query().where("name", name).first();
  }

  static async findAll(): Promise<ArticleModel[]> {
    return await ArticleModel.query();
  }

  static async createArticle(
    data: Partial<ArticleModel>
  ): Promise<ArticleModel> {
    return await ArticleModel.query().insert(data).returning("*");
  }

  static async updateArticle(
    id: number,
    updates: Partial<ArticleModel>
  ): Promise<ArticleModel | null> {
    return await ArticleModel.query().patchAndFetchById(id, updates);
  }

  static async deleteArticle(id: number): Promise<number> {
    return await ArticleModel.query().deleteById(id);
  }
}

export default ArticleModel;
