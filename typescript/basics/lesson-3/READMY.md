## 🎯 Third Lesson: объектные типы

### 📝 Описание урока

Урок посвящён объектным типам TypeScript: как описать форму объекта, опциональные и `readonly` поля, вложенные объекты, массивы и индексные сигнатуры.

### 📦 Изученные концепции

#### Базовый объектный тип

```typescript
type User = {
  name: string;
  age: number;
  email?: string;          // опциональное поле
  readonly id: number;     // нельзя менять после создания
};

const user: User = { name: 'Иван', age: 25, id: 1 };
// user.id = 2; // ошибка: readonly
```

#### Вложенные объекты и массивы

```typescript
type Profile = {
  user: User;
  tags: string[];
  address: { city: string; street?: string };
};
```

#### Индексная сигнатура

```typescript
type Dictionary = {
  [key: string]: number; // любые ключи, значения — числа
};
const dict: Dictionary = { a: 1, b: 2 };
```

### 🔗 Полезные ссылки

- [Object Types — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Record type vs index signature](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)

### ✅ Результат

Освоено описание объектных типов через `type`, опциональные и `readonly` поля, вложенные объекты, массивы и индексные сигнатуры.

---

### 💡 Ключевые моменты

| Концепция            | Описание                                 | Пример                     |
| -------------------- | ---------------------------------------- | -------------------------- |
| Объектный `type`     | Описание формы объекта                   | `type User = { name: ... }` |
| Опциональное поле    | Может отсутствовать, через `?`           | `email?: string`           |
| `readonly` поле      | Нельзя изменить после создания           | `readonly id: number`      |
| Вложенность          | Объекты и массивы внутри типа            | `address: { city: string }` |
| Индексная сигнатура  | Динамические ключи                       | `[key: string]: number`    |

### 🎯 Когда использовать

- ✅ Описание данных (пользователь, профиль, настройки)
- ✅ Опциональные поля для необязательных данных
- ✅ `readonly` для иммутабельных значений
- ✅ Словари/мапы через индексные сигнатуры
