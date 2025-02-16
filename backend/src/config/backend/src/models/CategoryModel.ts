import { Model } from 'objection';
import ArticleModel from './ArticleModel';

class CategoryModel extends Model {
  id!: number;
  name!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName() {
    return 'categories';
  }

  static get relationMappings() {
    return {
      articles: {
        relation: Model.HasManyRelation,
        modelClass: ArticleModel,
        join: {
          from: 'categories.id',
          to: 'articles.category_id',
        },
      },
    };
  }

  // Find category by ID
  static async findById(id: number): Promise<CategoryModel | undefined> {
    return await CategoryModel.query().findById(id);
  }

  // Find category by name
  static async findByName(name: string): Promise<CategoryModel | undefined> {
    return await CategoryModel.query().where('name', name).first();
  }

  // Get all categories
  static async findAll(): Promise<CategoryModel[]> {
    return await CategoryModel.query();
  }

  // Create a new category
  static async createCategory(data: Partial<CategoryModel>): Promise<CategoryModel> {
    return await CategoryModel.query().insert(data).returning('*');
  }

  // Update category by ID
  static async updateCategory(id: number, updates: Partial<CategoryModel>): Promise<CategoryModel | null> {
    return await CategoryModel.query().patchAndFetchById(id, updates);
  }

  // Delete category by ID
  static async deleteCategory(id: number): Promise<number> {
    return await CategoryModel.query().deleteById(id);
  }
}

export default CategoryModel;
