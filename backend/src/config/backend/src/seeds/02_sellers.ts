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
    { id: 1, name: "Shop A", email: "shopA@example.com", password: await hashPassword("shopApass"), billing_info: "1234-5678-9012-3456", role: "seller" },
    { id: 2, name: "Shop B", email: "shopB@example.com", password: await hashPassword("shopBpass"), billing_info: "2345-6789-0123-4567", role: "seller" },
    { id: 3, name: "Shop C", email: "shopC@example.com", password: await hashPassword("shopCpass"), billing_info: "3456-7890-1234-5678", role: "seller" },
    { id: 4, name: "Shop D", email: "shopD@example.com", password: await hashPassword("shopDpass"), billing_info: "4567-8901-2345-6789", role: "seller" },
    { id: 5, name: "Shop E", email: "shopE@example.com", password: await hashPassword("shopEpass"), billing_info: "5678-9012-3456-7890", role: "seller" },
    { id: 6, name: "Shop F", email: "shopF@example.com", password: await hashPassword("shopFpass"), billing_info: "6789-0123-4567-8901", role: "seller" },
    { id: 7, name: "Shop G", email: "shopG@example.com", password: await hashPassword("shopGpass"), billing_info: "7890-1234-5678-9012", role: "seller" },
    { id: 8, name: "Shop H", email: "shopH@example.com", password: await hashPassword("shopHpass"), billing_info: "8901-2345-6789-0123", role: "seller" },
    { id: 9, name: "Shop I", email: "shopI@example.com", password: await hashPassword("shopIpass"), billing_info: "9012-3456-7890-1234", role: "seller" },
    { id: 10, name: "Shop J", email: "shopJ@example.com", password: await hashPassword("shopJpass"), billing_info: "0123-4567-8901-2345", role: "seller" },
    { id: 11, name: "Shop K", email: "shopK@example.com", password: await hashPassword("shopKpass"), billing_info: "3456-7890-1234-5678", role: "seller" },
    { id: 12, name: "Shop L", email: "shopL@example.com", password: await hashPassword("shopLpass"), billing_info: "4567-8901-2345-6789", role: "seller" },
    { id: 13, name: "Shop M", email: "shopM@example.com", password: await hashPassword("shopMpass"), billing_info: "5678-9012-3456-7890", role: "seller" },
    { id: 14, name: "Shop N", email: "shopN@example.com", password: await hashPassword("shopNpass"), billing_info: "6789-0123-4567-8901", role: "seller" },
    { id: 15, name: "Shop O", email: "shopO@example.com", password: await hashPassword("shopOpass"), billing_info: "7890-1234-5678-9012", role: "seller" },
    { id: 16, name: "Shop P", email: "shopP@example.com", password: await hashPassword("shopPpass"), billing_info: "8901-2345-6789-0123", role: "seller" },
    { id: 17, name: "Shop Q", email: "shopQ@example.com", password: await hashPassword("shopQpass"), billing_info: "9012-3456-7890-1234", role: "seller" },
    { id: 18, name: "Shop R", email: "shopR@example.com", password: await hashPassword("shopRpass"), billing_info: "0123-4567-8901-2345", role: "seller" },
    { id: 19, name: "Shop S", email: "shopS@example.com", password: await hashPassword("shopSpass"), billing_info: "2345-6789-0123-4567", role: "seller" },
    { id: 20, name: "Shop T", email: "shopT@example.com", password: await hashPassword("shopTpass"), billing_info: "3456-7890-1234-5678", role: "seller" },
  ]);
  
}

async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}
