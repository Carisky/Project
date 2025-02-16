# Використовуємо офіційний образ Node.js
FROM node:20

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли з локальної директорії в контейнер
COPY . .

# Компилюємо TypeScript в JavaScript
RUN npx tsc

# Встановлюємо nodemon та ts-node як dev-залежності
RUN npm install --save-dev nodemon ts-node

# Відкриваємо порт для сервера
EXPOSE 5000

# Запускаємо додаток за допомогою nodemon для автоматичного перезапуску при зміні файлів
CMD ["npx", "nodemon", "dist/index.js"]
