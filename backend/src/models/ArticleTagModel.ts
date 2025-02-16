import { Model } from "objection";

class ArticleTagModel extends Model {
  id!: number;
  article_id!: number;
  tag_id!: number;

  static get tableName() {
    return "article_tags";
  }
}

export default ArticleTagModel;
