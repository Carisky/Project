import { Model } from "objection";
import SellerModel from "./SellerModel";
import CategoryModel from "./CategoryModel";
import ArticlePhotoModel from "./ArticlePhotoModel";
import TagModel from "./TagModel";

interface TagWithValues {
  key: string;
  value: string;
}

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
  photos?: ArticlePhotoModel[];
  seller?: SellerModel; 
  category?: CategoryModel; 
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
            extra: ["value"],
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
  async addOrUpdateTag(key: string, value: string): Promise<void> {
    let tag = await TagModel.findByName(key);
    if (!tag) {
      tag = await TagModel.createTag(key);
    }

    const existingRelation = await this.$relatedQuery("tags")
      .where("tags.id", tag.id)
      .andWhere("article_tags.value", value)
      .first();
    if (existingRelation) return;
    await this.$relatedQuery("tags").relate({
      id: tag.id,
      value,
    });
  }

  async removeTag(key: string, value: string): Promise<void> {
    const tag = await TagModel.findByName(key);
    if (!tag) return;
    await this.$relatedQuery("tags")
      .unrelate()
      .where("tags.id", tag.id)
      .andWhere("article_tags.value", value);
  }

  async getTagsWithValues(): Promise<TagWithValues[]> {
    const tags = await this.$relatedQuery("tags").select(
      "tags.name as key",
      "article_tags.value as value"
    );

    return tags.map((tag: any) => ({
      key: tag.key,
      value: tag.value,
    }));
  }
}

export default ArticleModel;
