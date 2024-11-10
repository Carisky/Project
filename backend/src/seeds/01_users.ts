import type { Knex } from "knex";
import bcrypt from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();


  const hashedApass = await hashPassword("password1");
  const hashedBpass = await hashPassword("password12");
  const hashedCpass = await hashPassword("password123");


  // Inserts seed entries
  await knex("users").insert([
    { id: 1, name: "Alice", email: "alice@example.com", password: hashedApass, role: "user" },
    { id: 2, name: "Bob", email: "bob@example.com", password: hashedBpass, role: "user" },
    { id: 3, name: "Charlie", email: "charlie@example.com", password: hashedCpass, role: "user" },
  ]);
}
async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}