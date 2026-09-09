/**
 * @description дженерики: параметризация типов, обобщённые функции,
 * интерфейсы, классы и constraints.
 */

// Базовый generic — функция возвращает то, что приняла
function identity<T>(value: T): T {
  return value;
}
const num = identity<number>(42); // T = number
const str = identity('привет');   // T выводится автоматически (string)

// Generic в типах объектов
type Box<T> = { value: T };
const numberBox: Box<number> = { value: 1 };
const stringBox: Box<string> = { value: 'x' };

// Generic в интерфейсах
interface ApiResponse<T> {
  status: 'success';
  data: T;
}
const userResponse: ApiResponse<{ id: number }> = {
  status: 'success',
  data: { id: 1 },
};

// Generic с несколькими параметрами
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
const p = pair(1, 'строкa'); // type [number, string]

// Constraint (ограничение) — T должен иметь .length
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longest([1, 2], [3]);      // T выведен как number[]
longest('abc', 'defg');    // T выведен как string

// Generic в классах
class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
const popped = stack.pop(); // number | undefined

export {};
