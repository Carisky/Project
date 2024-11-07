import { Model } from 'objection';
import SellerModel from './SellerModel';

class ArticleModel extends Model {
  id!: number;
  seller_id!: number;
  name!: string;
  amount!: number;
  price!: number;
  created_at?: string;
  updated_at?: string;

  static get tableName() {
    return 'articles';
  }

  static get relationMappings() {
    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: SellerModel,
        join: {
          from: 'articles.seller_id',
          to: 'sellers.id',
        },
      },
    };
  }

  // Поиск статьи по ID
  static async findById(id: number): Promise<ArticleModel | undefined> {
    return await ArticleModel.query().findById(id);
  }

  // Поиск статьи по имени
  static async findByName(name: string): Promise<ArticleModel | undefined> {
    return await ArticleModel.query().where('name', name).first();
  }

  // Получение всех статей
  static async findAll(): Promise<ArticleModel[]> {
    return await ArticleModel.query();
  }

  // Создание новой статьи
  static async createArticle(data: Partial<ArticleModel>): Promise<ArticleModel> {
    return await ArticleModel.query().insert(data).returning('*');
  }

  // Обновление данных статьи по ID
  static async updateArticle(id: number, updates: Partial<ArticleModel>): Promise<ArticleModel | null> {
    return await ArticleModel.query().patchAndFetchById(id, updates);
  }

  // Удаление статьи по ID
  static async deleteArticle(id: number): Promise<number> {
    return await ArticleModel.query().deleteById(id);
  }
}

export default ArticleModel;