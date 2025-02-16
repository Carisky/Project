import apiHandler from '../src/APIhandler';

export const registerUser = async (data) => {
  const response = await apiHandler.post('/users/register', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await apiHandler.post('/users/login', data);
  return response.data;
};

export const recoverPassword = async (data) => {
  const response = await apiHandler.post('/users/passwordRecover', data); // Замените на правильный эндпоинт
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await apiHandler.get('/users/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateUserProfile = async (data, token) => {
  const response = await apiHandler.put('/users/profile', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteUserAccount = async (token) => {
  await apiHandler.delete('/users/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
};
