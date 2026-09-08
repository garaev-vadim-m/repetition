## 🏗️ Lesson: Classes in JavaScript

### 📝 Описание урока

Урок посвящен классам в JavaScript — синтаксису объявления, конструктору, приватным методам, геттерам и сеттерам, статическим методам, а также наследованию с `extends` и `super`.

### 📦 Изученные концепции

#### Базовый класс: конструктор и методы

```javascript
class User {
  constructor(name = '') {
    this.name = name;
  }

  getUser(fun) {
    if (typeof fun === 'function') {
      console.log('Передана функция');
    }
    return this.name;
  }
}

const user = new User('Name');
console.log(user.getUser());
```

#### Приватные методы (через `#`)

```javascript
class User {
  setUser(value) {
    try {
      this.name = this.#_handleUser(value);
    } catch (error) {
      console.error(error);
    }
  }

  // Приватный метод — доступен только внутри класса
  #_handleUser(value) {
    if (typeof value !== 'string') {
      throw new Error('Имя должно быть строкой').message;
    }
    return value;
  }
}
```

#### Class Expression и динамическое создание класса

```javascript
// Named Class Expression
let User2 = class {
  sayHi() {
    console.log('Привет');
  }
};
new User2().sayHi();

// Динамическое создание класса через функцию-фабрику
function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}
let User3 = makeClass('Привет');
new User3().sayHi(); // Привет
```

#### Геттеры и сеттеры

```javascript
class User4 {
  constructor(name) {
    this.name = name; // вызывает сеттер
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Имя слишком короткое.');
      return;
    }
    this._name = value;
  }
}

let user4 = new User4('Иван'); // Иван
user4 = new User4(''); // Имя слишком короткое.
```

#### Наследование через `extends` и `super`

```javascript
class Person extends User {
  getPerson() {
    return this.getUser(); // наследует методы User
  }
}

let person = new Person();
person.setUser('Пример с наследованием');
console.log(person.getUser());
```

Переопределение метода с вызовом родительской версии через `super`:

```javascript
class Rabbit extends Animal {
  stop() {
    super.stop(); // вызываем родительский метод
    this.hide();
  }
}
```

#### Статические методы

Статические методы вызываются на самом классе, а не на его экземплярах:

```javascript
class User {
  static staticMethod() {
    console.log(this === User); // true
  }
}
User.staticMethod(); // true
```

Практический пример — сравнение и сортировка объектов:

```javascript
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

articles.sort(Article.compare); // статический метод как компаратор
```

#### Известные символы: `Symbol.species`

```javascript
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот класс как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}
```

### 🔗 Полезные ссылки

- [Классы в JavaScript](https://learn.javascript.ru/class)
- [Наследование классов](https://learn.javascript.ru/class-inheritance)
- [Статические свойства и методы](https://learn.javascript.ru/static-properties-methods)
- [Приватные методы и свойства](https://learn.javascript.ru/private-protected-properties-methods)
- [Геттеры и сеттеры](https://learn.javascript.ru/getters-setters)

### ✅ Результат

Освоено объявление классов, работа с конструктором и методами, приватные методы через `#`, геттеры и сеттеры, статические методы, наследование с `extends` и `super`, а также использование `Symbol.species`.

---

### 💡 Ключевые моменты

| Концепция            | Описание                                     | Пример                     |
| -------------------- | -------------------------------------------- | -------------------------- |
| Конструктор          | Инициализация при создании экземпляра        | `constructor(name)`        |
| Приватный метод      | Доступен только внутри класса, через `#`     | `#_handleUser()`           |
| Class Expression     | Класс как выражение / из фабрики             | `let C = class {...}`      |
| Геттер / сеттер      | Контроль чтения и записи свойства            | `get name()`, `set name()` |
| Наследование         | `extends` + вызов родителя через `super`     | `class Rabbit extends Animal` |
| Статический метод    | Вызывается на классе, не на экземпляре       | `Article.compare`          |
| Symbol.species       | Конструктор для встроенных методов           | `static get [Symbol.species]` |

### 🎯 Когда использовать

- ✅ Нужна переиспользуемая структура с состоянием и поведением
- ✅ Контроль значений свойств через геттеры и сеттеры
- ✅ Построение иерархии объектов с наследованием
- ✅ Утилиты, логически связанные с классом, но не требующие экземпляра (static)
- ❌ Для простого переиспользования кода без состояния подойдёт обычная функция или объект
