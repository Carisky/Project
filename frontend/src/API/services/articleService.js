import apiHandler from '../src/APIhandler';

export const findArticlesByName = async (name) => {
  const response = await apiHandler.get(`/articles/search`, {
    params: { name },
  });
  return response.data;
};
