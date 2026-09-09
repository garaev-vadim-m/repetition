"use strict";
/**
 * @description утверждение типов (type assertion): as, as const,
 * non-null assertion (!), as unknown.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// as — утверждение, что значение имеет конкретный тип
const input = document.getElementById('input');
// const pet = { meow: () => console.log('мяу') } as Cat; // ок
// as const — зафиксировать литералы
const colors = ['red', 'green', 'blue'];
// colors[0] = 'yellow'; // ошибка: readonly tuple
const config = {
    theme: 'dark',
};
// config.theme = 'light'; // ошибка: литерал 'dark'
// Non-null assertion (!) — сказать "здесь точно не null/undefined"
function findUser(id) {
    return id > 0 ? 'Иван' : null;
}
// const name = findUser(1)!; // строка, не string | null
const maybeName = findUser(1);
console.log(maybeName?.toUpperCase());
// as unknown — обход несовместимых типов (двойное приведение)
function parseJson(text) {
    return JSON.parse(text);
}
// принудительное приведение через unknown
const data = parseJson('{"a":1}');
console.log(data.a); // 1
