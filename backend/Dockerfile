# Используем официальный образ Node.js
FROM node:20

# Создаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код
COPY . .

# Открываем порт, который использует сервер
EXPOSE 5000

# Команда для запуска приложения
CMD ["npm", "start"]
