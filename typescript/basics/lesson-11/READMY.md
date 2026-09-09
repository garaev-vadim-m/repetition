## 🎯 Eleventh Lesson: сужение типов

### 📝 Описание урока

Урок посвящён сужению типов (type narrowing) в TypeScript: `typeof`, `in`, `instanceof`, discriminated unions и пользовательские функции-гарды.

### 📦 Изученные концепции

#### typeof — примитивы

```typescript
function print(input: string | number): void {
  if (typeof input === 'string') {
    input.toUpperCase(); // здесь input: string
  } else {
    input.toFixed(2);    // здесь input: number
  }
}
```

#### in — наличие свойства

```typescript
if ('fly' in animal) {
  animal.fly();      // animal: Bird
} else {
  animal.swim();     // animal: Fish
}
```

#### instanceof — класс

```typescript
if (animal instanceof Cat) {
  animal.meow();
} else {
  animal.bark();
}
```

#### Discriminated union

```typescript
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': return Math.PI * shape.radius ** 2;
    case 'square': return shape.side ** 2;
  }
}
```

#### Type guard (функция-гард)

```typescript
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === 'circle';
}
if (isCircle(shape)) {
  shape.radius; // сужен до Circle
}
```

#### Фильтрация null через type predicate

```typescript
const list: (string | null)[] = ['a', null, 'b'];
const clean: string[] = list.filter((x): x is string => x !== null);
```

### 🔗 Полезные ссылки

- [Narrowing — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

### ✅ Результат

Освоены основные способы сужения типов: `typeof`, `in`, `instanceof`, discriminated unions и пользовательские type guards.

---

### 💡 Ключевые моменты

| Приём              | Описание                              | Пример                  |
| ------------------ | ------------------------------------- | ----------------------- |
| `typeof`           | Сужение примитивов                    | `typeof x === 'string'` |
| `in`               | Проверка наличия свойства             | `'fly' in animal`       |
| `instanceof`       | Проверка класса/конструктора          | `x instanceof Cat`      |
| Дискриминатор      | Общее литеральное поле в union        | `shape.kind`            |
| Type guard         | `x is T` — пользовательский гард      | `(x): x is Circle`      |

### 🎯 Когда использовать

- ✅ Обработка union-типов без `as`
- ✅ API-ответы через discriminated union
- ✅ Фильтрация null/undefined безопасно
- ✅ Собственные гарды для повторяемой логики
