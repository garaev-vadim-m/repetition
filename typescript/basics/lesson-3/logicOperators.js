'use strict';
/**
 * @description логические операторы
 * || (ИЛИ) Работает до первого true 3 || 5 || undefined - будет 3
 * * ||= (Оператор логического присваивания ИЛИ)
 * && (И)
 * * &&= (Оператор логического присваивания И)
 * ! (НЕ)
 * ?? (Оператор нулевого слияния)
 * * ??= (Оператор нулевого присваивания)
 */
let result;
const a = 3;
const b = undefined;
// || (ИЛИ)
console.log('result = a || b: ', a || b); // будет 1
// @ts-ignore
// TypeScript нам сразу подскажет, что это выражение true и не нужно сравнение
console.log('result будет 1 взятое с a: ', 2 || a); // будет 2 взятое с a
// @ts-ignore
// TypeScript нам сразу подскажет, что это выражение true и не нужно сравнение
console.log('result = 2 || 5: ', 2 || 5); // будет 2
let hour = 9;
if (hour < 10 || hour === 9) {
  console.log('Будет первое выражение: hour < 10');
}
// ||= (ИЛИ логическое присваивание). На текущий момент не нашел как такого применения.
let person = 'Vasya'; //Персона
let security = 'Jora'; //Охранник
const currentTime = 18; //Текущее время
if (currentTime > 17) security = '';
if ((security ||= person)) console.log('security = Vasya', security);
// && (И)
result = 'Hello';
console.log('&&', person.length && result.length);
// &&= (И логическое присваивание). На текущий момент не нашел как такого применения.
console.log('&&=', (result &&= `${result} world`));
//! (НЕ)
console.log('НЕ : !result.length', !result.length); //false
//Преобразование к логическому типу
console.log('Логический тип: !!result.length', !!result.length); //true
console.log('Можно сделать иначе: Boolean(result.length)', Boolean(result.length)); //true
console.log('Можно сделать иначе: !Boolean(result.length)', !Boolean(result.length)); //false
