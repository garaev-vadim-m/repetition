## 🛡️ Lesson: Создание своих ошибок в JavaScript

### 📝 Описание урока

Урок посвящен созданию собственных классов ошибок в JavaScript — наследованию от `Error`, использованию `instanceof` для различия ошибок по типу и определению свойств ошибки (например, отсутствующего поля).

### 📦 Изученные концепции

#### Базовый класс своих ошибок

Общий класс, который автоматически сохраняет правильное имя класса в свойстве `name`:

```javascript
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name; // имя дочернего класса
  }
}

// Собственный валидатор
export class ValidationError extends MyError {}
```

Наследование от `Error` даёт готовые поля `message` и `stack`, а `this.name = this.constructor.name` подставляет имя конкретного класса ошибки.

#### Углублённый класс ошибки со свойством

```javascript
export class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('Нет свойства: ' + property);
    this.property = property; // доп. информация об ошибке
  }
}
```

Дочерний класс может добавить собственные поля — например, имя отсутствующего свойства.

#### Проверка на свои ошибки через instanceof

```javascript
function readUsers() {
  try {
    let user = readUser('{ "age": 25 }');
    return user;
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log('Некорректные данные: ' + err.message);
    } else if (err instanceof SyntaxError) {
      console.log('JSON Ошибка Синтаксиса: ' + err.message);
    } else {
      throw err; // неизвестная ошибка — пробросить дальше
    }
  }
}
```

`instanceof` позволяет отличить свою ошибку от встроенных (`SyntaxError`) и от неизвестных, которые стоит пробросить дальше.

#### Использование в проверке данных

```javascript
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('Нет поля: age');
  }
  if (!user.name) {
    throw new ValidationError('Нет поля: name');
  }
  return user;
}
```

```javascript
function readUser2(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError('age'); // имя поля в свойстве error.property
  }
  if (!user.name) {
    throw new PropertyRequiredError('name');
  }
  return user;
}
```

### 🔗 Полезные ссылки

- [Создание своих ошибок](https://learn.javascript.ru/custom-errors)
- [Наследование от Error](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error)

### ✅ Результат

Освоено создание собственных классов ошибок через наследование от `Error`, автоматическая установка `name`, добавление собственных полей и корректное различие ошибок через `instanceof`.

---

### 💡 Ключевые моменты

| Концепция             | Описание                                         | Пример                                  |
| --------------------- | ------------------------------------------------ | --------------------------------------- |
| Наследование от Error | Своя ошибка получает message/stack из Error      | `class MyError extends Error {}`         |
| Установка name        | Автоматическое имя дочернего класса              | `this.name = this.constructor.name`     |
| Дочерние классы       | Иерархия ошибок с дополнительными полями         | `PropertyRequiredError extends ValidationError` |
| instanceof            | Различение типа ошибки                           | `err instanceof ValidationError`        |
| Проброс               | Неизвестные ошибки пробрасываются дальше         | `throw err` в else                      |

### 🎯 Когда использовать

- ✅ Нужно различать ошибки по типу в `catch` с помощью `instanceof`
- ✅ Хочется нести дополнительную информацию (например, имя поля) в объекте ошибки
- ✅ Построить иерархию ошибок предметной области
- ❌ Для внутренних проверок, где достаточно встроенной ошибки, создание своего класса избыточно
