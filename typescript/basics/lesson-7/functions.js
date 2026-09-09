"use strict";
/**
 * @description типизация функций: параметры, возврат, опциональные параметры,
 * параметры по умолчанию, rest и перегрузки (overloads).
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Функция с типизацией параметров и возвращаемого значения
function add(a, b) {
    return a + b;
}
const sum = add(2, 3);
// Опциональные параметры (?) и значения по умолчанию
function greet(name, greeting = 'Привет') {
    return `${greeting}, ${name}!`;
}
greet('Иван'); // greeting = 'Привет'
greet('Иван', 'Здравствуй');
// Rest-параметры — любое количество аргументов
function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
sumAll(1, 2, 3, 4); // 10
const multiply = (a, b) => a * b;
// void — функция ничего не возвращает
function log(message) {
    console.log(message);
}
// Тип возврата never — функция никогда не завершается
function fail(msg) {
    throw new Error(msg);
}
function format(input) {
    if (typeof input === 'string') {
        return `строка: ${input}`;
    }
    return `число: ${input}`;
}
format('x'); // string-перегрузка
format(5); // number-перегрузка
