## 🎯 Second Lesson: примитивные типы

### 📝 Описание урока

Урок посвящён примитивным типам TypeScript и явной типизации: как указывать тип переменной, вывод типов, `null`/`undefined`, `bigint`, `symbol`, `any`/`unknown` и оператор `typeof`.

### 📦 Изученные концепции

#### Явная типизация переменных

```typescript
let userName: string = 'Иван';
let userAge: number = 25;
let isActive: boolean = true;
```

#### Вывод типов (type inference)

```typescript
let inferred = 'строка'; // тип сам определился как string
// inferred = 42; // ошибка: число нельзя присвоить string
```

#### null / undefined / bigint / symbol

```typescript
let emptyValue: null = null;
let notDefined: undefined = undefined;
let big: bigint = 9007199254740991n;
let unique: symbol = Symbol('id');
```

#### any vs unknown

```typescript
let anything: any = 'можно что угодно';   // отключает проверку
let value: unknown = 'неизвестно';         // безопасная альтернатива

if (typeof value === 'string') {
  value.toUpperCase(); // внутри сужения — можно
}
```

#### typeof

```typescript
console.log(typeof userName); // string
console.log(typeof userAge);  // number
```

### 🔗 Полезные ссылки

- [Everyday Types — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Типы данных](https://www.typescriptlang.org/cheatsheets)

### ✅ Результат

Освоена явная типизация примитивов, вывод типов, работа с `null`/`undefined`/`bigint`/`symbol`, разница между `any` и `unknown`, а также оператор `typeof`.

---

### 💡 Ключевые моменты

| Тип        | Описание                                       | Пример                |
| ---------- | ---------------------------------------------- | --------------------- |
| string     | строка                                         | `let s: string = 'x'` |
| number     | число (включая NaN, Infinity)                  | `let n: number = 1`   |
| boolean    | true / false                                   | `let b: boolean = true` |
| null       | пустое значение                                | `let n: null = null`  |
| undefined  | не определено                                  | `let u: undefined`    |
| bigint     | большие целые числа через `n`                  | `123n`                |
| symbol     | уникальный идентификатор                       | `Symbol('id')`        |
| any        | отключает проверку типов (избегать)            | `let a: any`          |
| unknown    | безопасный аналог any, требует сужения         | `let u: unknown`      |

### 🎯 Когда использовать

- ✅ `string`/`number`/`boolean` — для обычных данных
- ✅ `unknown` вместо `any` для входящих данных с проверкой
- ⚠️ `any` — только для обхода устаревшего кода, лучше не использовать
- ⚠️ `null`/`undefined` — при включённом `strict` указываются явно
