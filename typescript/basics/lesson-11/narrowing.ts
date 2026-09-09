/**
 * @description сужение типов (narrowing): typeof, in, instanceof,
 * discriminated unions и функции-гарды.
 */

// typeof — сужение примитивов
function print(input: string | number): void {
  if (typeof input === 'string') {
    // здесь input: string
    console.log(input.toUpperCase());
  } else {
    // здесь input: number
    console.log(input.toFixed(2));
  }
}

// in — проверка наличия свойства
interface Bird {
  fly(): void;
}
interface Fish {
  swim(): void;
}
function move(animal: Bird | Fish): void {
  if ('fly' in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// instanceof — проверка класса
class Cat {
  meow(): void {}
}
class Dog {
  bark(): void {}
}
function speak(animal: Cat | Dog): void {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

// Discriminated union — дискриминатор (общее литеральное поле)
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}

// Type guard — пользовательская функция-гард
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === 'circle';
}
function describe(shape: Shape): string {
  if (isCircle(shape)) {
    // shape сужен до Circle
    return `Circle r=${shape.radius}`;
  }
  return `Square s=${shape.side}`;
}

// Фильтрация null/undefined с narrowing
const list: (string | null)[] = ['a', null, 'b'];
const clean: string[] = list.filter((x): x is string => x !== null);

export {};
