## 🧱 Lesson: Objects in JavaScript

### 📝 Описание урока

Урок посвящен объектам в JavaScript — способам создания, работе со свойствами, методами, дескрипторам и копированию объектов. Рассмотрены как базовые, так и продвинутые возможности работы с объектами.

### 📦 Изученные концепции

#### Создание объектов

- **Конструктор объекта** — через `new Object()`
  ```javascript
  let obj1 = new Object(); // редко используется
  ```
- **Литерал объекта** — через `{}`
  ```javascript
  let obj2 = {}; // предпочтительный способ
  ```

#### Работа со свойствами

- **Добавление свойств**
  ```javascript
  obj1.name = 'name1'; // возможно, но не рекомендуется для конструктора
  obj2.name = 'name'; // обычный способ
  ```
- **Доступ к свойствам**
  ```javascript
  console.log(obj1['name']); // через квадратные скобки
  console.log(obj2.female); // через точку
  ```

#### Дескрипторы свойств (Object.defineProperty)

- **Тонкая настройка свойств**
  ```javascript
  Object.defineProperty(obj2, 'female', {
    value: 'very hot',
    writable: true, // можно изменять
    enumerable: true, // появляется в циклах
    configurable: true, // можно удалять и перенастраивать
  });
  ```
- **Свойства с пробелами**
  ```javascript
  Object.defineProperty(obj2, 'neskolso slov', {
    value: 'esli tochnee - dva slova',
  });
  obj2['neskolso slov']; // только так можно обратиться
  ```

#### Вычисляемые свойства (Computed properties)

- **Использование переменных как ключей**
  ```javascript
  const KEY_NAME = 'aaaaa';
  obj1 = {
    ...obj1,
    ...obj2,
    [KEY_NAME]: 'bbbb', // ключ из переменной
  };
  ```

#### Функции-фабрики

- **Возврат объекта из функции**
  ```javascript
  function userData(name, age) {
    return {
      name, // сокращенная запись name: name
      age, // сокращенная запись age: age
    };
  }
  ```

#### Проверка наличия свойства

- **Оператор `in`**
  ```javascript
  console.log('AAAAAAA' in obj1); // true/false
  ```

#### Методы объектов

- **Различные способы объявления методов**

  ```javascript
  obj2 = {
    // Function Expression
    func: function () {
      console.log(this.name);
    },

    // Сокращенный синтаксис (метод)
    func2() {
      console.log(this.female);
    },

    // С проверкой наличия свойств
    func3() {
      console.log('female' in this);
      console.log('notfemale' in this);
    },

    // Стрелочная функция внутри метода
    sayHello() {
      let arrow = () => console.log(this.name, 'стрелочная функция');
      arrow(); // this берется от sayHello
    },

    // Так работать не будет:
    // arrowFunc: () => console.log(this.name) // undefined
  };
  ```

#### Копирование и ссылки

- **Ссылка на объект**
  ```javascript
  let a1 = obj2; // ссылка на тот же объект
  a1.privert = 'privet'; // изменится и в obj2
  ```
- **Поверхностное копирование (Spread)**
  ```javascript
  let a2 = { ...obj2 }; // новый объект, копия свойств
  a2.poka = 'poka'; // не влияет на obj2
  ```

### 🔗 Полезные ссылки

- [Объекты в JavaScript](https://learn.javascript.ru/object)
- [Методы объектов](https://learn.javascript.ru/object-methods)
- [Конструкторы и оператор new](https://learn.javascript.ru/constructor-new)
- [Object.defineProperty](https://learn.javascript.ru/property-descriptors)
- [Копирование объектов](https://learn.javascript.ru/object-copy)

### ✅ Результат

Освоены все основные аспекты работы с объектами: создание, настройка свойств, методы, проверка наличия свойств и копирование. Понимание разницы между ссылкой и копией объекта критически важно для избежания ошибок.

---

### 💡 Ключевые моменты

| Концепция            | Описание                         | Пример                          |
| -------------------- | -------------------------------- | ------------------------------- |
| Литерал объекта      | Предпочтительный способ создания | `{}`                            |
| Дескрипторы          | Тонкая настройка свойств         | `Object.defineProperty()`       |
| Вычисляемые свойства | Ключи из переменных              | `[KEY_NAME]: value`             |
| Оператор `in`        | Проверка существования свойства  | `'key' in obj`                  |
| Ссылка vs копия      | Изменение ссылки меняет оригинал | `a1 = obj2` vs `{...obj2}`      |
| `this` в методах     | Указывает на объект вызова       | `func2() { console.log(this) }` |
| Стрелочные функции   | Нет своего `this`                | Использовать внутри методов     |
