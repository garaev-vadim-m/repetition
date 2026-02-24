## 🔮 Lesson: Symbols in JavaScript

### 📝 Описание урока

Урок посвящен символам (Symbol) — примитивному типу данных в JavaScript, который используется для создания уникальных идентификаторов. Рассмотрены основы работы с символами, их применение в объектах, глобальный реестр и практические примеры использования.

### 🔑 Изученные концепции

#### Основы Symbol

- **Создание символов**
  ```javascript
  const idSymbol = Symbol('id'); // с описанием
  const femaleSymbol = Symbol('female');
  const ageSymbol = Symbol('age');
  ```
- **Уникальность символов**
  ```javascript
  console.log(Symbol('id') === Symbol('id')); // false (всегда разные)
  ```
- **Получение описания**
  ```javascript
  console.log(idSymbol.description); // 'id'
  ```

#### Символы как ключи объектов

- **Добавление символьных ключей**

  ```javascript
  const user = {
    name: 'Vadim',
    age: 25, // обычное строковое свойство
  };

  user[idSymbol] = 12345; // добавление через символ
  user[Symbol('email')] = 'vadim@example.com'; // символ "на лету"
  ```

- **Особенности символьных свойств**
  - Не видны в обычных перечислениях
  - Не участвуют в `Object.keys()`
  - Не видны в `for...in`

#### Доступ к символьным свойствам

- **Прямой доступ**
  ```javascript
  console.log(user[idSymbol]); // 12345
  ```
- **Получение всех символов объекта**
  ```javascript
  console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id), Symbol(email)]
  ```

#### Глобальный реестр символов (Symbol.for)

- **Создание глобальных символов**
  ```javascript
  const globalId1 = Symbol.for('global.id');
  const globalId2 = Symbol.for('global.id'); // тот же самый символ!
  console.log(globalId1 === globalId2); // true
  ```
- **Получение ключа из глобального реестра**
  ```javascript
  console.log(Symbol.keyFor(globalId1)); // 'global.id'
  ```

### 🛡️ Практическое применение: скрытые свойства

```javascript
const _password = Symbol('password');

const secureUser = {
  name: 'Vadim',
  login: 'vadim123',
  [_password]: 'qwerty', // пароль не виден при обычном переборе
};

console.log(secureUser.password); // undefined (нет доступа)
console.log(secureUser[_password]); // 'qwerty' (доступ только через символ)
```

### ⚡ Известные символы (Well-known symbols)

#### Symbol.iterator — создание итерируемых объектов

```javascript
const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let i = 0;
    const data = this.data;
    return {
      next: () => ({
        value: data[i],
        done: i++ >= data.length,
      }),
    };
  },
};

for (const val of iterable) {
  console.log(val); // 1, 2, 3
}
```

### 📋 Копирование объектов с символами

```javascript
const source = {
  regular: 'обычное',
  [idSymbol]: 'символьное',
};

// Spread (...) не копирует символы!
const copy = { ...source };
console.log(copy[idSymbol]); // undefined ❌

// Object.assign() копирует символы!
const properCopy = Object.assign({}, source);
console.log(properCopy[idSymbol]); // 'символьное' ✅
```

### 🔗 Полезные ссылки

- [Symbol в JavaScript](https://learn.javascript.ru/symbol)
- [Object.getOwnPropertySymbols](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [Symbol.for и Symbol.keyFor](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)
- [Итераторы и Symbol.iterator](https://learn.javascript.ru/iterable)

### ✅ Результат

Освоен тип данных Symbol — его создание, использование в качестве ключей объекта, особенности перечисления, работа с глобальным реестром и практическое применение для создания скрытых свойств и итерируемых объектов.

---

### 💡 Ключевые особенности Symbol

| Особенность          | Описание                                            | Пример                                             |
| -------------------- | --------------------------------------------------- | -------------------------------------------------- |
| **Уникальность**     | Всегда разные (кроме Symbol.for)                    | `Symbol('id') !== Symbol('id')`                    |
| **Невидимость**      | Не видны в `for...in` и `Object.keys()`             | `Object.keys(user)` не покажет символы             |
| **Доступ**           | Только через сам символ или `getOwnPropertySymbols` | `obj[sym]` или `Object.getOwnPropertySymbols(obj)` |
| **Глобальные**       | Общие символы через `Symbol.for()`                  | `Symbol.for('key')`                                |
| **Скрытые свойства** | Идеально для метаданных                             | `const _id = Symbol('id')`                         |
| **Встроенные**       | `Symbol.iterator`, `Symbol.toStringTag` и др.       | Меняют стандартное поведение                       |

### 🎯 Когда использовать символы

- ✅ Для создания **скрытых/приватных** свойств
- ✅ Для **избегания конфликтов** имен свойств
- ✅ Для **метаданных**, которые не должны мешать обычным ключам
- ✅ Для реализации **протоколов** (итераторы, строковое представление)
- ❌ Не для обычных свойств объекта (используйте строки)
