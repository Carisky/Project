# Используем официальный образ Node.js для React
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Открываем порт для React
EXPOSE 3000

# Запуск React приложения
CMD ["npm", "start"]
