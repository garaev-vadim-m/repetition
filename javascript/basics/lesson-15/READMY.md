## 🌐 Lesson: Fetch API in JavaScript

### 📝 Описание урока

Урок посвящен работе с сетью через Fetch API — методам `GET` и `POST`, обработке ответов и ошибок через промисы, комбинированным запросам `Promise.all` и отмене запросов через `AbortController`.

### 📦 Изученные концепции

#### Класс-обёртка для запросов

```javascript
class SettingsApi {
  _abortController = new AbortController();

  get(url, params = {}) {
    return fetch(url, {
      method: 'GET',
      ...params,
      signal: this._abortController.signal,
    });
  }

  post(url, params = {}, formData) {
    return fetch(url, {
      method: 'POST',
      ...params,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: formData,
      signal: this._abortController.signal,
    });
  }
}
```

- По умолчанию `fetch` делает `GET`-запрос, но метод можно указать явно
- Для `POST` задаётся заголовок `Content-Type: application/json;charset=utf-8` и тело `body`
- Общий `AbortController` позволяет отменить все запросы этого объекта

#### Обработка ответа и ошибок

```javascript
const request = new SettingsApi();

request
  .get('url')
  .then((response) => response.json()) // читаем ответ в формате JSON
  .then((data) => data) // сами данные
  .catch((error) => error) // обработка ошибок
  .finally(() => console.log('finally - isLoading  = false'));
```

- `.then()` — цепочка обработки: сначала читаем JSON, затем получаем данные
- `.catch()` — перехват ошибок (например, обрыв запроса через AbortController)
- `.finally()` — выполняется всегда, удобно для сброса флага `isLoading`

#### Комбинация запросов через Promise.all

```javascript
// Упадет один — упадут все
Promise.all([request.get('url'), request.get('url2'), request.get('url3')])
  .then((response) => response)
  .catch((error) => console.error(error))
  .finally(() => console.log('finally'));
```

`Promise.all` запускает запросы параллельно и ждёт завершения всех. Если хоть один запрос упадёт — весь `Promise.all` завершится с ошибкой.

### 🔗 Полезные ссылки

- [Fetch API](https://learn.javascript.ru/fetch)
- [Promise.all](https://learn.javascript.ru/promise-api)
- [AbortController](https://learn.javascript.ru/abort)

### ✅ Результат

Освоен Fetch API для `GET` и `POST`-запросов, обработка ответов и ошибок через цепочку промисов, параллельные запросы через `Promise.all` и отмена запросов через `AbortController`.

---

### 💡 Ключевые моменты

| Концепция          | Описание                                              | Пример                              |
| ------------------ | ----------------------------------------------------- | ----------------------------------- |
| fetch              | Встроенный API для сетевых запросов                   | `fetch(url, { method: 'GET' })`     |
| GET / POST         | Явный метод и заголовки                               | `{ method: 'POST', headers, body }` |
| Цепочка промисов   | `.then()` → `.catch()` → `.finally()`                 | читаем JSON, обрабатываем ошибки    |
| finally            | Выполняется всегда, сброс `isLoading`                 | `.finally(() => isLoading = false)` |
| Promise.all        | Параллельные запросы, падение одного = падение всех   | `Promise.all([...])`                |
| AbortController    | Отмена активных запросов                              | `signal` в параметрах               |

### 🎯 Когда использовать

- ✅ Загрузка данных с сервера (`GET`)
- ✅ Отправка данных на сервер (`POST` с JSON-телом)
- ✅ Несколько независимых запросов одновременно — через `Promise.all`
- ✅ Нужна отмена запроса (например, при уходе со страницы) — через `AbortController`
- ❌ Для загрузки файлов лучше подходит `FormData` и `fetch` с телом
