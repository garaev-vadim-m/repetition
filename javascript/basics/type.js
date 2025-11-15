"use strict"
/**
 * @description типы данных и переменные
 */


/**
 * Есть 3 типа переменных
 * let const var
 * var - глобальная область видимости
 * let const  - локальная область видимости
 * let - можно переопределять
 * const - константа, нельзя переопределить
 */

var variableVar = 'var';
/** @type boolean */
const typeBool = false;
/** @type string */
let typeString = 'Hello world';
/** @type number */
let typeNumber = 1;
const typeNan = NaN;
/** @type undefined */
const typeUndefined = undefined;

//variableVar
console.log('variableVar',variableVar);
//Boolean
console.log('typeBool',typeBool);

//String
console.log('typeString',typeString);
typeString = 'Пока'
console.log('typeString - переопределение',typeString);
typeString = 'Привет ' + typeBool;
console.log('typeString - переопределение и конкатенация строки',typeString);

//Number
console.log('typeNumber',typeNumber);
typeNumber = typeNumber + 5;
console.log('typeNumber - сложение',typeNumber);
//В js нет строгой типизации. Нужно внимательнее следить за типами.
typeNumber = typeNumber + typeString;
console.log('typeNumber - сложение с строкой',typeNumber);
typeNumber = 1 / 0;
console.log('Бесконечность',typeNumber);
console.log('Явная бесконечность - Infinity',Infinity);
console.log('Явная бесконечность - -Infinity',-Infinity);
//NaN относится к числам. Не корректные вычисления
console.log('typeNan',typeNan);
typeNumber = 1 / typeString
console.log('typeNan - деление числа на строку',typeNumber);
console.log('typeNan - NaN - при умножении',NaN * 3);
console.log('typeNan - NaN при деление',NaN / 3);
//Есть исключение в NaN. Когда оно может стать числом
console.log('Исключение', NaN ** 0); // Будет 1

//Undefined
console.log('typeUndefined',typeUndefined);
