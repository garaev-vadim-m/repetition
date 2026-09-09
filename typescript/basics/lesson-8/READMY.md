## 🎯 Eighth Lesson: классы

### 📝 Описание урока

Урок посвящён классам TypeScript: модификаторы доступа (`public`/`protected`/`private`), `readonly`, параметры-свойства конструктора, `static`, наследование и абстрактные классы.

### 📦 Изученные концепции

#### Модификаторы доступа

```typescript
class Animal {
  public name: string;      // везде
  protected age: number;    // класс и наследники
  private secret: string;   // только внутри
}
```

#### readonly

```typescript
class Config {
  readonly version: string = '1.0';
  // version = '2.0'; // ошибка
}
```

#### Параметры-свойства конструктора

```typescript
class Point {
  constructor(
    public x: number,  // автоматически создаёт this.x
    private y: number
  ) {}
}
```

#### Наследование и override

```typescript
class Dog extends Animal {
  override speak(): string { return `${this.name} лает`; }
}
```

#### Статические члены

```typescript
class MathUtils {
  static square(n: number): number { return n * n; }
}
MathUtils.square(4);
```

#### Абстрактный класс

```typescript
abstract class Shape {
  abstract area(): number; // наследник обязан реализовать
}
```

### 🔗 Полезные ссылки

- [Classes — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/classes.html)

### ✅ Результат

Освоены модификаторы доступа, `readonly`, параметры-свойства, `static`, наследование с `override` и абстрактные классы.

---

### 💡 Ключевые моменты

| Концепция             | Описание                                  | Пример                    |
| --------------------- | ----------------------------------------- | ------------------------- |
| `public`/`private`/`protected` | Уровень доступа                   | `private x: number`       |
| `readonly`            | Нельзя менять после инициализации         | `readonly v: string`      |
| Параметры-свойства    | `this.x` создаётся автоматически          | `constructor(public x)`   |
| `static`              | Член на классе, не на экземпляре          | `static square(n)`        |
| `override`            | Переопределение метода наследника         | `override speak()`        |
| `abstract`            | Класс нельзя инстанцировать, методы обязательны | `abstract class Shape` |

### 🎯 Когда использовать

- ✅ Инкапсуляция через `private`/`protected`
- ✅ Иммутабельные данные через `readonly`
- ✅ Утилиты без состояния через `static`
- ✅ Общий шаблон с обязательной реализацией через `abstract`
