# HTTP — Протокол передачи гипертекста

## Основы

HTTP (HyperText Transfer Protocol) — прикладной протокол для передачи документов.

**Ссылка:** https://learn.javascript.ru/http-requests

## Методы HTTP

| Метод | Описание | Идемпотентность |
|-------|----------|-----------------|
| GET | Получение ресурса | Да |
| POST | Создание ресурса | Нет |
| PUT | Полная замена ресурса | Да |
| PATCH | Частичное обновление | Нет |
| DELETE | Удаление ресурса | Да |

## Статус-коды

### 1xx — Информационные
- **100 Continue** — сервер принял начальную часть запроса
- **101 Switching Protocols** — переключение протоколов

### 2xx — Успех
- **200 OK** — успешный запрос
- **201 Created** — ресурс создан
- **204 No Content** — успех, нет тела ответа

### 3xx — Перенаправление
- **301 Moved Permanently** — постоянный редирект
- **302 Found** — временный редирект
- **304 Not Modified** — кэш актуален

### 4xx — Ошибка клиента
- **400 Bad Request** — неверный синтаксис
- **401 Unauthorized** — не авторизован
- **403 Forbidden** — доступ запрещён
- **404 Not Found** — ресурс не найден
- **405 Method Not Allowed** — метод не поддерживается

### 5xx — Ошибка сервера
- **500 Internal Server Error** — внутренняя ошибка
- **502 Bad Gateway** — неверный ответ от шлюза
- **503 Service Unavailable** — сервис недоступен

## Заголовки (Headers)

```
Content-Type: application/json
Authorization: Bearer <token>
Cache-Control: no-cache
Accept: application/json
```

## Форматы данных

- **JSON** — `application/json` (популярный)
- **XML** — `application/xml`
- **Form Data** — `multipart/form-data`
- **URL-encoded** — `application/x-www-form-urlencoded`

## Безопасность

- **HTTPS** — HTTP + TLS шифрование
- **CORS** — политика кросс-доменных запросов
