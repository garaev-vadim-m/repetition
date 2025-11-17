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

var variableVar = 'переменная var';
/** @type boolean */
let typeBool = false;
/** @type string */
let typeString = 'Hello world';
/** @type number */
let typeNumber = 1;
const typeNan = NaN;
/** @type bigint */
let typeBitInt = 1234567890123456789012345678901234567890n;
/** @type undefined */
const meaningUndefined = undefined;
/** @type null */
const meaningNull = null;
/** @type object */
const typeObject = {
    a: 1,
    b: 2,
    c: 'Hello',
    d: function () {
        console.log(this);
    },
    e: () => console.log(this)
}

//variableVar
console.log('variableVar', variableVar);

/** @start примитивные типы данных */
//Boolean
console.log('typeBool', typeBool);
typeBool = 4 > 1;
console.log('typeBool - сравнение')
//String
console.log('typeString', typeString);
typeString = 'Пока'
console.log('typeString - переопределение', typeString);
typeString = 'Привет ' + typeBool;
console.log('typeString - переопределение и конкатенация строки', typeString);
typeString = `Hello ${variableVar}`
console.log('typeString - переопределение и вывод через обратные кавычки', typeString);
//Number
console.log('typeNumber', typeNumber);
typeNumber = typeNumber + 5;
console.log('typeNumber - сложение', typeNumber);
//В js нет строгой типизации. Нужно внимательнее следить за типами.
typeNumber = typeNumber + typeString;
console.log('typeNumber - сложение с строкой', typeNumber);
typeNumber = 1 / 0;
console.log('typeNumber - Бесконечность', typeNumber);
//Infinity
console.log('Явная бесконечность - Infinity', Infinity);
console.log('Явная бесконечность - -Infinity', -Infinity);

//Тип number не умеет работать с большими числами. (2 в 53 степени-1) вообще не могут храниться в типе number.
//На своей практике не сталкивался с BigInt
console.log('typeBitInt', typeBitInt);
//NaN не корректные вычисления
console.log('typeNan', typeNan);
typeNumber = 1 / typeString
console.log('typeNan - деление числа на строку', typeNumber);
console.log('typeNan - NaN - при умножении', NaN * 3);
console.log('typeNan - NaN - при деление', NaN / 3);
//Есть исключение в NaN. Когда оно может стать числом
console.log('Исключение NaN', NaN ** 0); // Будет 1

//Undefined
console.log('meaningUndefined - неизвестное значение', meaningUndefined);
//Null
console.log('meaningNull - пустое значение', meaningNull);
/** @end примитивные типы данных */
//Object
console.log('typeObject', typeObject);
typeObject.d(); // Выведет typeObject
typeObject.e(); // Выведет window (браузер) или {} (Node.js)

//typeof
console.log('typeof - variableVar', typeof (variableVar)) //variableVar string
console.log('typeof - typeBool', typeof (typeBool)) //typeBool boolean
console.log('typeof - typeString', typeof (typeString)) // typeString string
console.log('typeof - typeNumber', typeof (typeNumber)) // typeNumber number
console.log('typeof - typeNan', typeof (typeNan)) //typeNan number
console.log('typeof - typeBitInt', typeof (typeBitInt)) //typeBitInt bigint
console.log('typeof - meaningUndefined', typeof (meaningUndefined))//meaningUndefined undefined
console.log('typeof - meaningNull', typeof (meaningNull)) //meaningNull object. Баг js. Нужна явная проверка на null
console.log('typeof - meaningNull', meaningNull === null) //meaningNull true
console.log('typeof - typeObject', typeof (typeObject)) //typeObject object

