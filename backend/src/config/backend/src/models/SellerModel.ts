import { Model } from 'objection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import ArticleModel from './ArticleModel';

class SellerModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  billing_info!: string;
  role!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName() {
    return 'sellers';
  }

  static get relationMappings() {
    return {
      articles: {
        relation: Model.HasManyRelation,
        modelClass: ArticleModel,
        join: {
          from: 'sellers.id',
          to: 'articles.seller_id',
        },
      },
    };
  }

  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  static async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
  // Instance method to save a user
  async saveSeller(): Promise<SellerModel> {
    const savedUser = await SellerModel.query().insert(this).returning('*');
    Object.assign(this, savedUser);
    return this;
  }
  static async authenticate(email: string, password: string): Promise<{ token: string; user: SellerModel } | null> {
    const user = await SellerModel.query().where('email', email).first();
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role}, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      return { token, user };
    }
    return null; // Authentication failed
  }
  

  // Поиск продавца по email
  static async findByEmail(email: string): Promise<SellerModel | undefined> {
    return await SellerModel.query().where('email', email).first();
  }

  // Поиск продавца по ID
  static async findById(id: number): Promise<SellerModel | undefined> {
    return await SellerModel.query().findById(id);
  }

  // Получение всех продавцов
  static async findAll(): Promise<SellerModel[]> {
    return await SellerModel.query();
  }

  // Обновление продавца с учетом новых данных
  async updateSeller(updates: Partial<SellerModel>): Promise<SellerModel> {
    if (updates.password) {
      updates.password = await SellerModel.hashPassword(updates.password);
    }
    const updatedSeller = await SellerModel.query().patchAndFetchById(this.id as number, updates);
    if (updatedSeller) {
      Object.assign(this, updatedSeller);
    }
    return this;
  }

  // Удаление продавца
  async deleteSeller(): Promise<void> {
    await SellerModel.query().deleteById(this.id as number);
  }

  // Добавление товара
  async addArticle(articleData: Partial<ArticleModel>) {
    return await ArticleModel.query().insert({
      ...articleData,
      seller_id: this.id,
    });
  }

  // Получение всех товаров
  async getArticles() {
    return await this.$relatedQuery('articles');
  }
}

export default SellerModel;
