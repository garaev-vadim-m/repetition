/**
 * Циклы и методы массивов в JavaScript
 * while, do while, for, for...of, for...in, forEach, map, flatMap,
 * filter, reduce, every, some, find, findIndex
 */

console.log('========== БАЗОВЫЕ ЦИКЛЫ ==========');

// ==================== WHILE ====================
console.log('\n* - While - *');
let i = 0;
let i2 = 5;

while (i < 3) {
  console.log('while i =', i);
  i++;
}

while (i2 > 1) {
  console.log('while i2 =', i2);
  i2--;
}

// ==================== DO WHILE ====================
console.log('\n* - Do while - *');
// Сбросим значения
i = 0;
i2 = 5;

do {
  console.log('do while i =', i);
  i++;
} while (i < 3);

do {
  console.log('do while i2 =', i2);
  i2--;
} while (i2 > 1);

// ==================== FOR (классический) ====================
console.log('\n* - For i - *');
for (let i = 0; i < 3; i++) {
  console.log('for i =', i);
}

// ==================== BREAK ====================
console.log('\n* - Break - *');
let sum = 0;
while (sum < 55) {
  let value = 12;
  if (!value) break;
  sum += value;
  console.log('while sum =', sum);
}

let doSum = 0;
do {
  let value = 12;
  if (!value) break;
  doSum += value;
  console.log('doSum =', doSum);
  if (doSum > 41) break;
} while (doSum < 76);

// ==================== CONTINUE ====================
console.log('\n* - Continue (только нечетные) - *');
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) continue;
  console.log('нечетное:', index);
}

console.log('\n========== ЦИКЛЫ ПО КОЛЛЕКЦИЯМ ==========');

// ==================== FOR...OF ====================
console.log('\n* - for...of (по символам строки) - *');
for (let char of 'тест') {
  console.log('символ:', char);
}

console.log('\n* - for...of с entries() - *');
for (let [index, num] of [10, 20, 30, 40].entries()) {
  console.log(`индекс ${index}: значение ${num}`);
}

// ==================== FOR...IN ====================
console.log('\n* - for...in (по объекту) - *');
let user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

console.log('\n* - for...in (особенности сортировки) - *');
let codes = {
  49: 'Германия',
  41: 'Швейцария',
  44: 'Великобритания',
  1: 'США',
};

for (let code in codes) {
  console.log(`${code}: ${codes[code]}`); // Целочисленные ключи сортируются
}

console.log('\n========== МЕТОДЫ МАССИВОВ ==========');

// Подготовка данных
const employees = [
  { id: 4, name: 'Анна', job: 'DevOps' },
  { id: 5, name: 'Борис', job: 'DevOps' },
  { id: 1, name: 'Виктор', job: 'Develop' },
  { id: 7, name: 'Галина', job: 'Manager' },
  { id: 3, name: 'Дмитрий', job: 'Develop' },
];

console.log('\nИсходные данные:', employees);

// ==================== FOREACH ====================
console.log('\n* - forEach - *');
employees.forEach(employee => console.log(`${employee.name}: ${employee.job}`));

// ==================== MAP ====================
console.log('\n* - map (трансформация данных) - *');
const namesAndIds = employees.map(({ id, name }) => ({ id, name }));
console.log('Только id и name:', namesAndIds);

// ==================== FLATMAP ====================
console.log('\n* - flatMap (объединение массивов) - *');
const flatMapped = [employees, employees].flatMap(arr => [...arr, ...arr]);
console.log(`flatMap результат: ${flatMapped.length} элементов`);

// Сравнение с map + flat
const mapThenFlat = [employees, employees]
  .map(arr => [...arr, ...arr])
  .flat();
console.log(`map + flat результат: ${mapThenFlat.length} элементов`);

// ==================== FILTER ====================
console.log('\n* - filter (фильтрация) - *');
const devOpsTeam = employees.filter(
  employee => employee.job.toLowerCase() === 'devops'
);
console.log('Только DevOps:', devOpsTeam);

// ==================== FIND ====================
console.log('\n* - find (первый подходящий) - *');
const firstDevOps = employees.find(
  employee => employee.job.toLowerCase() === 'devops'
);
console.log('Первый DevOps:', firstDevOps);

// ==================== FINDINDEX ====================
console.log('\n* - findIndex - *');
const devOpsIndex = employees.findIndex(
  employee => employee.job.toLowerCase() === 'devops'
);
console.log('Индекс первого DevOps:', devOpsIndex);

// ==================== REDUCE ====================
console.log('\n* - reduce (агрегация) - *');
const numbers = [1, 2, 3, 4, 5];
const sum_of_numbers = numbers.reduce((acc, num) => acc + num, 0);
console.log('Сумма чисел:', sum_of_numbers);

// Подсчет количества сотрудников по профессиям
const jobsCount = employees.reduce((acc, employee) => {
  acc[employee.job] = (acc[employee.job] || 0) + 1;
  return acc;
}, {});
console.log('Статистика по профессиям:', jobsCount);

// ==================== EVERY / SOME ====================
console.log('\n* - every / some - *');

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = [1, 4, 5, 6, 7];
const array4 = [10, 4, 5, 6, 7];

// every: все элементы должны удовлетворять условию
console.log('every: массивы 1 и 2 полностью совпадают?', 
  array1.every((value, index) => value === array2[index])); // true

console.log('every: массивы 1 и 3 полностью совпадают?', 
  array1.every((value, index) => value === array3[index])); // false

// some: хотя бы один элемент удовлетворяет условию
console.log('some: массивы 1 и 2 имеют совпадения?', 
  array1.some((value, index) => value === array2[index])); // true

console.log('some: массивы 1 и 3 имеют совпадения?', 
  array1.some((value, index) => value === array3[index])); // true

console.log('some: массивы 1 и 4 имеют совпадения?', 
  array1.some((value, index) => value === array4[index])); // false

// Практический пример: проверка зарплат
const employees2 = [
  { name: 'John', salary: 50000 },
  { name: 'Jane', salary: 60000 },
  { name: 'Bob', salary: 45000 }
];

console.log('\nВсе получают больше 40000?', 
  employees2.every(emp => emp.salary > 40000)); // true

console.log('Кто-то получает больше 55000?', 
  employees2.some(emp => emp.salary > 55000)); // true

// ==================== ЦЕПОЧКА МЕТОДОВ ====================
console.log('\n* - Цепочка методов - *');

const result = employees
  .filter(emp => emp.job === 'Develop')
  .map(emp => ({ ...emp, bonus: 1000 }))
  .reduce((sum, emp) => sum + emp.bonus, 0);

console.log('Сумма бонусов для разработчиков:', result);