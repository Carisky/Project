import apiHandler from '../src/APIhandler';

// Получить товары из корзины
export const getCartItems = async () => {
  try {
    const response = await apiHandler.get('/carts/cart', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Передаем токен
      },
    });
    return response.data; // Предполагается, что API возвращает массив товаров в корзине
  } catch (error) {
    console.error("Ошибка при получении товаров из корзины:", error);
    throw error; // Можно обработать ошибку в компоненте
  }
};

// Добавить товар в корзину
export const addItemToCart = async (article_id, amount) => {
  try {
    const payload = {
      article_id,
      amount,
    };
    const response = await apiHandler.post('/carts/cart', payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Передаем токен
      },
    });
    return response.data; // Можно вернуть обновленную корзину или статус
  } catch (error) {
    console.error("Ошибка при добавлении товара в корзину:", error);
    throw error; // Можно обработать ошибку в компоненте
  }
};

// Удалить товар из корзины
export const removeItemFromCart = async (articleId) => {
  try {
    const response = await apiHandler.delete(
      `/carts/cart/${articleId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Передаем токен
        },
      }
    );
    return response.data; // Можно вернуть обновленную корзину или статус
  } catch (error) {
    console.error("Ошибка при удалении товара из корзины:", error);
    throw error; // Можно обработать ошибку в компоненте
  }
};
