/**
 * for of
 * for index
 * for in
 * map
 * flatMap
 * filter
 * reduce
 * every
 * some
 * while
 * do while
 */

// while (condition) {
// код
// также называемый "телом цикла"
//}

let i = 0;
let i2 = 5;
console.log('* - While - *');
while (i < 3) {
  console.log('while let i = 0', i);
  i++;
}

while (i2 > 1) {
  console.log('while let i2 = 5', i2);
  i2--;
}

// do {
// тело цикла
//} while (condition);
console.log('* - Do while - *');
do {
  console.log('do while let i2 = 5', i2);
} while (i < 3);

do {
  console.log('do while let i2 = 5', i2);
} while (i2 > 1);

// for (начало; условие; шаг) {
// ... тело цикла ...
// }
console.log('* - For i - *');
for (let i = 0; i < 3; i++) {
  console.log('for i let = 0', i);
}
console.log('*--*');

console.log('* - Break - *');
let sum = 0;
while (true) {
  let value = undefined;
  if (!value) break;
  sum += value;
}
while (sum < 55) {
  let value = 12;
  if (!value) break;
  sum += value;
}
console.log('break sum', sum);
let doSum = 0;
do {
  let value = 12;
  if (!value) break;
  doSum += value;
} while (doSum < 76);

console.log('break doSum', doSum);
console.log('*--*');
