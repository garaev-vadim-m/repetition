/**
 * @description типизация функций: параметры, возврат, опциональные параметры,
 * параметры по умолчанию, rest и перегрузки (overloads).
 */

// Функция с типизацией параметров и возвращаемого значения
function add(a: number, b: number): number {
  return a + b;
}
const sum: number = add(2, 3);

// Опциональные параметры (?) и значения по умолчанию
function greet(name: string, greeting: string = 'Привет'): string {
  return `${greeting}, ${name}!`;
}
greet('Иван');            // greeting = 'Привет'
greet('Иван', 'Здравствуй');

// Rest-параметры — любое количество аргументов
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
sumAll(1, 2, 3, 4); // 10

// Тип функции как переменная
type MathFn = (a: number, b: number) => number;
const multiply: MathFn = (a, b) => a * b;

// void — функция ничего не возвращает
function log(message: string): void {
  console.log(message);
}

// Тип возврата never — функция никогда не завершается
function fail(msg: string): never {
  throw new Error(msg);
}

// Перегрузка функций (overloads)
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  if (typeof input === 'string') {
    return `строка: ${input}`;
  }
  return `число: ${input}`;
}
format('x'); // string-перегрузка
format(5);   // number-перегрузка

export {};
