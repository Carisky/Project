import { Model } from 'objection';

interface ArticlePhoto {
  id: number;
  article_id: number;
  seller_id: number;
  url: string;
  created_at?: string;
  updated_at?: string;
}

class ArticlePhotoModel extends Model implements ArticlePhoto {
  id!: number;
  article_id!: number;
  seller_id!: number;
  url!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName(): string {
    return 'article_photos';
  }

  static async addPhoto(data: Omit<ArticlePhoto, 'id' | 'created_at' | 'updated_at'>): Promise<ArticlePhotoModel> {
    return await ArticlePhotoModel.query().insert(data);
  }

  static async getPhotosByArticle(article_id: number): Promise<ArticlePhotoModel[]> {
    return await ArticlePhotoModel.query().where('article_id', article_id);
  }

  static async deletePhotosByArticle(article_id: number): Promise<number> {
    return await ArticlePhotoModel.query().delete().where('article_id', article_id);
  }
}

export default ArticlePhotoModel;
