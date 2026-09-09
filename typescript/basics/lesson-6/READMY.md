## 🎯 Sixth Lesson: дженерики

### 📝 Описание урока

Урок посвящён дженерикам TypeScript: параметризация типов в функциях, типах, интерфейсах и классах, а также ограничения (constraints) через `extends`.

### 📦 Изученные концепции

#### Базовый generic в функции

```typescript
function identity<T>(value: T): T {
  return value;
}
const num = identity<number>(42); // T = number
const str = identity('привет');   // T выводится автоматически
```

#### Generic в типах и интерфейсах

```typescript
type Box<T> = { value: T };
const numberBox: Box<number> = { value: 1 };

interface ApiResponse<T> {
  status: 'success';
  data: T;
}
```

#### Несколько параметров

```typescript
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
const p = pair(1, 'string'); // type [number, string]
```

#### Constraint через extends

```typescript
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longest('abc', 'defg'); // T ограничен объектами с .length
```

#### Generic в классах

```typescript
class Stack<T> {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}
const stack = new Stack<number>();
```

### 🔗 Полезные ссылки

- [Generics — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/generics.html)

### ✅ Результат

Освоены дженерики в функциях, типах, интерфейсах и классах, множественные параметры и ограничения через `extends`.

---

### 💡 Ключевые моменты

| Концепция        | Описание                                | Пример                      |
| ---------------- | --------------------------------------- | --------------------------- |
| Generic `T`      | Параметр типа, подставляется при вызове | `identity<T>(value: T)`     |
| Вывод типа       | T определяется автоматически            | `identity(42)` → number     |
| Несколько        | `<T, U>` — несколько параметров         | `pair<T, U>(a, b)`          |
| Constraint       | Ограничение через `extends`             | `T extends { length: number }` |
| В классах        | Generic-класс с параметром типа         | `class Stack<T>`            |

### 🎯 Когда использовать

- ✅ Переиспользуемые функции/классы, работающие с разными типами
- ✅ UI-компоненты, принимающие данные любого типа
- ✅ API-обёртки с типизацией ответа
- ⚠️ Без излишеств — если тип не варьируется, дженерик не нужен
