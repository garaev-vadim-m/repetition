## 🎯 Seventh Lesson: функции

### 📝 Описание урока

Урок посвящён типизации функций в TypeScript: параметры, возвращаемое значение, опциональные параметры, значения по умолчанию, rest-параметры, типы функций, `void`/`never` и перегрузки.

### 📦 Изученные концепции

#### Типизация параметров и возврата

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

#### Опциональные параметры и default

```typescript
function greet(name: string, greeting: string = 'Привет'): string {
  return `${greeting}, ${name}!`;
}
greet('Иван'); // greeting = 'Привет'
```

#### Rest-параметры

```typescript
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
sumAll(1, 2, 3); // 6
```

#### Тип функции + void / never

```typescript
type MathFn = (a: number, b: number) => number;
const multiply: MathFn = (a, b) => a * b;

function log(m: string): void {}      // ничего не возвращает
function fail(m: string): never {
  throw new Error(m);                  // бросить исключение/не завершиться
}
```

#### Перегрузки (overloads)

```typescript
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  return typeof input === 'string' ? `строка: ${input}` : `число: ${input}`;
}
```

### 🔗 Полезные ссылки

- [Functions — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/functions.html)

### ✅ Результат

Освоена типизация функций, опциональные и rest-параметры, типы функций как значения, `void`/`never` и перегрузки для разных входов.

---

### 💡 Ключевые моменты

| Концепция          | Описание                                  | Пример                      |
| ------------------ | ----------------------------------------- | --------------------------- |
| Возврат            | Тип после `: { }`                         | `: number`                  |
| Опциональный       | Параметр через `?` или default            | `greeting?: string`         |
| Rest               | Любое количество через `...`              | `(...nums: number[])`       |
| Тип функции        | `(a, b) => ret`                           | `type Fn = (a: number) => void` |
| `void` / `never`   | Нет результата / не завершается           | `: void`, `: never`         |
| Overloads          | Несколько сигнатур + одна реализация      | `format(...)`               |

### 🎯 Когда использовать

- ✅ Все функции с параметрами — типизировать входящие/исходящие
- ✅ `void` для функций без возврата
- ✅ `never` для функций, бросающих исключения
- ✅ Overloads — когда функция по-разному обрабатывает типы
