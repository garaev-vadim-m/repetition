/**
 * @description интерфейсы: описание структуры объектов, расширение, implements,
 * и отличие интерфейса от type.
 */

// Объявление интерфейса
interface User {
  name: string;
  age: number;
  email?: string;       // опциональное поле
}

const user: User = { name: 'Иван', age: 25 };

// Расширение интерфейса через extends
interface Admin extends User {
  role: 'admin';
}

const admin: Admin = { name: 'Пётр', age: 30, role: 'admin' };

// Интерфейс для функции
interface Greeter {
  (name: string): string; // сигнатура функции
}
const greet: Greeter = (name) => `Привет, ${name}!`;

// implements — класс реализует интерфейс
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Declaration merging — интерфейсы можно объединять
interface Window2 {
  version: string;
}
interface Window2 {
  name: string;
}
const win: Window2 = { version: '1.0', name: 'win' };

// Интерфейс можно использовать только для объектов/функций/классов,
// не для примитивов. Для этого — type.
type ID = string | number; // в type можно union

export {};
