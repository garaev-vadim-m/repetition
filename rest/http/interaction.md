# REST — Архитектурный стиль взаимодействия

## Основы REST

REST (Representational State Transfer) — архитектурный стиль для проектирования сетевых приложений.

**Ссылка:** https://learn.javascript.ru/fetch

## Принципы REST

1. **Клиент-сервер** — разделение ответственности
2. **Безостоянность** — каждый запрос содержит всю информацию
3. **Кэширование** — ответы могут кэшироваться
4. **Единообразный интерфейс** — стандартные методы
5. **Слои** — промежуточные уровни (балансировщики, прокси)

## RESTful URL Design

```
GET    /users          — список пользователей
GET    /users/:id      — конкретный пользователь
POST   /users          — создание пользователя
PUT    /users/:id      — обновление пользователя
DELETE /users/:id      — удаление пользователя
```

## Пример запроса (fetch)

```javascript
// GET запрос
const response = await fetch('/api/users');
const data = await response.json();

// POST запрос
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});
```

## Хранение состояния

REST хранит состояние на клиенте:
- JWT токены в localStorage/cookie
- Cookies для сессий
- Клиентская маршрутизация

## Версионирование API

```
/api/v1/users
/api/v2/users
```

## Пагинация

```
GET /api/users?page=1&limit=10
```
