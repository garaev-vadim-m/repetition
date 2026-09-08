## 🍪 Lesson: Cookies in JavaScript

### 📝 Описание урока

Урок посвящен работе с cookie в браузере — функциям записи, чтения и удаления cookie через `document.cookie`, обработке значений и настройкам (путь, домен, срок жизни).

### 📦 Изученные концепции

#### Чтение cookie

```javascript
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
```

- `document.cookie` — строка вида `name=value; name2=value2`
- При чтении специальные символы в имени экранируются регулярным выражением
- Значение декодируется через `decodeURIComponent`, поэтому хранить нужно кодированное значение

#### Запись cookie

```javascript
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options, // переопределение значений по умолчанию
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString(); // дата в строку
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
```

- Имя и значение кодируются через `encodeURIComponent` (безопасно для пробелов, кириллицы и спецсимволов)
- Значение по умолчанию — путь `path: '/'`, остальные настройки можно передать через `options`
- Дату `expires` нужно превращать в строку через `toUTCString()`

Пример вызова с настройками:

```javascript
setCookie('user', 'John', { secure: true, 'max-age': 3600 });
```

#### Удаление cookie

```javascript
function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1, // отрицательный срок жизни = удаление
  });
}
```

Удаление происходит записью того же имени с пустым значением и отрицательным сроком жизни.

#### Важное замечание

При обновлении или удалении cookie нужно использовать **те же путь и домен**, что и при установке, иначе операция не применится к нужной cookie.

### 🔗 Полезные ссылки

- [Cookie, document.cookie](https://learn.javascript.ru/cookie)

### ✅ Результат

Освоены функции чтения, записи и удаления cookie, кодирование значений через `encodeURIComponent`/`decodeURIComponent`, работа с настройками (путь, домен, срок жизни) и ограничение на одинаковый путь/домен при изменении.

---

### 💡 Ключевые моменты

| Концепция        | Описание                                        | Пример                              |
| ---------------- | ----------------------------------------------- | ----------------------------------- |
| document.cookie  | Строка всех cookie браузера                     | `document.cookie`                   |
| Запись           | Кодирование имени и значения                    | `setCookie('user','John')`          |
| Чтение           | Парсинг строки и декодирование значения         | `getCookie('user')`                 |
| Кодирование      | encodeURIComponent / decodeURIComponent         | безопасно для `;`, пробелов         |
| Настройки        | path, domain, expires, max-age, secure          | `setCookie(..., { 'max-age': 3600 })` |
| Удаление         | Запись с `max-age: -1`                          | `deleteCookie(name)`                |

### 🎯 Когда использовать

- ✅ Хранить небольшие данные между запросами (идентификатор, сессия)
- ✅ Передавать настройки, которые читаются на сервере
- ❌ Не хранить чувствительные данные без `secure` и HTTPS
- ❌ Cookie не подходят для больших объёмов данных — используйте `localStorage`
