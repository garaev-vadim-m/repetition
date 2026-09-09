"use strict";
/**
 * @description примитивные типы данных и явная типизация
 * В TypeScript мы указываем тип после двоеточия, и ошибки подсветит инструмент ещё до запуска.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Явная типизация переменных
let userName = 'Иван';
let userAge = 25;
let isActive = true;
// Вывод типов (type inference) — TS сам определил тип
let inferred = 'строка'; // тип string
// inferred = 42; // ошибка: число нельзя присвоить string
// Константа — тип литерал (в литералах ниже)
const appName = 'MyApp';
// null и undefined
let emptyValue = null;
let notDefined = undefined;
// bigint — для очень больших целых чисел
let big = 9007199254740991n;
// symbol — уникальный идентификатор
let unique = Symbol('id');
// any — отключает проверку типов (лучше избегать)
let anything = 'можно что угодно';
anything = 123;
// unknown — безопасная альтернатива any
let value = 'неизвестно';
// value.toUpperCase(); // ошибка: unknown требует проверки
if (typeof value === 'string') {
    value.toUpperCase(); // внутри сужения — можно
}
// typeof — определение типа на этапе выполнения
console.log('typeof userName', typeof userName); // string
console.log('typeof userAge', typeof userAge); // number
console.log('typeof isActive', typeof isActive); // boolean
// Числовые особенности
console.log('NaN', NaN); // Not a Number
console.log('Infinity', Infinity); // бесконечность
console.log('1/0 =', 1 / 0); // Infinity
