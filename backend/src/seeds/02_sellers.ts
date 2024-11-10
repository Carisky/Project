import type { Knex } from "knex";
import bcrypt from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {
  // Wait for the password hashing to complete
  const hashedApass = await hashPassword("shopApass");
  const hashedBpass = await hashPassword("shopBpass");

  // Deletes ALL existing entries
  await knex("sellers").del();

  // Inserts seed entries
  await knex("sellers").insert([
    { id: 1, name: "Shop A", email: "shopA@example.com", password: hashedApass, billing_info: "1234-5678-9012-3456", role:"seller" },
    { id: 2, name: "Shop B", email: "shopB@example.com", password: hashedBpass, billing_info: "2345-6789-0123-4567", role:"seller" },
  ]);
}

async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}
