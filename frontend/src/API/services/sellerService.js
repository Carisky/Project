import apiHandler from '../src/APIhandler';

export const registerSeller = async (data) => {
  const response = await apiHandler.post('/sellers/register', data);
  return response.data;
};

export const loginSeller = async (data) => {
  const response = await apiHandler.post('/sellers/login', data);
  return response.data;
};

export const getSellerProfile = async (token) => {
  const response = await apiHandler.get('/sellers/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSellerProfile = async (data, token) => {
  const response = await apiHandler.put('/sellers/profile', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteSellerAccount = async (token) => {
  await apiHandler.delete('/sellers/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addSellerArticle = async (formData, token) => {
  // formData должен быть экземпляром FormData с заполненными полями и файлами
  const response = await apiHandler.post('/sellers/articles', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getSellerArticles = async (token) => {
  const response = await apiHandler.get('/sellers/articles', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
