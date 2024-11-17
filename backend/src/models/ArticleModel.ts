import { Model } from 'objection';
import SellerModel from './SellerModel';
import CategoryModel from './CategoryModel';
import ArticlePhotoModel from './ArticlePhotoModel'; // Импортируем ArticlePhotoModel

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
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: CategoryModel,
        join: {
          from: 'articles.category_id',
          to: 'categories.id',
        },
      },
      photos: {
        relation: Model.HasManyRelation,  // Описание связи "один ко многим"
        modelClass: ArticlePhotoModel,    // Модель фотографий
        join: {
          from: 'articles.id',            // Из какой таблицы
          to: 'article_photos.article_id', // В какую таблицу
        },
      },
    };
  }

  // Поиск Товара по ID
  static async findById(id: number): Promise<ArticleModel | undefined> {
    return await ArticleModel.query().findById(id);
  }

  // Поиск Товара по имени
  static async findByName(name: string): Promise<ArticleModel | undefined> {
    return await ArticleModel.query().where('name', name).first();
  }

  // Получение всех Товаров
  static async findAll(): Promise<ArticleModel[]> {
    return await ArticleModel.query();
  }

  // Создание нового Товара
  static async createArticle(data: Partial<ArticleModel>): Promise<ArticleModel> {
    return await ArticleModel.query().insert(data).returning('*');
  }

  // Обновление данных Товара по ID
  static async updateArticle(id: number, updates: Partial<ArticleModel>): Promise<ArticleModel | null> {
    return await ArticleModel.query().patchAndFetchById(id, updates);
  }

  // Удаление Товара по ID
  static async deleteArticle(id: number): Promise<number> {
    return await ArticleModel.query().deleteById(id);
  }
}

export default ArticleModel;
