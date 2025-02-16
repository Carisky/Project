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
    { id: 1, name: "Alice", email: "alice@example.com", password: await hashPassword("password1"), role: "user" },
    { id: 2, name: "Bob", email: "bob@example.com", password: await hashPassword("password2"), role: "user" },
    { id: 3, name: "Charlie", email: "charlie@example.com", password: await hashPassword("password3"), role: "user" },
    { id: 4, name: "Diana", email: "diana@example.com", password: await hashPassword("password4"), role: "user" },
    { id: 5, name: "Eve", email: "eve@example.com", password: await hashPassword("password5"), role: "user" },
    { id: 6, name: "Frank", email: "frank@example.com", password: await hashPassword("password6"), role: "user" },
    { id: 7, name: "Grace", email: "grace@example.com", password: await hashPassword("password7"), role: "user" },
    { id: 8, name: "Hank", email: "hank@example.com", password: await hashPassword("password8"), role: "user" },
    { id: 9, name: "Ivy", email: "ivy@example.com", password: await hashPassword("password9"), role: "user" },
    { id: 10, name: "Jack", email: "jack@example.com", password: await hashPassword("password10"), role: "user" },
    { id: 11, name: "Karen", email: "karen@example.com", password: await hashPassword("password11"), role: "user" },
    { id: 12, name: "Leo", email: "leo@example.com", password: await hashPassword("password12"), role: "user" },
    { id: 13, name: "Mona", email: "mona@example.com", password: await hashPassword("password13"), role: "user" },
    { id: 14, name: "Nina", email: "nina@example.com", password: await hashPassword("password14"), role: "user" },
    { id: 15, name: "Oscar", email: "oscar@example.com", password: await hashPassword("password15"), role: "user" },
    { id: 16, name: "Paul", email: "paul@example.com", password: await hashPassword("password16"), role: "user" },
    { id: 17, name: "Quinn", email: "quinn@example.com", password: await hashPassword("password17"), role: "user" },
    { id: 18, name: "Rose", email: "rose@example.com", password: await hashPassword("password18"), role: "user" },
    { id: 19, name: "Steve", email: "steve@example.com", password: await hashPassword("password19"), role: "user" },
    { id: 20, name: "Tina", email: "tina@example.com", password: await hashPassword("password20"), role: "user" },
  ]);  
}
async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}