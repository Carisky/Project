import db from "../db/db";

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

class UserModel {
  // Метод для создания пользователя
  async save(user: User): Promise<User> {
    const [id] = await db('users')
      .insert(user)
      .returning('id');  // Получаем id вставленной записи

    const savedUser = await db('users').where('id', id).first(); // Получаем весь объект пользователя
    return savedUser;
  }

  // Метод для поиска пользователя по email
  async findByEmail(email: string): Promise<User | null> {
    const user = await db('users')
      .select('*')
      .where('email', email)
      .first();
    return user || null;
  }

  // Метод для получения всех пользователей
  async findAll(): Promise<User[]> {
    return await db('users').select('*');
  }

  // Метод для получения пользователя по id
  async findById(id: number): Promise<User | null> {
    const user = await db('users')
      .select('*')
      .where('id', id)
      .first();
    return user || null;
  }

  // Метод для обновления данных пользователя
  async update(id: number, updates: Partial<User>): Promise<User | null> {
    await db('users')
      .where('id', id)
      .update(updates);

    const updatedUser = await db('users')
      .where('id', id)
      .first();
    return updatedUser || null;
  }

  // Метод для удаления пользователя по id
  async delete(id: number): Promise<void> {
    await db('users').where('id', id).del();
  }
}

export default new UserModel();
