/**
 * @description классы в TypeScript: модификаторы доступа, readonly,
 * параметры-свойства конструктора, static и наследование.
 */

// Класс с модификаторами доступа
class Animal {
  public name: string;       // доступен везде (по умолчанию)
  protected age: number;     // доступен в классе и наследниках
  private secret: string;    // доступен только внутри класса

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this.secret = secret;
  }

  public speak(): string {
    return `${this.name} говорит`;
  }
}

// readonly — свойство нельзя менять после инициализации
class Config {
  readonly version: string = '1.0';
  // version = '2.0'; // ошибка: readonly
}

// Параметры-свойства конструктора (parameter properties)
class Point {
  constructor(
    public x: number,      // автоматически создаёт this.x
    private y: number
  ) {}
  getY(): number {
    return this.y;
  }
}

// Наследование и переопределение
class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'секрет');
  }
  override speak(): string {
    return `${this.name} лает`;
  }
  // protected age доступен здесь
  getAge(): number {
    return this.age;
  }
}

// Статические члены — доступны на самом классе
class MathUtils {
  static readonly PI: number = 3.14159;
  static square(n: number): number {
    return n * n;
  }
}
MathUtils.PI;
MathUtils.square(4);

// Абстрактный класс — нельзя инстанцировать
abstract class Shape {
  abstract area(): number; // наследник обязан реализовать
  describe(): string {
    return `Площадь: ${this.area()}`;
  }
}
class Square extends Shape {
  constructor(private side: number) {
    super();
  }
  area(): number {
    return this.side ** 2;
  }
}

export {};
