## 🎯 Fifth Lesson: union и intersection

### 📝 Описание урока

Урок посвящён продвинутым типам TypeScript: union (`|`) для объединения, intersection (`&`) для пересечения и литеральным типам для фиксированных значений.

### 📦 Изученные концепции

#### Union — один из нескольких типов

```typescript
type Result = string | number;
let res: Result = 'успех';
res = 42;
// res = true; // ошибка: boolean не входит
```

#### Union с объектами (discriminated)

```typescript
type Success = { status: 'success'; data: string };
type ApiError = { status: 'error'; error: string };
type ApiResponse = Success | ApiError;

const ok: ApiResponse = { status: 'success', data: 'данные' };
const fail: ApiResponse = { status: 'error', error: 'ошибка' };
```

#### Intersection — объединение полей

```typescript
type Base = { id: number };
type Timestamp = { createdAt: Date };
type Entity = Base & Timestamp;

const e: Entity = { id: 1, createdAt: new Date() };
```

#### Литеральные типы

```typescript
type Direction = 'up' | 'down' | 'left' | 'right';
let dir: Direction = 'up';
// dir = 'diagonal'; // ошибка: не входит

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const roll: DiceRoll = 4;
```

#### as const

```typescript
const config = { theme: 'dark', lang: 'ru' } as const;
// config.theme = 'light'; // теперь значения зафиксированы
```

### 🔗 Полезные ссылки

- [Union Types — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

### ✅ Результат

Освоены union (`|`), intersection (`&`), литеральные типы строк/чисел и фиксация значений через `as const`.

---

### 💡 Ключевые моменты

| Концепция        | Описание                                    | Пример                    |
| ---------------- | ------------------------------------------- | ------------------------- |
| Union `\|`       | Значение одного из типов                    | `string \| number`        |
| Literal          | Конкретное фиксированное значение           | `'up' \| 'down'`          |
| Intersection `&` | Объект со всеми полями обоих типов          | `Base & Timestamp`        |
| Discriminated    | Union объектов с общим литеральным дискриминатором | `{ status: 'success' } \| { status: 'error' }` |
| `as const`       | Фиксирует значения в литералы               | `{ theme: 'dark' } as const` |

### 🎯 Когда использовать

- ✅ Union — для значений, которые могут быть разных типов
- ✅ Литералы — для перечисляемых строк (статусы, направления)
- ✅ Discriminated union — для API-ответов и конечных автоматов
- ⚠️ Intersection — реже, часто лучше композиция через interface
