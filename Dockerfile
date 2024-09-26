FROM node:lts-alpine AS build-stage

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# --- Production Stage ---
# Используем nginx для раздачи статических файлов
FROM nginx:stable-alpine AS production-stage

# Копируем собранное приложение из предыдущего этапа
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (необязательно)
COPY ./nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]