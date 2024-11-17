import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import ArticlePhotoModel from '../models/ArticlePhotoModel';

// Promisify fs.writeFile for asynchronous operation
const writeFileAsync = promisify(fs.writeFile);

// Путь для хранения фотографий
const storagePath = process.env.PHOTOS_STORAGE_PATH || './storage/photos';

/**
 * Сервис для загрузки фотографий для товара
 * @param articleId Идентификатор товара
 * @param sellerId Идентификатор продавца
 * @param files Загруженные файлы
 */
export const uploadPhotos = async (articleId: number, sellerId: number, files: Express.Multer.File[]): Promise<string[]> => {
  const folderName = `${sellerId}_${articleId}`;
  const articleFolder = path.join(storagePath, folderName);

  // Проверяем, существует ли папка для данного товара
  if (!fs.existsSync(articleFolder)) {
    fs.mkdirSync(articleFolder, { recursive: true });
  }

  const urls: string[] = [];

  // Сохраняем файлы на диск и сохраняем URL
  for (const file of files) {
    const filePath = path.join(articleFolder, file.originalname);

    // Записываем файл в папку
    await writeFileAsync(filePath, file.buffer);

    // Формируем URL для доступа к фотографии
    const url = `/storage/photos/${folderName}/${file.originalname}`;
    urls.push(url);

    // Сохраняем информацию о фотографии в базе данных
    await ArticlePhotoModel.addPhoto({ article_id: articleId, seller_id: sellerId, url });
  }

  return urls;
};
