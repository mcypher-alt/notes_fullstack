# 📝 Notes Fullstack App (React + Express)

Интерактивное приложение для управления заметками. Проект реализован как **Monorepo**, объединяющий фронтенд-клиент и бэкенд-сервер в единую экосистему.

## Ссылки
- **Live Demo:** https://notes-fullstack-client.onrender.com
- **Backend API:** https://notes-fullstack-n5hq.onrender.com/notes

## Технологический стек

### Frontend
- **React 19** (Vite)
- **Tailwind** (Flexbox/Grid, кастомная стилизация компонентов)
- **Fetch API** для асинхронного взаимодействия с сервером
- **State Management:** React Hooks (`useState`, `useEffect`)

### Backend
- **Node.js** & **Express**
- **REST API** (GET, POST запросы)
- **File System (fs):** Хранение данных в JSON-формате на стороне сервера
- **CORS:** Настройка кросс-доменных запросов
- **Deployment:** Render (Web Service + Static Site)

## Функционал
- ✅ Просмотр списка заметок в реальном времени.
- ✅ Создание новых заметок и их моментальное сохранение на сервере.
- ✅ Автоматическая обработка ошибок при сбоях связи с API.
- ✅ Адаптивная верстка под мобильные устройства.

## Структура проекта

```text
├── client/          # Frontend на React
│   ├── src/         # Компоненты и логика
│   └── package.json
├── server/          # Backend на Node.js
│   ├── index.js    # Логика API и Express-роуты
│   ├── notes.json   # Файловая база данных
│   └── package.json
└── .github/         # Настроенный CI/CD workflow
```

## Локальный запуск
1. Склонируйте репозиторий:

```bash
git clone https://github.com/mcypher-alt/notes_react_fullstack.git
```
2.  Запустите Backend:

```bash
cd server
npm install
node index.js
```

3. Запустите Frontend:

```bash
cd ../client
npm install
npm run dev
```

## Особенности реализации (Environment Configuration)

Приложение автоматически определяет среду запуска и переключает API URL:
- **Development:** При запуске локально (`npm run dev`) запросы идут на `http://localhost:3001`.
- **Production:** После деплоя на Render фронтенд автоматически переключается на рабочий URL бэкенда.

Логика переключения реализована через `import.meta.env.MODE` в Vite.
