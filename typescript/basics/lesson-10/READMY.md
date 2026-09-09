## 🎯 Tenth Lesson: утверждение типов

### 📝 Описание урока

Урок посвящён утверждению типов (type assertion) в TypeScript: оператор `as`, `as const`, non-null assertion (`!`) и двойное приведение через `as unknown`.

### 📦 Изученные концепции

#### as — сужение типа

```typescript
const input = document.getElementById('input') as HTMLInputElement;
// input.value; // доступны методы HTMLInputElement
```

#### as const — фиксация литералов

```typescript
const colors = ['red', 'green'] as const;
// colors[0] = 'yellow'; // ошибка: readonly

const config = { theme: 'dark' } as const;
// config.theme = 'light'; // ошибка: литерал 'dark'
```

#### Non-null assertion (!)

```typescript
function findUser(id: number): string | null {
  return id > 0 ? 'Иван' : null;
}
const name = findUser(1)!; // строка, не string | null
```

#### as unknown — двойное приведение

```typescript
function parseJson(text: string): unknown {
  return JSON.parse(text);
}
const data = parseJson('{"a":1}') as { a: number };
console.log(data.a); // 1
```

### 🔗 Полезные ссылки

- [Type Assertions — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

### ✅ Результат

Освоено утверждение типов через `as`, фиксация литералов через `as const`, non-null assertion (`!`) и обход несовместимости через `as unknown`.

---

### 💡 Ключевые моменты

| Приём            | Описание                                | Пример                     |
| ---------------- | --------------------------------------- | -------------------------- |
| `as`             | Указать тип, отличный от выведенного    | `x as HTMLInputElement`    |
| `as const`       | Зафиксировать значения в литералы       | `[1, 2] as const`          |
| `!` non-null     | Сказать "здесь не null/undefined"       | `arr.find(x)!.value`       |
| `as unknown`     | Обход несовместимых типов (рискованно)  | `x as unknown as number`   |

### 🎯 Когда использовать

- ✅ Работа с DOM (`as HTMLInputElement`)
- ✅ `as const` для неизменяемых констант
- ✅ Non-null assertion когда уверены в значении
- ⚠️ `as` обходит проверку типов — используйте умеренно, лучше сужение типов
- ❌ `as unknown as X` — только для внешних/динамических данных
