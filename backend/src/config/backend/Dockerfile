FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы с зависимостями
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Компилируем TypeScript в JavaScript
RUN npx tsc

# Открываем порт для сервера
EXPOSE 5000

# Используем nodemon для отслеживания изменений и запуска ts-node для TypeScript
CMD ["npx", "nodemon"]
