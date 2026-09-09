## 🎯 Ninth Lesson: утилитарные типы

### 📝 Описание урока

Урок посвящён встроенным утилитарным типам TypeScript: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters` и фильтрам union (`Extract`/`Exclude`).

### 📦 Изученные концепции

#### Partial / Required / Readonly

```typescript
type PartialUser = Partial<User>;   // все поля опциональные
type RequiredUser = Required<User>; // все поля обязательны
type ReadonlyUser = Readonly<User>; // все поля только для чтения
```

#### Pick / Omit

```typescript
type UserName = Pick<User, 'id' | 'name'>;          // выбрать поля
type NoEmail = Omit<User, 'email'>;                 // исключить поле
```

#### Record

```typescript
type Role = 'admin' | 'user' | 'guest';
type Permissions = Record<Role, boolean>;
const p: Permissions = { admin: true, user: false, guest: false };
```

#### ReturnType / Parameters

```typescript
type Fn = () => { data: string };
type FnReturn = ReturnType<Fn>; // { data: string }

type Params = Parameters<(a: number, b: string) => void>; // [number, string]
```

#### Extract / Exclude

```typescript
type Animals = 'cat' | 'dog' | 'bird';
type OnlyWild = Exclude<Animals, 'cat' | 'dog'>; // 'bird'
type Pet = Extract<Animals, 'dog' | 'bird'>;     // 'dog' | 'bird'
```

### 🔗 Полезные ссылки

- [Utility Types — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### ✅ Результат

Освоены основные встроенные утилитарные типы для трансформации объектов, функций и union-типов.

---

### 💡 Ключевые моменты

| Утилита     | Действие                             | Пример                      |
| ----------- | ------------------------------------ | --------------------------- |
| Partial     | Все поля опциональные                | `Partial<User>`             |
| Required    | Все поля обязательны                 | `Required<U>`               |
| Readonly    | Все поля только для чтения           | `Readonly<U>`               |
| Pick        | Выбрать подмножество полей           | `Pick<User, 'id'>`          |
| Omit        | Исключить поля                       | `Omit<User, 'email'>`       |
| Record      | Объект из ключей→значений            | `Record<Role, boolean>`     |
| ReturnType  | Тип возврата функции                 | `ReturnType<Fn>`            |
| Parameters  | Типы параметров функции              | `Parameters<Fn>`            |
| Exclude/Extract | Фильтрация union                 | `Exclude<A, B>`             |

### 🎯 Когда использовать

- ✅ `Partial` — обновление части объекта
- ✅ `Pick`/`Omit` — выборочные поля
- ✅ `Record` — словари с типизированными ключами
- ✅ `ReturnType`/`Parameters` — переиспользование типов функций
