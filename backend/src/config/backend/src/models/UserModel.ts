import { Model } from 'objection';
import knex from '../db/db';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
Model.knex(knex); // Set up Objection.js to use knex

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at?: string;
  updated_at?: string;
}

class UserModel extends Model implements User {
  id?: number;
  name!: string;
  email!: string;
  role!: string;
  password!: string;
  created_at?: string;
  updated_at?: string;

  static get tableName() {
    return 'users';
  }
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  static async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
  // Instance method to save a user
  async saveUser(): Promise<UserModel> {
    const savedUser = await UserModel.query().insert(this).returning('*');
    Object.assign(this, savedUser);
    return this;
  }
  static async authenticate(email: string, password: string): Promise<{ token: string; user: UserModel } | null> {
    const user = await UserModel.query().where('email', email).first();
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      return { token, user };
    }
    return null; // Authentication failed
  }
  
  // Static method to find a user by email
  static async findByEmail(email: string): Promise<UserModel | null> {
    const user = await UserModel.query().where('email', email).first();
    return user ? UserModel.fromJson(user) : null;
  }

  // Static method to get all users
  static async findAll(): Promise<UserModel[]> {
    const users = await UserModel.query();
    return users.map((user) => UserModel.fromJson(user));
  }

  // Static method to get a user by id
  static async findById(id: number): Promise<UserModel | null> {
    const user = await UserModel.query().findById(id);
    return user ? UserModel.fromJson(user) : null;
  }

  // Instance method to update user data
  async updateUser(updates: Partial<User>): Promise<UserModel> {
    const updatedUser = await UserModel.query().patchAndFetchById(this.id as number, updates);
    if (updatedUser) {
      Object.assign(this, updatedUser);
    }
    return this;
  }

  // Instance method to delete a user
  async deleteUser(): Promise<void> {
    await UserModel.query().deleteById(this.id as number);
  }
}

export default UserModel;
