//Просто повторяю и пишу по учебнику

const arr1 = new Array(); //конструктор массива
const arr2 = []; //литерал

arr1.push('Яблоко', 'orange');
arr2.push('Яблоко', 'orange');
console.log(arr1, '\n', arr2);
//литерал фруит

let fruits = ['Яблоко', 'Апельсин', 'Слива'];

console.log(fruits[0], fruits[1]); //обращение по индексу

fruits[2] = 'Ne fruct';

console.log('Больше не Слива \n', fruits[2]);
console.log('Длина \n', fruits.length);

//Массив это лист с разными значенями - функции, объекты, числа, глобальные методы

//Методы pop/push, shift/unshift

arr1.push('delete elem');
console.log(arr1);
arr1.pop(); //удалаяет последний элемент массива
console.log(arr1);

arr1.unshift('delete elem 2');
console.log(arr1);
arr1.shift(); //удалаяет первый элемент массива
console.log(arr1);

//Многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //Можно вскрыть с помощью flat()

console.log(matrix);
console.log(matrix.flat());
