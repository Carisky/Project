import { Model } from "objection";
import ArticleModel from "./ArticleModel";
import ArticleTagModel from "./ArticleTagModel";

class TagModel extends Model {
  id!: number;
  name!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName(): string {
    return "tags";
  }

  static get relationMappings() {
    return {
      articles: {
        relation: Model.ManyToManyRelation,
        modelClass: ArticleModel,
        join: {
          from: "tags.id",
          through: {
            from: "article_tags.tag_id",
            to: "article_tags.article_id",
          },
          to: "articles.id",
        },
      },
    };
  }

  static async findByName(name: string): Promise<TagModel | undefined> {
    return await TagModel.query().where("name", name).first();
  }

  static async createTag(name: string): Promise<TagModel> {
    return await TagModel.query().insert({ name }).returning("*");
  }
}

export default TagModel;
