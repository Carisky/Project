import SellerModel from '../models/SellerModel';
import ArticleModel from '../models/ArticleModel';

export const createSellerService = async (name: string, email: string, password: string, billing_info: string) => {
  const seller = SellerModel.fromJson({
    name,
    email,
    password: await SellerModel.hashPassword(password),
    billing_info,
  });
  return await seller.saveSeller();
};

export const authenticateSellerService = async (email: string, password: string) => {
  return await SellerModel.authenticate(email, password);
};

export const getSellerByIdService = async (id: number) => {
  return await SellerModel.findById(id);
};

export const updateSellerService = async (sellerId: number, updates: Partial<SellerModel>) => {
  const seller = await getSellerByIdService(sellerId);
  if (seller) {
    return await seller.updateSeller(updates);
  }
  return null;
};

export const deleteSellerService = async (sellerId: number) => {
  const seller = await getSellerByIdService(sellerId);
  if (seller) {
    return await seller.deleteSeller();
  }
  return null;
};

export const addArticleService = async (sellerId: number, articleData: Partial<ArticleModel>) => {
  const seller = await SellerModel.query().findById(sellerId);
  if (!seller) {
    throw new Error('Seller not found');
  }
  return await seller.addArticle(articleData);
};

export const getSellerArticlesService = async (sellerId: number) => {
  const seller = await SellerModel.query().findById(sellerId);
  if (!seller) {
    throw new Error('Seller not found');
  }
  return await seller.getArticles();
};
