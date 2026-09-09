## 🎯 Fourth Lesson: интерфейсы

### 📝 Описание урока

Урок посвящён интерфейсам TypeScript: описание структуры объектов, расширение через `extends`, реализация через `implements`, merge-объединение и отличие от `type`.

### 📦 Изученные концепции

#### Объявление интерфейса

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // опциональное поле
}
const user: User = { name: 'Иван', age: 25 };
```

#### Наследование интерфейсов

```typescript
interface Admin extends User {
  role: 'admin';
}
const admin: Admin = { name: 'Пётр', age: 30, role: 'admin' };
```

#### implements в классе

```typescript
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

#### Declaration merging

```typescript
interface Win { version: string; }
interface Win { name: string; } // объединяется с первым
const w: Win = { version: '1.0', name: 'win' };
```

#### interface vs type

```typescript
interface Square {}        // для объектов/функций/классов
type ID = string | number; // для union/примитивов — только type
```

### 🔗 Полезные ссылки

- [Interfaces — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

### ✅ Результат

Освоено объявление интерфейсов, наследование через `extends`, реализация через `implements`, merge-объединение и отличие от `type` для union/примитивов.

---

### 💡 Ключевые моменты

| Концепция           | Описание                                | Пример                        |
| ------------------- | --------------------------------------- | ----------------------------- |
| interface           | Описание объекта/класса                 | `interface User { name }`     |
| extends             | Наследование интерфейсов                | `interface Admin extends User`|
| implements          | Класс реализует интерфейс               | `class Circle implements Shape`|
| Declaration merging | Объединение одноимённых интерфейсов     | `interface A {} + interface A {}` |
| type для union      | Примитивы/union — только через `type`   | `type ID = string \| number` |

### 🎯 Когда использовать

- ✅ Описание контракта объекта/класса
- ✅ Расширяемые структуры (`extends`)
- ✅ Классы, реализующие определённое поведение (`implements`)
- ⚠️ Для union/пересечения примитивов используйте `type`
- ⚠️ Предпочтительно `type` по умолчанию, `interface` когда нужен extends/merge
