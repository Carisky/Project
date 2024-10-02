import { Model } from 'objection';
import knex from '../db/db';

Model.knex(knex); // Настроим Objection.js на использование knex

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

class UserModel extends Model implements User {
  id?: number;
  name!: string;
  email!: string;
  password!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName() {
    return 'users';
  }

  // Метод для создания пользователя
  static async save(user: User): Promise<User> {
    const savedUser = await UserModel.query().insert(user).returning('*');
    return savedUser;
  }

  // Метод для поиска пользователя по email
  static async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.query().where('email', email).first();
    return user || null;
  }

  // Метод для получения всех пользователей
  static async findAll(): Promise<User[]> {
    return await UserModel.query();
  }

  // Метод для получения пользователя по id
  static async findById(id: number): Promise<User | null> {
    const user = await UserModel.query().findById(id);
    return user || null;
  }

  // Метод для обновления данных пользователя
  static async update(id: number, updates: Partial<User>): Promise<User | null> {
    const updatedUser = await UserModel.query().patchAndFetchById(id, updates);
    return updatedUser || null;
  }

  // Метод для удаления пользователя по id
  static async delete(id: number): Promise<void> {
    await UserModel.query().deleteById(id);
  }
}

export default UserModel;
