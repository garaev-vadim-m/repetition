"use strict";
/**
 * @description объектные типы: описание формы объекта, опциональные и readonly поля,
 * вложенные объекты и массивы.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'Иван',
    age: 25,
    id: 1,
    // email — необязательный, можно не указывать
};
const profile = {
    user,
    tags: ['frontend', 'vue'],
    scores: [10, 20, 30],
    address: { city: 'Москва' },
};
const dict = { a: 1, b: 2 };
const handler = Object.assign((message) => console.log(message), { on: true });
