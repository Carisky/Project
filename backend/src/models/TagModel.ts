import { Model } from 'objection';

class TagModel extends Model {
  id!: number;
  name!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName(): string {
    return 'tags';
  }

  static async findByName(name: string): Promise<TagModel | undefined> {
    return await TagModel.query().where('name', name).first();
  }

  static async createTag(name: string): Promise<TagModel> {
    return await TagModel.query().insert({ name }).returning('*');
  }
}

export default TagModel;
