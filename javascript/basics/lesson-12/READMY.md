## 🚨 Lesson: Try/Catch and Error Handling in JavaScript

### 📝 Описание урока

Урок посвящен обработке ошибок в JavaScript — конструкциям `try/catch/finally`, разбору свойств объекта ошибки, пробросу исключений и ограничениям `try/catch` в работе с асинхронным кодом.

### 📦 Изученные концепции

#### Базовая конструкция try/catch

```javascript
try {
  console.log('Блок который должен выполниться');
  throw new Error('Ошибочка тут вышла');
  // все, что после — уже не выполнится
} catch (error) {
  const { message, name } = error;
  console.error(`${name} - ${message}`);
}
```

Если в `try` возникает исключение, выполнение сразу переходит в `catch`, где доступен объект ошибки с полями `name`, `message`, `stack`.

#### Разбор свойств ошибки

```javascript
catch (error) {
  const { message, name, stack } = error;
  console.error(`${name} - ${message}`);
}
```

- `name` — тип ошибки (например, `Error`, `ReferenceError`)
- `message` — текстовое описание
- `stack` — стек вызовов

#### Замыкание в блоке try

Пока простое наблюдение: функции внутри блока могут обращаться к внешним переменным:

```javascript
function user2() {
  console.log(user1); // замыкание
}
```

#### Исключение для try/catch: асинхронный код

`try/catch` **не ловит** ошибки, возникающие позже в асинхронных колбэках:

```javascript
// Не сработает — ошибка в setTimeout выполнится после выхода из try/catch
errors() {
  try {
    setTimeout(function () {
      noSuchVariable; // скрипт упадёт тут
    }, 1000);
  } catch (e) {
    console.log('не сработает');
  }
}

// Сработает — try/catch внутри колбэка
errors2() {
  setTimeout(function () {
    try {
      noSuchVariable;
    } catch (error) {
      console.log('сработает');
    }
  }, 1000);
}
```

Если нужно перехватить ошибку асинхронной операции, `try/catch` должен находиться **внутри** колбэка.

#### Проброс исключений и finally

```javascript
errors3(json) {
  try {
    if (!handleJson.jsonParse(json)) throw new Error('Пустой объект');
    if (!JSON.parse(json).name) throw new SyntaxError('Некоректный JSON');
    const data = JSON.parse(json);
    console.log(data);
  } catch (error) {
    if (error.name !== 'SyntaxError') {
      console.error(error.message);
    } else {
      throw error; // проброс (*)
    }
  } finally {
    console.log('Я выполнюсь всегда. Удобно использовать с загрузками');
  }
}
```

- **Проброс** — необработанную (или нужную дальше) ошибку можно выбросить снова через `throw error`
- **finally** — выполняется всегда, независимо от того, была ли ошибка. Удобно для сброса состояния загрузки.

### 🔗 Полезные ссылки

- [Обработка ошибок try...catch](https://learn.javascript.ru/try-catch)
- [Проброс исключений и finally](https://learn.javascript.ru/error-handling)

### ✅ Результат

Освоена обработка ошибок через `try/catch/finally`, разбор свойств объекта ошибки, проброс исключений и понимание ограничения `try/catch` при работе с асинхронным кодом (ошибки в колбэках нужно ловить внутри самих колбэков).

---

### 💡 Ключевые моменты

| Концепция          | Описание                                             | Пример                        |
| ------------------ | ---------------------------------------------------- | ----------------------------- |
| try/catch          | Перехват исключения из блока try                     | `try { ... } catch (e) {}`    |
| Свойства ошибки    | `name`, `message`, `stack`                           | `const { message } = error`   |
| Проброс            | Повторный выброс ошибки через `throw error`          | `catch (e) { if (...) throw e }` |
| finally            | Выполняется всегда, даже при ошибке                  | `finally { ... }`             |
| Асинхронный код    | `try/catch` не ловит ошибки внутри `setTimeout`/колбэков | `catch` внутри колбэка  |

### 🎯 Когда использовать

- ✅ Нужно обработать ожидаемую ошибку и продолжить выполнение
- ✅ Сбросить состояние (например, флаг `isLoading`) в `finally`
- ✅ Отделить обрабатываемые ошибки от тех, что стоит пробросить дальше
- ❌ Для ошибок внутри асинхронных колбэков — `try/catch` должен быть внутри них, либо использовать промисы
